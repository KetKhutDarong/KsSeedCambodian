import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// ================= APP SETUP =================
const app = express();
const PORT = process.env.PORT || 5000;

// ================= FIX __dirname (ES MODULE) =================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= SERVE STATIC FILES =================
// This makes /css, /js, /image, /data work
app.use(express.static(path.join(__dirname, "public")));

// ================= CONNECT TO MONGODB =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ================= CONTACT SCHEMA =================
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);

// ================= NEWSLETTER SCHEMA =================
const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

// ================= HOMEPAGE =================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ================= CONTACT API =================
app.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ================= NEWSLETTER API =================
app.post("/subscribe", async (req, res) => {
  try {
    const newsletter = new Newsletter(req.body);
    await newsletter.save();

    res.status(201).json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ================= 404 HANDLER =================
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
