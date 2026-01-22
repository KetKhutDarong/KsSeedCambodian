document.addEventListener("DOMContentLoaded", () => {
  const BACKEND_URL = "http://localhost:5000";

  // Language-specific alert messages
  const alertMessages = {
    en: {
      // Contact Form
      missingFields: "Please fill in all required fields",
      sending: "Sending...",
      pleaseWait: "Please wait",
      messageSent: "Message Sent",
      messageSuccess: "Your message has been sent successfully!",
      error: "Error",
      sendError: "Failed to send message. Please try again.",
      networkError: "Network Error",
      tryAgainLater: "Please try again later",

      // Newsletter Form
      invalidEmail: "Please enter a valid email address",
      subscribing: "Subscribing...",
      subscribed: "Subscribed!",
      thankYouSubscribe: "Thank you for subscribing to our newsletter!",
      alreadySubscribed: "This email is already on our mailing list!",
      subscribeError: "Unable to subscribe. Please try again.",

      // Video Alert
      videoGuide: "Video Guide",
      close: "Close",
      videoComingSoon:
        "Video feature is coming soon! We're preparing high-quality instructional videos.",
    },
    km: {
      // Contact Form
      missingFields: "សូមបំពេញគ្រប់ព័ត៌មានដែលត្រូវការ",
      sending: "កំពុងផ្ញើ...",
      pleaseWait: "សូមរង់ចាំ",
      messageSent: "ផ្ញើដោយជោគជ័យ",
      messageSuccess: "សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ!",
      error: "កំហុស",
      sendError: "មិនអាចផ្ញើសារបាន។ សូមព្យាយាមម្តងទៀត។",
      networkError: "កំហុសបណ្តាញ",
      tryAgainLater: "សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ",

      // Newsletter Form
      invalidEmail: "សូមបញ្ចូលអ៊ីមែលដែលត្រឹមត្រូវ",
      subscribing: "កំពុងជាវ...",
      subscribed: "បានជាវដោយជោគជ័យ!",
      thankYouSubscribe: "សូមអរគុណសម្រាប់ការជាវព្រឹត្តិប័ត្រព័ត៌មានរបស់យើង!",
      alreadySubscribed: "អ៊ីមែលនេះបានជាវរួចហើយ!",
      subscribeError: "មិនអាចជាវបាន។ សូមព្យាយាមម្តងទៀត។",

      // Video Alert
      videoGuide: "វីដេអូណែនាំ",
      close: "បិទ",
      videoComingSoon:
        "មុខងារវីដេអូនឹងមកដល់ឆាប់ៗ! យើងកំពុងរៀបចំវីដេអូណែនាំដែលមានគុណភាពខ្ពស់។",
    },
  };

  // Current language
  let currentLang = "en";

  // Font mapping
  const fontMapping = {
    en: "'Poppins', sans-serif",
    km: "'Hanuman', sans-serif",
    es: "'Poppins', sans-serif",
    fr: "'Poppins', sans-serif",
  };

  // ================= CUSTOM ALERT SYSTEM =================
  // Add CSS for custom alert modals
  const alertModalCSS = `
  /* Alert Modal Base Styles */
  .custom-alert-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease;
  }

  .custom-alert-modal.active {
    display: flex;
  }

  .custom-alert-container {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    width: 90%;
    max-width: 450px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.4s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .custom-alert-header {
    padding: 20px;
    text-align: center;
    position: relative;
  }

  .custom-alert-header h3 {
    margin: 0;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .custom-alert-header h3 i {
    font-size: 1.8rem;
  }

  .close-alert {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.2);
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .close-alert:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) rotate(90deg);
  }

  .custom-alert-body {
    padding: 30px;
    text-align: center;
  }

  .alert-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    animation: pulse 2s infinite;
  }

  .alert-icon.success {
    color: #43b048;
  }

  .alert-icon.error {
    color: #ff6b6b;
  }

  .alert-icon.warning {
    color: #ffd93d;
  }

  .alert-icon.info {
    color: #4d96ff;
  }

  .alert-icon.loading {
    color: #43b048;
  }

  .custom-alert-body p {
    color: #e0e0e0;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .custom-alert-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .custom-alert-btn {
    padding: 12px 25px;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 140px;
    justify-content: center;
    font-family: inherit;
  }

  .custom-alert-btn.primary {
    background: linear-gradient(90deg, #43b048 0%, #3ba340 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(67, 176, 72, 0.3);
  }

  .custom-alert-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(67, 176, 72, 0.4);
  }

  .custom-alert-btn.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .custom-alert-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  /* Loading State */
  .loading-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 20px 0;
  }

  .loading-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #43b048;
    animation: bounce 1.4s infinite ease-in-out;
  }

  .loading-dot:nth-child(1) {
    animation-delay: -0.32s;
  }

  .loading-dot:nth-child(2) {
    animation-delay: -0.16s;
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @media (max-width: 500px) {
    .custom-alert-container {
      width: 95%;
      margin: 20px;
    }
    
    .custom-alert-actions {
      flex-direction: column;
    }
    
    .custom-alert-btn {
      width: 100%;
    }
  }
  `;

  // Add CSS to document
  const alertStyle = document.createElement("style");
  alertStyle.textContent = alertModalCSS;
  document.head.appendChild(alertStyle);

  // Custom Alert Class
  class CustomAlert {
    constructor() {
      this.currentLang = "en";
      this.init();
    }

    init() {
      this.createAlertContainer();
    }

    setLanguage(lang) {
      this.currentLang = lang;
    }

    createAlertContainer() {
      if (!document.getElementById("custom-alert-container")) {
        const alertContainer = document.createElement("div");
        alertContainer.id = "custom-alert-container";
        document.body.appendChild(alertContainer);
      }
    }

    createAlert(type, title, message, options = {}) {
      const alertId = `alert-${Date.now()}`;
      const {
        confirmText = this.currentLang === "en" ? "OK" : "យល់ព្រម",
        cancelText = this.currentLang === "en" ? "Cancel" : "បោះបង់",
        showCancel = false,
        onConfirm = null,
        onCancel = null,
        autoClose = false,
        closeTime = 3000,
      } = options;

      const iconMap = {
        success: "ri-checkbox-circle-line",
        error: "ri-close-circle-line",
        warning: "ri-error-warning-line",
        info: "ri-information-line",
        loading: "ri-loader-4-line",
      };

      const colorMap = {
        success: "#43b048",
        error: "#ff6b6b",
        warning: "#ffd93d",
        info: "#4d96ff",
        loading: "#43b048",
      };

      // Create alert HTML
      const alertHTML = `
        <div class="custom-alert-modal" id="${alertId}">
          <div class="custom-alert-container">
            <div class="custom-alert-header" style="background: linear-gradient(90deg, ${colorMap[type]} 0%, ${this.darkenColor(colorMap[type])} 100%);">
              <h3><i class="${iconMap[type]}"></i> ${title}</h3>
              <button class="close-alert" data-alert-id="${alertId}">
                <i class="ri-close-line"></i>
              </button>
            </div>
            <div class="custom-alert-body">
              ${
                type === "loading"
                  ? `
                <div class="loading-dots">
                  <div class="loading-dot"></div>
                  <div class="loading-dot"></div>
                  <div class="loading-dot"></div>
                </div>
                <p>${message}</p>
              `
                  : `
                <div class="alert-icon ${type}">
                  <i class="${iconMap[type]}"></i>
                </div>
                <p>${message}</p>
                <div class="custom-alert-actions">
                  <button class="custom-alert-btn ${type === "warning" ? "warning" : "primary"}" data-alert-id="${alertId}" data-action="confirm">
                    <i class="ri-check-line"></i> ${confirmText}
                  </button>
                  ${
                    showCancel
                      ? `
                    <button class="custom-alert-btn secondary" data-alert-id="${alertId}" data-action="cancel">
                      <i class="ri-close-line"></i> ${cancelText}
                    </button>
                  `
                      : ""
                  }
                </div>
              `
              }
            </div>
          </div>
        </div>
      `;

      // Add to DOM
      document
        .getElementById("custom-alert-container")
        .insertAdjacentHTML("beforeend", alertHTML);

      const alertModal = document.getElementById(alertId);

      // Apply current language font
      alertModal.style.fontFamily =
        fontMapping[this.currentLang] || fontMapping.en;

      // Show alert
      alertModal.classList.add("active");
      document.body.style.overflow = "hidden";

      // Add event listeners
      const closeBtn = alertModal.querySelector(".close-alert");
      const confirmBtn = alertModal.querySelector('[data-action="confirm"]');
      const cancelBtn = alertModal.querySelector('[data-action="cancel"]');

      const closeAlert = () => {
        alertModal.classList.remove("active");
        document.body.style.overflow = "auto";
        setTimeout(() => alertModal.remove(), 300);
      };

      closeBtn?.addEventListener("click", () => {
        closeAlert();
        if (onCancel) onCancel();
      });

      confirmBtn?.addEventListener("click", () => {
        closeAlert();
        if (onConfirm) onConfirm();
      });

      cancelBtn?.addEventListener("click", () => {
        closeAlert();
        if (onCancel) onCancel();
      });

      // Auto close for success alerts
      if (autoClose && type === "success") {
        setTimeout(() => {
          if (alertModal.classList.contains("active")) {
            closeAlert();
            if (onConfirm) onConfirm();
          }
        }, closeTime);
      }

      return {
        close: closeAlert,
        update: (newMessage) => {
          const messageEl = alertModal.querySelector("p");
          if (messageEl) messageEl.textContent = newMessage;
        },
      };
    }

    darkenColor(color) {
      const hex = color.replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);

      const darken = (value) => Math.max(0, value - 40);

      return `#${darken(r).toString(16).padStart(2, "0")}${darken(g).toString(16).padStart(2, "0")}${darken(b).toString(16).padStart(2, "0")}`;
    }

    // Alert methods
    success(title, message, options = {}) {
      return this.createAlert("success", title, message, options);
    }

    error(title, message, options = {}) {
      return this.createAlert("error", title, message, options);
    }

    warning(title, message, options = {}) {
      return this.createAlert("warning", title, message, options);
    }

    info(title, message, options = {}) {
      return this.createAlert("info", title, message, options);
    }

    loading(title, message = "", options = {}) {
      return this.createAlert("loading", title, message, options);
    }
  }

  // Initialize custom alert system
  const customAlert = new CustomAlert();

  // ================= VIDEO ALERT MODAL =================
  function createVideoAlertModal() {
    if (!document.getElementById("videoAlertModal")) {
      const videoAlertHTML = `
      <div class="custom-alert-modal" id="videoAlertModal">
        <div class="custom-alert-container">
          <div class="custom-alert-header" style="background: linear-gradient(90deg, #43b048 0%, #2a7d2f 100%);">
            <h3><i class="ri-video-line"></i> ${currentLang === "en" ? "Video Guide" : "វីដេអូណែនាំ"}</h3>
            <button class="close-alert">
              <i class="ri-close-line"></i>
            </button>
          </div>
          <div class="custom-alert-body">
            <div class="alert-icon info">
              <i class="ri-video-add-line"></i>
            </div>
            <p id="videoAlertMessage">
              ${alertMessages[currentLang].videoComingSoon}
            </p>
            <div class="custom-alert-actions">
              <button class="custom-alert-btn primary" id="closeVideoBtn">
                <i class="ri-close-circle-line"></i> ${alertMessages[currentLang].close}
              </button>
            </div>
          </div>
        </div>
      </div>
      `;

      document.body.insertAdjacentHTML("beforeend", videoAlertHTML);
      setupVideoAlertHandlers();
    }
  }

  function setupVideoAlertHandlers() {
    const videoAlertModal = document.getElementById("videoAlertModal");
    const closeVideoBtn = document.getElementById("closeVideoBtn");
    const closeAlertBtn = videoAlertModal?.querySelector(".close-alert");

    if (!videoAlertModal || !closeVideoBtn) return;

    // Close function
    const closeVideoAlert = () => {
      videoAlertModal.classList.remove("active");
      document.body.style.overflow = "auto";
    };

    // Close on X button
    closeAlertBtn?.addEventListener("click", closeVideoAlert);

    // Close on Close button
    closeVideoBtn.addEventListener("click", closeVideoAlert);

    // Close on backdrop click
    videoAlertModal.addEventListener("click", (e) => {
      if (e.target === videoAlertModal) {
        closeVideoAlert();
      }
    });

    // Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && videoAlertModal.classList.contains("active")) {
        closeVideoAlert();
      }
    });
  }

  // Show video alert function
  function showVideoAlert() {
    const videoAlertModal = document.getElementById("videoAlertModal");
    if (!videoAlertModal) {
      createVideoAlertModal();
      setTimeout(() => showVideoAlert(), 10);
      return;
    }

    // Update content
    const videoAlertHeader = videoAlertModal.querySelector(
      ".custom-alert-header h3",
    );
    const videoAlertMessage = document.getElementById("videoAlertMessage");
    const closeVideoBtn = document.getElementById("closeVideoBtn");

    if (videoAlertHeader) {
      videoAlertHeader.innerHTML = `<i class="ri-video-line"></i> ${alertMessages[currentLang].videoGuide}`;
    }

    if (videoAlertMessage) {
      videoAlertMessage.textContent =
        alertMessages[currentLang].videoComingSoon;
    }

    if (closeVideoBtn) {
      closeVideoBtn.innerHTML = `<i class="ri-close-circle-line"></i> ${alertMessages[currentLang].close}`;
    }

    videoAlertModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // ================= Initialize Language System =================
  const DB_NAME = "LanguageDB";
  const DB_VERSION = 1;
  const STORE_NAME = "settings";
  let db;

  function initDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        db = request.result;
        resolve(db);
      };

      request.onupgradeneeded = (event) => {
        db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "key" });
        }
      };
    });
  }

  function saveLanguage(lang) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.put({ key: "currentLang", value: lang });

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  function loadLanguage() {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readonly");
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.get("currentLang");

      request.onsuccess = () => {
        if (request.result) {
          resolve(request.result.value);
        } else {
          resolve("en");
        }
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Language Switching
  const langOptions = document.querySelectorAll(".lang-option");

  langOptions.forEach((option) => {
    option.addEventListener("click", async () => {
      const lang = option.getAttribute("data-lang");
      if (lang !== currentLang) {
        currentLang = lang;
        customAlert.setLanguage(lang);
        updateLanguage(lang);
        updateFont(lang);

        try {
          await saveLanguage(lang);
        } catch (error) {
          console.error("Failed to save language:", error);
        }

        langOptions.forEach((opt) => opt.classList.remove("active"));
        option.classList.add("active");
      }
    });
  });

  function updateLanguage(lang) {
    currentLang = lang;

    document
      .querySelectorAll("[data-en], [data-km], [data-es], [data-fr]")
      .forEach((element) => {
        const text = element.getAttribute(`data-${lang}`);
        if (text !== null && text !== undefined && text.trim() !== "") {
          if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            element.placeholder = text;
          } else {
            element.textContent = text;
          }
        }
      });

    document
      .querySelectorAll(
        "[data-placeholder-en], [data-placeholder-km], [data-placeholder-es], [data-placeholder-fr]",
      )
      .forEach((element) => {
        const placeholder = element.getAttribute(`data-placeholder-${lang}`);
        if (placeholder !== null && placeholder !== undefined) {
          element.placeholder = placeholder;
        }
      });

    // Update video alert modal if it exists
    const videoAlertModal = document.getElementById("videoAlertModal");
    if (videoAlertModal) {
      const videoAlertHeader = videoAlertModal.querySelector(
        ".custom-alert-header h3",
      );
      const videoAlertMessage = document.getElementById("videoAlertMessage");
      const closeVideoBtn = document.getElementById("closeVideoBtn");

      if (videoAlertHeader) {
        videoAlertHeader.innerHTML = `<i class="ri-video-line"></i> ${alertMessages[lang].videoGuide}`;
      }

      if (videoAlertMessage) {
        videoAlertMessage.textContent = alertMessages[lang].videoComingSoon;
      }

      if (closeVideoBtn) {
        closeVideoBtn.innerHTML = `<i class="ri-close-circle-line"></i> ${alertMessages[lang].close}`;
      }

      videoAlertModal.style.fontFamily = fontMapping[lang] || fontMapping.en;
    }
  }

  function updateFont(lang) {
    document.body.style.fontFamily = fontMapping[lang] || fontMapping.en;
  }

  // Helper function to get alert message
  function getAlertMessage(key) {
    return alertMessages[currentLang]?.[key] || alertMessages.en[key] || key;
  }

  // Initialize language system
  (async () => {
    try {
      await initDB();
      const savedLang = await loadLanguage();
      currentLang = savedLang;
      customAlert.setLanguage(savedLang);
      updateLanguage(savedLang);
      updateFont(savedLang);

      createVideoAlertModal();

      langOptions.forEach((opt) => {
        if (opt.getAttribute("data-lang") === savedLang) {
          opt.classList.add("active");
        } else {
          opt.classList.remove("active");
        }
      });
    } catch (error) {
      console.error("Error initializing language:", error);
      updateFont("en");
      customAlert.setLanguage("en");
      createVideoAlertModal();
    }
  })();

  // ================= CONTACT FORM =================
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        name: document.getElementById("contactName").value.trim(),
        email: document.getElementById("contactEmail").value.trim(),
        phone: document.getElementById("contactPhone").value.trim(),
        subject:
          document.getElementById("contactSubject")?.value || "General Inquiry",
        message: document.getElementById("contactMessage").value.trim(),
      };

      if (!data.name || !data.email || !data.phone || !data.message) {
        customAlert.warning(
          getAlertMessage("missingFields"),
          getAlertMessage("missingFields"),
          { autoClose: true, closeTime: 3000 },
        );
        return;
      }

      let loadingAlert;
      try {
        loadingAlert = customAlert.loading(
          getAlertMessage("sending"),
          getAlertMessage("pleaseWait"),
        );

        const res = await fetch(`${BACKEND_URL}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await res.json();

        if (result.success) {
          loadingAlert.close();
          customAlert.success(
            getAlertMessage("messageSent"),
            getAlertMessage("messageSuccess"),
            { autoClose: true, closeTime: 3000 },
          );
          contactForm.reset();
        } else {
          loadingAlert.close();
          customAlert.error(
            getAlertMessage("error"),
            getAlertMessage("sendError"),
            { autoClose: true, closeTime: 3000 },
          );
        }
      } catch (err) {
        if (loadingAlert) loadingAlert.close();
        customAlert.error(
          getAlertMessage("networkError"),
          getAlertMessage("tryAgainLater"),
          { autoClose: true, closeTime: 3000 },
        );
      }
    });
  }

  // ================= NEWSLETTER FORM =================
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("newsletterEmail").value.trim();

      if (!email || !email.includes("@")) {
        customAlert.warning(
          getAlertMessage("invalidEmail"),
          getAlertMessage("invalidEmail"),
          { autoClose: true, closeTime: 3000 },
        );
        return;
      }

      let loadingAlert;
      try {
        loadingAlert = customAlert.loading(getAlertMessage("subscribing"), "");

        const res = await fetch(`${BACKEND_URL}/subscribe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const result = await res.json();

        if (result.success) {
          loadingAlert.close();
          customAlert.success(
            getAlertMessage("subscribed"),
            getAlertMessage("thankYouSubscribe"),
            { autoClose: true, closeTime: 3000 },
          );
          newsletterForm.reset();
        } else {
          loadingAlert.close();
          if (result.message && result.message.includes("duplicate key")) {
            customAlert.info(
              getAlertMessage("alreadySubscribed"),
              getAlertMessage("alreadySubscribed"),
              { autoClose: true, closeTime: 3000 },
            );
          } else {
            customAlert.error(
              getAlertMessage("error"),
              getAlertMessage("subscribeError"),
              { autoClose: true, closeTime: 3000 },
            );
          }
        }
      } catch (err) {
        if (loadingAlert) loadingAlert.close();
        customAlert.error(
          getAlertMessage("networkError"),
          getAlertMessage("tryAgainLater"),
          { autoClose: true, closeTime: 3000 },
        );
      }
    });
  }

  // ================= VIDEO BUTTON HANDLER =================
  const videoButtons = document.querySelectorAll("[data-video-alert]");
  videoButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      showVideoAlert();
    });
  });

  // Expose globally
  window.showVideoAlert = showVideoAlert;
});
