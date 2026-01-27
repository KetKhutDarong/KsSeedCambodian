import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// ================= APP SETUP =================
const app = express();
const PORT = process.env.PORT || 5502;

// serve public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

// ================= FIX __dirname (ES MODULE) =================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// ================= SERVE STATIC FILES =================
app.use(express.static(path.join(__dirname, "public")));

// ================= CONNECT TO MONGODB =================
console.log("🔗 Connecting to MongoDB...");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// ================= DEFINE ALL SCHEMAS =================

// 1. CONTACT SCHEMA
const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: String,
    message: { type: String, required: true },
  },
  { timestamps: true },
);

const Contact = mongoose.model("Contact", ContactSchema);

// 2. NEWSLETTER SCHEMA - UPDATED TO STORE MORE FIELDS
const NewsletterSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    // name: { type: String, default: "" },
    // phone: { type: String, default: "" },
    // username: { type: String, default: "" },
  },
  { timestamps: true },
);

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

// 3. BLOG SCHEMA
const BlogSchema = new mongoose.Schema(
  {
    title: {
      en: { type: String, required: true },
      km: { type: String, required: true },
    },
    content: {
      en: { type: String, required: true },
      km: { type: String, required: true },
    },
    preview: {
      en: { type: String, required: true },
      km: { type: String, required: true },
    },
    category: {
      en: String,
      km: String,
    },
    date: String,
    readTime: Number,
    image: String,
    views: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Blog = mongoose.model("Blog", BlogSchema);

// 4. PRODUCT SCHEMA
const galleryItemSchema = new mongoose.Schema({
  src: String,
  label: {
    en: String,
    km: String,
  },
});

const plantingInfoSchema = new mongoose.Schema({
  distance: {
    en: String,
    km: String,
  },
  plantDistance: {
    en: String,
    km: String,
  },
  density: {
    en: String,
    km: String,
  },
});

const productVariantSchema = new mongoose.Schema({
  src: String,
  title: {
    en: String,
    km: String,
  },
  info: {
    en: String,
    km: String,
  },
  weight: String,
  views: { type: Number, default: 0 },
  pdfUrl: String,
  gallery: [galleryItemSchema],
  features: {
    en: [String],
    km: [String],
  },
  planting: plantingInfoSchema,
  landPreparation: {
    en: [String],
    km: [String],
  },
  cultivation: {
    en: [String],
    km: [String],
  },
  irrigation: {
    en: [String],
    km: [String],
  },
});

const ProductSchema = new mongoose.Schema(
  {
    productKey: { type: String, required: true, unique: true },
    name: {
      en: { type: String, required: true },
      km: { type: String, required: true },
    },
    desc: {
      en: { type: String, required: true },
      km: { type: String, required: true },
    },
    imgs: [productVariantSchema],
    category: String,
    tags: [String],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", ProductSchema);

// ================= API ROUTES =================

// 1. HEALTH CHECK ENDPOINT
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

// 2. GET ALL PRODUCTS (From Database → To Frontend)
app.get("/api/products", async (req, res) => {
  try {
    console.log("📦 Fetching products...");

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const products = await Product.find({ isActive: true })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Product.countDocuments({ isActive: true });

    res.json({
      success: true,
      products,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});

// 3. GET SINGLE PRODUCT BY KEY
app.get("/api/products/:productKey", async (req, res) => {
  try {
    const { productKey } = req.params;
    console.log(`📦 Fetching product: ${productKey}`);

    const product = await Product.findOne({
      productKey,
      isActive: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// 4. GET ALL BLOGS (From Database → To Frontend)
app.get("/api/blogs", async (req, res) => {
  try {
    console.log("📝 Fetching blogs...");

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const blogs = await Blog.find({ isPublished: true })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Blog.countDocuments({ isPublished: true });

    res.json({
      success: true,
      blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
      error: error.message,
    });
  }
});

// 5. GET SINGLE BLOG BY ID
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog || !blog.isPublished) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("❌ Error fetching blog:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// 6. GET PRODUCT CATEGORIES
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json({
      success: true,
      categories: categories.filter(Boolean).sort(),
    });
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// 7. SEARCH PRODUCTS
app.get("/api/search", async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim() === "") {
      return res.json({
        success: true,
        results: [],
      });
    }

    const results = await Product.find({
      isActive: true,
      $or: [
        { "name.en": { $regex: q, $options: "i" } },
        { "name.km": { $regex: q, $options: "i" } },
        { "desc.en": { $regex: q, $options: "i" } },
        { "desc.km": { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    }).limit(10);

    res.json({
      success: true,
      results,
    });
  } catch (error) {
    console.error("❌ Search error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// 8. CONTACT FORM ENDPOINT
app.post("/contact", async (req, res) => {
  try {
    console.log("📞 Contact form submission:", req.body);

    // Validate required fields
    if (!req.body.name || !req.body.email || !req.body.message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    const contact = new Contact(req.body);
    await contact.save();

    console.log(`✅ Contact saved: ${contact._id}`);

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
      },
    });
  } catch (err) {
    console.error("❌ Contact form error:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// 9. NEWSLETTER SUBSCRIPTION ENDPOINT - UPDATED TO SAVE ALL FIELDS
app.post("/subscribe", async (req, res) => {
  try {
    console.log("📧 Newsletter subscription:", req.body);

    if (!req.body.email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Save newsletter with all fields
    const newsletter = new Newsletter({
      email: req.body.email,
      // // name: req.body.name || "",
      // // phone: req.body.phone || "",
      // // username: req.body.username || "",
    });

    await newsletter.save();

    console.log(`✅ Newsletter subscription saved: ${newsletter._id}`);
    console.log("   Email:", newsletter.email);
    // console.log("   Name:", newsletter.name);
    // console.log("   Phone:", newsletter.phone);
    // console.log("   Username:", newsletter.username);

    res.status(201).json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch (err) {
    console.error("❌ Newsletter subscription error:", err);

    // Handle duplicate email error
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already subscribed",
      });
    }

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ================= STATIC HTML ROUTES =================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/faq.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "faq.html"));
});

app.get("/prdDetail.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "prdDetail.html"));
});

app.get("/blog_detail.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "blog_detail.html"));
});

// ================= 404 HANDLER =================
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// ================= DATABASE INITIALIZATION =================
const initializeDatabase = async () => {
  try {
    // Check if we need to import data
    const productCount = await Product.countDocuments();
    const blogCount = await Blog.countDocuments();

    console.log("\n📊 Database Status:");
    console.log(`   Products: ${productCount}`);
    console.log(`   Blogs: ${blogCount}`);
    console.log(`   Contacts: ${await Contact.countDocuments()}`);
    console.log(`   Newsletter: ${await Newsletter.countDocuments()}`);

    if (productCount === 0) {
      console.log("⚠️  No products found. Run: node import-data.js");
    }

    if (blogCount === 0) {
      console.log("⚠️  No blogs found. Import script will add sample blogs.");
    }
  } catch (error) {
    console.log("⚠️  Could not check database:", error.message);
  }
};

// ================= START SERVER =================
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Access at: http://localhost:${PORT}`);
  console.log(`\n📡 API Endpoints:`);
  console.log(`   GET  /api/health     - Health check`);
  console.log(`   GET  /api/products   - Get all products`);
  console.log(`   GET  /api/blogs      - Get all blogs`);
  console.log(`   POST /contact        - Submit contact form`);
  console.log(`   POST /subscribe      - Subscribe to newsletter`);

  // Initialize database check
  await initializeDatabase();
});
