// FAQ Data Structure
const faqData = [
  {
    id: 1,
    category: "seed",
    question: {
      en: "Q1: In what year was KsSeed established?",
      km: "សំណួរ 1: តើក្រុមហ៊ុនខេ អេស​ សុីដ បានបង្កើតឡើងនៅឆ្នាំណា?",
    },
    answer: {
      en: "We began producing trial seeds in 2018 and were officially registered in 2020.",
      km: "យើងបានផលិតគ្រាប់ពូជសាកល្បងនៅឆ្នាំ២០១៨ និងបានចុះបញ្ជីនៅឆ្នាំ២០២០។",
    },
  },
  {
    id: 2,
    category: "seed",
    question: {
      en: "Q2: In which season is it best to plant KsSeed vegetable seeds?",
      km: "សំណួរ 2: តើគ្រាប់ពូជបន្លែរបស់ក្រុមហ៊ុនខេ អេស សុីដ អាចដាំបាននៅរដូវណាល្អ?",
    },
    answer: {
      en: "KsSeed pays close attention to all our seeds to ensure they are climate-resilient and easy to grow in Cambodia. Every KsSeed variety undergoes rigorous testing, ensuring that all our products meet high-quality standards.",
      km: "ក្រុមហ៊ុនខេ អេស​ សុីដ បានយកចិត្តទុកដាក់ទៅលើគ្រាប់ពូជទាំងអស់ដែលវាអាចធន់ទៅនិងអាកាសធាតុ ពោលគឺងាយស្រួលដាំដុះក្នុងស្រុកខ្មែរ។​ ហើយគ្រប់គ្រាប់ពូជរបស់ក្រុមហ៊ុនខេ អេស សុីដទាំងអស់គឺត្រូវបានឆ្លងកាត់ការតេស្តយ៉ាងច្បាស់លាស់។ រាល់គ្រាប់់ពូជរបស់ក្រុមហ៊ុនខេ​ អេស សុីដជាគ្រាប់ពូជដែលមានលក្ខណះស្ដង់ដារ។",
    },
  },
  {
    id: 3,
    category: "storage",
    question: {
      en: "Q3: What types of seeds does KsSeed offer?",
      km: "សំណួរ 3: តើក្រុមហ៊ុនខេ អេស សុីដ​ មានគ្រាប់ពូជអ្វីខ្លះ?",
    },
    answer: {
      en: "Over the past three years, KsSeed has built a strong reputation for developing vegetable seeds that meet market demands. We are currently researching and developing 75 seed varieties, all of which are specifically selected to meet the actual market needs in Cambodia.",
      km: "ឆ្លងកាត់រយះពេល៣ឆ្នាំតាមរយះកេរ្តិ៍ឈ្មោះខេ អេស​ សុីដ ក្នុងការអភិវឌ្ឍន៍គ្រាប់ពូជបន្លែនិងបំពេញតម្រូវការទីផ្សារខេ អេស​ សុីដ បាននិងកំពុងស្រាវជ្រាវនិងអភិវឌ្ឍន៍ ៧៥គ្រាប់ពូជដែលសុទ្ធសឹងតែជាពូជមានតម្រូវការនៅលើទីផ្សារ ក្នុងប្រទេសកម្ពុជាជាក់ស្ដែង។",
    },
  },
  {
    id: 4,
    category: "storage",
    question: {
      en: "Q4: How long do KsSEED seeds remain viable?",
      km: "សំណួរ 4: តើគ្រាប់ពូជ KsSEED នៅតែអាចប្រើបានរហូតដល់ពេលណា?",
    },
    answer: {
      en: "When stored properly in cool, dry conditions: Vegetable seeds (tomato, cucumber) - 3-4 years; Rice seeds - 1-2 years; Corn seeds - 2-3 years. Always check the packaging date and perform a simple germination test if unsure about seed viability.",
      km: "នៅពេលដែលផ្ទុកបានត្រឹមត្រូវនៅក្នុងលក្ខខណ្ឌត្រជាក់ ស្ងួត៖ គ្រាប់ពូជបន្លែ (ត្រសក់ ត្រសក់) - 3-4 ឆ្នាំ; គ្រាប់ពូជអង្ករ - 1-2 ឆ្នាំ; គ្រាប់ពូជពោត - 2-3 ឆ្នាំ។ តែងតែពិនិត្យមើលកាលបរិច្ឆេទវេចខ្ចប់ និងអនុវត្តតេស្តដុះសាមញ្ញ ប្រសិនបើមិនប្រាកដអំពីភាពអាចប្រើប្រាស់គ្រាប់ពូជ។",
    },
  },
  {
    id: 5,
    category: "growing",
    question: {
      en: "Q5: What is the best planting time for vegetables in Cambodia?",
      km: "សំណួរ 5: តើពេលណាជាពេលវេលាដាំដុះបន្លែដ៏ល្អបំផុតនៅកម្ពុជា?",
    },
    answer: {
      en: "For most vegetables: Cool season (Nov-Feb): Lettuce, cabbage, broccoli, carrots. Hot season (Mar-May): Tomatoes, cucumbers, eggplants, peppers. Rainy season (Jun-Oct): Leafy greens, morning glory, yardlong beans. Avoid planting during peak rainy periods to prevent waterlogging.",
      km: "សម្រាប់បន្លែភាគច្រើន៖ រដូវត្រជាក់ (វិច្ឆិកា-កុម្ភៈ)៖ សាឡាត ស្ពៃក្តោប ប្រ៊ូកូលី ការ៉ុត។ រដូវក្តៅ (មីនា-ឧសភា)៖ ប៉េងប៉ោះ ត្រសក់ ត្រប់ ម្ទេស។ រដូវភ្លៀង (មិថុនា-តុលា)៖ បន្លែស្លឹក ត្រកួន សណ្តែកវែង។ ជៀសវាងការដាំក្នុងកំឡុងពេលភ្លៀងខ្លាំង ដើម្បីការពារការលិចលង់ទឹក។",
    },
  },
  {
    id: 6,
    category: "growing",
    question: {
      en: "Q6: How much water do vegetable seeds need in Cambodia's climate?",
      km: "សំណួរ 6: តើគ្រាប់ពូជបន្លែត្រូវការទឹកប៉ុន្មាននៅក្នុងអាកាសធាតុកម្ពុជា?",
    },
    answer: {
      en: "Water requirements vary by crop, but general guidelines: Seedling stage: Light watering twice daily. Growing stage: 1-2 cm of water every 2-3 days. Mature plants: Deep watering every 3-4 days. Always water early morning or late afternoon to minimize evaporation. Use mulch to retain soil moisture.",
      km: "តម្រូវការទឹកខុសៗគ្នាតាមដំណាំ ប៉ុន្តែគោលការណ៍ណែនាំទូទៅ៖ ដំណាក់កាលដំបូង៖ ស្រោចទឹកស្រាលពីរដងក្នុងមួយថ្ងៃ។ ដំណាក់កាលដុះ៖ 1-2 សង់ទីម៉ែត្រទឹករៀងរាល់ 2-3 ថ្ងៃម្តង។ ដំណាំពេញវ័យ៖ ស្រោចទឹកជ្រៅរៀងរាល់ 3-4 ថ្ងៃម្តង។ តែងតែស្រោចទឹកពេលព្រឹកព្រលាន ឬពេលល្ងាចដើម្បីកាត់បន្ថយការហួត។ ប្រើចំណីសត្វដើម្បីរក្សាសំណើមដី។",
    },
  },
  {
    id: 7,
    category: "support",
    question: {
      en: "Q7: How can I get technical support for farming problems?",
      km: "សំណួរ 7: តើខ្ញុំអាចទទួលបានជំនួយបច្ចេកទេfrancès សម្រាប់បញ្ហាកសិកម្មយ៉ាងដូចម្តេច?",
    },
    answer: {
      en: "Contact your nearest KsSEED dealer who can connect you with our agricultural experts. We also offer: Field visits for major issues, WhatsApp support group for quick questions, Monthly training workshops at dealer locations, and a hotline for urgent problems: +855 93 755 638",
      km: "ទាក់ទងអ្នកចែកចាយ KsSEED ជិតបំផុតរបស់អ្នក ដែលអាចភ្ជាប់អ្នកជាមួយអ្នកជំនាញកសិកម្មរបស់យើង។ យើងក៏ផ្តល់នូវ៖ ការមកជួបផ្ទាល់សម្រាប់បញ្ហាធំៗ ក្រុមជំនួយ WhatsApp សម្រាប់សំណួररហ័ស សិក្ខាសាលាបណ្តុះបណ្តាលប្រចាំខែនៅទីតាំងអ្នកចែកចាយ និងបន្ទាត់ទូរស័ព្ទសម្រាប់បញ្ហាបន្ទាន់៖ +855 93 755 638",
    },
  },
  {
    id: 8,
    category: "ordering",
    question: {
      en: "Q8: How can I purchase KsSEED products?",
      km: "សំណួរ 8: តើខ្ញុំអាចទិញផលិតផល KsSEED បានយ៉ាងដូចម្តេច?",
    },
    answer: {
      en: "KsSEED products are available through our authorized dealer network across Cambodia. We do not sell directly online. Visit our 'Products' page to find dealers in your province, or call our hotline for dealer information. All dealers are trained to provide proper seed selection advice.",
      km: "ផលិតផល KsSEED មានលក់តាមរយៈបណ្តាញអ្នកចែកចាយដែលទទួលស្គាល់របស់យើងនៅទូទាំងកម្ពុជា។ យើងមិនលក់តាមអ៊ីនធឺណិតដោយផ្ទាល់ទេ។ សូមទស្សនាទំព័រ 'ផលិតផល' របស់យើងដើម្បីស្វែងរកអ្នកចែកចាយនៅក្នុងខេត្តរបស់អ្នក ឬហៅទូរស័ព្ទបន្ទាត់បន្ទាន់របស់យើងសម្រាប់ព័ត៌មានអ្នកចែកចាយ។ អ្នកចែកចាយទាំងអស់ត្រូវបានបណ្តុះបណ្តាលដើម្បីផ្តល់ដំបូន្មានអំពីការជ្រើសរើសគ្រាប់ពូជត្រឹមត្រូវ។",
    },
  },
  {
    id: 9,
    category: "quality",
    question: {
      en: "Q9: What quality certifications does KsSEED have?",
      km: "សំណួរ 9: តើ KsSEED មានវិញ្ញាបនបត្រគុណភាពអ្វីខ្លះ?",
    },
    answer: {
      en: "KsSEED follows strict quality control protocols: All seeds are tested for germination rate (minimum 85% for vegetables, 90% for rice), Certified free from major seed-borne diseases, Packaged in moisture-resistant materials, Production follows Good Agricultural Practices (GAP), Regular laboratory testing at each batch.",
      km: "KsSEED ធ្វើតាមពិធីការត្រួតពិនិត្យគុណភាពយ៉ាងតឹងរ៉ឹង៖ គ្រាប់ពូជទាំងអស់ត្រូវបានសាកល្បងសម្រាប់អត្រាដុះ (អប្បបរមា 85% សម្រាប់បន្លែ 90% សម្រាប់អង្ករ) បានបញ្ជាក់ថាគ្មានជំងឺធ្ងន់ធ្ងរដែលមកពីគ្រាប់ពូជ វេចខ្ចប់ក្នុងសម្ភារៈធន់នឹងសំណើម ការផលិតធ្វើតាមអនុសាសន៍កសិកម្មល្អ (GAP) ការធ្វើតេស្តមន្ទីរពិសោធន៍ប្រចាំរាល់ដំណាំ។",
    },
  },
  {
    id: 10,
    category: "quality",
    question: {
      en: "Q10: What makes KsSEED seeds better suited for Cambodian conditions?",
      km: "សំណួរ 10: តើអ្វីដែលធ្វើឱ្យគ្រាប់ពូជ KsSEED សមស្របបន្ថែមទៀតសម្រាប់លក្ខខណ្ឌកម្ពុជា?",
    },
    answer: {
      en: "Our seeds are specifically developed and tested for Cambodian conditions: Heat-tolerant varieties for hot seasons, Disease-resistant strains for common local pathogens, Optimized for Cambodian soil types, Field-tested across multiple provinces for 3+ years, Developed with input from Cambodian farmers and agricultural experts.",
      km: "គ្រាប់ពូជរបស់យើងត្រូវបានអភិវឌ្ឍ និងសាកល្បងជាពិសេសសម្រាប់លក្ខខណ្ឌកម្ពុជា៖ ប្រភេទដែលធន់នឹងកំដៅសម្រាប់រដូវក្តៅ ប្រភេទធន់នឹងជំងឺសម្រាប់មេរោគក្នុងស្រុកទូទៅ បង្កើនប្រសិទ្ធភាពសម្រាប់ប្រភេទដីកម្ពុជា បានសាកល្បងនៅក្នុងស្រែចំការនៅទូទាំងខេត្តជាច្រើនអស់ជាង 3 ឆ្នាំ អភិវឌ្ឍឡើងជាមួយនឹងការបញ្ចូលពីកសិករ និងអ្នកជំនាញកសិកម្មកម្ពុជា។",
    },
  },
  {
    id: 11,
    category: "seed",
    question: {
      en: "Q11: What is the germination rate of KsSEED seeds?",
      km: "សំណួរ 11: តើអត្រាដុះនៃគ្រាប់ពូជ KsSEED គឺជាអ្វី?",
    },
    answer: {
      en: "Our seeds undergo rigorous testing to ensure high germination rates: Vegetable seeds minimum 85%, Rice seeds minimum 90%, Corn seeds minimum 85%. All seeds are tested before packaging, and we provide germination test instructions with each purchase.",
      km: "គ្រាប់ពូជរបស់យើងត្រូវបានសាកល្បងយ៉ាងតឹងរ៉ឹងដើម្បីធានាបាននូវអត្រាដុះខ្ពស់៖ គ្រាប់ពូជបន្លែអប្បបរមា 85% គ្រាប់ពូជអង្ករអប្បបរមា 90% គ្រាប់ពូជពោតអប្បបរមា 85%។ គ្រាប់ពូជទាំងអស់ត្រូវបានសាកល្បងមុនពេលវេចខ្ចប់ ហើយយើងផ្តល់នូវការណែនាំសាកល្បងដុះជាមួយនឹងការទិញគ្រប់ពេល។",
    },
  },
  {
    id: 12,
    category: "storage",
    question: {
      en: "Q12: What should I do if my seeds get wet or damaged?",
      km: "សំណួរ 12: តើខ្ញុំគួរធ្វើអ្វីប្រសិនបើគ្រាប់ពូជរបស់ខ្ញុំទទួលទឹក ឬខូច?",
    },
    answer: {
      en: "If seeds get wet: 1) Spread them out on a dry paper towel immediately. 2) Place in a well-ventilated area (not in direct sun). 3) Once completely dry, store in a new airtight container with silica gel. If mold appears, do not use the seeds. Contact your dealer for replacement if damaged during storage.",
      km: "ប្រសិនបើគ្រាប់ពូជទទួលទឹក៖ ១) ពត់វាលើក្រដាសសម្រាប់ស្ងួតភ្លាមៗ។ ២) ដាក់ក្នុងកន្លែងដែលមានខ្យល់ចេញចូលល្អ (មិនមែននៅក្រោមពន្លឺព្រះអាទិត្យដោយផ្ទាល់ទេ)។ ៣) នៅពេលស្ងួតយ៉ាងទូលំទូលាយ ផ្ទុកក្នុងធុងថ្មីដែលផ្សះខ្យល់បានជាមួយស៊ីលីកាហ្សែល។ ប្រសិនបើមានផ្សិតបង្ហាញឡើង កុំប្រើគ្រាប់ពូជ។ ទាក់ទងអ្នកចែកចាយរបស់អ្នកសម្រាប់ការជំនួសប្រសិនបើខូចកំឡុងពេលផ្ទុក។",
    },
  },
];

// // Language Switching System
// let currentLang = "en";
// const langSwitch = document.getElementById("langSwitch");
// const langOptions = document.querySelectorAll(".lang-option");

// // Initialize language system
// function initializeLanguageSystem() {
//   // Check if language is saved in localStorage
//   const savedLang = localStorage.getItem("ksseed_language");
//   if (savedLang) {
//     currentLang = savedLang;
//     updateLanguage(savedLang);
//     updateFont(savedLang);

//     // Update active state
//     langOptions.forEach((opt) => {
//       if (opt.getAttribute("data-lang") === savedLang) {
//         opt.classList.add("active");
//       } else {
//         opt.classList.remove("active");
//       }
//     });
//   }

//   // Add click events to language options
//   langOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       const lang = option.getAttribute("data-lang");
//       if (lang !== currentLang) {
//         currentLang = lang;
//         updateLanguage(lang);
//         updateFont(lang);

//         // Save to localStorage
//         localStorage.setItem("ksseed_language", lang);

//         // Update active state
//         langOptions.forEach((opt) => opt.classList.remove("active"));
//         option.classList.add("active");

//         // Update FAQ content
//         updateLanguageForFAQ();
//       }
//     });
//   });
// }

// function updateLanguage(lang) {
//   // Update all elements with data-en and data-km attributes
//   document.querySelectorAll("[data-en], [data-km]").forEach((element) => {
//     const text = element.getAttribute(`data-${lang}`);
//     if (text !== null && text !== undefined && text.trim() !== "") {
//       if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
//         element.placeholder = text;
//       } else {
//         element.textContent = text;
//       }
//     }
//   });

//   // Update page title
//   const title = document.querySelector("title");
//   const titleText = title.getAttribute(`data-${lang}`);
//   if (titleText) {
//     title.textContent = titleText;
//   }
// }

// function updateFont(lang) {
//   const body = document.body;

//   if (lang === "km") {
//     body.classList.add("khmer");
//     body.classList.remove("english");
//   } else {
//     body.classList.add("english");
//     body.classList.remove("khmer");
//   }
// }

// FAQ Main Functionality
function initializeFAQ() {
  const faqContainer = document.getElementById("faqContainer");

  if (!faqContainer) {
    console.error("FAQ container not found");
    return;
  }

  // Clear existing content
  faqContainer.innerHTML = "";

  // Create a simple container for all questions (no categories)
  const allQuestionsContainer = document.createElement("div");
  allQuestionsContainer.className = "faq-all-questions";

  // Add all FAQ items directly
  faqData.forEach((item) => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";
    faqItem.dataset.id = item.id;

    const faqHTML = `
            <div class="faq-question">
                <span data-en="${item.question.en}" data-km="${item.question.km}">${item.question.en}</span>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p data-en="${item.answer.en}" data-km="${item.answer.km}">${item.answer.en}</p>
            </div>
          `;

    const itemContainer = document.createElement("div");
    itemContainer.innerHTML = faqHTML;
    faqItem.appendChild(itemContainer.firstElementChild);
    faqItem.appendChild(itemContainer.lastElementChild);

    allQuestionsContainer.appendChild(faqItem);
  });

  faqContainer.appendChild(allQuestionsContainer);

  // Initialize FAQ toggle functionality
  initializeFAQToggles();

  //   // Apply current language to FAQ
  //   updateLanguageForFAQ();
}

// FAQ Toggle Functionality - Individual toggle (close others when opening one)
function initializeFAQToggles() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.closest(".faq-item");
      const answer = faqItem.querySelector(".faq-answer");
      const toggle = question.querySelector(".faq-toggle");

      // Check if the clicked item is already active
      const isAlreadyActive = faqItem.classList.contains("active");

      // Close all FAQ items first
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
          item.querySelector(".faq-answer").classList.remove("show");
          item.querySelector(".faq-toggle").textContent = "+";
        }
      });

      // If it wasn't already active, open it
      if (!isAlreadyActive) {
        faqItem.classList.add("active");
        answer.classList.add("show");
        toggle.textContent = "−";
      }
      // If it was already active, close it (this happens when clicking the same item)
      else {
        faqItem.classList.remove("active");
        answer.classList.remove("show");
        toggle.textContent = "+";
      }
    });
  });
}

// // Update FAQ content when language changes
// function updateLanguageForFAQ() {
//   // Update FAQ questions
//   document
//     .querySelectorAll(".faq-question span:first-child")
//     .forEach((element) => {
//       if (element.dataset.en && element.dataset.km) {
//         element.textContent = element.dataset[currentLang];
//       }
//     });

//   // Update FAQ answers
//   document.querySelectorAll(".faq-answer p").forEach((element) => {
//     if (element.dataset.en && element.dataset.km) {
//       element.textContent = element.dataset[currentLang];
//     }
//   });
// }

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // initializeLanguageSystem();
  initializeFAQ();
});
