// IndexedDB Setup
const DB_NAME = "ProductLanguageDB";
const DB_VERSION = 1;
const STORE_NAME = "settings";
let db;

// Global variables
let currentLang = "en";
let currentProduct = "cucumber";

// DOM Elements
const langSwitch = document.getElementById("langSwitch");
const langOptions = document.querySelectorAll(".lang-option");
const listItems = document.querySelectorAll(".product-list li");
const display = document.getElementById("product-display");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");
const guideModal = document.getElementById("guide-modal");
const guideModalClose = document.getElementById("guide-modal-close");
const guideContent = document.getElementById("guide-content");

let currentVariantData = null;

// Define font families for each language
const fontMap = {
  en: "'Poppins', sans-serif",
  km: "'Hanuman', serif",
};

// ========== INDEXEDDB FUNCTIONS ==========
function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error("Database failed to open");
      reject(request.error);
    };

    request.onsuccess = () => {
      db = request.result;
      console.log("Database opened successfully");
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const objectStore = db.createObjectStore(STORE_NAME, {
          keyPath: "key",
        });
        console.log("Object store created");
      }
    };
  });
}

function saveToIndexedDB(key, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const objectStore = transaction.objectStore(STORE_NAME);
    const request = objectStore.put({ key: key, value: value });

    request.onsuccess = () => {
      console.log(`${key} saved:`, value);
      resolve();
    };

    request.onerror = () => {
      console.error(`Error saving ${key}`);
      reject(request.error);
    };
  });
}

function loadFromIndexedDB(key, defaultValue) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const objectStore = transaction.objectStore(STORE_NAME);
    const request = objectStore.get(key);

    request.onsuccess = () => {
      if (request.result) {
        console.log(`${key} loaded:`, request.result.value);
        resolve(request.result.value);
      } else {
        console.log(`No saved ${key}, using default:`, defaultValue);
        resolve(defaultValue);
      }
    };

    request.onerror = () => {
      console.error(`Error loading ${key}`);
      reject(request.error);
    };
  });
}

// ========== URL HANDLING FUNCTIONS ==========
function createSEOString(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function updateURL(
  productKey = null,
  variantIndex = null,
  variantTitle = null
) {
  const url = new URL(window.location);

  // Clear all parameters first
  url.search = "";

  if (productKey) {
    // Format: ?cucumber&variant=1&f1-cucumber-neang-kangri-variety
    let newSearch = productKey;

    if (variantIndex !== null && variantTitle) {
      // Use English title for URL regardless of current language
      const variant = products[productKey]?.imgs[variantIndex - 1]; // Convert from 1-based to 0-based
      if (variant) {
        const seoName = createSEOString(variant.title.en);
        newSearch += `&variant=${variantIndex}`; // Store as 1-based
        newSearch += `&${seoName}`;
      }
    }

    url.search = `?${newSearch}`;
  }

  // Update URL without reload
  window.history.pushState({}, "", url);
  console.log("URL updated to:", url.toString());
}

function handleURLParameters() {
  const search = window.location.search;
  console.log("URL search:", search);

  if (!search || search === "?") return false;

  // Parse URL like: ?cucumber&variant=1&f1-cucumber-neang-kangri-variety
  const params = search.substring(1).split("&");
  console.log("URL params array:", params);

  // First param is product key
  const productKey = params[0];

  if (!productKey || !products[productKey]) {
    console.log("Invalid product key:", productKey);
    return false;
  }

  let variantIndex = null;
  let seoName = null;

  // Parse other parameters
  for (let i = 1; i < params.length; i++) {
    const param = params[i];
    if (param.startsWith("variant=")) {
      variantIndex = parseInt(param.split("=")[1]);
    } else if (param && !param.includes("=")) {
      // This is the SEO name (like f1-cucumber-neang-kangri-variety)
      seoName = param;
    }
  }

  console.log("Parsed URL:", { productKey, variantIndex, seoName });

  // Update sidebar active state
  document.querySelectorAll(".product-list li").forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.product === productKey) {
      item.classList.add("active");
    }
  });

  // Show the product category
  showProduct(productKey);

  // If variant index is specified, open modal
  if (variantIndex !== null) {
    const index = parseInt(variantIndex);
    if (!isNaN(index) && products[productKey].imgs[index - 1]) {
      // Convert from 1-based to 0-based
      setTimeout(() => {
        console.log(
          "Opening modal for:",
          productKey,
          "variant (1-based):",
          index
        );
        showModal(productKey, index); // Pass 1-based index
      }, 100);
      return true;
    }
  }
  return true;
}

// ========== LANGUAGE FUNCTIONS ==========
langOptions.forEach((option) => {
  option.addEventListener("click", async () => {
    const lang = option.getAttribute("data-lang");
    if (lang !== currentLang) {
      currentLang = lang;
      updateLanguage(lang);

      try {
        await saveToIndexedDB("currentLang", lang);
      } catch (error) {
        console.error("Failed to save language:", error);
      }

      langOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      // Update product display with new language
      showProduct(currentProduct);
    }
  });
});

function updateLanguage(lang) {
  document.documentElement.style.fontFamily = fontMap[lang];
  document.body.style.fontFamily = fontMap[lang];

  document.querySelectorAll("[data-en]").forEach((element) => {
    const text = element.getAttribute(`data-${lang}`);
    if (text) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = text;
      } else {
        element.textContent = text;
      }
    }
  });

  document.querySelectorAll("[data-placeholder-en]").forEach((element) => {
    const placeholder = element.getAttribute(`data-placeholder-${lang}`);
    if (placeholder) {
      element.placeholder = placeholder;
    }
  });

  // Update "See Detail" buttons text
  document.querySelectorAll(".see-detail-btn").forEach((btn) => {
    btn.textContent = lang === "en" ? "See Detail" : "មើលលម្អិត";
  });
}

// ========== PRODUCT DISPLAY FUNCTIONS ==========
function showProduct(productKey) {
  const product = products[productKey];
  if (!product) {
    console.error(`Product ${productKey} not found`);
    return;
  }

  currentProduct = productKey;
  const display = document.getElementById("product-display");
  const lang = currentLang;

  // Save to IndexedDB
  // saveToIndexedDB("currentProduct", productKey).catch(console.error);

  display.classList.remove("fade-up");
  void display.offsetWidth;
  display.classList.add("fade-up");

  // Update sidebar
  document.querySelectorAll(".product-list li").forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.product === productKey) {
      item.classList.add("active");
    }
  });

  // Generate HTML - use 1-based index for display
  display.innerHTML = `
        <h2>${product.name[lang]}</h2>
        <p>${product.desc[lang]}</p>
        <div class="image-grid">
          ${product.imgs
            .map((img, index) => {
              // Always use English for URL generation
              const seoName = createSEOString(img.title.en);
              const displayIndex = index + 1; // 1-based for display
              return `
                <div class="image-card" 
                     data-product="${productKey}" 
                     data-index="${displayIndex}" 
                     data-seo-name="${seoName}">
                  <img src="${img.src}" alt="${img.title[lang]}">
                  <h3>${img.title[lang]}</h3>
                  <p>${img.info[lang]}</p>
                  <div class="image-card-overlay">
                    <button class="see-detail-btn">
                      ${lang === "en" ? "See Detail" : "មើលលម្អិត"}
                    </button>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      `;

  // Add click listeners to image cards
  document.querySelectorAll(".image-card").forEach((card) => {
    card.addEventListener("click", function () {
      const productKey = this.dataset.product;
      const index = Number.parseInt(this.dataset.index); // This is 1-based

      console.log("Card clicked:", { productKey, index });

      // Update URL (always use English for URL)
      const variant = products[productKey].imgs[index - 1]; // Convert to 0-based for array access
      updateURL(productKey, index, variant.title.en);
      showModal(productKey, index); // Pass 1-based index
    });
  });
}

// Add this function to your modal
async function downloadPdfWithCleanName(url, fileName) {
  try {
    // Check if URL exists and is valid
    if (!url || url.trim() === "") {
      const message =
        currentLang === "en"
          ? "PDF guide is not available for this product yet."
          : "ឯកសារ PDF មិនទាន់មានសម្រាប់ផលិតផលនេះទេ។";
      alert(message);
      return; // Stop execution
    }

    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Download failed:", error);
    // Show error message instead of opening URL
    const message =
      currentLang === "en"
        ? "Unable to download PDF. The file may not be available."
        : "មិនអាចទាញយក PDF បានទេ។ ឯកសារប្រហែលជាមិនមាន។";
    alert(message);
  }
}

function showModal(productKey, variantIndex) {
  // variantIndex is 1-based, convert to 0-based for array access
  const arrayIndex = variantIndex - 1;
  const product = products[productKey];
  if (!product || !product.imgs[arrayIndex]) {
    console.error(
      `Variant ${variantIndex} (0-based: ${arrayIndex}) not found for product ${productKey}`
    );
    return;
  }

  const variant = product.imgs[arrayIndex];
  const lang = currentLang;

  currentVariantData = variant;

  const weightLabel = lang === "en" ? "Weight" : "ទម្ងន់";
  const viewsLabel = lang === "en" ? "Views" : "ចំនួនមើល";
  const descLabel = lang === "en" ? "Description" : "ការពិពណ៌នា";
  const growingGuideLabel = lang === "en" ? "Technical" : "បច្ចេកទេស​ដាំដុះ";
  const seeVideoLabel = lang === "en" ? "See Video" : "មើលវីដេអូ";
  const downloadLabel =
    lang === "en" ? "Download Technical" : "ទាញយកបច្ចេកទេស​ដាំដុះ";

  // Check if PDF exists for this variant
  const hasPdf = variant.pdfUrl && variant.pdfUrl.trim() !== "";

  // Generate download button HTML based on whether PDF exists
  let downloadButtonHtml = "";
  if (hasPdf) {
    downloadButtonHtml = `
      <button class="order-button" id="download-pdf-btn">
        <i class="ri-download-line"></i> ${downloadLabel}
      </button>
    `;
  } else {
    downloadButtonHtml = `
      <button class="order-button disabled" id="download-pdf-btn" disabled style="opacity: 0.5; cursor: not-allowed;">
        <i class="ri-download-line"></i> ${downloadLabel}
      </button>
    `;
  }

  modalBody.innerHTML = `
      <div class="modal-images">
        <img src="${variant.gallery[0].src}" alt="${
    variant.title[lang]
  }" class="modal-main-image" id="main-image">
        <div style="display: flex; gap: 10px; margin-top: 15px;">
          ${variant.gallery
            .map(
              (img, idx) => `
            <img 
              src="${img.src}" 
              alt="${img.label[lang]}" 
              style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid ${
                idx === 0 ? "#43b048" : "#ddd"
              }; transition: all 0.3s ease;"
              class="thumbnail-img"
              data-index="${idx}"
            >
          `
            )
            .join("")}
        </div>
      </div>
      <div class="modal-details">
        <h2 class="modal-title">${variant.title[lang]}</h2>
        <div class="modal-meta">
          <span>⚖️ ${weightLabel}: <strong>${variant.weight}</strong></span>
          <span>👁️ ${viewsLabel}: <strong>${variant.views}</strong></span>
        </div>
        
        <div class="modal-section">
          <h3>${descLabel}</h3>
          <p>${variant.info[lang]}</p>
        </div>

        <div class="modal-actions">
          <button class="action-button" id="growing-guide-btn">
             ${growingGuideLabel}
          </button>
          <button class="action-button" id="see-video-btn">
            ${seeVideoLabel}
          </button>
        </div>

        <div class="modal-cta">
          ${downloadButtonHtml}
        </div>
      </div>
    `;

  // Setup thumbnail click handlers
  const thumbnails = modalBody.querySelectorAll(".thumbnail-img");
  const mainImage = document.getElementById("main-image");

  thumbnails.forEach((thumb, idx) => {
    thumb.addEventListener("click", function () {
      mainImage.src = variant.gallery[idx].src;
      thumbnails.forEach((t) => {
        t.style.borderColor = "#ddd";
      });
      this.style.borderColor = "#43b048";
    });

    if (idx === 0) {
      thumb.style.borderColor = "#43b048";
    }
  });

  // Setup button handlers
  document
    .getElementById("growing-guide-btn")
    .addEventListener("click", showGrowingGuide);

  document.getElementById("see-video-btn").addEventListener("click", showVideo);

  // Add event listener for download button
  const downloadBtn = document.getElementById("download-pdf-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      if (hasPdf) {
        const fileName = `${variant.title[lang].replace(
          /\s+/g,
          "-"
        )}-technical-guide.pdf`;
        downloadPdfWithCleanName(variant.pdfUrl, fileName);
      } else {
        // Show message when PDF doesn't exist
        const message =
          lang === "en"
            ? "PDF guide is not available for this product variant yet."
            : "ឯកសារ PDF មិនទាន់មានសម្រាប់ប្រភេទរងនៃផលិតផលនេះទេ។";
        alert(message);
      }
    });
  }

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Update page title
  document.title = `${variant.title[lang]} - ${product.name[lang]} - KsSEED`;

  console.log(
    "Modal opened for:",
    productKey,
    "variant (1-based):",
    variantIndex,
    "Has PDF:",
    hasPdf
  );
}

function showGrowingGuide() {
  if (!currentVariantData) return;

  const lang = currentLang;
  const featuresLabel = lang === "en" ? "Features" : "លក្ខណៈពិសេស";
  const plantingGuideLabel =
    lang === "en" ? "Planting Guide" : "បច្ចេកទេសដាំដុះ";
  const distanceLabel = lang === "en" ? "Distance" : "ចម្ងាយ";
  const plantDistanceLabel = lang === "en" ? "Plant Distance" : "ចម្ងាយរវាងដើម";
  const densityLabel = lang === "en" ? "Density" : "ដង់ស៊ីតេ";
  const landPrepLabel = lang === "en" ? "Land Preparation" : "ការរៀបចំដី";
  const cultivationLabel = lang === "en" ? "Cultivation" : "ការដាំដុះ";
  const irrigationLabel = lang === "en" ? "Irrigation" : "ការស្រោចទឹក";

  guideContent.innerHTML = `
        <div class="modal-section">
          <h3>${featuresLabel}</h3>
          <ul>
            ${currentVariantData.features[lang]
              .map((feature) => `<li>${feature}</li>`)
              .join("")}
          </ul>
        </div>

        <div class="modal-section">
          <h3>${plantingGuideLabel}</h3>
          <table class="modal-table">
            <tr>
              <th>${distanceLabel}</th>
              <td>${currentVariantData.planting.distance[lang]}</td>
            </tr>
            <tr>
              <th>${plantDistanceLabel}</th>
              <td>${currentVariantData.planting.plantDistance[lang]}</td>
            </tr>
            <tr>
              <th>${densityLabel}</th>
              <td>${currentVariantData.planting.density[lang]}</td>
            </tr>
          </table>
        </div>

        <div class="modal-section">
          <h3>${landPrepLabel}</h3>
          <ul>
            ${currentVariantData.landPreparation[lang]
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
        </div>

        <div class="modal-section">
          <h3>${cultivationLabel}</h3>
          <ul>
            ${currentVariantData.cultivation[lang]
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
        </div>

        <div class="modal-section">
          <h3>${irrigationLabel}</h3>
          <ul>
            ${currentVariantData.irrigation[lang]
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
        </div>
      `;

  guideModal.classList.add("active");
}

function showVideo() {
  if (!currentVariantData) return;

  const variantTitle = currentVariantData.title[currentLang];
  const productTitle = currentProduct
    ? products[currentProduct].name[currentLang]
    : "";

  // Update video alert message if modal exists
  const videoAlertMessage = document.getElementById("videoAlertMessage");
  if (videoAlertMessage) {
    const message =
      currentLang === "en"
        ? `Instructional videos for "${variantTitle}" ${productTitle ? `(${productTitle})` : ""} are coming soon! We're preparing step-by-step video guides to help you achieve the best results.`
        : `វីដេអូណែនាំសម្រាប់ "${variantTitle}" ${productTitle ? `(${productTitle})` : ""} នឹងមកដល់ឆាប់ៗ! យើងកំពុងរៀបចំវីដេអូណែនាំជំហានៗដើម្បីជួយអ្នកទទួលបានលទ្ធផលល្អបំផុត។`;

    videoAlertMessage.textContent = message;
  }

  // Use global function if available
  if (typeof window.showVideoAlert === "function") {
    window.showVideoAlert();
  } else {
    // Fallback
    const message =
      currentLang === "en"
        ? `Video guides for ${variantTitle} are coming soon!`
        : `វីដេអូណែនាំសម្រាប់ ${variantTitle} នឹងមកដល់ឆាប់ៗ!`;

    if (window.customAlert && typeof window.customAlert.info === "function") {
      window.customAlert.info(
        currentLang === "en" ? "Video Guide" : "វីដេអូណែនាំ",
        message,
        { autoClose: true, closeTime: 5000 },
      );
    } else {
      alert(message);
    }
  }
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";

  // Clean URL when modal closes - keep only product, remove variant
  const url = new URL(window.location);
  url.search = `?${currentProduct}`;
  window.history.replaceState({}, "", url);
  document.title = "Products - KsSEED";
}

function closeGuideModal() {
  guideModal.classList.remove("active");
}

// ========== EVENT LISTENERS ==========
// Product list click handlers
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    const productKey = item.dataset.product;
    const url = new URL(window.location);
    url.search = `?${productKey}`;
    window.history.pushState({}, "", url);
    showProduct(productKey);
  });
});

// Close modal handlers
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

guideModalClose.addEventListener("click", closeGuideModal);
guideModal.addEventListener("click", (e) => {
  if (e.target === guideModal) closeGuideModal();
});

// Escape key handler
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (modal.classList.contains("active")) closeModal();
    if (guideModal.classList.contains("active")) closeGuideModal();
  }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const nav = document.getElementById("nav");

mobileMenuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  });
});

// Browser back/forward navigation
window.addEventListener("popstate", function () {
  console.log("popstate event fired");
  const urlHandled = handleURLParameters();
  if (!urlHandled) {
    // If URL doesn't contain product params, show default
    const urlParams = window.location.search;
    if (!urlParams || urlParams === "?" || urlParams === "") {
      showProduct(currentProduct);
    }
  }
});

// ========== INITIALIZATION ==========
window.addEventListener("DOMContentLoaded", async () => {
  console.log("DOMContentLoaded - Initializing...");

  try {
    // Initialize database
    await initDB();

    // Load saved language
    const savedLang = await loadFromIndexedDB("currentLang", "en");
    currentLang = savedLang;
    console.log("Loaded language:", savedLang);

    // Load saved product
    const savedProduct = await loadFromIndexedDB("currentProduct", "cucumber");
    currentProduct = savedProduct;
    console.log("Loaded product:", savedProduct);

    // Apply saved language
    updateLanguage(savedLang);

    // Update active state in UI
    langOptions.forEach((opt) => {
      if (opt.getAttribute("data-lang") === savedLang) {
        opt.classList.add("active");
      } else {
        opt.classList.remove("active");
      }
    });

    // Handle URL parameters FIRST (this will open modal if URL has variant)
    const urlHandled = handleURLParameters();

    // If URL doesn't specify a product, show saved product
    if (!urlHandled) {
      console.log("No URL params, showing default product:", currentProduct);
      showProduct(currentProduct);
    }
  } catch (error) {
    console.error("Error initializing:", error);
    // Fallback to defaults
    updateLanguage("en");
    showProduct("cucumber");
  }
});

// Add CSS for fade animation if not already present
if (!document.querySelector("#fade-animation")) {
  const style = document.createElement("style");
  style.id = "fade-animation";
  style.textContent = `
    .fade-up {
      animation: fadeUp 0.5s ease forwards;
    }
    
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

// Debug: Log current URL
console.log("Current URL:", window.location.href);
