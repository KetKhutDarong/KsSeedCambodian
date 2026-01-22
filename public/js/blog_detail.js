// blog_detail.js - For blog_detail.html
// Assumes blog_data.js is loaded first

// Get blog ID from URL parameter
function getBlogIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id")) || 1;
}

// Load and render blog detail
document.addEventListener("DOMContentLoaded", () => {
  if (!window.blogsData) {
    console.error("Blog data not loaded");
    return;
  }

  const blogId = getBlogIdFromUrl();
  const blog = window.blogsData.find((b) => b.id === blogId);

  if (blog) {
    displayBlogDetail(blog);
    displayOtherBlogs(blogId);
  } else {
    const container = document.getElementById("blogDetailContainer");
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px;">
          <h2>Blog not found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <a href="index.html#blog" class="btn btn-primary">Back to Blog</a>
        </div>
      `;
    }
  }

  // Listen for language changes
  document.addEventListener("languageChanged", () => {
    const blog = window.blogsData.find((b) => b.id === blogId);
    if (blog) {
      displayBlogDetail(blog);
      displayOtherBlogs(blogId);
    }
  });
});

function displayBlogDetail(blog) {
  const container = document.getElementById("blogDetailContainer");
  const descContainer = document.getElementById("blogDescContainer");

  if (!container || !descContainer) {
    console.error("Blog detail containers not found");
    return;
  }

  const currentLang = localStorage.getItem("language") || "en";

  const title = currentLang === "km" ? blog.titleKm : blog.titleEn;
  const preview = currentLang === "km" ? blog.previewKm : blog.previewEn;
  const category = currentLang === "km" ? blog.categoryKm : blog.category;
  const content = currentLang === "km" ? blog.contentKm : blog.contentEn;

  container.innerHTML = `
    <div class="blog-detail-card">
      <div class="blog-detail-image">
        <img src="${
          blog.image || "/placeholder.svg?height=600&width=800"
        }" alt="${title}" />
      </div>
      <div class="blog-detail-text">
        <h1 class="text-blog-title" data-en="${blog.titleEn}" data-km="${
    blog.titleKm
  }">${title}</h1>
        <p class="date-news">
          <span data-en="${blog.category}" data-km="${
    blog.categoryKm
  }">${category}</span> | ${blog.date}
        </p>
        <p class="text-blog" data-en="${blog.previewEn}" data-km="${
    blog.previewKm
  }">${preview}</p>
      </div>
    </div>
  `;

  descContainer.innerHTML = `
    <h2 class="title-desc" data-en="${blog.titleEn}" data-km="${blog.titleKm}">${title}</h2>
    <p class="text-desc" data-en="${blog.contentEn}" data-km="${blog.contentKm}">${content}</p>
  `;

  // Scroll to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function displayOtherBlogs(currentBlogId) {
  const grid = document.getElementById("otherBlogsGrid");

  if (!grid || !window.blogsData) {
    console.error("Other blogs grid or blog data not found");
    return;
  }

  const currentLang = localStorage.getItem("language") || "en";

  // Get 3 other blogs (exclude current blog)
  const otherBlogs = window.blogsData
    .filter((b) => b.id !== currentBlogId)
    .slice(0, 3);

  // Clear existing content
  grid.innerHTML = "";

  otherBlogs.forEach((blog) => {
    const card = createOtherBlogCard(blog, currentLang);
    grid.appendChild(card);
  });
}

function createOtherBlogCard(blog, lang) {
  const card = document.createElement("div");
  card.className = "blog-card";

  const title = lang === "km" ? blog.titleKm : blog.titleEn;
  const preview = lang === "km" ? blog.previewKm : blog.previewEn;
  const category = lang === "km" ? blog.categoryKm : blog.category;
  const readMoreText = lang === "km" ? "អានបន្ថែម →" : "Read More →";

  card.innerHTML = `
    <div class="blog-image">
      <img src="${
        blog.image || "/placeholder.svg?height=300&width=400"
      }" alt="${title}" />
      <span class="blog-category" data-en="${blog.category}" data-km="${
    blog.categoryKm
  }">${category}</span>
    </div>
    <div class="blog-content">
      <div class="blog-meta">
        <span class="blog-date">${blog.date}</span>
        <span class="blog-read">${blog.readTime} min read</span>
      </div>
      <h3 data-en="${blog.titleEn}" data-km="${blog.titleKm}">${title}</h3>
      <p data-en="${blog.previewEn}" data-km="${blog.previewKm}">${preview}</p>
      <a href="blog_detail.html?id=${
        blog.id
      }" class="blog-link" data-en="Read More →" data-km="អានបន្ថែម →">${readMoreText}</a>
    </div>
  `;

  return card;
}
