// blog.js - Populate carousel with blog data from blog_data.js
// This works with your existing Carousel class in script.js

class Carousel {
  constructor() {
    this.wrapper = document.getElementById("carouselWrapper");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.dotsContainer = document.getElementById("dotsContainer");
    this.cards = document.querySelectorAll(".blog-card");

    this.originalCards = Array.from(this.cards);
    this.totalOriginalCards = this.originalCards.length;
    this.cloneCards();

    this.cardWidth = this.originalCards[0].offsetWidth;
    this.gap = 30;
    this.currentIndex = 3;
    this.autoScrollInterval = null;
    this.autoScrollDelay = 2000;

    this.initDots();
    this.attachEventListeners();
    this.scrollToSlide(false);
    this.startAutoScroll();
    window.addEventListener("resize", () => this.updateCardWidth());
  }

  cloneCards() {
    this.originalCards.slice(0, 3).forEach((card) => {
      this.wrapper.appendChild(card.cloneNode(true));
    });
    this.originalCards.slice(-3).forEach((card) => {
      this.wrapper.insertBefore(card.cloneNode(true), this.wrapper.firstChild);
    });
    this.cards = document.querySelectorAll(".blog-card");
  }

  updateCardWidth() {
    this.cardWidth = this.originalCards[0].offsetWidth;
  }

  initDots() {
    const dotsCount = this.totalOriginalCards;
    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.setAttribute("data-index", i);
      dot.addEventListener("click", () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
  }

  updateDots() {
    const dots = document.querySelectorAll(".dot");
    let displayIndex = this.currentIndex - 3;
    if (displayIndex < 0) displayIndex += this.totalOriginalCards;
    if (displayIndex >= this.totalOriginalCards)
      displayIndex -= this.totalOriginalCards;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === displayIndex);
    });
  }

  next() {
    this.currentIndex++;
    this.scrollToSlide(true);
  }

  prev() {
    this.currentIndex--;
    this.scrollToSlide(true);
  }

  scrollToSlide(smooth = true) {
    const scrollPosition = this.currentIndex * (this.cardWidth + this.gap);
    if (smooth) {
      this.wrapper.style.scrollBehavior = "smooth";
    } else {
      this.wrapper.style.scrollBehavior = "auto";
    }
    this.wrapper.scrollLeft = scrollPosition;
    this.updateDots();

    if (this.currentIndex >= this.totalOriginalCards + 3) {
      setTimeout(() => {
        this.currentIndex = 3;
        this.wrapper.style.scrollBehavior = "auto";
        const scrollPosition = this.currentIndex * (this.cardWidth + this.gap);
        this.wrapper.scrollLeft = scrollPosition;
      }, 300);
    } else if (this.currentIndex < 0) {
      setTimeout(() => {
        this.currentIndex = this.totalOriginalCards;
        this.wrapper.style.scrollBehavior = "auto";
        const scrollPosition = this.currentIndex * (this.cardWidth + this.gap);
        this.wrapper.scrollLeft = scrollPosition;
      }, 300);
    }
  }

  goToSlide(index) {
    this.currentIndex = index + 3;
    this.scrollToSlide(true);
    this.resetAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(
      () => this.next(),
      this.autoScrollDelay
    );
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  resetAutoScroll() {
    this.stopAutoScroll();
    this.startAutoScroll();
  }

  attachEventListeners() {
    this.nextBtn.addEventListener("click", () => {
      this.next();
      this.resetAutoScroll();
    });
    this.prevBtn.addEventListener("click", () => {
      this.prev();
      this.resetAutoScroll();
    });
    this.wrapper.addEventListener("mouseenter", () => this.stopAutoScroll());
    this.wrapper.addEventListener("mouseleave", () => this.startAutoScroll());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Populate blog cards first
  populateBlogCards();

  // Then initialize your existing Carousel class from script.js
  // The Carousel class will handle all the scrolling logic
  new Carousel();
});

function populateBlogCards() {
  const carouselWrapper = document.getElementById("carouselWrapper");

  if (!carouselWrapper || !window.blogsData) {
    console.error("Carousel wrapper or blog data not found");
    return;
  }

  const currentLang = localStorage.getItem("language") || "en";

  // Clear existing placeholder cards
  carouselWrapper.innerHTML = "";

  // Create blog cards from data
  window.blogsData.forEach((blog) => {
    const card = createBlogCard(blog, currentLang);
    carouselWrapper.appendChild(card);
  });
}

function createBlogCard(blog, lang) {
  const card = document.createElement("div");
  card.className = "blog-card";

  const title = lang === "km" ? blog.titleKm : blog.titleEn;
  const preview = lang === "km" ? blog.previewKm : blog.previewEn;
  const category = lang === "km" ? blog.categoryKm : blog.category;
  const readMoreText = lang === "km" ? "អានបន្ថែម →" : "Read More →";

  card.innerHTML = `
    <div class="blog-image">
      <img
        src="${blog.image || "/placeholder.svg?height=300&width=400"}"
        alt="${title}"
      />
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

// // Update blog cards when language changes
// function updateBlogCardsLanguage() {
//   const currentLang = localStorage.getItem("language") || "en";

//   // Update only the original cards (not clones created by Carousel class)
//   document.querySelectorAll(".blog-card").forEach((card, index) => {
//     // Get the blog data for this card
//     const blogIndex = index % window.blogsData.length;
//     const blog = window.blogsData[blogIndex];

//     if (!blog) return;

//     const title = card.querySelector("h3");
//     const preview = card.querySelector("p");
//     const category = card.querySelector(".blog-category");
//     const readMoreLink = card.querySelector(".blog-link");

//     if (title) {
//       title.textContent = currentLang === "km" ? blog.titleKm : blog.titleEn;
//       title.setAttribute("data-en", blog.titleEn);
//       title.setAttribute("data-km", blog.titleKm);
//     }
//     if (preview) {
//       preview.textContent =
//         currentLang === "km" ? blog.previewKm : blog.previewEn;
//       preview.setAttribute("data-en", blog.previewEn);
//       preview.setAttribute("data-km", blog.previewKm);
//     }
//     if (category) {
//       category.textContent =
//         currentLang === "km" ? blog.categoryKm : blog.category;
//       category.setAttribute("data-en", blog.category);
//       category.setAttribute("data-km", blog.categoryKm);
//     }
//     if (readMoreLink) {
//       readMoreLink.textContent =
//         currentLang === "km" ? "អានបន្ថែម →" : "Read More →";
//       readMoreLink.setAttribute("data-en", "Read More →");
//       readMoreLink.setAttribute("data-km", "អានបន្ថែម →");
//     }
//   });
// }

// Listen for language change events
// document.addEventListener("languageChanged", updateBlogCardsLanguage);
