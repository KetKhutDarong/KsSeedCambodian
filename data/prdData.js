const products = {
  cucumber: {
    name: { en: "Cucumber", km: "ត្រសក់" },
    desc: {
      en: "Cucumber variety that is disease-resistant, provides high yield, and is good for the tropical climate.",
      km: "ពូជត្រសក់ ធន់នឹងជម្ងឺ ផ្តល់ទិន្នផលខ្ពស់ និងល្អសម្រាប់អាកាសធាតុត្រូពិច។​",
    },
    imgs: [
      {
        src: "image/cucumber/Picture1.jpg",
        title: {
          en: "F1 cucumber,Neang Kangri variety",
          km: "ត្រសក់ទ្រើង F1 ពូជនាងកង្រី",
        },
        info: {
          en: "A high-yielding, disease-resistant variety that can be cultivated in all seasons.",
          km: "ជាប្រភេទពូជដែលទទួលបានទិន្នផលខ្ពស់​​​​ ធន់និងអាកាសធាតុ ធន់និងជម្ងឺ អាចដាំដុះគ្រប់រដូវកាល។",
        },
        weight: "2.5 grams/pkt",
        views: 521,
        // fileId : '1WZrRHD-TtDbEp1G_lqF6S1fejQ8K4QK6',
        // pdfUrl : "https://drive.google.com/uc?export=download&id=1WZrRHD-TtDbEp1G_lqF6S1fejQ8K4QK6",
        pdfUrl:"InternCV.pdf",
        gallery: [
          {
            src: "image/cucumber/cucomber8.jpg",
            label: { en: "Front View", km: "ទិដ្ឋភាពខាងមុខ" },
          },
          {
            src: "image/cucumber/cucomber2.jpg",
            label: { en: "Cross Section", km: "ផ្នែកកាត់" },
          },
          {
            src: "image/cucumber/cucomber3.jpg",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 35 to 40 days after direct planting.",
            "Fruit Color: Light green, striped, and dark at the head.",
            "Fruit Shape: Cylindrical shape ($58-67g/fruit).",
            "Fruit Size: Length $16-18 cm x thickness 2.5-3.2 cm.",
            "Flower Characteristics: 70% female flowers.",
            "Growth Characteristics: Many branches, strong climbing/vining.",
            "Yield: 3-3.8kg per plant.",
            "Growing Season: All year round.",
            "The light green and dark green color of the fruit head will vary depending on the region and season.",
          ],
          km: [
            "អាយុប្រមូលផល៖35 ទៅ 40ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតងខ្ចី ឆ្នូត និងក្រម៉ៅក្បាល",
            "ទំរង់ផ្លែ៖រាងជាស៊ីឡាង (58-67g/ផ្លែ)",
            "ទំហំផ្ទៃ៖ប16-18cm x ម,ក2,5-3,2cm",
            "លក្ខណៈផ្កា៖ផ្កាញី 70%",
            "លក្ខណៈលូតលាស់៖មែកច្រើន តោងទ្រើងខ្លាំង",
            "ទិន្នផល៖3-3.8kgក្នុងមួយដើម",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ",
            "បៃតងខ្ចី និងបៃតងចាស់នៃក្បាលផ្លែ នឹងប្រែប្រួលទៅតាម តំបន់និងរដូវកាល។",
          ],
        },
        planting: {
          distance: {
            en: "5.0 m bed distance, 2.5 m double row per bed",
            km: "ចម្ងាយគ្រែ ៥.០ ម៉ែត្រ ជួរទ្វេ ២.៥ ម៉ែត្រក្នុងមួយគ្រែ",
          },
          plantDistance: {
            en: "0.6 - 0.7 m between plants",
            km: "០.៦ - ០.៧ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "800 - 650 plants/1000m²",
            km: "៨០០ - ៦៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The land must be well-prepared by raking and collecting all weeds and various debris out of the field. The land should be plowed deeply, allowed to dry several times, and then harrowed repeatedly to break the soil down finely. Next, raise the soil into beds (ridges) with a height of 20-25 cm and a width of 120-150 cm. Rake the soil to ensure a level surface on each bed, and then dig planting holes in the center of the bed, 10-15 cm deep, with a spacing of 70 cm from one hole to the next.",
          ],
          km: [
            "គេត្រូវរៀបចំដីឱ្យបានល្អ ដោយរាស់ប្រមូលយកស្មៅ កាកសំណល់ផ្សេងៗចេញពីចំការ ភ្ជួរដីឱ្យជ្រៅហាលដីឱ្យស្ងួតបានច្រើនលើក រាស់បំបែកដី ឱ្យល្អិត និង ច្រើនសារហើយលើកជារង ដែលមានកំពស់២០-២៥ស.ម ទទឹងរង ១២០-១៥០សម កៀរដីឱ្យ ស្មើលើរងនិមួយៗបន្ទាប់មកកាប់ជា រណ្តៅចំកណ្តាលរងជំរៅ១០-១៥សម ចន្លោះពីរណ្តៅមួយទៅមួយ៧០សម ។",
          ],
        },
        cultivation: {
          en: [
            "Take the cucumber seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 2 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "Take the tray that has been filled with the growing medium and punch holes in it.",
            "Place the seeds taken from the insulated container into the nursery tray, one seed per hole, with the root sprout facing downward.",
            "Sprinkle the growing medium on top, then water thoroughly, and place the tray inside the nursery shed.",
          ],
          km: [
            "យកគ្រាប់ត្រសក់ ដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨-៥០ អង្សារ ត្រាំវារយៈពេល២ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "យកថាសដែលបានដាក់ល្បាយដីបណ្តុះរួចចោះរន្ធ",
            "គ្រាប់ដែលយកចេញពីធុងស្ងោរ ដាក់ក្នុងថាសបណ្តុះមួយរន្ធមួយគ្រាប់ ដោយដាក់ពន្លកឬសចុះក្រោម",
            "រោយល្បាយដីពីលើ រួចស្រោចទឹកអោយជោគ បន្ទាប់មកដាក់វាក្នុងរោងបណ្តុះ",
          ],
        },
        irrigation: {
          en: [
            "Providing water to the crop is a source for converting and breaking down nutrients, which is crucial, but one must respect its growth stage. Initially, it requires average moisture until the vines elongate and have 2-3 leaves. In the case of soil in highland areas lacking moisture, but alluvial soil along the river is rich with underground water sources, the melon/cucumber can grow even if it is watered only 3-4 days after planting. From the time the melon/cucumber starts flowering until harvest, it requires excellent moisture to support reproduction. During this stage, water must be provided every 7-10 days, depending on the soil type, climate, and the watering method, such as misting water from above or feeding it through the rows. It is a crop that is tolerant of drought conditions and also tolerant of an excessive moisture rate.",
          ],
          km: [
            "ការផ្តល់ទឹកដល់ដំណាំ វាជាប្រភពនៃការបំលែង និងបំបែកធាតុនៃសារធាតុ ចិញ្ចឹមយ៉ាងសំខាន់ប៉ុន្តែត្រូវគោរពទៅវគ្គលូតលាស់របស់វា ដំបូងវាត្រូវការ សំណើមជាមធ្យម រហូតដល់ពន្លូតទងមានសន្លឹក ២-៣ សន្លឹក ក្នុង ករណីដី តាមតំបន់ខ្ពង់រាបខ្វះ សំណើម តែដីល្បាប់មាត់ទន្លេ សំបូរដោយប្រភព ទឹក ក្រោមដី ត្រសក់ស្រូវអាចលូតលាស់បានគេស្រោចទឹកតែ ៣-៤ថ្ងៃ ក្រោយពី ដាំតែប៉ុណ្ណោះ។ ចាប់ពីត្រសក់ចេញផ្ការហូតដល់ប្រមូលផលវាទាមទារនូវសំណើមយ៉ាងល្អសំរាប់ជំនួយដល់ការបន្តពូជ ។នៅក្នុងវគ្គនេះដែរត្រូវផ្តល់ទឹកចំនួន ៧-១០ ថ្ងៃ ម្តង ទៅតាមប្រភេទដី អាកាសធាតុ និងវិធីសាស្ត្រនៃការផ្តល់ដូចជាបាញ់ទឹកផ្សើម ពីលើ ឬបញ្ចូលទៅ តាមចន្លោះជួរ ។ វាជាដំណាំដែលធន់ទ្រាំទៅនឹងភាពរាំង ស្ងួត ហើយធន់ទ្រាំទៅ នឹងអត្រានៃការកើនលើសសំណើមផងដែរ។",
          ],
        },
      },
      {
        src: "image/cucumber/cucomber4.webp",
        title: {
          en: "F1 cucumber, Yuan variety",
          km: "ត្រសក់ទ្រើង F1 ពូជយូអាន ",
        },
        info: {
          en: "Harvest age 30-35 days. Yield 3-3.5 kg per tree.",
          km: "អាយុប្រមូលផល 30-35 ថ្ងៃ។ ទិន្នផល 3-3.5 គីឡូក្នុង១ដើម",
        },
        weight: "1.5 grams/pkt",
        views: 445,
        // pdfUrl:"example.pdf",
        gallery: [
          {
            src: "image/cucumber/cucomber5.jpg",
            label: { en: "Bunch", km: "ចង" },
          },
          {
            src: "image/cucumber/cucomber6.jpg",
            label: { en: "Sliced", km: "កាត់" },
          },
          {
            src: "image/cucumber/Picture3.png",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 35 to 40 days after direct planting.",
            "Fruit Color: Light green, striped, and dark at the head.",
            "Fruit Shape: Cylindrical shape ($58-67g/fruit).",
            "Fruit Size: Length $16-18 cm x thickness 2.5-3.2 cm.",
            "Flower Characteristics: 70% female flowers.",
            "Growth Characteristics: Many branches, strong climbing/vining.",
            "Yield: 3-3.8kg per plant.",
            "Growing Season: All year round.",
            "The light green and dark green color of the fruit head will vary depending on the region and season.",
          ],
          km: [
            "អាយុប្រមូលផល៖35 ទៅ 40ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតងខ្ចី ឆ្នូត និងក្រម៉ៅក្បាល",
            "ទំរង់ផ្លែ៖រាងជាស៊ីឡាង (58-67g/ផ្លែ)",
            "ទំហំផ្ទៃ៖ប16-18cm x ម,ក2,5-3,2cm",
            "លក្ខណៈផ្កា៖ផ្កាញី 70%",
            "លក្ខណៈលូតលាស់៖មែកច្រើន តោងទ្រើងខ្លាំង",
            "ទិន្នផល៖3-3.8kgក្នុងមួយដើម",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ",
            "បៃតងខ្ចី និងបៃតងចាស់នៃក្បាលផ្លែ នឹងប្រែប្រួលទៅតាម តំបន់និងរដូវកាល។",
          ],
        },
        planting: {
          distance: {
            en: "5.0 m bed distance, 2.5 m double row per bed",
            km: "ចម្ងាយគ្រែ ៥.០ ម៉ែត្រ ជួរទ្វេ ២.៥ ម៉ែត្រក្នុងមួយគ្រែ",
          },
          plantDistance: {
            en: "0.6 - 0.7 m between plants",
            km: "០.៦ - ០.៧ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "800 - 650 plants/1000m²",
            km: "៨០០ - ៦៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The land must be well-prepared by raking and collecting all weeds and various debris out of the field. The land should be plowed deeply, allowed to dry several times, and then harrowed repeatedly to break the soil down finely. Next, raise the soil into beds (ridges) with a height of 20-25 cm and a width of 120-150 cm. Rake the soil to ensure a level surface on each bed, and then dig planting holes in the center of the bed, 10-15 cm deep, with a spacing of 70 cm from one hole to the next.",
          ],
          km: [
            "គេត្រូវរៀបចំដីឱ្យបានល្អ ដោយរាស់ប្រមូលយកស្មៅ កាកសំណល់ផ្សេងៗចេញពីចំការ ភ្ជួរដីឱ្យជ្រៅហាលដីឱ្យស្ងួតបានច្រើនលើក រាស់បំបែកដី ឱ្យល្អិត និង ច្រើនសារហើយលើកជារង ដែលមានកំពស់២០-២៥ស.ម ទទឹងរង ១២០-១៥០សម កៀរដីឱ្យ ស្មើលើរងនិមួយៗបន្ទាប់មកកាប់ជា រណ្តៅចំកណ្តាលរងជំរៅ១០-១៥សម ចន្លោះពីរណ្តៅមួយទៅមួយ៧០សម ។",
          ],
        },
        cultivation: {
          en: [
            "Take the cucumber seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 2 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "Take the tray that has been filled with the growing medium and punch holes in it.",
            "Place the seeds taken from the insulated container into the nursery tray, one seed per hole, with the root sprout facing downward.",
            "Sprinkle the growing medium on top, then water thoroughly, and place the tray inside the nursery shed.",
          ],
          km: [
            "យកគ្រាប់ត្រសក់ ដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨-៥០ អង្សារ ត្រាំវារយៈពេល២ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "យកថាសដែលបានដាក់ល្បាយដីបណ្តុះរួចចោះរន្ធ",
            "គ្រាប់ដែលយកចេញពីធុងស្ងោរ ដាក់ក្នុងថាសបណ្តុះមួយរន្ធមួយគ្រាប់ ដោយដាក់ពន្លកឬសចុះក្រោម",
            "រោយល្បាយដីពីលើ រួចស្រោចទឹកអោយជោគ បន្ទាប់មកដាក់វាក្នុងរោងបណ្តុះ",
          ],
        },
        irrigation: {
          en: [
            "Providing water to the crop is a source for converting and breaking down nutrients, which is crucial, but one must respect its growth stage. Initially, it requires average moisture until the vines elongate and have 2-3 leaves. In the case of soil in highland areas lacking moisture, but alluvial soil along the river is rich with underground water sources, the melon/cucumber can grow even if it is watered only 3-4 days after planting. From the time the melon/cucumber starts flowering until harvest, it requires excellent moisture to support reproduction. During this stage, water must be provided every 7-10 days, depending on the soil type, climate, and the watering method, such as misting water from above or feeding it through the rows. It is a crop that is tolerant of drought conditions and also tolerant of an excessive moisture rate.",
          ],
          km: [
            "ការផ្តល់ទឹកដល់ដំណាំ វាជាប្រភពនៃការបំលែង និងបំបែកធាតុនៃសារធាតុ ចិញ្ចឹមយ៉ាងសំខាន់ប៉ុន្តែត្រូវគោរពទៅវគ្គលូតលាស់របស់វា ដំបូងវាត្រូវការ សំណើមជាមធ្យម រហូតដល់ពន្លូតទងមានសន្លឹក ២-៣ សន្លឹក ក្នុង ករណីដី តាមតំបន់ខ្ពង់រាបខ្វះ សំណើម តែដីល្បាប់មាត់ទន្លេ សំបូរដោយប្រភព ទឹក ក្រោមដី ត្រសក់ស្រូវអាចលូតលាស់បានគេស្រោចទឹកតែ ៣-៤ថ្ងៃ ក្រោយពី ដាំតែប៉ុណ្ណោះ។ ចាប់ពីត្រសក់ចេញផ្ការហូតដល់ប្រមូលផលវាទាមទារនូវសំណើមយ៉ាងល្អសំរាប់ជំនួយដល់ការបន្តពូជ ។នៅក្នុងវគ្គនេះដែរត្រូវផ្តល់ទឹកចំនួន ៧-១០ ថ្ងៃ ម្តង ទៅតាមប្រភេទដី អាកាសធាតុ និងវិធីសាស្ត្រនៃការផ្តល់ដូចជាបាញ់ទឹកផ្សើម ពីលើ ឬបញ្ចូលទៅ តាមចន្លោះជួរ ។ វាជាដំណាំដែលធន់ទ្រាំទៅនឹងភាពរាំង ស្ងួត ហើយធន់ទ្រាំទៅ នឹងអត្រានៃការកើនលើសសំណើមផងដែរ។",
          ],
        },
      },
      {
        src: "image/cucumber/Picture5.png",
        title: {
          en: "F1 Cucumber, Jasmine variety",
          km: "ត្រសក់ទ្រើង F1 ពូជ ចាស្មីត",
        },
        info: {
          en: "Grows well all season and yields high.",
          km: "លូតលាស់បានល្អគ្រប់រដូវកាល នឹងទិន្នផលខ្ពស់។",
        },
        weight: "1.5 grams/pkt",
        views: 445,
        gallery: [
          {
            src: "image/cucumber/cucomber7.jpg",
            label: { en: "Bunch", km: "ចង" },
          },
          {
            src: "image/cucumber/cucomber8.jpg",
            label: { en: "Sliced", km: "កាត់" },
          },
          {
            src: "image/cucumber/photo_2025-10-27_10-26-29.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 35 to 40 days after direct planting.",
            "Fruit Color: Light green, striped, and dark at the head.",
            "Fruit Shape: Cylindrical shape ($58-67g/fruit).",
            "Fruit Size: Length $16-18 cm x thickness 2.5-3.2 cm.",
            "Flower Characteristics: 70% female flowers.",
            "Growth Characteristics: Many branches, strong climbing/vining.",
            "Yield: 3-3.8kg per plant.",
            "Growing Season: All year round.",
            "The light green and dark green color of the fruit head will vary depending on the region and season.",
          ],
          km: [
            "អាយុប្រមូលផល៖35 ទៅ 40ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតងខ្ចី ឆ្នូត និងក្រម៉ៅក្បាល",
            "ទំរង់ផ្លែ៖រាងជាស៊ីឡាង (58-67g/ផ្លែ)",
            "ទំហំផ្ទៃ៖ប16-18cm x ម,ក2,5-3,2cm",
            "លក្ខណៈផ្កា៖ផ្កាញី 70%",
            "លក្ខណៈលូតលាស់៖មែកច្រើន តោងទ្រើងខ្លាំង",
            "ទិន្នផល៖3-3.8kgក្នុងមួយដើម",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ",
            "បៃតងខ្ចី និងបៃតងចាស់នៃក្បាលផ្លែ នឹងប្រែប្រួលទៅតាម តំបន់និងរដូវកាល។",
          ],
        },
        planting: {
          distance: {
            en: "5.0 m bed distance, 2.5 m double row per bed",
            km: "ចម្ងាយគ្រែ ៥.០ ម៉ែត្រ ជួរទ្វេ ២.៥ ម៉ែត្រក្នុងមួយគ្រែ",
          },
          plantDistance: {
            en: "0.6 - 0.7 m between plants",
            km: "០.៦ - ០.៧ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "800 - 650 plants/1000m²",
            km: "៨០០ - ៦៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The land must be well-prepared by raking and collecting all weeds and various debris out of the field. The land should be plowed deeply, allowed to dry several times, and then harrowed repeatedly to break the soil down finely. Next, raise the soil into beds (ridges) with a height of 20-25 cm and a width of 120-150 cm. Rake the soil to ensure a level surface on each bed, and then dig planting holes in the center of the bed, 10-15 cm deep, with a spacing of 70 cm from one hole to the next.",
          ],
          km: [
            "គេត្រូវរៀបចំដីឱ្យបានល្អ ដោយរាស់ប្រមូលយកស្មៅ កាកសំណល់ផ្សេងៗចេញពីចំការ ភ្ជួរដីឱ្យជ្រៅហាលដីឱ្យស្ងួតបានច្រើនលើក រាស់បំបែកដី ឱ្យល្អិត និង ច្រើនសារហើយលើកជារង ដែលមានកំពស់២០-២៥ស.ម ទទឹងរង ១២០-១៥០សម កៀរដីឱ្យ ស្មើលើរងនិមួយៗបន្ទាប់មកកាប់ជា រណ្តៅចំកណ្តាលរងជំរៅ១០-១៥សម ចន្លោះពីរណ្តៅមួយទៅមួយ៧០សម ។",
          ],
        },
        cultivation: {
          en: [
            "Take the cucumber seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 2 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "Take the tray that has been filled with the growing medium and punch holes in it.",
            "Place the seeds taken from the insulated container into the nursery tray, one seed per hole, with the root sprout facing downward.",
            "Sprinkle the growing medium on top, then water thoroughly, and place the tray inside the nursery shed.",
          ],
          km: [
            "យកគ្រាប់ត្រសក់ ដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨-៥០ អង្សារ ត្រាំវារយៈពេល២ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "យកថាសដែលបានដាក់ល្បាយដីបណ្តុះរួចចោះរន្ធ",
            "គ្រាប់ដែលយកចេញពីធុងស្ងោរ ដាក់ក្នុងថាសបណ្តុះមួយរន្ធមួយគ្រាប់ ដោយដាក់ពន្លកឬសចុះក្រោម",
            "រោយល្បាយដីពីលើ រួចស្រោចទឹកអោយជោគ បន្ទាប់មកដាក់វាក្នុងរោងបណ្តុះ",
          ],
        },
        irrigation: {
          en: [
            "Providing water to the crop is a source for converting and breaking down nutrients, which is crucial, but one must respect its growth stage. Initially, it requires average moisture until the vines elongate and have 2-3 leaves. In the case of soil in highland areas lacking moisture, but alluvial soil along the river is rich with underground water sources, the melon/cucumber can grow even if it is watered only 3-4 days after planting. From the time the melon/cucumber starts flowering until harvest, it requires excellent moisture to support reproduction. During this stage, water must be provided every 7-10 days, depending on the soil type, climate, and the watering method, such as misting water from above or feeding it through the rows. It is a crop that is tolerant of drought conditions and also tolerant of an excessive moisture rate.",
          ],
          km: [
            "ការផ្តល់ទឹកដល់ដំណាំ វាជាប្រភពនៃការបំលែង និងបំបែកធាតុនៃសារធាតុ ចិញ្ចឹមយ៉ាងសំខាន់ប៉ុន្តែត្រូវគោរពទៅវគ្គលូតលាស់របស់វា ដំបូងវាត្រូវការ សំណើមជាមធ្យម រហូតដល់ពន្លូតទងមានសន្លឹក ២-៣ សន្លឹក ក្នុង ករណីដី តាមតំបន់ខ្ពង់រាបខ្វះ សំណើម តែដីល្បាប់មាត់ទន្លេ សំបូរដោយប្រភព ទឹក ក្រោមដី ត្រសក់ស្រូវអាចលូតលាស់បានគេស្រោចទឹកតែ ៣-៤ថ្ងៃ ក្រោយពី ដាំតែប៉ុណ្ណោះ។ ចាប់ពីត្រសក់ចេញផ្ការហូតដល់ប្រមូលផលវាទាមទារនូវសំណើមយ៉ាងល្អសំរាប់ជំនួយដល់ការបន្តពូជ ។នៅក្នុងវគ្គនេះដែរត្រូវផ្តល់ទឹកចំនួន ៧-១០ ថ្ងៃ ម្តង ទៅតាមប្រភេទដី អាកាសធាតុ និងវិធីសាស្ត្រនៃការផ្តល់ដូចជាបាញ់ទឹកផ្សើម ពីលើ ឬបញ្ចូលទៅ តាមចន្លោះជួរ ។ វាជាដំណាំដែលធន់ទ្រាំទៅនឹងភាពរាំង ស្ងួត ហើយធន់ទ្រាំទៅ នឹងអត្រានៃការកើនលើសសំណើមផងដែរ។",
          ],
        },
      },
      {
        src: "image/cucumber/Picture6.png",
        title: {
          en: "F1 cucumber Socheata variety ",
          km: "ត្រសក់ទ្រើង F1 ពូជ សុជាតា",
        },
        info: {
          en: "Cylindrical shape(58–67/fruit), very strong plant.",
          km: "រាងជាស៊ីឡាង​(58-67g/ផ្លែ) មែកច្រើន  តោងទ្រើងខ្លាំង។",
        },
        weight: "1.5 grams/pkt",
        views: 445,
        gallery: [
          {
            src: "image/cucumber/cucomber9.jpg",
            label: { en: "Bunch", km: "ចង" },
          },
          {
            src: "image/cucumber/cucomber10.jpg",
            label: { en: "Sliced", km: "កាត់" },
          },
          {
            src: "image/cucumber/Picture6.png",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 35 to 40 days after direct planting.",
            "Fruit Color: Light green, striped, and dark at the head.",
            "Fruit Shape: Cylindrical shape ($58-67g/fruit).",
            "Fruit Size: Length $16-18 cm x thickness 2.5-3.2 cm.",
            "Flower Characteristics: 70% female flowers.",
            "Growth Characteristics: Many branches, strong climbing/vining.",
            "Yield: 3-3.8kg per plant.",
            "Growing Season: All year round.",
            "The light green and dark green color of the fruit head will vary depending on the region and season.",
          ],
          km: [
            "អាយុប្រមូលផល៖35 ទៅ 40ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតងខ្ចី ឆ្នូត និងក្រម៉ៅក្បាល",
            "ទំរង់ផ្លែ៖រាងជាស៊ីឡាង (58-67g/ផ្លែ)",
            "ទំហំផ្ទៃ៖ប16-18cm x ម,ក2,5-3,2cm",
            "លក្ខណៈផ្កា៖ផ្កាញី 70%",
            "លក្ខណៈលូតលាស់៖មែកច្រើន តោងទ្រើងខ្លាំង",
            "ទិន្នផល៖3-3.8kgក្នុងមួយដើម",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ",
            "បៃតងខ្ចី និងបៃតងចាស់នៃក្បាលផ្លែ នឹងប្រែប្រួលទៅតាម តំបន់និងរដូវកាល។",
          ],
        },
        planting: {
          distance: {
            en: "5.0 m bed distance, 2.5 m double row per bed",
            km: "ចម្ងាយគ្រែ ៥.០ ម៉ែត្រ ជួរទ្វេ ២.៥ ម៉ែត្រក្នុងមួយគ្រែ",
          },
          plantDistance: {
            en: "0.6 - 0.7 m between plants",
            km: "០.៦ - ០.៧ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "800 - 650 plants/1000m²",
            km: "៨០០ - ៦៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The land must be well-prepared by raking and collecting all weeds and various debris out of the field. The land should be plowed deeply, allowed to dry several times, and then harrowed repeatedly to break the soil down finely. Next, raise the soil into beds (ridges) with a height of 20-25 cm and a width of 120-150 cm. Rake the soil to ensure a level surface on each bed, and then dig planting holes in the center of the bed, 10-15 cm deep, with a spacing of 70 cm from one hole to the next.",
          ],
          km: [
            "គេត្រូវរៀបចំដីឱ្យបានល្អ ដោយរាស់ប្រមូលយកស្មៅ កាកសំណល់ផ្សេងៗចេញពីចំការ ភ្ជួរដីឱ្យជ្រៅហាលដីឱ្យស្ងួតបានច្រើនលើក រាស់បំបែកដី ឱ្យល្អិត និង ច្រើនសារហើយលើកជារង ដែលមានកំពស់២០-២៥ស.ម ទទឹងរង ១២០-១៥០សម កៀរដីឱ្យ ស្មើលើរងនិមួយៗបន្ទាប់មកកាប់ជា រណ្តៅចំកណ្តាលរងជំរៅ១០-១៥សម ចន្លោះពីរណ្តៅមួយទៅមួយ៧០សម ។",
          ],
        },
        cultivation: {
          en: [
            "Take the cucumber seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 2 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "Take the tray that has been filled with the growing medium and punch holes in it.",
            "Place the seeds taken from the insulated container into the nursery tray, one seed per hole, with the root sprout facing downward.",
            "Sprinkle the growing medium on top, then water thoroughly, and place the tray inside the nursery shed.",
          ],
          km: [
            "យកគ្រាប់ត្រសក់ ដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨-៥០ អង្សារ ត្រាំវារយៈពេល២ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "យកថាសដែលបានដាក់ល្បាយដីបណ្តុះរួចចោះរន្ធ",
            "គ្រាប់ដែលយកចេញពីធុងស្ងោរ ដាក់ក្នុងថាសបណ្តុះមួយរន្ធមួយគ្រាប់ ដោយដាក់ពន្លកឬសចុះក្រោម",
            "រោយល្បាយដីពីលើ រួចស្រោចទឹកអោយជោគ បន្ទាប់មកដាក់វាក្នុងរោងបណ្តុះ",
          ],
        },
        irrigation: {
          en: [
            "Providing water to the crop is a source for converting and breaking down nutrients, which is crucial, but one must respect its growth stage. Initially, it requires average moisture until the vines elongate and have 2-3 leaves. In the case of soil in highland areas lacking moisture, but alluvial soil along the river is rich with underground water sources, the melon/cucumber can grow even if it is watered only 3-4 days after planting. From the time the melon/cucumber starts flowering until harvest, it requires excellent moisture to support reproduction. During this stage, water must be provided every 7-10 days, depending on the soil type, climate, and the watering method, such as misting water from above or feeding it through the rows. It is a crop that is tolerant of drought conditions and also tolerant of an excessive moisture rate.",
          ],
          km: [
            "ការផ្តល់ទឹកដល់ដំណាំ វាជាប្រភពនៃការបំលែង និងបំបែកធាតុនៃសារធាតុ ចិញ្ចឹមយ៉ាងសំខាន់ប៉ុន្តែត្រូវគោរពទៅវគ្គលូតលាស់របស់វា ដំបូងវាត្រូវការ សំណើមជាមធ្យម រហូតដល់ពន្លូតទងមានសន្លឹក ២-៣ សន្លឹក ក្នុង ករណីដី តាមតំបន់ខ្ពង់រាបខ្វះ សំណើម តែដីល្បាប់មាត់ទន្លេ សំបូរដោយប្រភព ទឹក ក្រោមដី ត្រសក់ស្រូវអាចលូតលាស់បានគេស្រោចទឹកតែ ៣-៤ថ្ងៃ ក្រោយពី ដាំតែប៉ុណ្ណោះ។ ចាប់ពីត្រសក់ចេញផ្ការហូតដល់ប្រមូលផលវាទាមទារនូវសំណើមយ៉ាងល្អសំរាប់ជំនួយដល់ការបន្តពូជ ។នៅក្នុងវគ្គនេះដែរត្រូវផ្តល់ទឹកចំនួន ៧-១០ ថ្ងៃ ម្តង ទៅតាមប្រភេទដី អាកាសធាតុ និងវិធីសាស្ត្រនៃការផ្តល់ដូចជាបាញ់ទឹកផ្សើម ពីលើ ឬបញ្ចូលទៅ តាមចន្លោះជួរ ។ វាជាដំណាំដែលធន់ទ្រាំទៅនឹងភាពរាំង ស្ងួត ហើយធន់ទ្រាំទៅ នឹងអត្រានៃការកើនលើសសំណើមផងដែរ។",
          ],
        },
      },
      {
        src: "image/cucumber/image11.png",
        title: {
          en: "Rice cucumber F1: Ratana variety",
          km: "ត្រសក់ស្រូវ F1 ពូជរតនា",
        },
        info: {
          en: "Light green stripes and dark green stripes.",
          km: "ឆ្នូតបៃតងខ្ចី និងឆ្នូតបៃតងចាស់",
        },
        weight: "2 grams/pkt",
        views: 633,
        gallery: [
          {
            src: "image/cucumber/photo_2025-10-22_16-07-16.jpg",
            label: { en: "Front View", km: "ទិដ្ឋភាពខាងមុខ" },
          },
          {
            src: "image/cucumber/Picture2.jpg",
            label: { en: "Side View", km: "ទិដ្ឋភាពខាងក្រោយ" },
          },
          {
            src: "image/cucumber/image11.png",
            label: { en: "Plant", km: "ដើម" },
          },
        ],
        features: {
          en: [
            "Harvest period: 28–30 days after planting (for young harvest), 50–60 days for mature harvest.",
            "Fruit color: Light green stripes and dark green stripes.",
            "Fruit shape: Cylindrical shape with crisp and tasty flesh.",
            "Fruit size: 14–18 cm long × 3.2–4.5 cm in diameter (young harvest).",
            "Flower characteristics: 65% female flowers; 28% under nutrient deficiency or temperatures above 35°C.",
            "Growth characteristics: Many branches and tolerant to various soil conditions.",
            "Growing season: Can be planted all year round.",
          ],
          km: [
            "អាយុប្រមូលផលៈ២៨-៣០ថ្ងៃបន្ទាប់ពីដាំ(បេះខ្ចី), ៥០-៦០ថ្ងៃសម្រាប់(បេះទុំ)",
            "ពណ៌ផ្លែៈឆ្នូតបៃតងខ្ចី និងឆ្នូតបៃតងចាស់",
            "ទំរង់ផ្លៃ:រាងជាសុីឡាង និងសាច់ស្រួយឆ្ងាញ់",
            "ទំហំផ្លែៈ14-18cm x ម,ក3,2-4,5cm បេះខ្ចី",
            "លក្ខណៈផ្កា:ផ្កាញី 65% និង 28%ពេលខ្វះជីវជាតិ ឬកំដៅលើសពី35C",
            "លក្ខណៈលូតលាស់ៈមែកច្រើន ធន់នឹងស្ថានភាពដី",
            "រដូវដាំដុះ: ១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "4.8 m bed distance, 2.4 m double row per bed",
            km: "ចម្ងាយដាំ ៤.៨ ម៉ែត្រ ជួរដេក ២.៤ ម៉ែត្រក្នុងមួយដ់ើម",
          },
          plantDistance: {
            en: "0.5 - 0.6 m between plants",
            km: "០.៥ - ០.៦ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "830 - 690 plants/1000m²",
            km: "៨៣០ - ៦៩០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The land must be well-prepared by raking and collecting all weeds and various debris out of the field. The land should be plowed deeply, allowed to dry several times, and then harrowed repeatedly to break the soil down finely. Next, raise the soil into beds (ridges) with a height of 20-25 cm and a width of 120-150 cm. Rake the soil to ensure a level surface on each bed, and then dig planting holes in the center of the bed, 10-15 cm deep, with a spacing of 70 cm from one hole to the next.",
          ],
          km: [
            "គេត្រូវរៀបចំដីឱ្យបានល្អ ដោយរាស់ប្រមូលយកស្មៅ កាកសំណល់ផ្សេងៗចេញពីចំការ ភ្ជួរដីឱ្យជ្រៅហាលដីឱ្យស្ងួតបានច្រើនលើក រាស់បំបែកដី ឱ្យល្អិត និង ច្រើនសារហើយលើកជារង ដែលមានកំពស់២០-២៥ស.ម ទទឹងរង ១២០-១៥០សម កៀរដីឱ្យ ស្មើលើរងនិមួយៗបន្ទាប់មកកាប់ជា រណ្តៅចំកណ្តាលរងជំរៅ១០-១៥សម ចន្លោះពីរណ្តៅមួយទៅមួយ៧០សម ។",
          ],
        },
        cultivation: {
          en: [
            "Before placing the seeds into the planting holes, the seeds must first be primed (woken up) to make them germinate faster by:",
            "Taking the cucumber seeds and placing them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 2 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "Afterward, the seeds can be placed into the planting holes, with 3 to 4 seeds placed in each hole.",
          ],
          km: [
            "មុននឹងយកទៅដាក់ក្នុងរណ្តៅដាំត្រូវធ្វើការដាស់ដំណេកគ្រាប់ជាមុនសិនដើម្បីអោយគ្រាប់ដុះលឿនដោយ:",
            "យកគ្រាប់ត្រសក់ ដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល២ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង",
            "បន្ទាប់មកអាចយកគ្រាប់ដាក់ក្នុងរណ្តៅដោយ១រណ្ដៅអាចដាក់បានពី៣ទៅ៤គ្រាប់។",
          ],
        },
        irrigation: {
          en: [
            "Providing water to the crop is a source for converting and breaking down nutrients, which is crucial, but one must respect its growth stage. Initially, it requires average moisture until the vines elongate and have 2-3 leaves. In the case of soil in highland areas lacking moisture, but alluvial soil along the river is rich with underground water sources, the melon/cucumber can grow even if it is watered only 3-4 days after planting. From the time the melon/cucumber starts flowering until harvest, it requires excellent moisture to support reproduction. During this stage, water must be provided every 7-10 days, depending on the soil type, climate, and the watering method, such as misting water from above or feeding it through the rows. It is a crop that is tolerant of drought conditions and also tolerant of an excessive moisture rate.",
          ],
          km: [
            "ការផ្តល់ទឹកដល់ដំណាំ វាជាប្រភពនៃការបំលែង និងបំបែកធាតុនៃសារធាតុ ចិញ្ចឹមយ៉ាងសំខាន់ប៉ុន្តែត្រូវគោរពទៅវគ្គលូតលាស់របស់វា ដំបូងវាត្រូវការ សំណើមជាមធ្យម រហូតដល់ពន្លូតទងមានសន្លឹក ២-៣ សន្លឹក ក្នុង ករណីដី តាមតំបន់ខ្ពង់រាបខ្វះ សំណើម តែដីល្បាប់មាត់ទន្លេ សំបូរដោយប្រភព ទឹក ក្រោមដី ត្រសក់ស្រូវអាចលូតលាស់បានគេស្រោចទឹកតែ ៣-៤ថ្ងៃ ក្រោយពី ដាំតែប៉ុណ្ណោះ។ ចាប់ពីត្រសក់ចេញផ្ការហូតដល់ប្រមូលផលវាទាមទារនូវសំណើមយ៉ាងល្អសំរាប់ជំនួយដល់ការបន្តពូជ ។នៅក្នុងវគ្គនេះដែរត្រូវផ្តល់ទឹកចំនួន ៧-១០ ថ្ងៃ ម្តង ទៅតាមប្រភេទដី អាកាសធាតុ និងវិធីសាស្ត្រនៃការផ្តល់ដូចជាបាញ់ទឹកផ្សើម ពីលើ ឬបញ្ចូលទៅ តាមចន្លោះជួរ ។ វាជាដំណាំដែលធន់ទ្រាំទៅនឹងភាពរាំង ស្ងួត ហើយធន់ទ្រាំទៅ នឹងអត្រានៃការកើនលើសសំណើមផងដែរ។",
          ],
        },
      },
      {
        src: "image/cucumber/cucomber11.webp",
        title: {
          en: "OP Rice Cucumber Lu Chao variety",
          km: "ត្រសក់ស្រូវ OP ពូជ លូចាវ",
        },
        info: {
          en: "Harvest age is 28 to 30 days after planting.",
          km: "អាយុប្រមូលផលពី 28 ទៅ 30 ថ្ងៃបន្ទាប់ពីដាំរួច។",
        },
        weight: "1.5 grams/pkt",
        views: 445,
        gallery: [
          {
            src: "image/cucumber/Picture7.png",
            label: { en: "Bunch", km: "ចង" },
          },
          {
            src: "",
            label: { en: "Sliced", km: "កាត់" },
          },
          {
            src: "",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
        ],
        features: {
          en: [
            "Harvest period: 28–30 days after planting (for young harvest), 50–60 days for mature harvest.",
            "Fruit color: Light green stripes and dark green stripes.",
            "Fruit shape: Cylindrical shape with crisp and tasty flesh.",
            "Fruit size: 14–18 cm long × 3.2–4.5 cm in diameter (young harvest).",
            "Flower characteristics: 65% female flowers; 28% under nutrient deficiency or temperatures above 35°C.",
            "Growth characteristics: Many branches and tolerant to various soil conditions.",
            "Growing season: Can be planted all year round.",
          ],
          km: [
            "អាយុប្រមូលផលៈ២៨-៣០ថ្ងៃបន្ទាប់ពីដាំ(បេះខ្ចី), ៥០-៦០ថ្ងៃសម្រាប់(បេះទុំ)",
            "ពណ៌ផ្លែៈឆ្នូតបៃតងខ្ចី និងឆ្នូតបៃតងចាស់",
            "ទំរង់ផ្លៃ:រាងជាសុីឡាង និងសាច់ស្រួយឆ្ងាញ់",
            "ទំហំផ្លែៈ14-18cm x ម,ក3,2-4,5cm បេះខ្ចី",
            "លក្ខណៈផ្កា:ផ្កាញី 65% និង 28%ពេលខ្វះជីវជាតិ ឬកំដៅលើសពី35C",
            "លក្ខណៈលូតលាស់ៈមែកច្រើន ធន់នឹងស្ថានភាពដី",
            "រដូវដាំដុះ: ១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "4.8 m bed distance, 2.4 m double row per bed",
            km: "ចម្ងាយដាំ ៤.៨ ម៉ែត្រ ជួរដេក ២.៤ ម៉ែត្រក្នុងមួយដ់ើម",
          },
          plantDistance: {
            en: "0.5 - 0.6 m between plants",
            km: "០.៥ - ០.៦ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "830 - 690 plants/1000m²",
            km: "៨៣០ - ៦៩០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The land must be well-prepared by raking and collecting all weeds and various debris out of the field. The land should be plowed deeply, allowed to dry several times, and then harrowed repeatedly to break the soil down finely. Next, raise the soil into beds (ridges) with a height of 20-25 cm and a width of 120-150 cm. Rake the soil to ensure a level surface on each bed, and then dig planting holes in the center of the bed, 10-15 cm deep, with a spacing of 70 cm from one hole to the next.",
          ],
          km: [
            "គេត្រូវរៀបចំដីឱ្យបានល្អ ដោយរាស់ប្រមូលយកស្មៅ កាកសំណល់ផ្សេងៗចេញពីចំការ ភ្ជួរដីឱ្យជ្រៅហាលដីឱ្យស្ងួតបានច្រើនលើក រាស់បំបែកដី ឱ្យល្អិត និង ច្រើនសារហើយលើកជារង ដែលមានកំពស់២០-២៥ស.ម ទទឹងរង ១២០-១៥០សម កៀរដីឱ្យ ស្មើលើរងនិមួយៗបន្ទាប់មកកាប់ជា រណ្តៅចំកណ្តាលរងជំរៅ១០-១៥សម ចន្លោះពីរណ្តៅមួយទៅមួយ៧០សម ។",
          ],
        },
        cultivation: {
          en: [
            "Before placing the seeds into the planting holes, the seeds must first be primed (woken up) to make them germinate faster by:",
            "Taking the cucumber seeds and placing them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 2 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "Afterward, the seeds can be placed into the planting holes, with 3 to 4 seeds placed in each hole.",
          ],
          km: [
            "មុននឹងយកទៅដាក់ក្នុងរណ្តៅដាំត្រូវធ្វើការដាស់ដំណេកគ្រាប់ជាមុនសិនដើម្បីអោយគ្រាប់ដុះលឿនដោយ:",
            "យកគ្រាប់ត្រសក់ ដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល២ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង",
            "បន្ទាប់មកអាចយកគ្រាប់ដាក់ក្នុងរណ្តៅដោយ១រណ្ដៅអាចដាក់បានពី៣ទៅ៤គ្រាប់។",
          ],
        },
        irrigation: {
          en: [
            "Providing water to the crop is a source for converting and breaking down nutrients, which is crucial, but one must respect its growth stage. Initially, it requires average moisture until the vines elongate and have 2-3 leaves. In the case of soil in highland areas lacking moisture, but alluvial soil along the river is rich with underground water sources, the melon/cucumber can grow even if it is watered only 3-4 days after planting. From the time the melon/cucumber starts flowering until harvest, it requires excellent moisture to support reproduction. During this stage, water must be provided every 7-10 days, depending on the soil type, climate, and the watering method, such as misting water from above or feeding it through the rows. It is a crop that is tolerant of drought conditions and also tolerant of an excessive moisture rate.",
          ],
          km: [
            "ការផ្តល់ទឹកដល់ដំណាំ វាជាប្រភពនៃការបំលែង និងបំបែកធាតុនៃសារធាតុ ចិញ្ចឹមយ៉ាងសំខាន់ប៉ុន្តែត្រូវគោរពទៅវគ្គលូតលាស់របស់វា ដំបូងវាត្រូវការ សំណើមជាមធ្យម រហូតដល់ពន្លូតទងមានសន្លឹក ២-៣ សន្លឹក ក្នុង ករណីដី តាមតំបន់ខ្ពង់រាបខ្វះ សំណើម តែដីល្បាប់មាត់ទន្លេ សំបូរដោយប្រភព ទឹក ក្រោមដី ត្រសក់ស្រូវអាចលូតលាស់បានគេស្រោចទឹកតែ ៣-៤ថ្ងៃ ក្រោយពី ដាំតែប៉ុណ្ណោះ។ ចាប់ពីត្រសក់ចេញផ្ការហូតដល់ប្រមូលផលវាទាមទារនូវសំណើមយ៉ាងល្អសំរាប់ជំនួយដល់ការបន្តពូជ ។នៅក្នុងវគ្គនេះដែរត្រូវផ្តល់ទឹកចំនួន ៧-១០ ថ្ងៃ ម្តង ទៅតាមប្រភេទដី អាកាសធាតុ និងវិធីសាស្ត្រនៃការផ្តល់ដូចជាបាញ់ទឹកផ្សើម ពីលើ ឬបញ្ចូលទៅ តាមចន្លោះជួរ ។ វាជាដំណាំដែលធន់ទ្រាំទៅនឹងភាពរាំង ស្ងួត ហើយធន់ទ្រាំទៅ នឹងអត្រានៃការកើនលើសសំណើមផងដែរ។",
          ],
        },
      },
    ],
  },
  pumpkin: {
    name: { en: "Pumpkin", km: "ល្ពៅ" },
    desc: {
      en: "Disease-resistant, high-yielding, sweet and flavorful, and perfectly suited for tropical climates.",
      km: "ធន់នឹងជម្ងឺ ផ្តល់ ទិន្នផលខ្ពស់ សាច់ផ្អែមឆ្ងាញ់ ល្អឥតខ្ចោះសម្រាប់អាកាសធាតុត្រូពិច។",
    },
    imgs: [
      {
        src: "image/Pumpkin/image10.png",
        title: {
          en: "Bottle pumpkin, ​F1 Sorya variety 01",
          km: "ល្ពៅកដប F1 ពូជ សូរិយា ០១",
        },
        info: {
          en: "sweet and delicious, 2-3kg/fruit and 3-4kg/tree",
          km: "សាច់ពណ៌លឿង ស្អិតរមួត ផ្អែមឆ្ងាញ់, 2-3kg/ផ្លែនិង3-4kg/ដើម។",
        },
        weight: "3 grams/pkt",
        views: 612,
        gallery: [
          {
            src: "image/Pumpkin/Picture10.png",
            label: { en: "Group", km: "ក្រុម" },
          },
          {
            src: "image/Pumpkin/Picture13.webp",
            label: { en: "Single", km: "តែមួយ" },
          },
          {
            src: "image/Pumpkin/Pumpkin1.jpg",
            label: { en: "Vine", km: "ដើមវល្លិ៍" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 90 to 95 days after direct planting.",
            "Fruit Color: Dark green when young and dark brown when mature.",
            "Fruit Shape: Round and flattened with thick flesh segments, and durable for transportation.",
            "Yield/Size: 6-8kg per fruit and 2-3 fruits per plant.",
            "Fruit Quality: Yellow flesh, sticky and dense (glutinous texture).",
            "Growth Characteristics: Tolerant of the Cambodian climate and local diseases.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូល ៖90 ទៅ 95 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖ខ្ចីបៃតងចាស់ និងត្នោតចាស់",
            "ទំរង់ផ្លែ ៖ រាងមូលសំបែត និងមានកន្លាក់សាច់ក្រាស់ និងធន់នឹងការដឹកជញ្ជូន",
            "ទិន្នផល/ទំហំ៖6-8kg /ផ្លែ & 2-3ផ្លែ/ដើម",
            "លក្ខណផ្លែ៖សាច់ពណ៌លឿង ស្អិតរមួត",
            "លក្ខណៈលូតលាស់៖ធន់នឹងអាកាសធាតុ និងជម្ងឺក្នុង ស្រុកខ្មែរ",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "6.0 m bed distance, 3.0 m between rows",
            km: "ចម្ងាយគ្រែ ៦.០ ម៉ែត្រ ៣.០ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "1.5 - 2.0 m between plants",
            km: "១.៥ - ២.០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "300 - 250 plants/1000m²",
            km: "៣០០ - ២៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil types favorable for pumpkin cultivation are alluvial soil, sandy loam, red soil, or black soil. However, soil that drains poorly will not allow the pumpkin to achieve a high yield. To make planting easier, the land must be plowed and allowed to dry out multiple times, left to dry for many days, and then harrowed to break the soil finely. Then, raise the beds (ridges) with a width of $180 \text{ cm}$, a bed height of $25-30 \text{ cm}$. Level the beds and dig holes in the center of the bed with a depth of $20 \text{ cm}$ and a distance between holes of $120 \text{ cm}$. Afterward, place all types of organic fertilizer at the bottom of the hole generously, and cover it completely with soil.",
          ],
          km: [
            "ប្រភេទដីដែលអំណោយផលដល់ ដំណាំល្ពៅ គឺដីល្បប់ ល្បាយខ្សាច់ ដីប្រហម ឬដីខ្មៅ ប៉ុន្តែដីដែលជ្រាបទឹកមិនល្អ មិនអាចឱ្យល្ពៅ ទទួលបានទិន្នផលខ្ពស់ឡើយ ។ដើម្បីឱ្យការដាំដុះមានលក្ខណៈងាយស្រួល ត្រូវភ្ជួរហាលដីឱ្យ បានច្រើនសារ ហាលដីឱ្យបានយូរថ្ងៃ និងរាស់បំបែកដីឱ្យល្អិត ហើយលើករងដែល មានទទឹង ១៨០ សង់ទីម៉ែត្រ កម្ពស់រង ២៥.៣០ សង់ទីម៉ែត្រ ពង្រាបរងឱ្យស្មើ ហើយកាប់រណ្តៅចំកណ្តាលរងជម្រៅ ២០ សង់ទីម៉ែត្រចំងាយរណ្តៅ ១២០ ស.ម បន្ទាប់មក យកជីកម្មជាតិគ្រប់ប្រភេទមកដាក់បាតរណ្តៅឱ្យបានច្រើន ហើយលប់ ដី ឱ្យជិតពីលើ ។",
          ],
        },
        cultivation: {
          en: [
            "Take the pumpkin seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 4 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "The pumpkin seeds can then be planted in the holes dug beforehand, placing 3-4 seeds at a depth of 2-3cm. For a 1-hectare area, 4,565 holes or hills are planted, using 4-5kg of seed.",
          ],
          km: [
            "យកគ្រាប់ល្ពៅដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "គេអាចយកគ្រាប់ល្ពៅទៅដាំក្នុង រណ្តៅដែលបានកាប់ទុកជាមុនចំនួន ៣-៤ គ្រាប់ជម្រៅ ២-៣សង់ទីម៉ែត្រ ក្នុង ១ ហិចតា គេដាំ ចំនួន ៤៥៦៥ រណ្តៅ ឬ គុម្ពដោយប្រើគ្រាប់ពូជចំនួន ៤-៥ គ.ក្រ ។",
          ],
        },
        irrigation: {
          en: [
            "Water deeply and less frequently once plants are established",
            "Avoid wetting the leaves to prevent fungal diseases",
            "Water at the base of the plant",
            "Water requirements increase significantly during fruit development",
            "Check soil moisture by digging a few inches down",
          ],
          km: [
            "ស្រោចទឹកឱ្យជ្រៅ និងតិចជាងមុន នៅពេលរុក្ខជាតិត្រូវបានបង្កើតឡើង",
            "ជៀសវាងការសើមស្លឹក ដើម្បីការពារជំងឺផ្សិត",
            "ស្រោចទឹកនៅគល់រុក្ខជាតិ",
            "តម្រូវការទឹកកើនឡើងយ៉ាងខ្លាំង ក្នុងដំណាក់កាលអភិវឌ្ឍន៍ផ្លែ",
            "ពិនិត្យសំណើមដី ដោយការជីកដីពីរបីអ៊ីញចុះក្រោម",
          ],
        },
      },
      {
        src: "image/Pumpkin/Picture8.png",
        title: {
          en: "Bottle pumpkin F1, Trou pumpkin variety.",
          km: "ល្ពៅកដប F1  ពូជ ល្ពៅទ្រូ",
        },
        info: {
          en: "Yellow, sticky flesh, 2.5-3kg/tree.",
          km: "សាច់ពណ៌លឿង ស្អិតរមួត 2,5-3kg/ដើម។",
        },
        weight: "3 grams/pkt",
        views: 612,
        gallery: [
          {
            src: "image/Pumpkin/Picture9.png",
            label: { en: "Group", km: "ក្រុម" },
          },
          {
            src: "image/Pumpkin/Pumpkin2.jpg",
            label: { en: "Single", km: "តែមួយ" },
          },
          {
            src: "image/Pumpkin/Pumpkin3.jpg",
            label: { en: "Vine", km: "ដើមវល្លិ៍" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 90 to 95 days after direct planting.",
            "Fruit Color: Dark green when young and dark brown when mature.",
            "Fruit Shape: Round and flattened with thick flesh segments, and durable for transportation.",
            "Yield/Size: 6-8kg per fruit and 2-3 fruits per plant.",
            "Fruit Quality: Yellow flesh, sticky and dense (glutinous texture).",
            "Growth Characteristics: Tolerant of the Cambodian climate and local diseases.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូល ៖90 ទៅ 95 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖ខ្ចីបៃតងចាស់ និងត្នោតចាស់",
            "ទំរង់ផ្លែ ៖ រាងមូលសំបែត និងមានកន្លាក់សាច់ក្រាស់ និងធន់នឹងការដឹកជញ្ជូន",
            "ទិន្នផល/ទំហំ៖6-8kg /ផ្លែ & 2-3ផ្លែ/ដើម",
            "លក្ខណផ្លែ៖សាច់ពណ៌លឿង ស្អិតរមួត",
            "លក្ខណៈលូតលាស់៖ធន់នឹងអាកាសធាតុ និងជម្ងឺក្នុង ស្រុកខ្មែរ",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "6.0 m bed distance, 3.0 m between rows",
            km: "ចម្ងាយគ្រែ ៦.០ ម៉ែត្រ ៣.០ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "1.5 - 2.0 m between plants",
            km: "១.៥ - ២.០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "300 - 250 plants/1000m²",
            km: "៣០០ - ២៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil types favorable for pumpkin cultivation are alluvial soil, sandy loam, red soil, or black soil. However, soil that drains poorly will not allow the pumpkin to achieve a high yield. To make planting easier, the land must be plowed and allowed to dry out multiple times, left to dry for many days, and then harrowed to break the soil finely. Then, raise the beds (ridges) with a width of $180 \text{ cm}$, a bed height of $25-30 \text{ cm}$. Level the beds and dig holes in the center of the bed with a depth of $20 \text{ cm}$ and a distance between holes of $120 \text{ cm}$. Afterward, place all types of organic fertilizer at the bottom of the hole generously, and cover it completely with soil.",
          ],
          km: [
            "ប្រភេទដីដែលអំណោយផលដល់ ដំណាំល្ពៅ គឺដីល្បប់ ល្បាយខ្សាច់ ដីប្រហម ឬដីខ្មៅ ប៉ុន្តែដីដែលជ្រាបទឹកមិនល្អ មិនអាចឱ្យល្ពៅ ទទួលបានទិន្នផលខ្ពស់ឡើយ ។ដើម្បីឱ្យការដាំដុះមានលក្ខណៈងាយស្រួល ត្រូវភ្ជួរហាលដីឱ្យ បានច្រើនសារ ហាលដីឱ្យបានយូរថ្ងៃ និងរាស់បំបែកដីឱ្យល្អិត ហើយលើករងដែល មានទទឹង ១៨០ សង់ទីម៉ែត្រ កម្ពស់រង ២៥.៣០ សង់ទីម៉ែត្រ ពង្រាបរងឱ្យស្មើ ហើយកាប់រណ្តៅចំកណ្តាលរងជម្រៅ ២០ សង់ទីម៉ែត្រចំងាយរណ្តៅ ១២០ ស.ម បន្ទាប់មក យកជីកម្មជាតិគ្រប់ប្រភេទមកដាក់បាតរណ្តៅឱ្យបានច្រើន ហើយលប់ ដី ឱ្យជិតពីលើ ។",
          ],
        },
        cultivation: {
          en: [
            "Take the pumpkin seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 4 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "The pumpkin seeds can then be planted in the holes dug beforehand, placing 3-4 seeds at a depth of 2-3cm. For a 1-hectare area, 4,565 holes or hills are planted, using 4-5kg of seed.",
          ],
          km: [
            "យកគ្រាប់ល្ពៅដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "គេអាចយកគ្រាប់ល្ពៅទៅដាំក្នុង រណ្តៅដែលបានកាប់ទុកជាមុនចំនួន ៣-៤ គ្រាប់ជម្រៅ ២-៣សង់ទីម៉ែត្រ ក្នុង ១ ហិចតា គេដាំ ចំនួន ៤៥៦៥ រណ្តៅ ឬ គុម្ពដោយប្រើគ្រាប់ពូជចំនួន ៤-៥ គ.ក្រ ។",
          ],
        },
        irrigation: {
          en: [
            "Water deeply and less frequently once plants are established",
            "Avoid wetting the leaves to prevent fungal diseases",
            "Water at the base of the plant",
            "Water requirements increase significantly during fruit development",
            "Check soil moisture by digging a few inches down",
          ],
          km: [
            "ស្រោចទឹកឱ្យជ្រៅ និងតិចជាងមុន នៅពេលរុក្ខជាតិត្រូវបានបង្កើតឡើង",
            "ជៀសវាងការសើមស្លឹក ដើម្បីការពារជំងឺផ្សិត",
            "ស្រោចទឹកនៅគល់រុក្ខជាតិ",
            "តម្រូវការទឹកកើនឡើងយ៉ាងខ្លាំង ក្នុងដំណាក់កាលអភិវឌ្ឍន៍ផ្លែ",
            "ពិនិត្យសំណើមដី ដោយការជីកដីពីរបីអ៊ីញចុះក្រោម",
          ],
        },
      },
      {
        src: "image/Pumpkin/image8.png",
        title: {
          en: "Pumpkin F1,khmer kingkok Pumpkin variety",
          km: "ល្ពៅ F1 ពូជ ល្ពៅគីង្គក់ខ្មែរ ",
        },
        info: { en: "Large fruit, high yield.", km: "ផ្លែធំ ទិន្នផលខ្ពស់" },
        weight: "5 grams/pkt",
        views: 789,
        gallery: [
          {
            src: "image/Pumpkin/image21.png",
            label: { en: "Whole", km: "ទាំងមូល" },
          },
          {
            src: "image/Pumpkin/image8.png",
            label: { en: "Cut", km: "កាត់" },
          },
          {
            src: "image/Pumpkin/image1.png",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 90 to 95 days after direct planting.",
            "Fruit Color: Dark green when young and dark brown when mature.",
            "Fruit Shape: Round and flattened with thick flesh segments, and durable for transportation.",
            "Yield/Size: 6-8kg per fruit and 2-3 fruits per plant.",
            "Fruit Quality: Yellow flesh, sticky and dense (glutinous texture).",
            "Growth Characteristics: Tolerant of the Cambodian climate and local diseases.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូល ៖90 ទៅ 95 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖ខ្ចីបៃតងចាស់ និងត្នោតចាស់",
            "ទំរង់ផ្លែ ៖ រាងមូលសំបែត និងមានកន្លាក់សាច់ក្រាស់ និងធន់នឹងការដឹកជញ្ជូន",
            "ទិន្នផល/ទំហំ៖6-8kg /ផ្លែ & 2-3ផ្លែ/ដើម",
            "លក្ខណផ្លែ៖សាច់ពណ៌លឿង ស្អិតរមួត",
            "លក្ខណៈលូតលាស់៖ធន់នឹងអាកាសធាតុ និងជម្ងឺក្នុង ស្រុកខ្មែរ",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "6.0 m bed distance, 3.0 m between rows",
            km: "ចម្ងាយគ្រែ ៦.០ ម៉ែត្រ ៣.០ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "1.5 - 2.0 m between plants",
            km: "១.៥ - ២.០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "300 - 250 plants/1000m²",
            km: "៣០០ - ២៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil types favorable for pumpkin cultivation are alluvial soil, sandy loam, red soil, or black soil. However, soil that drains poorly will not allow the pumpkin to achieve a high yield. To make planting easier, the land must be plowed and allowed to dry out multiple times, left to dry for many days, and then harrowed to break the soil finely. Then, raise the beds (ridges) with a width of $180 \text{ cm}$, a bed height of $25-30 \text{ cm}$. Level the beds and dig holes in the center of the bed with a depth of $20 \text{ cm}$ and a distance between holes of $120 \text{ cm}$. Afterward, place all types of organic fertilizer at the bottom of the hole generously, and cover it completely with soil.",
          ],
          km: [
            "ប្រភេទដីដែលអំណោយផលដល់ ដំណាំល្ពៅ គឺដីល្បប់ ល្បាយខ្សាច់ ដីប្រហម ឬដីខ្មៅ ប៉ុន្តែដីដែលជ្រាបទឹកមិនល្អ មិនអាចឱ្យល្ពៅ ទទួលបានទិន្នផលខ្ពស់ឡើយ ។ដើម្បីឱ្យការដាំដុះមានលក្ខណៈងាយស្រួល ត្រូវភ្ជួរហាលដីឱ្យ បានច្រើនសារ ហាលដីឱ្យបានយូរថ្ងៃ និងរាស់បំបែកដីឱ្យល្អិត ហើយលើករងដែល មានទទឹង ១៨០ សង់ទីម៉ែត្រ កម្ពស់រង ២៥.៣០ សង់ទីម៉ែត្រ ពង្រាបរងឱ្យស្មើ ហើយកាប់រណ្តៅចំកណ្តាលរងជម្រៅ ២០ សង់ទីម៉ែត្រចំងាយរណ្តៅ ១២០ ស.ម បន្ទាប់មក យកជីកម្មជាតិគ្រប់ប្រភេទមកដាក់បាតរណ្តៅឱ្យបានច្រើន ហើយលប់ ដី ឱ្យជិតពីលើ ។",
          ],
        },
        cultivation: {
          en: [
            "Take the pumpkin seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 4 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "The pumpkin seeds can then be planted in the holes dug beforehand, placing 3-4 seeds at a depth of 2-3cm. For a 1-hectare area, 4,565 holes or hills are planted, using 4-5kg of seed.",
          ],
          km: [
            "យកគ្រាប់ល្ពៅដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "គេអាចយកគ្រាប់ល្ពៅទៅដាំក្នុង រណ្តៅដែលបានកាប់ទុកជាមុនចំនួន ៣-៤ គ្រាប់ជម្រៅ ២-៣សង់ទីម៉ែត្រ ក្នុង ១ ហិចតា គេដាំ ចំនួន ៤៥៦៥ រណ្តៅ ឬ គុម្ពដោយប្រើគ្រាប់ពូជចំនួន ៤-៥ គ.ក្រ ។",
          ],
        },
        irrigation: {
          en: [
            "Water deeply and less frequently once plants are established",
            "Avoid wetting the leaves to prevent fungal diseases",
            "Water at the base of the plant",
            "Water requirements increase significantly during fruit development",
            "Check soil moisture by digging a few inches down",
          ],
          km: [
            "ស្រោចទឹកឱ្យជ្រៅ និងតិចជាងមុន នៅពេលរុក្ខជាតិត្រូវបានបង្កើតឡើង",
            "ជៀសវាងការសើមស្លឹក ដើម្បីការពារជំងឺផ្សិត",
            "ស្រោចទឹកនៅគល់រុក្ខជាតិ",
            "តម្រូវការទឹកកើនឡើងយ៉ាងខ្លាំង ក្នុងដំណាក់កាលអភិវឌ្ឍន៍ផ្លែ",
            "ពិនិត្យសំណើមដី ដោយការជីកដីពីរបីអ៊ីញចុះក្រោម",
          ],
        },
      },
      {
        src: "image/Pumpkin/image12.png",
        title: {
          en: "Kingkok Pumpkin OP, Chhnok trou variety",
          km: "ល្ពៅគីង្គក់ OP ពូជ ឆ្នុកទ្រូ ",
        },
        info: {
          en: "Resistant to climate and diseases in Cambodia",
          km: "ធន់នឹងអាកាសធាតុ និងជម្ងឺក្នុង ស្រុកខ្មែរ។",
        },
        weight: "3 grams/pkt",
        views: 612,
        gallery: [
          {
            src: "image/Pumpkin/image28.png",
            label: { en: "Group", km: "ក្រុម" },
          },
          {
            src: "image/Pumpkin/image25.png",
            label: { en: "Single", km: "តែមួយ" },
          },
          {
            src: "image/Pumpkin/Picture12.png",
            label: { en: "Vine", km: "ដើមវល្លិ៍" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 90 to 95 days after direct planting.",
            "Fruit Color: Dark green when young and dark brown when mature.",
            "Fruit Shape: Round and flattened with thick flesh segments, and durable for transportation.",
            "Yield/Size: 6-8kg per fruit and 2-3 fruits per plant.",
            "Fruit Quality: Yellow flesh, sticky and dense (glutinous texture).",
            "Growth Characteristics: Tolerant of the Cambodian climate and local diseases.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូល ៖90 ទៅ 95 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖ខ្ចីបៃតងចាស់ និងត្នោតចាស់",
            "ទំរង់ផ្លែ ៖ រាងមូលសំបែត និងមានកន្លាក់សាច់ក្រាស់ និងធន់នឹងការដឹកជញ្ជូន",
            "ទិន្នផល/ទំហំ៖6-8kg /ផ្លែ & 2-3ផ្លែ/ដើម",
            "លក្ខណផ្លែ៖សាច់ពណ៌លឿង ស្អិតរមួត",
            "លក្ខណៈលូតលាស់៖ធន់នឹងអាកាសធាតុ និងជម្ងឺក្នុង ស្រុកខ្មែរ",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "6.0 m bed distance, 3.0 m between rows",
            km: "ចម្ងាយគ្រែ ៦.០ ម៉ែត្រ ៣.០ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "1.5 - 2.0 m between plants",
            km: "១.៥ - ២.០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "300 - 250 plants/1000m²",
            km: "៣០០ - ២៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil types favorable for pumpkin cultivation are alluvial soil, sandy loam, red soil, or black soil. However, soil that drains poorly will not allow the pumpkin to achieve a high yield. To make planting easier, the land must be plowed and allowed to dry out multiple times, left to dry for many days, and then harrowed to break the soil finely. Then, raise the beds (ridges) with a width of $180 \text{ cm}$, a bed height of $25-30 \text{ cm}$. Level the beds and dig holes in the center of the bed with a depth of $20 \text{ cm}$ and a distance between holes of $120 \text{ cm}$. Afterward, place all types of organic fertilizer at the bottom of the hole generously, and cover it completely with soil.",
          ],
          km: [
            "ប្រភេទដីដែលអំណោយផលដល់ ដំណាំល្ពៅ គឺដីល្បប់ ល្បាយខ្សាច់ ដីប្រហម ឬដីខ្មៅ ប៉ុន្តែដីដែលជ្រាបទឹកមិនល្អ មិនអាចឱ្យល្ពៅ ទទួលបានទិន្នផលខ្ពស់ឡើយ ។ដើម្បីឱ្យការដាំដុះមានលក្ខណៈងាយស្រួល ត្រូវភ្ជួរហាលដីឱ្យ បានច្រើនសារ ហាលដីឱ្យបានយូរថ្ងៃ និងរាស់បំបែកដីឱ្យល្អិត ហើយលើករងដែល មានទទឹង ១៨០ សង់ទីម៉ែត្រ កម្ពស់រង ២៥.៣០ សង់ទីម៉ែត្រ ពង្រាបរងឱ្យស្មើ ហើយកាប់រណ្តៅចំកណ្តាលរងជម្រៅ ២០ សង់ទីម៉ែត្រចំងាយរណ្តៅ ១២០ ស.ម បន្ទាប់មក យកជីកម្មជាតិគ្រប់ប្រភេទមកដាក់បាតរណ្តៅឱ្យបានច្រើន ហើយលប់ ដី ឱ្យជិតពីលើ ។",
          ],
        },
        cultivation: {
          en: [
            "Take the pumpkin seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 4 hours.",
            "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
            "The pumpkin seeds can then be planted in the holes dug beforehand, placing 3-4 seeds at a depth of 2-3cm. For a 1-hectare area, 4,565 holes or hills are planted, using 4-5kg of seed.",
          ],
          km: [
            "យកគ្រាប់ល្ពៅដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "គេអាចយកគ្រាប់ល្ពៅទៅដាំក្នុង រណ្តៅដែលបានកាប់ទុកជាមុនចំនួន ៣-៤ គ្រាប់ជម្រៅ ២-៣សង់ទីម៉ែត្រ ក្នុង ១ ហិចតា គេដាំ ចំនួន ៤៥៦៥ រណ្តៅ ឬ គុម្ពដោយប្រើគ្រាប់ពូជចំនួន ៤-៥ គ.ក្រ ។",
          ],
        },
        irrigation: {
          en: [
            "Water deeply and less frequently once plants are established",
            "Avoid wetting the leaves to prevent fungal diseases",
            "Water at the base of the plant",
            "Water requirements increase significantly during fruit development",
            "Check soil moisture by digging a few inches down",
          ],
          km: [
            "ស្រោចទឹកឱ្យជ្រៅ និងតិចជាងមុន នៅពេលរុក្ខជាតិត្រូវបានបង្កើតឡើង",
            "ជៀសវាងការសើមស្លឹក ដើម្បីការពារជំងឺផ្សិត",
            "ស្រោចទឹកនៅគល់រុក្ខជាតិ",
            "តម្រូវការទឹកកើនឡើងយ៉ាងខ្លាំង ក្នុងដំណាក់កាលអភិវឌ្ឍន៍ផ្លែ",
            "ពិនិត្យសំណើមដី ដោយការជីកដីពីរបីអ៊ីញចុះក្រោម",
          ],
        },
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        title: {
          en: "OP Pumpkin Shoot Variety Saomei 001",
          km: "ល្ពៅត្រួយ OP ពូជសោមុី001",
        },
        info: {
          en: "Coming Soon!",
          km: "មកដល់ឆាប់ៗ!",
          // en: "Pumpkin shoots are highly nutritious, have a slightly sweet flavor, and are popular in Asia and Africa.",
          // km: "ត្រួយល្ពៅមានសារធាតុចិញ្ចឹមច្រើន មានរសជាតិផ្អែមតិចៗ និងពេញនិយមក្នុងអាស៊ី និងអាហ្វ្រិក",
        },
        weight: "3 grams/pkt",
        views: 612,
        // gallery: [
        //   {
        //     src: "",
        //     label: { en: "Group", km: "ក្រុម" },
        //   },
        //   {
        //     src: "",
        //     label: { en: "Single", km: "តែមួយ" },
        //   },
        //   {
        //     src: "",
        //     label: { en: "Vine", km: "ដើមវល្លិ៍" },
        //   },
        // ],
        // features: {
        //   en: [
        //     "Harvest Age: 90 to 95 days after direct planting.",
        //     "Fruit Color: Dark green when young and dark brown when mature.",
        //     "Fruit Shape: Round and flattened with thick flesh segments, and durable for transportation.",
        //     "Yield/Size: 6-8kg per fruit and 2-3 fruits per plant.",
        //     "Fruit Quality: Yellow flesh, sticky and dense (glutinous texture).",
        //     "Growth Characteristics: Tolerant of the Cambodian climate and local diseases.",
        //     "Growing Season: All year round.",
        //   ],
        //   km: [
        //     "អាយុប្រមូល ៖90 ទៅ 95 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
        //     "ពណ៌ផ្លែ៖ខ្ចីបៃតងចាស់ និងត្នោតចាស់",
        //     "ទំរង់ផ្លែ ៖ រាងមូលសំបែត និងមានកន្លាក់សាច់ក្រាស់ និងធន់នឹងការដឹកជញ្ជូន",
        //     "ទិន្នផល/ទំហំ៖6-8kg /ផ្លែ & 2-3ផ្លែ/ដើម",
        //     "លក្ខណផ្លែ៖សាច់ពណ៌លឿង ស្អិតរមួត",
        //     "លក្ខណៈលូតលាស់៖ធន់នឹងអាកាសធាតុ និងជម្ងឺក្នុង ស្រុកខ្មែរ",
        //     "រដូវដាំដុះ៖១ឆ្នាំពេញ",
        //   ],
        // },
        // planting: {
        //   distance: {
        //     en: "6.0 m bed distance, 3.0 m between rows",
        //     km: "ចម្ងាយគ្រែ ៦.០ ម៉ែត្រ ៣.០ ម៉ែត្ររវាងជួរ",
        //   },
        //   plantDistance: {
        //     en: "1.5 - 2.0 m between plants",
        //     km: "១.៥ - ២.០ ម៉ែត្ររវាងដើម",
        //   },
        //   density: {
        //     en: "300 - 250 plants/1000m²",
        //     km: "៣០០ - ២៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
        //   },
        // },
        // landPreparation: {
        //   en: [
        //     "The soil types favorable for pumpkin cultivation are alluvial soil, sandy loam, red soil, or black soil. However, soil that drains poorly will not allow the pumpkin to achieve a high yield. To make planting easier, the land must be plowed and allowed to dry out multiple times, left to dry for many days, and then harrowed to break the soil finely. Then, raise the beds (ridges) with a width of $180 \text{ cm}$, a bed height of $25-30 \text{ cm}$. Level the beds and dig holes in the center of the bed with a depth of $20 \text{ cm}$ and a distance between holes of $120 \text{ cm}$. Afterward, place all types of organic fertilizer at the bottom of the hole generously, and cover it completely with soil.",
        //   ],
        //   km: [
        //     "ប្រភេទដីដែលអំណោយផលដល់ ដំណាំល្ពៅ គឺដីល្បប់ ល្បាយខ្សាច់ ដីប្រហម ឬដីខ្មៅ ប៉ុន្តែដីដែលជ្រាបទឹកមិនល្អ មិនអាចឱ្យល្ពៅ ទទួលបានទិន្នផលខ្ពស់ឡើយ ។ដើម្បីឱ្យការដាំដុះមានលក្ខណៈងាយស្រួល ត្រូវភ្ជួរហាលដីឱ្យ បានច្រើនសារ ហាលដីឱ្យបានយូរថ្ងៃ និងរាស់បំបែកដីឱ្យល្អិត ហើយលើករងដែល មានទទឹង ១៨០ សង់ទីម៉ែត្រ កម្ពស់រង ២៥.៣០ សង់ទីម៉ែត្រ ពង្រាបរងឱ្យស្មើ ហើយកាប់រណ្តៅចំកណ្តាលរងជម្រៅ ២០ សង់ទីម៉ែត្រចំងាយរណ្តៅ ១២០ ស.ម បន្ទាប់មក យកជីកម្មជាតិគ្រប់ប្រភេទមកដាក់បាតរណ្តៅឱ្យបានច្រើន ហើយលប់ ដី ឱ្យជិតពីលើ ។",
        //   ],
        // },
        // cultivation: {
        //   en: [
        //     "Take the pumpkin seeds and place them in a clean, dry towel. Wrap it tightly, and soak it in an ice bucket where the water temperature is between 48C to 50C for a period of 4 hours.",
        //     "Then, transfer the seeds to another damp towel or cloth that can cover the seeds tightly, and place it in an insulated container (or 'thermos') for 20-24 hours. This process helps the seeds sprout faster.",
        //     "The pumpkin seeds can then be planted in the holes dug beforehand, placing 3-4 seeds at a depth of 2-3cm. For a 1-hectare area, 4,565 holes or hills are planted, using 4-5kg of seed.",
        //   ],
        //   km: [
        //     "យកគ្រាប់ល្ពៅដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
        //     "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២០-២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
        //     "គេអាចយកគ្រាប់ល្ពៅទៅដាំក្នុង រណ្តៅដែលបានកាប់ទុកជាមុនចំនួន ៣-៤ គ្រាប់ជម្រៅ ២-៣សង់ទីម៉ែត្រ ក្នុង ១ ហិចតា គេដាំ ចំនួន ៤៥៦៥ រណ្តៅ ឬ គុម្ពដោយប្រើគ្រាប់ពូជចំនួន ៤-៥ គ.ក្រ ។",
        //   ],
        // },
        // irrigation: {
        //   en: [
        //     "Water deeply and less frequently once plants are established",
        //     "Avoid wetting the leaves to prevent fungal diseases",
        //     "Water at the base of the plant",
        //     "Water requirements increase significantly during fruit development",
        //     "Check soil moisture by digging a few inches down",
        //   ],
        //   km: [
        //     "ស្រោចទឹកឱ្យជ្រៅ និងតិចជាងមុន នៅពេលរុក្ខជាតិត្រូវបានបង្កើតឡើង",
        //     "ជៀសវាងការសើមស្លឹក ដើម្បីការពារជំងឺផ្សិត",
        //     "ស្រោចទឹកនៅគល់រុក្ខជាតិ",
        //     "តម្រូវការទឹកកើនឡើងយ៉ាងខ្លាំង ក្នុងដំណាក់កាលអភិវឌ្ឍន៍ផ្លែ",
        //     "ពិនិត្យសំណើមដី ដោយការជីកដីពីរបីអ៊ីញចុះក្រោម",
        //   ],
        // },
      },
    ],
  },
  tomato: {
    name: { en: "Tomato", km: "ប៉េងប៉ោះ" },
    desc: {
      en: "Tomato is a juicy fruit rich in vitamins and antioxidants.",
      km: "ប៉េងប៉ោះ​ជា​ផ្លែឈើ​សម្បូរ​វីតាមីន និង​សារធាតុ​ប្រឆាំង​អុកស៊ីតកម្ម។",
    },
    imgs: [
      {
        src: "image/Tomato/Picture13.png",
        title: { en: "Tomato F1 Monica variety", km: "ប៉េងបោះ F1 ពូជ ម៉ូនីកា" },
        info: {
          en: "Weather resistant, resistant to BW & Alternaria viruses.",
          km: "ធន់អាកាសធាតុ ធន់នឹងជម្ងឺស្វិតស្រពោនស្រស់ និងវីរុស BW & Alternaria។",
        },
        weight: "0.5 grams/pkt",
        views: 923,
        gallery: [
          {
            src: "image/Tomato/Picture15.png",
            label: { en: "Ripe", km: "ទុំ" },
          },
          {
            src: "image/Tomato/Pic1.jpeg",
            label: { en: "On Vine", km: "នៅលើដើម" },
          },
          {
            src: "image/Tomato/Picture16.png",
            label: { en: "Sliced", km: "កាត់" },
          },
        ],
        features: {
          en: [
            "Harvesting: 65 to 70 days after direct planting.",
            "Plant Characteristics: Strong, healthy stems with many branches, grows quickly, produces many fruits, and fruits are uniform",
            "Fruit Shape: Large and roundish at the top and tapered (pointed) at the bottom, like an egg (egg-shaped). Tender glossy green color (when young/unripe) and red when ripe.",
            "Fruit Weight: Between 100 to 120 grams per fruit.",
            "Growing Season: All year round.",
            "Disease Resistance: Tolerant to weather, resistant to Bacterial Wilt (BW), fresh wilting/damping off, and Alternaria virus.",
          ],
          km: [
            "អាយុប្រមូលផល៖៦៥ ទៅ៧០ ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "លក្ខណៈដើម៖ដើមរឹងមាំល្អ មានមែកច្រើន និងមែកច្រើន លូតលាស់លឿន ផ្លែច្រើន ផ្លែមានឯកសណ្ឋាន",
            "ទំរង់ផ្លែ៖ផ្លែរាងធំខាងក្បាល និងស្តួចខាងក្រោម ដូចពងមាន់ ពណ៌បៃតងរលោងខ្ចី(ផ្លែខ្ចី) និងក្រហមពេលទុំ",
            "ទំងន់ផ្លែ៖ចន្លោះពី ១០០ ទៅ ១២០ក្រាម /ផ្លែ",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
            "ធន់អាកាសធាតុ ធន់នឹងជម្ងឺស្វិតស្រពោនស្រស់ និងវិរុស BW & Alternaria",
          ],
        },
        planting: {
          distance: {
            en: "1.5 m bed distance, 0.75 m between rows",
            km: "ចម្ងាយគ្រែ ១.៥ ម៉ែត្រ ០.៧៥ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.4 - 0.5 m between plants",
            km: "០.៤ - ០.៥ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "2500 - 2000 plants/1000m²",
            km: "២៥០០ - ២០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Ploughing and harrowing the soil should be done twice.",
            "Air-dry the soil thoroughly for 10–15 days.",
            "Raise the beds to a height of 25-30cm, with a bed width of 120cm and an alley/gap between beds of 75cm.",
          ],
          km: [
            "ការភ្ជួរ និងរាស់ដីឱ្យបាន ២ដង",
            "ហាលដីឱ្យស្ងួតល្អរយៈពេលពី ១០-១៥ថ្ងៃ",
            "លើករងកម្ពស់ពី ២៥-៣០ ស.ម ទទឹងរង ១២០ស.ម និងចន្លោះរង ៧៥ ស.ម",
          ],
        },
        cultivation: {
          en: [
            "Tomato seeds should be sun-dried for 1–2 hours.",
            "Soak them in warm water (approximately 35C) for 20 minutes.",
            "Incubate them in a damp cloth for 40–48 hours before the seeds can be placed in seed cups (kuntong) or seed trays.",
            "Water thoroughly before placing them in the nursery shed.",
            "Water twice a day.",
            "Seedlings can be transplanted after being in the nursery for 18 to 20 days.",
            "In-row spacing (between clumps): 70cm. Row spacing (between rows): 1meter. Plant 1 seedling per clump.",
            "Water the seedbed thoroughly before pulling out the seedlings for transplanting. (Plant in the afternoon or when the weather is cool).",
          ],
          km: [
            "គ្រាប់ប៉េងប៉ោះហាលថ្ងៃ ១-២ ម៉ោង ត្រាំ ទឹកក្តៅឧណ្ឌៗ ប្រហែល ៣៥ អង្សាសេ រយៈ ពេល២០នាទីផ្អាប់ក្នុងក្រណាត់សើម ៤០-៤៨ម៉ោងទើប អាចយកគ្រាប់ទៅដាក់ក្នុងកន្ទោងឬថាសបណ្តុះ",
            "ស្រោចទឹកឲ្យជោកទើបអាចយកទៅដាក់ក្នុងរោងបណ្តុះ",
            "ស្រោចទឹកមួយថ្ងៃ២ដង",
            "អាចយកកូនទៅដាំបន្ទាប់ពីបណ្តុះបានរយៈពេល១៨ ទៅ២០ថ្ងៃ",
            "ចន្លោះគុម្ព ៧០ ស.ម ចន្លោះជួរ ១ ម និង ដាំក្នុង១គុម្ព ១ដើម។",
            "ត្រូវស្រោចទឹកលើថ្នាលឱ្យជោគមុនពេល ដកកូនយកទៅដាំ (ដាំនៅពេលរសៀលឬពេល មេឃត្រជាក់)។",
          ],
        },
        irrigation: {
          en: [
            "Water consistently, especially during dry periods",
            "Aim for deep watering to encourage deep root growth",
            "Water at the base of the plant to avoid wetting foliage",
            "Avoid overwatering, which can lead to root rot",
            "Mulching helps maintain consistent soil moisture",
          ],
          km: [
            "ស្រោចទឹកជាប្រចាំ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ព្យាយាមស្រោចទឹកឱ្យជ្រៅ ដើម្បីលើកទឹកចិត្តឱ្យឫសលូតលាស់ជ្រៅ",
            "ស្រោចទឹកនៅគល់រុក្ខជាតិ ដើម្បីជៀសវាងការសើមស្លឹក",
            "ជៀសវាងការស្រោចទឹកច្រើនពេក ដែលអាចនាំឱ្យឫសរលួយ",
            "ការដាក់ស្រោមគ្របជួយរក្សាសំណើមដីឱ្យស្ថិរភាព",
          ],
        },
      },
      {
        src: "/placeholder.svg?height=350&width=450",
        title: { en: "Coming Soon!", km: "មកដល់ឆាប់ៗ" },
        info: { en: "Sweet and delicious.", km: "ផ្អែមឆ្ងាញ់" },
        // weight: "18 grams/pkt",
        // views: 934,
        // gallery: [
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cob", km: "ផ្លែ" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cooked", km: "ឆ្អិន" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Harvest", km: "ប្រមូលផល" },
        //   },
        // ],
        // features: {
        //   en: [
        //     "Tender and juicy",
        //     "Harvesting: 70 - 80 days after sowing",
        //     "Ear size: 16 - 20 cm length",
        //     "Excellent for fresh consumption",
        //     "Yield: 2 - 3 ears per plant",
        //   ],
        //   km: [
        //     "ទន់ និងមានទឹក",
        //     "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
        //     "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
        //     "ល្អឥតខ្ចោះសម្រាប់ស៊ីស្រស់",
        //     "ទិន្នផល: ២ - ៣ ផ្លែ/ដើម",
        //   ],
        // },
        // planting: {
        //   distance: {
        //     en: "1.8 m bed distance, 0.9 m between rows",
        //     km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
        //   },
        //   plantDistance: {
        //     en: "0.25 - 0.30 m between plants",
        //     km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
        //   },
        //   density: {
        //     en: "5500 - 5000 plants/1000m²",
        //     km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
        //   },
        // },
        // landPreparation: {
        //   en: [
        //     "Corn thrives in well-drained, fertile soil with plenty of organic matter",
        //     "Till the soil to a depth of about 25 cm",
        //     "Add compost or well-rotted manure before planting",
        //     "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
        //     "Break up any clods of soil for a fine seedbed",
        //   ],
        //   km: [
        //     "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
        //     "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
        //     "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
        //     "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
        //     "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
        //   ],
        // },
        // cultivation: {
        //   en: [
        //     "Sow seeds directly outdoors after all danger of frost has passed",
        //     "Plant seeds about 3-4 cm deep",
        //     "Space plants approximately 25-30 cm apart",
        //     "Ensure good air circulation by planting in blocks",
        //     "Fertilize regularly, especially with nitrogen",
        //   ],
        //   km: [
        //     "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
        //     "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
        //     "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
        //     "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
        //     "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
        //   ],
        // },
        // irrigation: {
        //   en: [
        //     "Corn has high water needs, especially during tasseling and silking stages",
        //     "Water deeply and consistently",
        //     "Avoid letting the soil dry out completely",
        //     "Drip irrigation or soaker hoses are effective",
        //     "Adjust watering based on rainfall and soil moisture",
        //   ],
        //   km: [
        //     "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
        //     "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
        //     "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
        //     "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
        //     "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
        //   ],
        // },
      },
      {
        src: "/placeholder.svg?height=350&width=450",
        title: { en: "Coming Soon!", km: "មកដល់ឆាប់ៗ" },
        info: { en: "Sweet and delicious.", km: "ផ្អែមឆ្ងាញ់" },
        // weight: "18 grams/pkt",
        // views: 934,
        // gallery: [
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cob", km: "ផ្លែ" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cooked", km: "ឆ្អិន" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Harvest", km: "ប្រមូលផល" },
        //   },
        // ],
        // features: {
        //   en: [
        //     "Tender and juicy",
        //     "Harvesting: 70 - 80 days after sowing",
        //     "Ear size: 16 - 20 cm length",
        //     "Excellent for fresh consumption",
        //     "Yield: 2 - 3 ears per plant",
        //   ],
        //   km: [
        //     "ទន់ និងមានទឹក",
        //     "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
        //     "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
        //     "ល្អឥតខ្ចោះសម្រាប់ស៊ីស្រស់",
        //     "ទិន្នផល: ២ - ៣ ផ្លែ/ដើម",
        //   ],
        // },
        // planting: {
        //   distance: {
        //     en: "1.8 m bed distance, 0.9 m between rows",
        //     km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
        //   },
        //   plantDistance: {
        //     en: "0.25 - 0.30 m between plants",
        //     km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
        //   },
        //   density: {
        //     en: "5500 - 5000 plants/1000m²",
        //     km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
        //   },
        // },
        // landPreparation: {
        //   en: [
        //     "Corn thrives in well-drained, fertile soil with plenty of organic matter",
        //     "Till the soil to a depth of about 25 cm",
        //     "Add compost or well-rotted manure before planting",
        //     "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
        //     "Break up any clods of soil for a fine seedbed",
        //   ],
        //   km: [
        //     "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
        //     "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
        //     "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
        //     "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
        //     "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
        //   ],
        // },
        // cultivation: {
        //   en: [
        //     "Sow seeds directly outdoors after all danger of frost has passed",
        //     "Plant seeds about 3-4 cm deep",
        //     "Space plants approximately 25-30 cm apart",
        //     "Ensure good air circulation by planting in blocks",
        //     "Fertilize regularly, especially with nitrogen",
        //   ],
        //   km: [
        //     "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
        //     "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
        //     "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
        //     "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
        //     "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
        //   ],
        // },
        // irrigation: {
        //   en: [
        //     "Corn has high water needs, especially during tasseling and silking stages",
        //     "Water deeply and consistently",
        //     "Avoid letting the soil dry out completely",
        //     "Drip irrigation or soaker hoses are effective",
        //     "Adjust watering based on rainfall and soil moisture",
        //   ],
        //   km: [
        //     "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
        //     "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
        //     "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
        //     "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
        //     "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
        //   ],
        // },
      },
    ],
  },
  watermelon: {
    name: { en: "Watermelon", km: "ឪឡឹក" },
    desc: {
      en: "Disease-resistant and high-yielding, with sweet, delicious red flesh, and perfectly suited for tropical climates.",
      km: "ធន់នឹងជម្ងឺ ផ្តល់ ទិន្នផលខ្ពស់ ផ្លែមានសាច់ក្រហម ផ្អែមឈ្ងុយឆ្ងាញ់ និង ល្អឥតខ្ចោះសម្រាប់អាកាសធាតុត្រូពិច។",
    },
    imgs: [
      {
        src: "image/General/Picture7.png",
        title: {
          en: "Watermelon Ktoeb OP Nacha variety",
          km: "ឪឡឹកក្តឹប OP ពូជ ណាចា",
        },
        info: {
          en: "Grows strong, resistant to weather, especially rainy & dry seasons.",
          km: "លូតលាស់ខ្លាំង ធន់នឹងអាកាសធាតុ ពិសេស រដូវ ភ្លៀង & រំហើយ។",
        },
        weight: "10 grams/pkt",
        views: 1024,
        gallery: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9fCBKJQBePsYDotbJV_02uMKc2_pAan0icUJAect0sKkhn_O31qj-fEeEAJPnzN4B2w&usqp=CAU",
            label: { en: "Whole", km: "ទាំងមូល" },
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkxeogoRYZ1LuzVJhsPDO4PrPNyrmSWIDkTSKvHTkqVlo5qbQmqxS_EtxEPacA2Ly8A8&usqp=CAU",
            label: { en: "Sliced", km: "កាត់" },
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_lrPtm26QHtlv5rIoARmmBhHVt168ysL-A&s",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Large fruit: 8-12 kg per fruit",
            "Harvesting: 85 - 95 days after sowing",
            "Deep red flesh, very sweet",
            "High sugar content (12-14 Brix)",
            "Yield: 30 - 40 kg/plant",
          ],
          km: [
            "ផ្លែធំ: ៨-១២ គីឡូក្រាម/ផ្លែ",
            "ប្រមូលផល: ៨៥ - ៩៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ស្លឹកក្រហមចាស់ ផ្អែមខ្លាំង",
            "មានជាតិស្ករខ្ពស់ (១២-១៤ ប្រ៊ីក)",
            "ទិន្នផល: ៣០ - ៤០ គីឡូក្រាម/ដើម",
          ],
        },
        planting: {
          distance: {
            en: "7.0 m bed distance, 3.5 m between rows",
            km: "ចម្ងាយគ្រែ ៧.០ ម៉ែត្រ ៣.៥ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "2.0 - 2.5 m between plants",
            km: "២.០ - ២.៥ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "200 - 150 plants/1000m²",
            km: "២០០ - ១៥០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Select a sunny location with well-drained sandy loam soil",
            "Till soil deeply (30-40 cm) and incorporate organic matter",
            "Create large mounds for planting to improve drainage and warmth",
            "Ensure soil pH is between 6.0 and 6.8",
            "Ample space is needed for vines to spread",
          ],
          km: [
            "ជ្រើសរើសទីតាំងដែលមានពន្លឺព្រះអាទิตย์ និងដីខ្សាច់មានជីជាតិល្អ",
            "ភ្ជួរដីឱ្យជ្រៅ (៣០-៤០ សង់ទីម៉ែត្រ) និងបញ្ចូលសារធាតុសរីរាង្គ",
            "បង្កើតភ្នំធំសម្រាប់ដាំ ដើម្បីបង្កើនការបង្ហូរទឹក និងភាពកក់ក្តៅ",
            "ធានាថា pH ដីស្ថិតនៅចន្លោះ ៦.០ ទៅ ៦.៨",
            "ត្រូវការកន្លែងគ្រប់គ្រាន់សម្រាប់វល្លិ៍លាតសន្ធឹង",
          ],
        },
        cultivation: {
          en: [
            "Start seeds indoors 3-4 weeks before the last frost or sow directly outdoors after frost",
            "Plant 2-3 seeds per mound and thin to the strongest seedling",
            "Keep soil consistently moist, especially during germination and early growth",
            "Once vines begin to run, reduce watering slightly to prevent fruit splitting",
            "Pollination is crucial; ensure bees are present",
          ],
          km: [
            "ចាប់ផ្តើមសាបព្រោះគ្រាប់ក្នុងផ្ទះ ៣-៤ សប្តាហ៍ មុនពេលសាយសត្វចុងក្រោយ ឬសាបព្រោះដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីសាយសត្វ",
            "ដាំ ២-៣ គ្រាប់ក្នុងមួយភ្នំ ហើយជ្រើសរើសយកតែមួយដើមដែលរឹងមាំបំផុត",
            "រក្សាសំណើមដីឱ្យស្ថិរភាព ជាពិសេសអំឡុងពេលដំណុះ និងការលូតលាស់ដំបូង",
            "នៅពេលវល្លិ៍ចាប់ផ្តើមលូតលាស់ សូមកាត់បន្ថយការស្រោចទឹកបន្តិច ដើម្បីការពារផ្លែបែក",
            "ការបង្កកំណើតគឺមានសារៈសំខាន់; ធានាថាមានឃ្មុំវត្តមាន",
          ],
        },
        irrigation: {
          en: [
            "Water deeply and consistently, especially during hot, dry weather",
            "Avoid wetting the foliage; use drip irrigation or water at the base",
            "Water requirements are highest during flowering and fruit development",
            "Fruit quality is affected by watering consistency; uneven watering can lead to cracking",
            "Reduce watering as fruits approach maturity to concentrate sugars",
          ],
          km: [
            "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព ជាពិសេសអំឡុងពេលអាកាសធាតុក្តៅ និងស្ងួត",
            "ជៀសវាងការសើមស្លឹក; ប្រើប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬស្រោចទឹកនៅគល់",
            "តម្រូវការទឹកមានកម្រិតខ្ពស់បំផុត ក្នុងដំណាក់កាលចេញផ្កា និងអភិវឌ្ឍន៍ផ្លែ",
            "គុណភាពផ្លែត្រូវបានជះឥទ្ធិពលដោយភាពស្ថិរភាពនៃការស្រោចទឹក; ការស្រោចទឹកមិនស្មើគ្នាអាចនាំឱ្យប្រេះ",
            "កាត់បន្ថយការស្រោចទឹក នៅពេលផ្លែជិតទុំ ដើម្បីបង្កើនជាតិស្ករ",
          ],
        },
      },
      {
        src: "/placeholder.svg?height=350&width=450",
        title: { en: "Coming Soon!", km: "មកដល់ឆាប់ៗ" },
        info: { en: "Sweet and delicious.", km: "ផ្អែមឆ្ងាញ់" },
        // weight: "18 grams/pkt",
        // views: 934,
        // gallery: [
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cob", km: "ផ្លែ" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cooked", km: "ឆ្អិន" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Harvest", km: "ប្រមូលផល" },
        //   },
        // ],
        // features: {
        //   en: [
        //     "Tender and juicy",
        //     "Harvesting: 70 - 80 days after sowing",
        //     "Ear size: 16 - 20 cm length",
        //     "Excellent for fresh consumption",
        //     "Yield: 2 - 3 ears per plant",
        //   ],
        //   km: [
        //     "ទន់ និងមានទឹក",
        //     "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
        //     "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
        //     "ល្អឥតខ្ចោះសម្រាប់ស៊ីស្រស់",
        //     "ទិន្នផល: ២ - ៣ ផ្លែ/ដើម",
        //   ],
        // },
        // planting: {
        //   distance: {
        //     en: "1.8 m bed distance, 0.9 m between rows",
        //     km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
        //   },
        //   plantDistance: {
        //     en: "0.25 - 0.30 m between plants",
        //     km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
        //   },
        //   density: {
        //     en: "5500 - 5000 plants/1000m²",
        //     km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
        //   },
        // },
        // landPreparation: {
        //   en: [
        //     "Corn thrives in well-drained, fertile soil with plenty of organic matter",
        //     "Till the soil to a depth of about 25 cm",
        //     "Add compost or well-rotted manure before planting",
        //     "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
        //     "Break up any clods of soil for a fine seedbed",
        //   ],
        //   km: [
        //     "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
        //     "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
        //     "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
        //     "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
        //     "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
        //   ],
        // },
        // cultivation: {
        //   en: [
        //     "Sow seeds directly outdoors after all danger of frost has passed",
        //     "Plant seeds about 3-4 cm deep",
        //     "Space plants approximately 25-30 cm apart",
        //     "Ensure good air circulation by planting in blocks",
        //     "Fertilize regularly, especially with nitrogen",
        //   ],
        //   km: [
        //     "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
        //     "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
        //     "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
        //     "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
        //     "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
        //   ],
        // },
        // irrigation: {
        //   en: [
        //     "Corn has high water needs, especially during tasseling and silking stages",
        //     "Water deeply and consistently",
        //     "Avoid letting the soil dry out completely",
        //     "Drip irrigation or soaker hoses are effective",
        //     "Adjust watering based on rainfall and soil moisture",
        //   ],
        //   km: [
        //     "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
        //     "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
        //     "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
        //     "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
        //     "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
        //   ],
        // },
      },
      {
        src: "/placeholder.svg?height=350&width=450",
        title: { en: "Coming Soon!", km: "មកដល់ឆាប់ៗ" },
        info: { en: "Sweet and delicious.", km: "ផ្អែមឆ្ងាញ់" },
        // weight: "18 grams/pkt",
        // views: 934,
        // gallery: [
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cob", km: "ផ្លែ" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cooked", km: "ឆ្អិន" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Harvest", km: "ប្រមូលផល" },
        //   },
        // ],
        // features: {
        //   en: [
        //     "Tender and juicy",
        //     "Harvesting: 70 - 80 days after sowing",
        //     "Ear size: 16 - 20 cm length",
        //     "Excellent for fresh consumption",
        //     "Yield: 2 - 3 ears per plant",
        //   ],
        //   km: [
        //     "ទន់ និងមានទឹក",
        //     "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
        //     "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
        //     "ល្អឥតខ្ចោះសម្រាប់ស៊ីស្រស់",
        //     "ទិន្នផល: ២ - ៣ ផ្លែ/ដើម",
        //   ],
        // },
        // planting: {
        //   distance: {
        //     en: "1.8 m bed distance, 0.9 m between rows",
        //     km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
        //   },
        //   plantDistance: {
        //     en: "0.25 - 0.30 m between plants",
        //     km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
        //   },
        //   density: {
        //     en: "5500 - 5000 plants/1000m²",
        //     km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
        //   },
        // },
        // landPreparation: {
        //   en: [
        //     "Corn thrives in well-drained, fertile soil with plenty of organic matter",
        //     "Till the soil to a depth of about 25 cm",
        //     "Add compost or well-rotted manure before planting",
        //     "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
        //     "Break up any clods of soil for a fine seedbed",
        //   ],
        //   km: [
        //     "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
        //     "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
        //     "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
        //     "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
        //     "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
        //   ],
        // },
        // cultivation: {
        //   en: [
        //     "Sow seeds directly outdoors after all danger of frost has passed",
        //     "Plant seeds about 3-4 cm deep",
        //     "Space plants approximately 25-30 cm apart",
        //     "Ensure good air circulation by planting in blocks",
        //     "Fertilize regularly, especially with nitrogen",
        //   ],
        //   km: [
        //     "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
        //     "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
        //     "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
        //     "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
        //     "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
        //   ],
        // },
        // irrigation: {
        //   en: [
        //     "Corn has high water needs, especially during tasseling and silking stages",
        //     "Water deeply and consistently",
        //     "Avoid letting the soil dry out completely",
        //     "Drip irrigation or soaker hoses are effective",
        //     "Adjust watering based on rainfall and soil moisture",
        //   ],
        //   km: [
        //     "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
        //     "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
        //     "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
        //     "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
        //     "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
        //   ],
        // },
      },
    ],
  },
  corn: {
    name: { en: "Corn", km: "ពោត" },
    desc: {
      en: "Corn seeds grow fast, are weather resistant and yield high yields.",
      km: "គ្រាប់ពូជពោតដុះលឿន ធន់និងអាកាសធាតុ និងទទួលបានទិន្នផលខ្ពស់។",
    },
    imgs: [
      {
        // src: "image/Picture8.png",
        src: "image/corn/corn1.jpg",

        title: {
          en: "Corn F1 Koh Prak variety.",
          km: "ពោតដំំណើប F1 ពូជកោះប្រាក់។",
        },
        info: {
          en: "Fruit length 20.5-22cm, diameter 5-5.5cm.",
          km: "ប្រវែងផ្លែ 20.5-22cm មុខកាត់ 5-5.5cm។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/corn/corn1.jpg",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/corn/corn2.jpg",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/corn/corn3.webp",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Variety type: F1 Hybrid",
            "Harvest period: 65–66 days after direct sowing; 67–75 days after direct sowing in the cool season",
            "Plant characteristics: The plant is cylindrical light green, strong and vigorous, with a height of 1.6–2 m. Leaves are broad, with leaf length 65–112 cm. Roots have 14–16 nodes downward. Resistant to lodging (falling over) and tolerant to Cambodian climate conditions.",
            "Fruit characteristics: Fruit length 20.5–22 cm, diameter 5–5.5 cm. Has a small core, with 14–16 kernel rows, and 35–38 kernels per row. Kernels are white and tightly packed.",
            "Growing season: Can be grown throughout the entire year.",
          ],
          km: [
            "ប្រភេទពូជ៖ បង្កាត់F1",
            "អាយុប្រមូលផល៖65 ទៅ 66 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់67 ទៅ 75 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់ នៅរដូវរំហើយ",
            "លក្ខណៈដើម៖ដើមបៃតងមូល រឹងមាំ កំពស់ 1.6-2m ជាមួយស្លឹកសំបែតទ្រវែងស្រួចចុងប្រវែង= 65-112cm ឬសចន្លោះ14-16 ចុះក្រោម ធន់នឹងការរលំ ធន់នឹងអាកាសធាតុស្រុកខ្មែរ",
            "លក្ខណៈផ្លែ៖ប្រវែងផ្លែ 20.5-22cm មុខកាត់ 5-5.5cm។ មានស្នូលតួច ជាមួយ គ្រាប់ 14-16ជួរ ក្នុង1ជួរ =35-38គ្រាប់, គ្រាប់ពណ៌សរ និង ស្អិតរមួត",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Dry season: Plow and loosen the soil well to retain moisture for longer. After plowing, expose the soil to sunlight for 5–15 days.",
            "Wet season: It is not necessary to finely loosen the soil because heavy rains can cause compaction. In the rainy season, plow the soil 1–2 times to kill weeds, insects, and diseases, and also to improve soil aeration.",
          ],
          km: [
            "នៅរដូវប្រាំង ការភ្ជួររាស់ដីត្រូវអោយបានម៉ដ្ឋល្អ ដើម្បីរក្សាសំណើមក្នុងដីបាន យូរ ហើយអាចភ្ជួរដី ហាលពី ៥.១៥ ថ្ងៃ ។",
            "នៅរដូវវស្សា គេពុំចាំបាច់ធ្វើដីឱ្យម៉ដ្ឋពេកទេ ព្រោះអាចបណ្តាលឱ្យដីឆាប់ ហាប់ ក្រោយពីភ្លៀង ធ្លាក់ ។ ការភ្ជួរហាលដីក្នុងរដូវនេះ ត្រូវធ្វើឱ្យបាន ពី១ដងទៅ២ដង ដើម្បីសំលាប់ស្មៅចង្រៃ, សត្វល្អិត, ជំងឺ ព្រមទាំង បង្កើនបន្ទុកខ្យល់ក្នុងដីឱ្យបានល្អថែមទៀត ។",
          ],
        },
        cultivation: {
          en: [
            "For 1 hectare of land, 25–30 kg of seed is required.",
            "Can be directly sown or transplanted.",
            "Use row spacing of 75 cm and plant spacing of 30–40 cm to make weeding and fertilizing easier.",
            "Plant 1 seedling per planting hole / per hill.",
          ],
          km: [
            "ក្នុងផ្ទៃដី ១ ហិកតា គេត្រូវប្រើគ្រាប់ពូជពី ២៥-៣០ គក្រ ។",
            "អាចដាំគ្រាប់ផ្ទាល់ និងដាំកូន",
            "ប្រើចន្លោះជួរ ៧៥ សម និងចន្លោះគុម្ព៣០-៤០ សម ទុកចន្លោះបែបនេះដើម្បីងាយស្រួលសម្អាត ស្មៅនិងដាក់ជី",
            "ក្នុងមួយគុម្ពដាំមួយដើម",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/Corn/corn4.webp",
        title: {
          en: "Tri-color corn, Ratha 007 variety.",
          km: "ពោតដំណើប បីពណ៌ ពូជ​ រដ្ឋា007។",
        },
        info: {
          en: "In 1 row = 35-38 seeds, white, maroon and yellow, sweet and sticky.",
          km: "ក្នុង1ជួរ =35-38គ្រាប់ គ្រាប់ពណ៌សរ ឈាមជ្រូក និងលឿង ផ្អែម និងស្អិតរមួត។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/Corn/corn4.webp",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/Corn/corn5.jpg",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            scr: "",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Variety type: F1 Hybrid",
            "Harvest period: 65–66 days after direct sowing; 67–75 days after direct sowing in the cool season",
            "Plant characteristics: The plant is cylindrical light green, strong and vigorous, with a height of 1.6–2 m. Leaves are broad, with leaf length 65–112 cm. Roots have 14–16 nodes downward. Resistant to lodging (falling over) and tolerant to Cambodian climate conditions.",
            "Fruit characteristics: Fruit length 20.5–22 cm, diameter 5–5.5 cm. Has a small core, with 14–16 kernel rows, and 35–38 kernels per row. Kernels are white and tightly packed.",
            "Growing season: Can be grown throughout the entire year.",
          ],
          km: [
            "ប្រភេទពូជ៖ បង្កាត់F1",
            "អាយុប្រមូលផល៖65 ទៅ 66 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់67 ទៅ 75 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់ នៅរដូវរំហើយ",
            "លក្ខណៈដើម៖ដើមបៃតងមូល រឹងមាំ កំពស់ 1.6-2m ជាមួយស្លឹកសំបែតទ្រវែងស្រួចចុងប្រវែង= 65-112cm ឬសចន្លោះ14-16 ចុះក្រោម ធន់នឹងការរលំ ធន់នឹងអាកាសធាតុស្រុកខ្មែរ",
            "លក្ខណៈផ្លែ៖ប្រវែងផ្លែ 20.5-22cm មុខកាត់ 5-5.5cm។ មានស្នូលតួច ជាមួយ គ្រាប់ 14-16ជួរ ក្នុង1ជួរ =35-38គ្រាប់, គ្រាប់ពណ៌សរ និង ស្អិតរមួត",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Dry season: Plow and loosen the soil well to retain moisture for longer. After plowing, expose the soil to sunlight for 5–15 days.",
            "Wet season: It is not necessary to finely loosen the soil because heavy rains can cause compaction. In the rainy season, plow the soil 1–2 times to kill weeds, insects, and diseases, and also to improve soil aeration.",
          ],
          km: [
            "នៅរដូវប្រាំង ការភ្ជួររាស់ដីត្រូវអោយបានម៉ដ្ឋល្អ ដើម្បីរក្សាសំណើមក្នុងដីបាន យូរ ហើយអាចភ្ជួរដី ហាលពី ៥.១៥ ថ្ងៃ ។",
            "នៅរដូវវស្សា គេពុំចាំបាច់ធ្វើដីឱ្យម៉ដ្ឋពេកទេ ព្រោះអាចបណ្តាលឱ្យដីឆាប់ ហាប់ ក្រោយពីភ្លៀង ធ្លាក់ ។ ការភ្ជួរហាលដីក្នុងរដូវនេះ ត្រូវធ្វើឱ្យបាន ពី១ដងទៅ២ដង ដើម្បីសំលាប់ស្មៅចង្រៃ, សត្វល្អិត, ជំងឺ ព្រមទាំង បង្កើនបន្ទុកខ្យល់ក្នុងដីឱ្យបានល្អថែមទៀត ។",
          ],
        },
        cultivation: {
          en: [
            "For 1 hectare of land, 25–30 kg of seed is required.",
            "Can be directly sown or transplanted.",
            "Use row spacing of 75 cm and plant spacing of 30–40 cm to make weeding and fertilizing easier.",
            "Plant 1 seedling per planting hole / per hill.",
          ],
          km: [
            "ក្នុងផ្ទៃដី ១ ហិកតា គេត្រូវប្រើគ្រាប់ពូជពី ២៥-៣០ គក្រ ។",
            "អាចដាំគ្រាប់ផ្ទាល់ និងដាំកូន",
            "ប្រើចន្លោះជួរ ៧៥ សម និងចន្លោះគុម្ព៣០-៤០ សម ទុកចន្លោះបែបនេះដើម្បីងាយស្រួលសម្អាត ស្មៅនិងដាក់ជី",
            "ក្នុងមួយគុម្ពដាំមួយដើម",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/Corn/corn6.webp",
        title: {
          en: "Sweet corn, F1 Hawaiian corn variety.",
          km: "ពោតផ្អែម ពូជពោតហាវ៉ៃ F1។",
        },
        info: {
          en: "In 1 row = 35-38 seeds, yellow, sweet seeds.",
          km: "ក្នុង1ជួរ =35-38គ្រាប់,​គ្រាប់ពណ៌លឿង រស់ផ្អែម។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Corn/corn6.webp",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Corn/corn7.avif",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Corn/corn8.webp",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Variety type: F1 Hybrid",
            "Harvest period: 65–66 days after direct sowing; 67–75 days after direct sowing in the cool season",
            "Plant characteristics: The plant is cylindrical light green, strong and vigorous, with a height of 1.6–2 m. Leaves are broad, with leaf length 65–112 cm. Roots have 14–16 nodes downward. Resistant to lodging (falling over) and tolerant to Cambodian climate conditions.",
            "Fruit characteristics: Fruit length 20.5–22 cm, diameter 5–5.5 cm. Has a small core, with 14–16 kernel rows, and 35–38 kernels per row. Kernels are white and tightly packed.",
            "Growing season: Can be grown throughout the entire year.",
          ],
          km: [
            "ប្រភេទពូជ៖ បង្កាត់F1",
            "អាយុប្រមូលផល៖65 ទៅ 66 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់67 ទៅ 75 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់ នៅរដូវរំហើយ",
            "លក្ខណៈដើម៖ដើមបៃតងមូល រឹងមាំ កំពស់ 1.6-2m ជាមួយស្លឹកសំបែតទ្រវែងស្រួចចុងប្រវែង= 65-112cm ឬសចន្លោះ14-16 ចុះក្រោម ធន់នឹងការរលំ ធន់នឹងអាកាសធាតុស្រុកខ្មែរ",
            "លក្ខណៈផ្លែ៖ប្រវែងផ្លែ 20.5-22cm មុខកាត់ 5-5.5cm។ មានស្នូលតួច ជាមួយ គ្រាប់ 14-16ជួរ ក្នុង1ជួរ =35-38គ្រាប់, គ្រាប់ពណ៌សរ និង ស្អិតរមួត",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Dry season: Plow and loosen the soil well to retain moisture for longer. After plowing, expose the soil to sunlight for 5–15 days.",
            "Wet season: It is not necessary to finely loosen the soil because heavy rains can cause compaction. In the rainy season, plow the soil 1–2 times to kill weeds, insects, and diseases, and also to improve soil aeration.",
          ],
          km: [
            "នៅរដូវប្រាំង ការភ្ជួររាស់ដីត្រូវអោយបានម៉ដ្ឋល្អ ដើម្បីរក្សាសំណើមក្នុងដីបាន យូរ ហើយអាចភ្ជួរដី ហាលពី ៥.១៥ ថ្ងៃ ។",
            "នៅរដូវវស្សា គេពុំចាំបាច់ធ្វើដីឱ្យម៉ដ្ឋពេកទេ ព្រោះអាចបណ្តាលឱ្យដីឆាប់ ហាប់ ក្រោយពីភ្លៀង ធ្លាក់ ។ ការភ្ជួរហាលដីក្នុងរដូវនេះ ត្រូវធ្វើឱ្យបាន ពី១ដងទៅ២ដង ដើម្បីសំលាប់ស្មៅចង្រៃ, សត្វល្អិត, ជំងឺ ព្រមទាំង បង្កើនបន្ទុកខ្យល់ក្នុងដីឱ្យបានល្អថែមទៀត ។",
          ],
        },
        cultivation: {
          en: [
            "For 1 hectare of land, 25–30 kg of seed is required.",
            "Can be directly sown or transplanted.",
            "Use row spacing of 75 cm and plant spacing of 30–40 cm to make weeding and fertilizing easier.",
            "Plant 1 seedling per planting hole / per hill.",
          ],
          km: [
            "ក្នុងផ្ទៃដី ១ ហិកតា គេត្រូវប្រើគ្រាប់ពូជពី ២៥-៣០ គក្រ ។",
            "អាចដាំគ្រាប់ផ្ទាល់ និងដាំកូន",
            "ប្រើចន្លោះជួរ ៧៥ សម និងចន្លោះគុម្ព៣០-៤០ សម ទុកចន្លោះបែបនេះដើម្បីងាយស្រួលសម្អាត ស្មៅនិងដាក់ជី",
            "ក្នុងមួយគុម្ពដាំមួយដើម",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
    ],
  },
  wax_gourd: {
    name: { en: "Winter Melon", km: "ត្រឡាច" },
    desc: {
      en: "The winter melon is resistant to disease and can be grown in all climates and has high yields.",
      km: "ត្រឡាចធន់និងជម្ងឺ ដាំដុះបានគ្រប់អាកាសធាតុ និងទទួលបានទិន្នផលខ្ពស់។",
    },
    imgs: [
      {
        src: "image/WinterMelon/winter1.jpg",
        title: {
          en: "Winter melon F1 Athon variety",
          km: "ត្រឡាច F1 ពូជ អាធន់។",
        },
        info: {
          en: "Length 18-25cm, 28-35cm per fruit, 7-8kg/tree.",
          km: "ប្រវែង18-25cm, 28-35cmក្នុងមួយផ្លែ, 7-8kg/ ដើម។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/WinterMelon/winter3.webp",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/WinterMelon/winter4.jpg",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/WinterMelon/photo_2025-10-27_14-36-38.jpg",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 32 to 35 days (small fruit), 58-65 days (large fruit) after direct planting.",
            "Fruit Color: Green and has light green speckles.",
            "Fruit Shape: Cylindrical shape.",
            "Fruit Size: Length 18-25cm, or 28-35cm.",
            "Yield: 7-8kg per plant.",
            "Growing Season: All year round (not season-dependent).",
            "This variety is disease-tolerant and easy to grow. Planting it directly on the ground yields more and better quality fruit than planting it on a trellis. It is cost-effective and does not require labor for setting up a trellis.",
          ],
          km: [
            "អាយុប្រមូលផល៖32 ទៅ35ថ្ងៃ(ផ្លែតូច) 58-65ថ្ងៃ (ផ្លែធំ)បន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតង និងមានអុតបៃតងខ្ចី",
            "ទំរង់ថ្លៃ៖រាងជាស៊ីឡាង",
            "ទំហំផ្លែ៖ប18-25cm, ប 28-35cm",
            "ទិន្នផល៖7-8kg/ ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ(មិនប្រកាន់រដូវ)",
            "ពូជនេះធន់នឹងជម្ងឺ ងាយស្រួលដាំ ។ ការដាំ ដោយវាលើដីផ្ទាល់មានផ្លែច្រើន និងល្អ ជាងការដាំដោយដាក់ទ្រើង។ចំណេញថវិការមិនចាំបាច់ចំណាយកម្លាំងក្នុងការលើកទ្រើង។",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plant on raised beds with a width of 300cm, with a spacing of 250cm between rows and 150cm between hills (planting clumps).",
            "The number of plants per hill is 2 to 3 plants.",
            "Generally, before planting, holes are dug on the bed, and 0.5kg of compost is mixed with fertilizer 15.15.15 or 18.46.0 in an amount of 100 to 150 grams per hole.",
          ],
          km: [
            "ដាំលើករងទទឹងរង៣០០ ស.ម ចន្លោះ ជួរ ២៥០ស.ម ចន្លោះគុម្ព ១៥០ស.ម",
            "ចំនួនដើមក្នុងគុម្ពគឺ ២ទៅ៣ ដើម",
            "ជាទូទៅមុនពេលដាំគេកាប់ជារណ្តៅនៅលើរងហើយដាក់ជីកំប៉ុស្តិចំនួន០,៥គ.ក្រលាយជាមួយដី១៥,១៥,១៥ ឬ ១៨,៤៦,០ ចំនួន ១០០ ទៅ ១៥០ ក្រាម ក្នុងមួយរណ្តៅ ។",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly when soil temperature is at least 10°C",
            "Plant seeds 2.5-5 cm deep",
            "Space plants about 25-30 cm apart in rows 75-90 cm apart",
            "Keep the soil consistently moist, especially during tasseling and silking",
            "Control weeds, especially when plants are young",
          ],
          km: [
            "សាបព្រោះគ្រាប់ដោយផ្ទាល់ នៅពេលសីតុណ្ហភាពដីមានយ៉ាងហោចណាស់ ១០°C",
            "ដាំគ្រាប់ឱ្យជ្រៅ ២.៥-៥ សង់ទីម៉ែត្រ",
            "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ ក្នុងជួរដែលមានចម្ងាយ ៧៥-៩០ សង់ទីម៉ែត្រ",
            "រក្សាសំណើមដីឱ្យស្ថិរភាព ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
            "ទប់ស្កាត់ស្មៅ ជាពិសេសនៅពេលរុក្ខជាតិនៅក្មេង",
          ],
        },
        irrigation: {
          en: [
            "Winter melon does not require as much water as watermelon or cantaloupe; it requires moderate water like pumpkin and honeydew melon/cucumber. Irrigation can be done in several ways, such as: watering by filling water through the rows, which is done 1 to 2 times per week depending on the soil condition and temperature; watering using a sprinkler hose; and using drip irrigation.",
          ],
          km: [
            "ដំណាំត្រឡាចមិនត្រូវការទឹកខ្លាំងដូចដំណាំឪឡឹក ឬ ត្រសក់ចំណារ ឡើយវាត្រូវការទឹកមធ្យមដូចល្ពៅ និងត្រសក់ស្រូវដែរ ។ ការស្រោចស្រពបានច្រើនវិធីដូចជាៈ ស្រោចដោយបញ្ចូលទឹកតាមចន្លោះជួរគឺមួយ អាទិត្យពី ១ទៅ២លើកតាមសភាពដីនិងសីតុណ្ហភាព ការស្រោចដោយទុយយោរសាច និងការប្រើដំណក់ទឹក។",
          ],
        },
      },
      {
        src: "image/WinterMelon/Picture18.jpg",
        title: {
          en: "Winter melon F1 Dara variety.",
          km: "ត្រឡាច F1 ពូជ តារា។",
        },
        info: {
          en: "This variety is disease resistant and easy to grow.",
          km: "ពូជនេះធន់នឹងជម្ងឺ ងាយស្រួលដាំដុះ។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/WinterMelon/Picture18.jpg",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/WinterMelon/winter6.jpg",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/WinterMelon/winter5.jpg",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Tender and juicy",
            "Harvesting: 70 - 80 days after sowing",
            "Ear size: 16 - 20 cm length",
            "Excellent for fresh consumption",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "ទន់ និងមានទឹក",
            "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Corn thrives in well-drained, fertile soil with plenty of organic matter",
            "Till the soil to a depth of about 25 cm",
            "Add compost or well-rotted manure before planting",
            "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
            "Break up any clods of soil for a fine seedbed",
          ],
          km: [
            "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
            "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
            "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
            "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
            "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly outdoors after all danger of frost has passed",
            "Plant seeds about 3-4 cm deep",
            "Space plants approximately 25-30 cm apart",
            "Ensure good air circulation by planting in blocks",
            "Fertilize regularly, especially with nitrogen",
          ],
          km: [
            "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
            "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
            "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
            "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
            "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
          ],
        },
        irrigation: {
          en: [
            "Corn has high water needs, especially during tasseling and silking stages",
            "Water deeply and consistently",
            "Avoid letting the soil dry out completely",
            "Drip irrigation or soaker hoses are effective",
            "Adjust watering based on rainfall and soil moisture",
          ],
          km: [
            "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
            "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
            "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
            "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
          ],
        },
      },
    ],
  },
  bitter_melon: {
    name: { en: "Bitter Melon", km: "ម្រះ" },
    desc: {
      en: "Bitter melon has high yield and can grow well in all seasons.",
      km: "ពូជម្រះ​មាន​ទិន្នផល​ខ្ពស់ ហើយ​អាច​លូតលាស់​បាន​ល្អ​គ្រប់​រដូវកាល។",
    },
    imgs: [
      {
        src: "image/bitter/Picture18.jpg",
        title: {
          en: "Bitter melon F1 Romyol variety",
          km: "ម្រះ F1 ពូជ រំយោល",
        },
        info: {
          en: "This variety requires adequate fertilizer and water management.",
          km: "ពូជនេះត្រូវការគ្រប់គ្រងជី និងទឹកឲ្យបានគ្រាប់គ្រាន់។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/bitter/Picture18.jpg",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/bitter/bitter1.jpg",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/bitter/bitter2.jpg",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Harvesting period: 43–45 days after direct sowing.",
            "Fruit characteristics: Light green, slightly glossy, with noticeable ribbing, and medium thin skin.",
            "Fruit shape and size: Long with tapered ends, 18–20 cm × 4.9–5.2 cm.",
            "Plant yield/weight: 4.5–6 kg per plant.",
            "Plant characteristics: Strong and vigorous plant, many branches. Produces few fruits at the first stage, then increases production later. Tolerant to weather conditions and resistant to diseases.",
            "Growing season: Can be grown year-round (tolerates both rainy and hot seasons).",
            "Notes: This variety requires proper soil and water management for best growth.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤៣ ទៅ ៤៥ ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "លក្ខណៈផ្លែ៖បៃតងខ្ចី ក្រលាញឹកលីប និងខ័ណ្ឌដោយ ទ្រនង់លានដាច់ៗ, សម្បកស្តើងមធ្យម",
            "ទំរង់ផ្លែ៖ទ្រវែងស្រួចក្បាល និងកន្ទុយ 18-20cm x 4.9-5.2cm",
            "ទម្ងន់៖4.5-6kg/ដើម",
            "លក្ខណៈដើម៖ដើមរឹងមាំ មានកំលាំង មែកច្រើន ផ្លែដំបូងតិច បន្ទប់មកច្រើន ធន់អាកាស ធាតុ ធន់នឹងជម្ងឺ",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ (ធន់រដូវរំហើយ&ក្តៅ)",
            "ពូជនេះត្រូវការគ្រប់គ្រងដី និងទឹកឲ្យបាន គ្រប់គ្រាន់",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Clean the farmland and remove all weeds completely.",
            "Plow and harrow the soil finely and air-dry it for 10 to 15 days.",
            "Plow the soil (using oxen or a walking tractor) to a depth of 15 to 20centimeters.",
            "Raising the Planting Beds:",
            "Bed Width: 1meter, and the length should depend on the land availability, but it should not exceed 15 meters, as this makes maintenance difficult (such as watering, weeding, etc.)",
            "Bed Height: In the dry season, it is 20 to 30 centimeters, and in the rainy season, it is 30 to 50 centimeters.",
            "Incorporate 1 to 2 kilograms of dry animal manure or compost per square meter of bed area, burying it as a base layer by mixing it thoroughly with the bed soil.",
            "Covering the planting beds can be done in two ways to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "សំអាតដីចំការ និង រើសស្មៅចេញឱ្យអស់",
            "ភ្ជួរ រាស់ដីឲ្យបានម៉ដ្ឋល្អ ហើយហាលឱ្យបានពី១០ទៅ១៥ថ្ងៃ។",
            "ភ្ជួរដី (គោក្របី ឬ គោយន្ត) ជម្រៅពី ១៥ ទៅ ២០ សង់ទីម៉ែត្រ។",
            "ការលើករងដាំ:",
            "ទទឹងរងៈ ១ ម៉ែត្រ និង បណ្តោយទៅតាមលទ្ធភាពដី តែមិនគួរឲ្យលើពី ១៥ ម៉ែត្រ ដែលធ្វើឲ្យពិបាកក្នុង ការថែទាំ ដូចជាស្រោចទឹកដក ស្មៅជាដើម។",
            "កំពស់ នៅរដូវប្រាំង ពី២០ ទៅ៣០សង់ទីម៉ែត្រ និង នៅរដូវវស្សា ពី៣០ ទៅ ៥០សង់ទីម៉ែត្រ",
            "ដាក់លាមកសត្វស្ងួត ឬ ជីកំប៉ុស្តិ៍ ក្នុងបរិមាណពី ១ ទៅ ២ គីឡូក្រាម ក្នុងផ្ទៃដីរង១ ម៉ែត្រការ៉េកប់ ទ្រាប់បាតរងដោយច្របល់វាឲ្យសព្វល្អជាមួយដីរង។",
            "គ្របរងដាំ ធ្វើបានពីរប្រភេទដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី កាត់បន្ថយការស្មៅ។",
          ],
        },
        cultivation: {
          en: [
            "In this cultivation method, there are two methods as follows:",
            "By direct seeding: Before planting, it is necessary to loosen the soil in the hole well first, and place the seeds that have been soaked in warm water at 36 degrees and incubated in a steamer (or container) for 36 hours into a depth of 1-2 cm. After that, take compost and spread it lightly over the hole or put decomposed rice straw over the hole and water thoroughly. In about 5-7 days it will germinate. The appropriate spacing height is 30-40 cm. The row spacing is 60-70 cm. Put two seeds in one hole per hectare.",
            "Transplanting Seedlings: After the bitter melon seedlings are 7–10 days old or when they reach a height of 10–15 cm, they can be removed from the plastic bags or trays and transplanted. However, 3–4 days before transplanting, stop watering to allow the seedlings to become accustomed (or immune/hardened) to the heat. But, just before transplanting, they must be watered thoroughly. The method of cultivation is carried out in many ways depending on the region. They are planted with one seedling per hole, with 30–40 cm between clumps (in-row spacing) and 60–70 cm between rows (row spacing).",
          ],
          km: [
            "ក្នុងវិធីសាស្ត្រដាំដុះនេះគេមានវិធីពីរដូចខាងក្រោមនេះ",
            "ដោយផ្ទាល់ដី: មុននឹងដាំត្រូវជ្រុំដីនៅក្នុងរណ្តៅឲ្យផុសល្អសិន ហើយដាក់គ្រាប់ដែលបានត្រាំក្នុងទឹក ក្តៅ ៣៦អង្សារ និងផ្អាបក្នុងធុងស្ងោររយៈពេល៣៦ម៉ោង រួចចូលទៅក្នុងជម្រៅ ១-២ ស.ម បន្ទាប់មក យកជីកំប៉ុស្តិ៍មករោយពីលើឲ្យជិត ឬ ដាក់កំទេចចំបើងពុកៗ មកគ្របពីលើរណ្តៅ ហើយស្រោចទឹក ឲ្យជោគតែរយៈ ៥-៧ ថ្ងៃវានឹងដុះ។ ចន្លោះកម្ពស់ សមស្រប ៣០-៤០ ស.ម ចន្លោះជួរ ៦០-៧០ ស .ម ដាក់ពីរគ្រាប់ក្នុងមួយរណ្តៅ ក្នុងមួយហិចតា ។",
            "ដាំដោយកូន: ក្រោយពីម្រះមានអាយុពី ៧-១០ ថ្ងៃ ឬ នៅពេលវាមានកំពស់ ១០-១៥ ស.ម គេអាច ដកកូនម្រះពីប្លាស្ទិចឬត្រទៅដាំ។ ប៉ុន្តែមុនពេលដកយកទៅដាំរយៈពេល ៣-៤ ថ្ងៃ គេត្រូវផ្អាកស្រោច ទឹកដើម្បីឲ្យកូនម្រះមានភាពស៊ាំទៅនឹងកំដៅ តែមុនពេលយកទៅដាំត្រូវស្រោចទឹកឲ្យជោគ។ ការដាំ ដុះគេអនុវត្តន៍ច្រើនរបៀបអាស្រ័យតាមតំបន់។ គេដាំមួយរណ្តៅមួយដើមដោយចន្លោះគុម្ពពី ៣០-៤០ ស.ម ចន្លោះជួរ ៦០-៧០ ស.ម។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/bitter/bitter3.png",
        title: { en: "Bitter melonF1 Morokat variety", km: "ម្រះ F1 ពូជ មរកត" },
        info: {
          en: "Low initial yield, then high, weather resistant, disease resistant.",
          km: "ទិន្នផលដំបូងតិច បន្ទាប់មកច្រើន ធន់អាកាសធាតុ ធន់នឹងជម្ងឺ។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/bitter/Picture19.png",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/bitter/bitter4.jpg",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/bitter/bitter5.jpg",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Harvesting period: 43–45 days after direct sowing.",
            "Fruit characteristics: Light green, slightly glossy, with noticeable ribbing, and medium thin skin.",
            "Fruit shape and size: Long with tapered ends, 18–20 cm × 4.9–5.2 cm.",
            "Plant yield/weight: 4.5–6 kg per plant.",
            "Plant characteristics: Strong and vigorous plant, many branches. Produces few fruits at the first stage, then increases production later. Tolerant to weather conditions and resistant to diseases.",
            "Growing season: Can be grown year-round (tolerates both rainy and hot seasons).",
            "Notes: This variety requires proper soil and water management for best growth.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤៣ ទៅ ៤៥ ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "លក្ខណៈផ្លែ៖បៃតងខ្ចី ក្រលាញឹកលីប និងខ័ណ្ឌដោយ ទ្រនង់លានដាច់ៗ, សម្បកស្តើងមធ្យម",
            "ទំរង់ផ្លែ៖ទ្រវែងស្រួចក្បាល និងកន្ទុយ 18-20cm x 4.9-5.2cm",
            "ទម្ងន់៖4.5-6kg/ដើម",
            "លក្ខណៈដើម៖ដើមរឹងមាំ មានកំលាំង មែកច្រើន ផ្លែដំបូងតិច បន្ទប់មកច្រើន ធន់អាកាស ធាតុ ធន់នឹងជម្ងឺ",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ (ធន់រដូវរំហើយ&ក្តៅ)",
            "ពូជនេះត្រូវការគ្រប់គ្រងដី និងទឹកឲ្យបាន គ្រប់គ្រាន់",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Clean the farmland and remove all weeds completely.",
            "Plow and harrow the soil finely and air-dry it for 10 to 15 days.",
            "Plow the soil (using oxen or a walking tractor) to a depth of 15 to 20centimeters.",
            "Raising the Planting Beds:",
            "Bed Width: 1meter, and the length should depend on the land availability, but it should not exceed 15 meters, as this makes maintenance difficult (such as watering, weeding, etc.)",
            "Bed Height: In the dry season, it is 20 to 30 centimeters, and in the rainy season, it is 30 to 50 centimeters.",
            "Incorporate 1 to 2 kilograms of dry animal manure or compost per square meter of bed area, burying it as a base layer by mixing it thoroughly with the bed soil.",
            "Covering the planting beds can be done in two ways to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "សំអាតដីចំការ និង រើសស្មៅចេញឱ្យអស់",
            "ភ្ជួរ រាស់ដីឲ្យបានម៉ដ្ឋល្អ ហើយហាលឱ្យបានពី១០ទៅ១៥ថ្ងៃ។",
            "ភ្ជួរដី (គោក្របី ឬ គោយន្ត) ជម្រៅពី ១៥ ទៅ ២០ សង់ទីម៉ែត្រ។",
            "ការលើករងដាំ:",
            "ទទឹងរងៈ ១ ម៉ែត្រ និង បណ្តោយទៅតាមលទ្ធភាពដី តែមិនគួរឲ្យលើពី ១៥ ម៉ែត្រ ដែលធ្វើឲ្យពិបាកក្នុង ការថែទាំ ដូចជាស្រោចទឹកដក ស្មៅជាដើម។",
            "កំពស់ នៅរដូវប្រាំង ពី២០ ទៅ៣០សង់ទីម៉ែត្រ និង នៅរដូវវស្សា ពី៣០ ទៅ ៥០សង់ទីម៉ែត្រ",
            "ដាក់លាមកសត្វស្ងួត ឬ ជីកំប៉ុស្តិ៍ ក្នុងបរិមាណពី ១ ទៅ ២ គីឡូក្រាម ក្នុងផ្ទៃដីរង១ ម៉ែត្រការ៉េកប់ ទ្រាប់បាតរងដោយច្របល់វាឲ្យសព្វល្អជាមួយដីរង។",
            "គ្របរងដាំ ធ្វើបានពីរប្រភេទដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី កាត់បន្ថយការស្មៅ។",
          ],
        },
        cultivation: {
          en: [
            "In this cultivation method, there are two methods as follows:",
            "By direct seeding: Before planting, it is necessary to loosen the soil in the hole well first, and place the seeds that have been soaked in warm water at 36 degrees and incubated in a steamer (or container) for 36 hours into a depth of 1-2 cm. After that, take compost and spread it lightly over the hole or put decomposed rice straw over the hole and water thoroughly. In about 5-7 days it will germinate. The appropriate spacing height is 30-40 cm. The row spacing is 60-70 cm. Put two seeds in one hole per hectare.",
            "Transplanting Seedlings: After the bitter melon seedlings are 7–10 days old or when they reach a height of 10–15 cm, they can be removed from the plastic bags or trays and transplanted. However, 3–4 days before transplanting, stop watering to allow the seedlings to become accustomed (or immune/hardened) to the heat. But, just before transplanting, they must be watered thoroughly. The method of cultivation is carried out in many ways depending on the region. They are planted with one seedling per hole, with 30–40 cm between clumps (in-row spacing) and 60–70 cm between rows (row spacing).",
          ],
          km: [
            "ក្នុងវិធីសាស្ត្រដាំដុះនេះគេមានវិធីពីរដូចខាងក្រោមនេះ",
            "ដោយផ្ទាល់ដី: មុននឹងដាំត្រូវជ្រុំដីនៅក្នុងរណ្តៅឲ្យផុសល្អសិន ហើយដាក់គ្រាប់ដែលបានត្រាំក្នុងទឹក ក្តៅ ៣៦អង្សារ និងផ្អាបក្នុងធុងស្ងោររយៈពេល៣៦ម៉ោង រួចចូលទៅក្នុងជម្រៅ ១-២ ស.ម បន្ទាប់មក យកជីកំប៉ុស្តិ៍មករោយពីលើឲ្យជិត ឬ ដាក់កំទេចចំបើងពុកៗ មកគ្របពីលើរណ្តៅ ហើយស្រោចទឹក ឲ្យជោគតែរយៈ ៥-៧ ថ្ងៃវានឹងដុះ។ ចន្លោះកម្ពស់ សមស្រប ៣០-៤០ ស.ម ចន្លោះជួរ ៦០-៧០ ស .ម ដាក់ពីរគ្រាប់ក្នុងមួយរណ្តៅ ក្នុងមួយហិចតា ។",
            "ដាំដោយកូន: ក្រោយពីម្រះមានអាយុពី ៧-១០ ថ្ងៃ ឬ នៅពេលវាមានកំពស់ ១០-១៥ ស.ម គេអាច ដកកូនម្រះពីប្លាស្ទិចឬត្រទៅដាំ។ ប៉ុន្តែមុនពេលដកយកទៅដាំរយៈពេល ៣-៤ ថ្ងៃ គេត្រូវផ្អាកស្រោច ទឹកដើម្បីឲ្យកូនម្រះមានភាពស៊ាំទៅនឹងកំដៅ តែមុនពេលយកទៅដាំត្រូវស្រោចទឹកឲ្យជោគ។ ការដាំ ដុះគេអនុវត្តន៍ច្រើនរបៀបអាស្រ័យតាមតំបន់។ គេដាំមួយរណ្តៅមួយដើមដោយចន្លោះគុម្ពពី ៣០-៤០ ស.ម ចន្លោះជួរ ៦០-៧០ ស.ម។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/bitter/Picture20.png",
        title: {
          en: "Bitter melon F1 Mongkol 08 variety",
          km: "ម្រះ F1 ពូជ មង្គល០៨។",
        },
        info: { en: "Fast-growing variety.", km: "" },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/bitter/Picture20.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/bitter/bitter6.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/bitter/bitter7.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting period: 43–45 days after direct sowing.",
            "Fruit characteristics: Light green, slightly glossy, with noticeable ribbing, and medium thin skin.",
            "Fruit shape and size: Long with tapered ends, 18–20 cm × 4.9–5.2 cm.",
            "Plant yield/weight: 4.5–6 kg per plant.",
            "Plant characteristics: Strong and vigorous plant, many branches. Produces few fruits at the first stage, then increases production later. Tolerant to weather conditions and resistant to diseases.",
            "Growing season: Can be grown year-round (tolerates both rainy and hot seasons).",
            "Notes: This variety requires proper soil and water management for best growth.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤៣ ទៅ ៤៥ ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "លក្ខណៈផ្លែ៖បៃតងខ្ចី ក្រលាញឹកលីប និងខ័ណ្ឌដោយ ទ្រនង់លានដាច់ៗ, សម្បកស្តើងមធ្យម",
            "ទំរង់ផ្លែ៖ទ្រវែងស្រួចក្បាល និងកន្ទុយ 18-20cm x 4.9-5.2cm",
            "ទម្ងន់៖4.5-6kg/ដើម",
            "លក្ខណៈដើម៖ដើមរឹងមាំ មានកំលាំង មែកច្រើន ផ្លែដំបូងតិច បន្ទប់មកច្រើន ធន់អាកាស ធាតុ ធន់នឹងជម្ងឺ",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ (ធន់រដូវរំហើយ&ក្តៅ)",
            "ពូជនេះត្រូវការគ្រប់គ្រងដី និងទឹកឲ្យបាន គ្រប់គ្រាន់",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Clean the farmland and remove all weeds completely.",
            "Plow and harrow the soil finely and air-dry it for 10 to 15 days.",
            "Plow the soil (using oxen or a walking tractor) to a depth of 15 to 20centimeters.",
            "Raising the Planting Beds:",
            "Bed Width: 1meter, and the length should depend on the land availability, but it should not exceed 15 meters, as this makes maintenance difficult (such as watering, weeding, etc.)",
            "Bed Height: In the dry season, it is 20 to 30 centimeters, and in the rainy season, it is 30 to 50 centimeters.",
            "Incorporate 1 to 2 kilograms of dry animal manure or compost per square meter of bed area, burying it as a base layer by mixing it thoroughly with the bed soil.",
            "Covering the planting beds can be done in two ways to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "សំអាតដីចំការ និង រើសស្មៅចេញឱ្យអស់",
            "ភ្ជួរ រាស់ដីឲ្យបានម៉ដ្ឋល្អ ហើយហាលឱ្យបានពី១០ទៅ១៥ថ្ងៃ។",
            "ភ្ជួរដី (គោក្របី ឬ គោយន្ត) ជម្រៅពី ១៥ ទៅ ២០ សង់ទីម៉ែត្រ។",
            "ការលើករងដាំ:",
            "ទទឹងរងៈ ១ ម៉ែត្រ និង បណ្តោយទៅតាមលទ្ធភាពដី តែមិនគួរឲ្យលើពី ១៥ ម៉ែត្រ ដែលធ្វើឲ្យពិបាកក្នុង ការថែទាំ ដូចជាស្រោចទឹកដក ស្មៅជាដើម។",
            "កំពស់ នៅរដូវប្រាំង ពី២០ ទៅ៣០សង់ទីម៉ែត្រ និង នៅរដូវវស្សា ពី៣០ ទៅ ៥០សង់ទីម៉ែត្រ",
            "ដាក់លាមកសត្វស្ងួត ឬ ជីកំប៉ុស្តិ៍ ក្នុងបរិមាណពី ១ ទៅ ២ គីឡូក្រាម ក្នុងផ្ទៃដីរង១ ម៉ែត្រការ៉េកប់ ទ្រាប់បាតរងដោយច្របល់វាឲ្យសព្វល្អជាមួយដីរង។",
            "គ្របរងដាំ ធ្វើបានពីរប្រភេទដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី កាត់បន្ថយការស្មៅ។",
          ],
        },
        cultivation: {
          en: [
            "In this cultivation method, there are two methods as follows:",
            "By direct seeding: Before planting, it is necessary to loosen the soil in the hole well first, and place the seeds that have been soaked in warm water at 36 degrees and incubated in a steamer (or container) for 36 hours into a depth of 1-2 cm. After that, take compost and spread it lightly over the hole or put decomposed rice straw over the hole and water thoroughly. In about 5-7 days it will germinate. The appropriate spacing height is 30-40 cm. The row spacing is 60-70 cm. Put two seeds in one hole per hectare.",
            "Transplanting Seedlings: After the bitter melon seedlings are 7–10 days old or when they reach a height of 10–15 cm, they can be removed from the plastic bags or trays and transplanted. However, 3–4 days before transplanting, stop watering to allow the seedlings to become accustomed (or immune/hardened) to the heat. But, just before transplanting, they must be watered thoroughly. The method of cultivation is carried out in many ways depending on the region. They are planted with one seedling per hole, with 30–40 cm between clumps (in-row spacing) and 60–70 cm between rows (row spacing).",
          ],
          km: [
            "ក្នុងវិធីសាស្ត្រដាំដុះនេះគេមានវិធីពីរដូចខាងក្រោមនេះ",
            "ដោយផ្ទាល់ដី: មុននឹងដាំត្រូវជ្រុំដីនៅក្នុងរណ្តៅឲ្យផុសល្អសិន ហើយដាក់គ្រាប់ដែលបានត្រាំក្នុងទឹក ក្តៅ ៣៦អង្សារ និងផ្អាបក្នុងធុងស្ងោររយៈពេល៣៦ម៉ោង រួចចូលទៅក្នុងជម្រៅ ១-២ ស.ម បន្ទាប់មក យកជីកំប៉ុស្តិ៍មករោយពីលើឲ្យជិត ឬ ដាក់កំទេចចំបើងពុកៗ មកគ្របពីលើរណ្តៅ ហើយស្រោចទឹក ឲ្យជោគតែរយៈ ៥-៧ ថ្ងៃវានឹងដុះ។ ចន្លោះកម្ពស់ សមស្រប ៣០-៤០ ស.ម ចន្លោះជួរ ៦០-៧០ ស .ម ដាក់ពីរគ្រាប់ក្នុងមួយរណ្តៅ ក្នុងមួយហិចតា ។",
            "ដាំដោយកូន: ក្រោយពីម្រះមានអាយុពី ៧-១០ ថ្ងៃ ឬ នៅពេលវាមានកំពស់ ១០-១៥ ស.ម គេអាច ដកកូនម្រះពីប្លាស្ទិចឬត្រទៅដាំ។ ប៉ុន្តែមុនពេលដកយកទៅដាំរយៈពេល ៣-៤ ថ្ងៃ គេត្រូវផ្អាកស្រោច ទឹកដើម្បីឲ្យកូនម្រះមានភាពស៊ាំទៅនឹងកំដៅ តែមុនពេលយកទៅដាំត្រូវស្រោចទឹកឲ្យជោគ។ ការដាំ ដុះគេអនុវត្តន៍ច្រើនរបៀបអាស្រ័យតាមតំបន់។ គេដាំមួយរណ្តៅមួយដើមដោយចន្លោះគុម្ពពី ៣០-៤០ ស.ម ចន្លោះជួរ ៦០-៧០ ស.ម។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
    ],
  },
  chili_pepper: {
    name: { en: " Chili Pepper", km: "ម្ទេស" },
    desc: {
      en: "Resistant to weather conditions, tolerant to wilt, leaf curl, and some viruses.",
      km: "ធន់និងអាកាសធាតុ ធន់នឹងជម្ងឺស្វិតស្រពោនស្រស់ និងវីរុសមួយចំនួន។",
    },
    imgs: [
      {
        src: "image/ChilliPaper/chili1.png",
        title: { en: "F1 Chili Krishna variety", km: "ម្ទេស F1 ពូជ គ្រីស្នា" },
        info: {
          en: "Strong and healthy plant, resistant to wilt, anthracnose, and some viruses.",
          km: "ដើមរឹងមាំល្អ ធន់នឹងជម្ងឺស្វិតស្រពោនស្រស់ Antracnose និងវីរុសមួយចំនួន។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/ChilliPaper/chili2.JPG",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/ChilliPaper/chili3.JPG",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/ChilliPaper/chili5.JPG",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Harvesting: 70 to 75 days after transplanting the seedlings.",
            "Fruit characteristics: Bright red glossy fruit, upright growth, medium-thick skin, large sized, long and straight shape. Produces many fruits and is easy to harvest.",
            "Fruit size: Length 7.4–10 cm × Diameter 1.1–1.25 cm",
            "Yield: 1.5–2 kg per plant",
            "Growth characteristics: Strong and vigorous plant, many branches, tolerant to wilt disease, anthracnose, and various viruses.",
            "Growing season: Can be cultivated year-round (not limited by season).",
          ],
          km: [
            "អាយុប្រមូលផល៖៧០ ទៅ ៧៥ ថ្ងៃ បន្ទាប់ពីស្ទូងកូន",
            "លក្ខណៈផ្លែ៖ទុំពណ៌ក្រហម រលោង ផ្លែត្រង់ទៅលើ សម្បក ក្រាស់មធ្យម ផ្លែធំ និងស្តីចហើយទាល កន្ទុយ ផ្លែច្រើន ងាយស្រួយក្នុងការប្រមូលផល",
            "ទំហំផ្លែ ៖ប 7,4-10cm xម,ក 1,1-1,25cm",
            "ទិន្នផល៖1,5-2 kg/ដើម",
            "លក្ខណៈលូតលាស់៖ដើមរឹងមាំល្អ មែកច្រើន ធន់នឹងជម្ងឺស្វិត ស្រពោនស្រស់ Antracnose និងវីរុ សផ្សេងៗ",
            "រដូវកាលដាំដុះបានដាំ១ ឆ្នាំពេញ (មិនប្រកាន់រដូវ)។​​",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Bed width: 1meter, length according to land conditions.",
            "Spacing between beds: 0.5 meters.",
            "Bed Height: Dry season: 0.2-0.3meters. Rainy season: 0.3-0.5meters.",
            "Apply 2-3kg} of dry animal manure or compost per square meter of land, and add N-P-K chemical fertilizer (20-20-15 or 15-15-15).",
            "Cover the planting bed to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "ទំហំទទឹងរង១ម៉ែត្របណ្តោយតាមស្ថានភាពដី",
            "ចន្លោះពីរងមួយទៅ រងមួយមានប្រវែង០,៥ម៉ែត្រ",
            "កំពស់រង៖រដូវប្រាំង ០,២-០,៣ ម៉ែត្រ រដូវវស្សា ០,៣-០,៥ ម៉ែត្រ",
            "ដាក់លាមកសត្វស្ងួត ឬ ជីកំប៉ុស្តិ៍ ក្នុងបរិមាណ២-៣គីឡូក្រាម ក្នុងផ្ទៃដី១ម៉ែត្រការ៉េ និង ដាក់ជីគីមីអិន-បើ-កា (20-20-15, 15-15-15)",
            "ធ្វើគ្របរងដាំ ដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី កាត់បន្ថយការ ដុះស្មៅ",
          ],
        },
        cultivation: {
          en: [
            "Seedlings should be grown on a nursery bed first by wrapping the chili seeds in a cloth and soaking them in water for one night.",
            "Take the seeds that have been soaked for one night and wash them in running water for at least 30 minutes.",
            "Wrap the chili seeds in a cloth and store them in a dry, shaded place for another 2-3 days.",
            "When the chili seeds emerge with small white shoots, they can be planted in seed cups (kuntong) or seed trays.",
            "Water twice a day every day until the chili seedlings are $15 \text{ to } 20 \text{ days old}$ before transplanting them onto the bed. Fungicide can be used before transplanting the seedlings to the field.",
          ],
          km: [
            "គួរតែបណ្តុះកូននៅលើថ្នាលជាមុនសិន ដោយខ្ចប់គ្រាប់ម្ទេសក្នុងក្រណាត់ហើយត្រាំទឹក ១ យប់",
            "យកគ្រាប់ម្ទេសដែលត្រាំទឹកហើយ១យប់ ទៅលាងក្នុងទឹកហូរយ៉ាងហោចណាស់ ៣០ នាទី",
            "យកគ្រាប់ម្ទេសខ្ចប់នឹងក្រណាត់រក្សាទុកនៅកន្លែងដែលស្ងួត ម្លប់ ២-៣ថ្ងៃទៀត។",
            "ពេលគ្រាប់ម្ទេសដុះចេញពន្លកពណ៌សតូចៗ ទើបយកទៅបណ្តុះក្នុងកន្ទោង ឬថាសបណ្តុះ ។",
            "ស្រោចទឹក ២ដងក្នុងមួយថ្ងៃ ជារៀងរាល់ថ្ងៃរហូតដល់ កូនម្ទេសមានអាយុពី ១៥ទៅ២០ថ្ងៃ ទើបយក កូន ម្ទេសទៅដាំលើរង។ អាចប្រើប្រាស់ថ្នាំការពារជំងឺផ្សិត មុនពេលយកកូនម្ទេសទៅដាំក្នុងរង។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
            "After the chili seedlings reach the age of 22-25days (having 4-5leaves), they can be transplanted.",
            "Harden the chili seedlings for 3-5days before transplanting (expose the seedlings to sunlight and reduce watering).",
            "Introduce water into the space between the rows in the morning (best only for beds covered with plastic mulch).",
            "Expose the chili seedlings to sunlight for $3-4 \text{ days}$ before transplanting.",
            "Introduce water into the beds in the morning, and transplant the seedlings in the afternoon.",
            "Gently remove the chili seedlings from the seed tray by pushing up the bottom of the tray with one hand while the other hand gently pulls the stem/base of the seedling out of the tray.",
            "Plant the chili seedlings at the same level as their original soil (nursery soil).",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
            "បន្ទាប់ពីកូនម្ទេសដុះបានអាយុ២២-២៥ថ្ងៃ (កូនម្ទេសមានស្លឹក ៤-៥សន្លឹក) អាចយកទៅដាំបាន",
            "ត្រូវពង្រឹងកូនម្ទេសចំនួន ៣-៥ថ្ងៃមុនយកកូនទៅដាំ (ដាក់កូនម្ទេសឲ្យត្រូវពន្លឺថ្ងៃ និងកាត់បន្ថយការស្រោចទឹក)",
            "បញ្ចូលទឹកតាមប្រលោះរងនៅពេលព្រឹក (ប្រសើរបំផុតសំរាប់រងដាំដោយគ្របប្លាស្ទិចប៉ុណ្ណោះ)",
            "ដាក់កូនម្ទេសឲ្យត្រូវពន្លឺថ្ងៃ៣-៤ថ្ងៃមុនយកដាំ",
            "បញ្ចូលទឹកតាមរងនៅពេលព្រឹក ដាំកូនដំណាំនៅពេលរសៀល",
            "ដកកូនម្ទេសថ្នមៗចេញពីថាសបណ្តុះ ដោយយកដៃម្ខាងរុញបាតថាសឡើងលើ ហើយដៃម្ខាងទាញគល់ កូនម្ទេសដកចេញពីថាស",
            "ដាំកូនម្ទេសដាក់ត្រឹមដីកំណើត (ដីបណ្តុះ)។",
          ],
        },
      },
      {
        src: "image/ChilliPaper/Picture23.png",
        title: {
          en: "F1 Chili Neang Kream variety",
          km: "ម្ទេស F1 ពូជ នាងគ្រាម",
        },
        info: {
          en: "Strong and healthy plant, resistant to wilt, 1,5- 2kg/tree",
          km: "ដើមរឹងមាំល្អ ធន់នឹងជម្ងឺស្វិតស្រពោនស្រស់, 1,5- 2kg/ដើម។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/chilliPaper/Picture23.png",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/chilliPaper/chili11.jpg",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/chilliPaper/Picture22.png",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Harvesting: 70 to 75 days after transplanting the seedlings.",
            "Fruit characteristics: Bright red glossy fruit, upright growth, medium-thick skin, large sized, long and straight shape. Produces many fruits and is easy to harvest.",
            "Fruit size: Length 7.4–10 cm × Diameter 1.1–1.25 cm",
            "Yield: 1.5–2 kg per plant",
            "Growth characteristics: Strong and vigorous plant, many branches, tolerant to wilt disease, anthracnose, and various viruses.",
            "Growing season: Can be cultivated year-round (not limited by season).",
          ],
          km: [
            "អាយុប្រមូលផល៖៧០ ទៅ ៧៥ ថ្ងៃ បន្ទាប់ពីស្ទូងកូន",
            "លក្ខណៈផ្លែ៖ទុំពណ៌ក្រហម រលោង ផ្លែត្រង់ទៅលើ សម្បក ក្រាស់មធ្យម ផ្លែធំ និងស្តីចហើយទាល កន្ទុយ ផ្លែច្រើន ងាយស្រួយក្នុងការប្រមូលផល",
            "ទំហំផ្លែ ៖ប 7,4-10cm xម,ក 1,1-1,25cm",
            "ទិន្នផល៖1,5-2 kg/ដើម",
            "លក្ខណៈលូតលាស់៖ដើមរឹងមាំល្អ មែកច្រើន ធន់នឹងជម្ងឺស្វិត ស្រពោនស្រស់ Antracnose និងវីរុ សផ្សេងៗ",
            "រដូវកាលដាំដុះបានដាំ១ ឆ្នាំពេញ (មិនប្រកាន់រដូវ)។​​",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Bed width: 1meter, length according to land conditions.",
            "Spacing between beds: 0.5 meters.",
            "Bed Height: Dry season: 0.2-0.3meters. Rainy season: 0.3-0.5meters.",
            "Apply 2-3kg} of dry animal manure or compost per square meter of land, and add N-P-K chemical fertilizer (20-20-15 or 15-15-15).",
            "Cover the planting bed to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "ទំហំទទឹងរង១ម៉ែត្របណ្តោយតាមស្ថានភាពដី",
            "ចន្លោះពីរងមួយទៅ រងមួយមានប្រវែង០,៥ម៉ែត្រ",
            "កំពស់រង៖រដូវប្រាំង ០,២-០,៣ ម៉ែត្រ រដូវវស្សា ០,៣-០,៥ ម៉ែត្រ",
            "ដាក់លាមកសត្វស្ងួត ឬ ជីកំប៉ុស្តិ៍ ក្នុងបរិមាណ២-៣គីឡូក្រាម ក្នុងផ្ទៃដី១ម៉ែត្រការ៉េ និង ដាក់ជីគីមីអិន-បើ-កា (20-20-15, 15-15-15)",
            "ធ្វើគ្របរងដាំ ដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី កាត់បន្ថយការ ដុះស្មៅ",
          ],
        },
        cultivation: {
          en: [
            "Seedlings should be grown on a nursery bed first by wrapping the chili seeds in a cloth and soaking them in water for one night.",
            "Take the seeds that have been soaked for one night and wash them in running water for at least 30 minutes.",
            "Wrap the chili seeds in a cloth and store them in a dry, shaded place for another 2-3 days.",
            "When the chili seeds emerge with small white shoots, they can be planted in seed cups (kuntong) or seed trays.",
            "Water twice a day every day until the chili seedlings are $15 \text{ to } 20 \text{ days old}$ before transplanting them onto the bed. Fungicide can be used before transplanting the seedlings to the field.",
          ],
          km: [
            "គួរតែបណ្តុះកូននៅលើថ្នាលជាមុនសិន ដោយខ្ចប់គ្រាប់ម្ទេសក្នុងក្រណាត់ហើយត្រាំទឹក ១ យប់",
            "យកគ្រាប់ម្ទេសដែលត្រាំទឹកហើយ១យប់ ទៅលាងក្នុងទឹកហូរយ៉ាងហោចណាស់ ៣០ នាទី",
            "យកគ្រាប់ម្ទេសខ្ចប់នឹងក្រណាត់រក្សាទុកនៅកន្លែងដែលស្ងួត ម្លប់ ២-៣ថ្ងៃទៀត។",
            "ពេលគ្រាប់ម្ទេសដុះចេញពន្លកពណ៌សតូចៗ ទើបយកទៅបណ្តុះក្នុងកន្ទោង ឬថាសបណ្តុះ ។",
            "ស្រោចទឹក ២ដងក្នុងមួយថ្ងៃ ជារៀងរាល់ថ្ងៃរហូតដល់ កូនម្ទេសមានអាយុពី ១៥ទៅ២០ថ្ងៃ ទើបយក កូន ម្ទេសទៅដាំលើរង។ អាចប្រើប្រាស់ថ្នាំការពារជំងឺផ្សិត មុនពេលយកកូនម្ទេសទៅដាំក្នុងរង។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
            "After the chili seedlings reach the age of 22-25days (having 4-5leaves), they can be transplanted.",
            "Harden the chili seedlings for 3-5days before transplanting (expose the seedlings to sunlight and reduce watering).",
            "Introduce water into the space between the rows in the morning (best only for beds covered with plastic mulch).",
            "Expose the chili seedlings to sunlight for $3-4 \text{ days}$ before transplanting.",
            "Introduce water into the beds in the morning, and transplant the seedlings in the afternoon.",
            "Gently remove the chili seedlings from the seed tray by pushing up the bottom of the tray with one hand while the other hand gently pulls the stem/base of the seedling out of the tray.",
            "Plant the chili seedlings at the same level as their original soil (nursery soil).",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
            "បន្ទាប់ពីកូនម្ទេសដុះបានអាយុ២២-២៥ថ្ងៃ (កូនម្ទេសមានស្លឹក ៤-៥សន្លឹក) អាចយកទៅដាំបាន",
            "ត្រូវពង្រឹងកូនម្ទេសចំនួន ៣-៥ថ្ងៃមុនយកកូនទៅដាំ (ដាក់កូនម្ទេសឲ្យត្រូវពន្លឺថ្ងៃ និងកាត់បន្ថយការស្រោចទឹក)",
            "បញ្ចូលទឹកតាមប្រលោះរងនៅពេលព្រឹក (ប្រសើរបំផុតសំរាប់រងដាំដោយគ្របប្លាស្ទិចប៉ុណ្ណោះ)",
            "ដាក់កូនម្ទេសឲ្យត្រូវពន្លឺថ្ងៃ៣-៤ថ្ងៃមុនយកដាំ",
            "បញ្ចូលទឹកតាមរងនៅពេលព្រឹក ដាំកូនដំណាំនៅពេលរសៀល",
            "ដកកូនម្ទេសថ្នមៗចេញពីថាសបណ្តុះ ដោយយកដៃម្ខាងរុញបាតថាសឡើងលើ ហើយដៃម្ខាងទាញគល់ កូនម្ទេសដកចេញពីថាស",
            "ដាំកូនម្ទេសដាក់ត្រឹមដីកំណើត (ដីបណ្តុះ)។",
          ],
        },
      },
      {
        src: "image/chilliPaper/Picture23.jpg",
        title: {
          en: "Chili Pepper F1 Variety: Sonita",
          km: "ម្ទេសប្លោក F1 ពូជ សូនីតា",
        },
        info: {
          en: "Strong and vigorous growth, fast-growing, high fruit yield, suitable for the market.",
          km: "ដើមរឺងមាំល្អ  លូតលាស់លឿន ផ្លែច្រើន សមស្របទៅតាមទីផ្សារ។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/chilliPaper/Picture23.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/chilliPaper/chili4.webp",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/chilliPaper/chili6.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/ChilliPaper/chili7.png",
        title: {
          en: "Chili OP: Variety Chaly",
          km: "ម្ទេសអាចម៍សត្វ OP ពូជ ឆាលី",
        },
        info: {
          en: "Green-to-red, long, slender chili with thicker middle, small tip.",
          km: "ផ្លៃពណ៌បៃតងខ្ចី និងទុំពណ៌ក្រហម ផ្លែទ្រវែង ស្រួចកន្ទុយ ដោយធំកណ្តាលផ្លែ និងក្បាលរាងតូច។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/ChilliPaper/chili8.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/ChilliPaper/chili9.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/ChilliPaper/chili10.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
    ],
  },
  luffa_gourd: {
    name: { en: "Luffa", km: "ននោង" },
    desc: {
      en: "Luffa are rich in important nutrients such as dietary fiber, water, vitamin A, vitamin C, iron, magnesium, and vitamin B6.",
      km: "ននោងជ្រុងសំបូរទៅដោយសមាសធាតុសំខាន់ៗដូចជាជាតិសរសៃចំណីអាហារ ទឹក វីតាមីន A វីតាមីន C ជាតិដែក ម៉ាញ៉េស្យូម និងវីតាមីន B6 ។",
    },
    imgs: [
      {
        src: "image/luffa/Picture25.png",
        title: {
          en: "Round Luffa F1 Variety: Brahaer",
          km: "ននោងមូល ពូជ ប្រហើរ F1",
        },
        info: {
          en: "This variety requires proper management of fertilizer and water.",
          km: "ពូជនេះត្រូវការគ្រប់គ្រងជី និងទឹកឲ្យបានគ្រាប់គ្រាន់។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/luffa/Picture25.png",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/luffa/luffa1.webp",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/luffa/luffa2.jpg",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 42 to 44 days after direct planting",
            "Fruit Color: Light green with deep dark green stripes",
            "Fruit Shape: Long, cylindrical, and pointed at the tail",
            "Fruit Size: Length 30-35cm x Diameter 4.2-4.5cm",
            "Yield: 6-6.5kg/plant",
            "Growing Season: All year round",
            "This variety requires proper management of soil and water.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤២ ទៅ ៤៤ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតងខ្ចី និងឆ្នូតជ្រៅបៃតងចាស់",
            "ទំរង់ផ្លែ៖រាងមូលទ្រវែងស្រួចកន្ទុយ",
            "ទំហំផ្លែ៖ ប30-35cm x ម,ក4,2-4,5cm",
            "ទិន្នផល៖6-6,5kg/ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
            "ពូជនេះត្រូវការគ្រប់គ្រងដី និងទឹកឲ្យបានល្អ។",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: ["Corn requires fertile soil rich in nitrogen"],
          km: [
            "ពោតត្រូវការដីមានជីជាតិ សំបូរដោយអាសូត",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២៥-៣០ សង់ទីម៉ែត្រ",
            "បញ្ចូលជីលាមកសត្វរលួយល្អ ឬជីកំប៉ុស្ត",
            "ធានាការបង្ហូរទឹកល្អ; ពោតមិនអត់ឱនឱ្យដីលិចទឹក",
            "ដាំជាប្លុក ជាជាងជួរតែមួយ ដើម្បីបង្កកំណើតល្អ",
          ],
        },
        cultivation: {
          en: [
            "Slightly clip the tip of the seed using scissors without cutting it apart, just to open the seed coat a little.",
            "Wrap the clipped seeds in a clean, dry cloth, tie firmly, and soak them in warm water (48–50°C) for 4 hours.",
            "Move the soaked seeds into a moist cloth, wrap them well, place the wrapped seeds inside a closed container or thermos, and leave for 24 hours. This helps the seeds germinate faster and develop small sprouts.",
            "Prepare the seedling trays by filling them with nursery soil mix and then make small holes in each tray cell.",
            "Place one pre-sprouted seed per hole, with the white sprout pointing downward.",
            "Cover lightly with soil and water gently until moist.",
          ],
          km: [
            "ដំបូងយកគ្រាប់ននោង KS Seed មកជ្រើបគូទនឹងកន្ត្រៃ (មិនមែនកាត់អោយដាច់)។",
            "យកគ្រាប់ដែលកាត់ហើយដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកក ដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨-៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រ ណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យ គ្រាប់ដុះពន្លកលឿនជាង។",
            "យកថាសដែលបានដាក់ល្បាយដីបណ្តុះរួចចោះរន្ធ",
            "គ្រាប់ដែលយកចេញពីធុងស្ងោរ ដាក់ក្នុងថាសបណ្តុះមួយរន្ធមួយគ្រាប់ ដោយដាក់ពន្លកឬសចុះ ក្រោម",
            "រោយល្បាយដីពីលើ រួចស្រោចទឹកអោយជោគ បន្ទាប់មកដាក់វាក្នុងរោងបណ្តុះ ។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/luffa/Picture26.png",
        title: { en: "Luffa Variety F1: Sophy", km: "ននោងមូល ពូជF1 សូភី" },
        info: {
          en: "Green and dark green, round, long, pointed tail.",
          km: "បៃតង និងឆ្នួតជ្រៅបៃតងចាស់ រាងមូលទ្រវែងស្រួចកន្ទុយ។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/luffa/luffa3.jpg",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/luffa/luffa4.webp",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/luffa/luffa5.jpg",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 42 to 44 days after direct planting",
            "Fruit Color: Light green with deep dark green stripes",
            "Fruit Shape: Long, cylindrical, and pointed at the tail",
            "Fruit Size: Length 30-35cm x Diameter 4.2-4.5cm",
            "Yield: 6-6.5kg/plant",
            "Growing Season: All year round",
            "This variety requires proper management of soil and water.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤២ ទៅ ៤៤ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតងខ្ចី និងឆ្នូតជ្រៅបៃតងចាស់",
            "ទំរង់ផ្លែ៖រាងមូលទ្រវែងស្រួចកន្ទុយ",
            "ទំហំផ្លែ៖ ប30-35cm x ម,ក4,2-4,5cm",
            "ទិន្នផល៖6-6,5kg/ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
            "ពូជនេះត្រូវការគ្រប់គ្រងដី និងទឹកឲ្យបានល្អ។",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: ["Corn requires fertile soil rich in nitrogen"],
          km: [
            "ពោតត្រូវការដីមានជីជាតិ សំបូរដោយអាសូត",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២៥-៣០ សង់ទីម៉ែត្រ",
            "បញ្ចូលជីលាមកសត្វរលួយល្អ ឬជីកំប៉ុស្ត",
            "ធានាការបង្ហូរទឹកល្អ; ពោតមិនអត់ឱនឱ្យដីលិចទឹក",
            "ដាំជាប្លុក ជាជាងជួរតែមួយ ដើម្បីបង្កកំណើតល្អ",
          ],
        },
        cultivation: {
          en: [
            "Slightly clip the tip of the seed using scissors without cutting it apart, just to open the seed coat a little.",
            "Wrap the clipped seeds in a clean, dry cloth, tie firmly, and soak them in warm water (48–50°C) for 4 hours.",
            "Move the soaked seeds into a moist cloth, wrap them well, place the wrapped seeds inside a closed container or thermos, and leave for 24 hours. This helps the seeds germinate faster and develop small sprouts.",
            "Prepare the seedling trays by filling them with nursery soil mix and then make small holes in each tray cell.",
            "Place one pre-sprouted seed per hole, with the white sprout pointing downward.",
            "Cover lightly with soil and water gently until moist.",
          ],
          km: [
            "ដំបូងយកគ្រាប់ននោង KS Seed មកជ្រើបគូទនឹងកន្ត្រៃ (មិនមែនកាត់អោយដាច់)។",
            "យកគ្រាប់ដែលកាត់ហើយដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកក ដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨-៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រ ណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យ គ្រាប់ដុះពន្លកលឿនជាង។",
            "យកថាសដែលបានដាក់ល្បាយដីបណ្តុះរួចចោះរន្ធ",
            "គ្រាប់ដែលយកចេញពីធុងស្ងោរ ដាក់ក្នុងថាសបណ្តុះមួយរន្ធមួយគ្រាប់ ដោយដាក់ពន្លកឬសចុះ ក្រោម",
            "រោយល្បាយដីពីលើ រួចស្រោចទឹកអោយជោគ បន្ទាប់មកដាក់វាក្នុងរោងបណ្តុះ ។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/luffa/Picture27.jpg",
        title: {
          en: "Luffa acutangula variety: Platung F1",
          km: "ននោងជ្រុង ពូជ ផ្លាតុង F1",
        },
        info: {
          en: "This variety requires proper management of fertilizer and water.",
          km: "ពូជនេះត្រូវការគ្រប់គ្រងជី និងទឹកឲ្យបានគ្រាប់គ្រាន់។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/luffa/luffa6.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/luffa/luffa7.webp",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/luffa/luffa8.webp",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting: 42 to 45 days after direct planting.",
            "Color: Green and has slight ridges.",
            "Fruit Shape: Roundish long shape, pointed tail (tapered end).",
            "Size: 38-45cm x 3.8-4.2cm.",
            "Yield: 6.5-7kg/plant.",
            "Growing Season: All year round.",
            "This variety requires sufficient management of fertilizer and water.",
            "This variety is disease-resistant and can be planted in all soil conditions.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤២ ទៅ ៤៥ ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតង និង មានទ្រនុងស្រាល",
            "ទំរង់ផ្លែ៖រាងមូលទ្រវែង ស្រួចកន្ទុយ",
            "ទំហំផ្លែ៖ប38-45cm x ម,ក3,8-4,2cm",
            "ទិន្នផល៖6.5-7kg/ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
            "ពូជនេះត្រូវការគ្រប់គ្រងជីនិងទឹកឲ្យបានគ្រាប់",
            "ពូជនេះធន់ជម្ងឺ អាចដាំបានគ្រប់ស្ថានភាពដី",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Clean the farmland and remove all weeds.",
            "Plow and harrow the soil finely and air-dry it for 10 to 15 days.",
            "Plow the soil (using oxen or a walking tractor) to a depth of 15 to 20 cm.",
            "The bed width should be 9 decimeters (0.9 m) to 1 meter, and the length should depend on the size of the land that the farmer can manage.",
            "The bed height should be 2 to 3 decimeters (20–30 cm) in the dry season and 3 to 5 decimeters (30–50 cm) in the rainy season.",
            "The beds can be covered in two ways to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "សំអាតដីចំការ និង រើសស្មៅចេញឱ្យអស់",
            "ភ្ជួរ រាស់ដីឲ្យបានម៉ដ្ឋល្អ ហើយហាលឱ្យបានពី១០ ទៅ១៥ថ្ងៃ ។",
            "ភ្ជួរដី (គោក្របី ឬ គោយន្ត) ជម្រៅ ១៥ ទៅ ២០ សង់ទីម៉ែត្រ",
            "ទទឹងរងពី៩តឹក ទៅ ១ម៉ែត្រ និង បណ្តោយទៅតាមលទ្ធភាពដី ដែលកសិករអាចគ្រប់គ្រងបាន។",
            "នៅរដូវប្រាំងកំពស់ពី ២ តឹក ទៅ ៣ តឹក ហើយនៅរដូវវស្សាពី ៣ តឹក ទៅ ៥ តឹក។",
            "ការគ្របរង អាចធ្វើបានពីរប្រភេទដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី បន្ថយការដុះស្មៅ។",
          ],
        },
        cultivation: {
          en: [
            "First, take the luffa seeds and nick the base (butt) with scissors (not cutting it off completely).",
            "Take the cut seeds and place them in a clean, dry towel, wrap them tightly, and soak them in a container of water with a temperature between 48-50C for 4 hours.",
            "Next, place the seeds in another damp towel (or cloth) and put them in a steamer (or closed container) with a damp towel or cloth that can cover the seeds completely. Leave them in the steamer for 24 hours. This process makes the seeds germinate faster.",
            "Select the seeds that have split open (bæk moat chap - 'sparrow mouth') and place 1 seed per seed cup (kuntong) or 1 slot (hole) in the seed tray.",
            "Bury the seed 1cm deep (half a finger joint). If the seed is buried too deep or too shallow, it will not germinate well.",
            "Take the seed cups or trays with the seeds and place them correctly in the nursery shed.",
            "Water thoroughly every morning or evening. If the soil is dry, the seeds will not germinate well.",
            "Take 1 seed and sow it directly into 1 seed cup or 1 slot of the seed tray.",
            "Water thoroughly, and then take the tray or seed cup with the seeds and place it in the nursery shed.",
            "Water thoroughly every morning. If the soil is dry, the seeds will not germinate.",
            "To avoid weak/shocked seedlings after transplanting, you must reduce watering the luffa seedlings and expose them to sunlight for 2 to 3 days to harden them. Luffa seedlings aged 7 to 12 days can then be transplanted.",
            "Before transplanting the seedlings onto the beds, introduce water into the space between the beds (for beds covered with plastic mulch) or water thoroughly the beds covered with straw.",
            "Bury the fertilizer to a depth of 8 to 10 cm, leave it for 6 to 7 days, and water it at least 5 to 6 times before transplanting the seedlings. The luffa seedlings should be transplanted in the evening when the weather is cool.",
          ],
          km: [
            "ដំបូងយកគ្រាប់ននោង មកជ្រាបគូទនឹងកន្ត្រៃ(មិនមែនកាត់អោយដាច់)។",
            "យកគ្រាប់ដែលកាត់ហើយដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "ជ្រើសរើសយកគ្រាប់បែកមាត់ចាប ដាក់១គ្រាប់ក្នុង១កន្ទោង ឬ ១ ប្រលោះ (រន្ធ) ថាសបណ្តុះ",
            "កប់គ្រាប់ជំរៅ ១សង់ទីម៉ែត្រ (កន្លះថ្នាំងដៃ)។ បើកប់គ្រាប់ជ្រៅពេក ឬ រាក់ពេក ធ្វើឱ្យគ្រាប់ដុះមិនបានល្អ",
            "យកកន្ទោង ឬ ថាសបណ្តុះដែលដាក់គ្រាប់ហើយ ដាក់ក្នុងរោងបណ្តុះកូនឲ្យបានត្រឹមត្រូវ។",
            "ស្រោចទឹករៀងរាល់ពេលព្រឹក ឬល្ងាចឱ្យជោក។ បើដីស្ងួត វាធ្វើឱ្យគ្រាប់ដុះមិនល្អ។",
            "ការដាក់គ្រាប់បណ្តុះដោយផ្ទាល់ក្នុងថាសបណ្តុះ ឬ កន្ទោង (បណ្តុះគ្រាប់ស្ងួត)",
            "យកគ្រាប់ ចំនួន១គ្រាប់ដាក់បណ្តុះផ្ទាល់ក្នុង១កន្ទោង ឬ ១ប្រលោះថាសបណ្តុះ",
            "ស្រោចទឹកឱ្យជោក ទើបយកថាស ឬ កន្ទោងដែលដាក់គ្រាប់ហើយ ទៅដាក់ក្នុងរោងបណ្តុះ កូន។",
            "ស្រោចទឹករៀងរាល់ពេលព្រឹក ឱ្យជោក។ បើដីស្ងួត វាធ្វើឱ្យគ្រាប់ មិនដុះ។",
            "ដើម្បីជៀសវាងកូនអន់(សន្លប់)ក្រោយពេលដាំ គេត្រូវបន្ថយការស្រោចទឹកកូនននោង និង ដាក់វាឱ្យត្រូវពន្លឺថ្ងៃ រយៈពេល ពី២ ទៅ ៣ថ្ងៃ ដើម្បីពង្រឹងកូន។ កូនននោង អាយុពី ៧ ទៅ ១២ថ្ងៃទើបអាចដាំបាន ។",
            "មុនដាំកូនលើរង ត្រូវបញ្ចូលទឹកតាមចន្លោះរង (សំរាប់រងដាំគ្របប្លាស្ទិច) ឬ ស្រោចទឹកលើរងដែលគ្របដោយ ចំបើង ។",
            "កប់ជីជម្រៅពី ៨ ទៅ១០ សង់ទីម៉ែត្រ ទុករយៈពេល ពី ៦ ទៅ ៧ថ្ងៃ ដោយស្រោចទឹកយ៉ាងតិច ពី៥ ទៅ ៦ ដង មុនពេលដាំកូន។ ត្រូវដាំ កូនននោង នៅពេលល្ងាច មេឃត្រជាក់ល្អ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/luffa/Picture28.png",
        title: {
          en: "Luffa acutangula variety: Mega F1",
          km: "ននោងជ្រុង ពូជ មេហ្កា F1",
        },
        info: {
          en: "This variety is disease-resistant and can be grown in all soil conditions.",
          km: "ពូជនេះធន់ជម្ងឺ អាចដាំបានគ្រប់ស្ថានភាពដី។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/luffa/luffa9.webp",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/luffa/luffa10.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/luffa/luffa11.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting: 42 to 45 days after direct planting.",
            "Color: Green and has slight ridges.",
            "Fruit Shape: Roundish long shape, pointed tail (tapered end).",
            "Size: 38-45cm x 3.8-4.2cm.",
            "Yield: 6.5-7kg/plant.",
            "Growing Season: All year round.",
            "This variety requires sufficient management of fertilizer and water.",
            "This variety is disease-resistant and can be planted in all soil conditions.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤២ ទៅ ៤៥ ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតង និង មានទ្រនុងស្រាល",
            "ទំរង់ផ្លែ៖រាងមូលទ្រវែង ស្រួចកន្ទុយ",
            "ទំហំផ្លែ៖ប38-45cm x ម,ក3,8-4,2cm",
            "ទិន្នផល៖6.5-7kg/ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
            "ពូជនេះត្រូវការគ្រប់គ្រងជីនិងទឹកឲ្យបានគ្រាប់",
            "ពូជនេះធន់ជម្ងឺ អាចដាំបានគ្រប់ស្ថានភាពដី",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Clean the farmland and remove all weeds.",
            "Plow and harrow the soil finely and air-dry it for 10 to 15 days.",
            "Plow the soil (using oxen or a walking tractor) to a depth of 15 to 20 cm.",
            "The bed width should be 9 decimeters (0.9 m) to 1 meter, and the length should depend on the size of the land that the farmer can manage.",
            "The bed height should be 2 to 3 decimeters (20–30 cm) in the dry season and 3 to 5 decimeters (30–50 cm) in the rainy season.",
            "The beds can be covered in two ways to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "សំអាតដីចំការ និង រើសស្មៅចេញឱ្យអស់",
            "ភ្ជួរ រាស់ដីឲ្យបានម៉ដ្ឋល្អ ហើយហាលឱ្យបានពី១០ ទៅ១៥ថ្ងៃ ។",
            "ភ្ជួរដី (គោក្របី ឬ គោយន្ត) ជម្រៅ ១៥ ទៅ ២០ សង់ទីម៉ែត្រ",
            "ទទឹងរងពី៩តឹក ទៅ ១ម៉ែត្រ និង បណ្តោយទៅតាមលទ្ធភាពដី ដែលកសិករអាចគ្រប់គ្រងបាន។",
            "នៅរដូវប្រាំងកំពស់ពី ២ តឹក ទៅ ៣ តឹក ហើយនៅរដូវវស្សាពី ៣ តឹក ទៅ ៥ តឹក។",
            "ការគ្របរង អាចធ្វើបានពីរប្រភេទដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី បន្ថយការដុះស្មៅ។",
          ],
        },
        cultivation: {
          en: [
            "First, take the luffa seeds and nick the base (butt) with scissors (not cutting it off completely).",
            "Take the cut seeds and place them in a clean, dry towel, wrap them tightly, and soak them in a container of water with a temperature between 48-50C for 4 hours.",
            "Next, place the seeds in another damp towel (or cloth) and put them in a steamer (or closed container) with a damp towel or cloth that can cover the seeds completely. Leave them in the steamer for 24 hours. This process makes the seeds germinate faster.",
            "Select the seeds that have split open (bæk moat chap - 'sparrow mouth') and place 1 seed per seed cup (kuntong) or 1 slot (hole) in the seed tray.",
            "Bury the seed 1cm deep (half a finger joint). If the seed is buried too deep or too shallow, it will not germinate well.",
            "Take the seed cups or trays with the seeds and place them correctly in the nursery shed.",
            "Water thoroughly every morning or evening. If the soil is dry, the seeds will not germinate well.",
            "Take 1 seed and sow it directly into 1 seed cup or 1 slot of the seed tray.",
            "Water thoroughly, and then take the tray or seed cup with the seeds and place it in the nursery shed.",
            "Water thoroughly every morning. If the soil is dry, the seeds will not germinate.",
            "To avoid weak/shocked seedlings after transplanting, you must reduce watering the luffa seedlings and expose them to sunlight for 2 to 3 days to harden them. Luffa seedlings aged 7 to 12 days can then be transplanted.",
            "Before transplanting the seedlings onto the beds, introduce water into the space between the beds (for beds covered with plastic mulch) or water thoroughly the beds covered with straw.",
            "Bury the fertilizer to a depth of 8 to 10 cm, leave it for 6 to 7 days, and water it at least 5 to 6 times before transplanting the seedlings. The luffa seedlings should be transplanted in the evening when the weather is cool.",
          ],
          km: [
            "ដំបូងយកគ្រាប់ននោង មកជ្រាបគូទនឹងកន្ត្រៃ(មិនមែនកាត់អោយដាច់)។",
            "យកគ្រាប់ដែលកាត់ហើយដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨- ៥០ អង្សារ ត្រាំវារយៈពេល៤ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "ជ្រើសរើសយកគ្រាប់បែកមាត់ចាប ដាក់១គ្រាប់ក្នុង១កន្ទោង ឬ ១ ប្រលោះ (រន្ធ) ថាសបណ្តុះ",
            "កប់គ្រាប់ជំរៅ ១សង់ទីម៉ែត្រ (កន្លះថ្នាំងដៃ)។ បើកប់គ្រាប់ជ្រៅពេក ឬ រាក់ពេក ធ្វើឱ្យគ្រាប់ដុះមិនបានល្អ",
            "យកកន្ទោង ឬ ថាសបណ្តុះដែលដាក់គ្រាប់ហើយ ដាក់ក្នុងរោងបណ្តុះកូនឲ្យបានត្រឹមត្រូវ។",
            "ស្រោចទឹករៀងរាល់ពេលព្រឹក ឬល្ងាចឱ្យជោក។ បើដីស្ងួត វាធ្វើឱ្យគ្រាប់ដុះមិនល្អ។",
            "ការដាក់គ្រាប់បណ្តុះដោយផ្ទាល់ក្នុងថាសបណ្តុះ ឬ កន្ទោង (បណ្តុះគ្រាប់ស្ងួត)",
            "យកគ្រាប់ ចំនួន១គ្រាប់ដាក់បណ្តុះផ្ទាល់ក្នុង១កន្ទោង ឬ ១ប្រលោះថាសបណ្តុះ",
            "ស្រោចទឹកឱ្យជោក ទើបយកថាស ឬ កន្ទោងដែលដាក់គ្រាប់ហើយ ទៅដាក់ក្នុងរោងបណ្តុះ កូន។",
            "ស្រោចទឹករៀងរាល់ពេលព្រឹក ឱ្យជោក។ បើដីស្ងួត វាធ្វើឱ្យគ្រាប់ មិនដុះ។",
            "ដើម្បីជៀសវាងកូនអន់(សន្លប់)ក្រោយពេលដាំ គេត្រូវបន្ថយការស្រោចទឹកកូនននោង និង ដាក់វាឱ្យត្រូវពន្លឺថ្ងៃ រយៈពេល ពី២ ទៅ ៣ថ្ងៃ ដើម្បីពង្រឹងកូន។ កូនននោង អាយុពី ៧ ទៅ ១២ថ្ងៃទើបអាចដាំបាន ។",
            "មុនដាំកូនលើរង ត្រូវបញ្ចូលទឹកតាមចន្លោះរង (សំរាប់រងដាំគ្របប្លាស្ទិច) ឬ ស្រោចទឹកលើរងដែលគ្របដោយ ចំបើង ។",
            "កប់ជីជម្រៅពី ៨ ទៅ១០ សង់ទីម៉ែត្រ ទុករយៈពេល ពី ៦ ទៅ ៧ថ្ងៃ ដោយស្រោចទឹកយ៉ាងតិច ពី៥ ទៅ ៦ ដង មុនពេលដាំកូន។ ត្រូវដាំ កូនននោង នៅពេលល្ងាច មេឃត្រជាក់ល្អ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/luffa/luffa12.avif",
        title: {
          en: "Serpent gourd F1 variety Dana",
          km: "ននោងពស់ F1 ពូជ ដាណា",
        },
        info: {
          en: "During the dry season, it requires moisture on the leaves and stem.",
          km: "នៅរដូវក្តៅ ត្រូវការសំណើមលើស្លឹក និងដើម។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/luffa/luffa12.avif",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/luffa/luffa13.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/luffa/luffa12.avif",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
    ],
  },
  bottle_gourd: {
    name: { en: "Bottle Gourd", km: "ឃ្លោក" },
    desc: {
      en: "This variety is easy to grow and is not very selective about soil types.",
      km: "ពូជងាយស្រួលដាំ មិនសូវប្រកាន់ប្រភេទដី​។",
    },
    imgs: [
      {
        src: "image/bottle/Picture30.jpg",
        title: {
          en: "Bottle Gourd F1 Variety: Miami",
          km: "ឃ្លោក F1 ពូជ ម៉ីអាមី",
        },
        info: {
          en: "During the dry season, it requires moisture on the leaves and stem.",
          km: "នៅរដូវក្តៅ ត្រូវការសំណើមលើស្លឹក និងដើម។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/bottle/bottle1.jpg",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/bottle/bottle2.webp",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/bottle/bottle3.jpg",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Harvesting: 45 to 50 days after direct planting.",
            "Color: Tender bright green.",
            "Fruit Shape: Good cylindrical, sleek.",
            "Size: 28-30cm x 5.5-6cm",
            "Yield: 10-11kg/plant (This figure for a single plant is extremely high and may be a typo in the original text, perhaps intended as kg/area).",
            "Growing Season: All year round.",
            "This variety requires sufficient management of fertilizer and water.",
            "It is an easy-to-grow variety, not very particular about soil, resistant to disease, and can be planted in all soil conditions.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤៦ទៅ៥០ ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតងខ្ចី",
            "ទំរង់ផ្លែ៖រាងជាស៊ីឡាង ស្រឡូនល្អ",
            "ទំហំផ្លែ៖ 28-30cm x 8,5,5-6cm",
            "ទិន្នផល៖10-11kg/ ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
            "ពូជនេះត្រូវការគ្រប់គ្រងជី និងទឹកអោយបានគ្រប់គ្រាន់",
            "ពូជងាយស្រួលនាំ មិនសូវប្រកាន់ដី ពូជនេះធន់ជម្ងឺ អាចដាំបានគ្រប់ស្ថានភាពដី។",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Before starting to plant, the land must be prepared and cleaned thoroughly. Then, the soil must be ploughed finely and air-dried for 10-15 days. Only then is a tractor used to plough the soil again to a depth of 15-20cm.",
            "Raise the beds with a width of 1meter, a length depending on the length of the land, and a bed height between 2-3decimeterin the dry season or 3-5decimeter in the rainy season. After raising the beds, incorporate 1-2kg of animal manure or compost per 1square meter of surface area, burying it at the bottom of the bed by mixing it well with the bed soil.",
            "Cover the beds with plastic bags or by using rice straw to prevent bed erosion and protect/maintain soil moisture.",
          ],
          km: [
            "មុននឹងចាប់ផ្តើមដាំ ត្រូវរៀបចំដីសម្អាតដីឱ្យស្អាត បន្ទាប់មកភ្ជួររាស់ដីឱ្យបានម៉ដ្ឋល្អ ហើយហាលដីពី ១០-១៥ថ្ងៃ ទើបគេប្រើគោយន្តភ្ជួរដីម្តងទៀតជម្រៅពី ១៥-២០សង់ទីម៉ែត្រ។",
            "លើករងដោយមានទទឹង ១ម៉ែត្របណ្តោយអាស្រ័យទៅតាមប្រវែងដី និងកម្ពស់រងចន្លោះ ២-៣តឹកនៅរដូវប្រាំង ឬ ៣-៥តឹកនៅរដូវវស្សា។ បន្ទាប់ពីលើករងហើយត្រូវដាក់ជីលាមកសត្វ ឬជីកំប៉ុស្ពឺ ពី ១-២គីឡូក្រាមសម្រាប់ផ្ទៃដី ១ម៉ែត្រការ៉េ កប់ទ្រាប់បាតរងដោយច្របល់វាឱ្យសព្វល្អជាមួយដីរង",
            "ធ្វើការគ្របរងដោយថង់ប្លាស្ទិក ឬដោយប្រើចំបើង ដើម្បីទប់ស្កាត់ការហូរច្រោះរង និងការពារសំណើមដី",
          ],
        },
        cultivation: {
          en: [
            "First, nick the tip/head of the gourd seed slightly with scissors from the side.",
            "Take the cut seeds and place them in a clean, dry towel, wrap them tightly, and soak them in a container of water with a temperature between 48-50C for 6 hours.",
            "Next, place the seeds in another damp towel (or cloth) and put them in a steamer (or closed container) with a damp towel or cloth that can cover the seeds completely. Leave them in the steamer for 24 hours. This process makes the seeds germinate faster.",
            "Take the seeds and place them in seed cups (kuntong) or seed trays. Water them thoroughly, and then place them in the nursery shed.",
            "Select seedlings that have strong, healthy stems, aged 7–12 days.",
            "They should be exposed to the elements (hardened off) for 2–3 days to strengthen the seedlings before planting.",
            "Before planting, water must be introduced into the beds (for those covered with plastic sheeting) and water should be sprayed onto the beds covered with straw.",
            "Add fertilizer to the planting holes and mix it well, leaving it for 6–7 days. Water the holes 5–6 times before planting. The gourd seedlings should be transplanted in the evening when the weather is cool.",
          ],
          km: [
            "ដំបូងយកគ្រាប់ឃ្លោកទៅច្រកក្បាលនឹងកន្ត្រៃពីចំហៀងបន្តិច",
            "យកគ្រាប់ដែលកាត់ហើយដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨-៥០ អង្សារ ត្រាំវារយៈពេល៦ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "យកគ្រាប់ទៅដាក់ក្នុងកន្ទោងឬថាសបណ្តុះ ស្រោចទឹកអោយជោគ រួចយកទៅដាក់ក្នុងរោងបណ្តុះ។",
            "ត្រូវរើសយកកូនណាដែលមានដើមរឹកមាំល្អ អាយុពី ៧-១២ថ្ងៃ",
            "ត្រូវដាក់វាហាលពី ២-៣ថ្ងៃដើម្បីពង្រឹងកូនមុនពេលដាំ",
            "មុនពេលដាំ គេត្រូវបញ្ចូលទឹកតាមរងសម្រាប់រងគ្របថង់ប្លាស្ទិក និងស្រោចទឹកលើរងគ្របចំបើង",
            "ទប់ស្កាត់ស្មៅ ជាពិសេសនៅពេលរុក្ខជាតិនៅក្មេង",
            "បន្ថែមជីនៅតាមរណ្ដៅកូនដំណាំហើយច្របល់ឱ្យសព្វដោយទុករយៈពេលពី ៦-៧ថ្ងៃ ហើយស្រោចទឹក៥-៦ដងមុនពេលដាំ ហើយគេគួរដាក់ដាំកូនឃ្លោកនៅពេលល្ងាចមេឃត្រជាក់ល្អ។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/bottle/Picture31.png",
        title: { en: "Bottle gourd OP Variety: Mesa", km: "ឃ្លោក OP ពូជ មេសា" },
        info: {
          en: "During the dry season, it requires moisture on the leaves and stem.",
          km: "នៅរដូវក្តៅ ត្រូវការសំណើមលើស្លឹក និងដើម។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/bottle/bottle4.webp",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/bottle/bottle5.jpg",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/bottle/bottle6.jpg",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Harvesting: 45 to 50 days after direct planting.",
            "Color: Tender bright green.",
            "Fruit Shape: Good cylindrical, sleek.",
            "Size: 28-30cm x 5.5-6cm",
            "Yield: 10-11kg/plant (This figure for a single plant is extremely high and may be a typo in the original text, perhaps intended as kg/area).",
            "Growing Season: All year round.",
            "This variety requires sufficient management of fertilizer and water.",
            "It is an easy-to-grow variety, not very particular about soil, resistant to disease, and can be planted in all soil conditions.",
          ],
          km: [
            "អាយុប្រមូលផល៖៤៦ទៅ៥០ ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ពណ៌ផ្លែ៖បៃតងខ្ចី",
            "ទំរង់ផ្លែ៖រាងជាស៊ីឡាង ស្រឡូនល្អ",
            "ទំហំផ្លែ៖ 28-30cm x 8,5,5-6cm",
            "ទិន្នផល៖10-11kg/ ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
            "ពូជនេះត្រូវការគ្រប់គ្រងជី និងទឹកអោយបានគ្រប់គ្រាន់",
            "ពូជងាយស្រួលនាំ មិនសូវប្រកាន់ដី ពូជនេះធន់ជម្ងឺ អាចដាំបានគ្រប់ស្ថានភាពដី។",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Before starting to plant, the land must be prepared and cleaned thoroughly. Then, the soil must be ploughed finely and air-dried for 10-15 days. Only then is a tractor used to plough the soil again to a depth of 15-20cm.",
            "Raise the beds with a width of 1meter, a length depending on the length of the land, and a bed height between 2-3decimeterin the dry season or 3-5decimeter in the rainy season. After raising the beds, incorporate 1-2kg of animal manure or compost per 1square meter of surface area, burying it at the bottom of the bed by mixing it well with the bed soil.",
            "Cover the beds with plastic bags or by using rice straw to prevent bed erosion and protect/maintain soil moisture.",
          ],
          km: [
            "មុននឹងចាប់ផ្តើមដាំ ត្រូវរៀបចំដីសម្អាតដីឱ្យស្អាត បន្ទាប់មកភ្ជួររាស់ដីឱ្យបានម៉ដ្ឋល្អ ហើយហាលដីពី ១០-១៥ថ្ងៃ ទើបគេប្រើគោយន្តភ្ជួរដីម្តងទៀតជម្រៅពី ១៥-២០សង់ទីម៉ែត្រ។",
            "លើករងដោយមានទទឹង ១ម៉ែត្របណ្តោយអាស្រ័យទៅតាមប្រវែងដី និងកម្ពស់រងចន្លោះ ២-៣តឹកនៅរដូវប្រាំង ឬ ៣-៥តឹកនៅរដូវវស្សា។ បន្ទាប់ពីលើករងហើយត្រូវដាក់ជីលាមកសត្វ ឬជីកំប៉ុស្ពឺ ពី ១-២គីឡូក្រាមសម្រាប់ផ្ទៃដី ១ម៉ែត្រការ៉េ កប់ទ្រាប់បាតរងដោយច្របល់វាឱ្យសព្វល្អជាមួយដីរង",
            "ធ្វើការគ្របរងដោយថង់ប្លាស្ទិក ឬដោយប្រើចំបើង ដើម្បីទប់ស្កាត់ការហូរច្រោះរង និងការពារសំណើមដី",
          ],
        },
        cultivation: {
          en: [
            "First, nick the tip/head of the gourd seed slightly with scissors from the side.",
            "Take the cut seeds and place them in a clean, dry towel, wrap them tightly, and soak them in a container of water with a temperature between 48-50C for 6 hours.",
            "Next, place the seeds in another damp towel (or cloth) and put them in a steamer (or closed container) with a damp towel or cloth that can cover the seeds completely. Leave them in the steamer for 24 hours. This process makes the seeds germinate faster.",
            "Take the seeds and place them in seed cups (kuntong) or seed trays. Water them thoroughly, and then place them in the nursery shed.",
            "Select seedlings that have strong, healthy stems, aged 7–12 days.",
            "They should be exposed to the elements (hardened off) for 2–3 days to strengthen the seedlings before planting.",
            "Before planting, water must be introduced into the beds (for those covered with plastic sheeting) and water should be sprayed onto the beds covered with straw.",
            "Add fertilizer to the planting holes and mix it well, leaving it for 6–7 days. Water the holes 5–6 times before planting. The gourd seedlings should be transplanted in the evening when the weather is cool.",
          ],
          km: [
            "ដំបូងយកគ្រាប់ឃ្លោកទៅច្រកក្បាលនឹងកន្ត្រៃពីចំហៀងបន្តិច",
            "យកគ្រាប់ដែលកាត់ហើយដាក់ក្នុងកន្សែងដែលស្ងួតស្អាត រុំវាអោយជិត ដាក់ត្រាំក្នុងធុងទឹកកកដែលទឹកនោះមានសីតុណ្ហភាពចន្លោះពី ៤៨-៥០ អង្សារ ត្រាំវារយៈពេល៦ម៉ោង",
            "បន្ទាប់មកយកគ្រាប់ទៅដាក់ក្នុង កន្សែងមួយទៀតដែលសើម រួចធុងស្ងោរដែលមានកន្សែងឬក្រណាត់សើមដែលអាចគ្រប់គ្រាប់ជិត ទុកវាក្នុងធុងស្ងោររយៈពេល២៤ម៉ោង។ការធ្វើបែបនេះធ្វើឲ្យគ្រាប់ដុះពន្លកលឿនជាង។",
            "យកគ្រាប់ទៅដាក់ក្នុងកន្ទោងឬថាសបណ្តុះ ស្រោចទឹកអោយជោគ រួចយកទៅដាក់ក្នុងរោងបណ្តុះ។",
            "ត្រូវរើសយកកូនណាដែលមានដើមរឹកមាំល្អ អាយុពី ៧-១២ថ្ងៃ",
            "ត្រូវដាក់វាហាលពី ២-៣ថ្ងៃដើម្បីពង្រឹងកូនមុនពេលដាំ",
            "មុនពេលដាំ គេត្រូវបញ្ចូលទឹកតាមរងសម្រាប់រងគ្របថង់ប្លាស្ទិក និងស្រោចទឹកលើរងគ្របចំបើង",
            "ទប់ស្កាត់ស្មៅ ជាពិសេសនៅពេលរុក្ខជាតិនៅក្មេង",
            "បន្ថែមជីនៅតាមរណ្ដៅកូនដំណាំហើយច្របល់ឱ្យសព្វដោយទុករយៈពេលពី ៦-៧ថ្ងៃ ហើយស្រោចទឹក៥-៦ដងមុនពេលដាំ ហើយគេគួរដាក់ដាំកូនឃ្លោកនៅពេលល្ងាចមេឃត្រជាក់ល្អ។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
    ],
  },
  eggplant: {
    name: { en: "Eggplant", km: "ត្រប់" },
    desc: {
      en: "High-yield eggplant with firm smooth fruits, strong growth, disease resistance, and long harvest.",
      km: "ផ្លែត្រប់ ផ្តល់ទិន្នផលខ្ពស់ ផ្លែធំរលោងល្អ រឹងមាំ ធន់នឹងជំងឺ និងការប្រមូលផលបានយូរ។",
    },
    imgs: [
      {
        src: "image/eggplant/Picture33.jpg",
        title: {
          en: "Aubergine F1 variety: Santay",
          km: "ត្រប់វែង F1 ពូជ ត្រប់សណ្តាយ",
        },
        info: {
          en: "Strong plant with a height of 0.8–1.5 m, suitable for fields.",
          km: "ដើមរឹងមាំ កំពស់ដើម 0,8-1,5 m ល្អសម្រាប់ ទីវាល។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/eggplant/eggplant1.jpg",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/eggplant/eggplant2.png",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/eggplant/eggplant3.jpg",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Harvest period: 65 to 70 days after direct sowing",
            "Growth characteristics: Strong and vigorous vine, produces many branches, plant height 0.8–1.5 m. Suitable for trellising. Young fruits are light green.",
            "Average yield: 6–7.5 kg per plant",
            "Fruit size: 23–25 cm x 6–6.5 cm",
            "Planting season: Can be grown all year roun.",
          ],
          km: [
            "អាយុប្រមូលផល៖65ទៅ 70ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "លក្ខណៈលូតលាស់៖ដើមរឹងមាំ ម្លែកច្រើន កំពស់ដើម 0,8-1,5 m ល្អសម្រាប់ ទីវាលី ក្រហមក្រ ម៉ៅ សំពត់ក្បាល បៃតងខ្ចី",
            "ទំងន់ផ្លែ៖6-7,5kg/ដើម",
            "ទំហំផ្លែ៖ 23-25cm x 6-6,5cm",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ(មិនប្រកាន់រដូវ)",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plow the soil to a depth of 2–3 layers (20–30 cm).",
            "Loosen and level the soil well, and expose it to sunlight for 10–15 days before planting.",
          ],
          km: [
            "ភ្ជួរដីជម្រៅ ២តឹកទៅ៣តឹក (២០សង់ទីម៉ែត្រទៅ៣០សង់ទីម៉ែត្រ)",
            "ភ្ជួររាស់ដីឱ្យបានម៉ដ្ឋល្អ ហើយហាលពី១០ទៅ១៥ថ្ងៃមុនពេលដាំ",
          ],
        },
        cultivation: {
          en: [
            "Farmers should begin raising the seedlings when the young plants are 5–7 days old and ready for transplanting.",
            "Bed width: 1–1.2 meters depending on the variety. The bed length can be adjusted, but should not exceed 25 meters to ease irrigation, weeding, fertilizing, spraying, and harvesting.",
            "During the rainy season, raise the bed height to 30–50 cm.",
            "Plant spacing: 70 cm–1 meter between plants.",
            "Row spacing: 70 cm–1 meter between rows.",
          ],
          km: [
            "កសិករត្រូវចាប់ផ្តើមលើករងដាំកូនត្រប់ បន្ទាប់ពីកូនត្រប់មានអាយុពី ៥-៧ថ្ងៃ ល្មមយកទៅដាំបាន។ របៀបធ្វើរងដាំត្រប់មានដូចខាងក្រោម៖",
            "ទទឹងរង១-១,២ម៉ែត្រ អាស្រ័យតាមប្រភេទពូជនិងបណ្តោយរងធ្វើ តាមលទ្ធភាព តែមិនគួរលើស ពី២៥ម៉ែត្រទេ។ ការលើករងវែងពេកកសិករនឹង ពិបាកចូលស្រោចទឹក ធ្វើស្មៅដាក់ជី បាញ់ថ្នាំនិង ប្រមូលផល",
            "រងនៅរដូវវស្សាត្រូវមានកម្ពស់ពី ៣- ៥តឹក (៣០សង់ទីម៉ែត្រ-៥០ សង់ទីម៉ែត្រ)",
            "ចន្លោះពីគុម្ពមួយទៅគុម្ពមួយមានប្រវែង៧០ស.ម-១ ម៉ែត្រ",
            "ចន្លោះពីជួរមួយទៅជួរមួយមានប្រវែង ៧០ស.ម-១ ម៉ែត្រ.",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/eggplant/Picture34.png",
        title: {
          en: "Round Eggplant F1 variety: Chantha ",
          km: "ត្រប់ស្រួយ F1 ពូជ ចាន់ថា",
        },
        info: {
          en: "Round fruits, 5.5–6 cm × 6–7 cm in size, yielding 4.5–6 kg per plant.",
          km: "ផ្លែរាងមូល 5,5-6cm x 6-7cm 4,5-6kg/ដើម។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/eggplant/Picture34.png",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/eggplant/eggplant4.webp",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/eggplant/eggplant5.jpg",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Harvesting: 65 to 70 days after direct planting.",
            "Characteristics: Green, striped, green calyx/cap/collar (sămpŏt kbăl) with white at the base (phnæk kuot - the bottom part).",
            "Fruit Shape and Weight: Round shape, 5.5-6cm x 6-7cm.",
            "Growth Characteristics: Strong stem, many branches.",
            "Plant Height: 0.8-1.5m, suitable for open fields.",
            "Yield: 4.5-6kg/plant.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូលផល65ទៅ 70ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "លក្ខណៈផ្លែ៖បៃតង ឆ្នូត សំពត់ក្បាល បៃតងខ្ចី មានពណ៌ស ផ្នែកគូដ",
            "ទំរង់ និងទំងន់ផ្លែ៖ផ្លែរាងមូល 5,5-6cm x 6-7cm",
            "លក្ខណៈលូតលាស់៖ដើមរឹងមាំ មែកច្រើន",
            "កំពស់ដើម ៖0,8-1,5 m ល្អ សម្រាប់ ទីវាល",
            "ទិន្នផល៖4,5-6kg/ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plow 2–3 times to a depth of 25-30cm, then harrow to break up the soil and level the ground.",
            "Air-dry the soil thoroughly to kill germs/pathogens.",
            "Dry Season Bed Height: 20cm, Bed Width: 1meter.",
            "Rainy Season Bed Height: 40cm, Bed Width: 1meter.",
            "Mix thoroughly 1kg of decomposed animal manure or compost per square meter, and mix in 1kg of $20-20-15$ fertilizer per square meter.",
            "Water thoroughly before covering the beds with straw or plastic mulch.",
          ],
          km: [
            "ភ្ជួរ ២-៣សារ ជម្រៅពី២៥-៣០ស.ម ហើយរាស់បំបែកដី ឲ្យរាបស្មើ",
            "ហាលដីឲ្យស្ងួតល្អ ដើម្បីសម្លាប់មេរោគ",
            "លើករងកម្ពស់រង រដូវប្រាំង ២០ស.ម ទទឹងរង១ម៉ែត្រ",
            "លើករងកម្ពស់ រដូវវស្សា ៤០ស.ម ទទឹងរង១ម៉ែត្រ",
            "ច្របល់ជីលាមកសត្វពុកផុត ឬជីកំប៉ុស្ត ១គ.ក/ម៉ែត្រការ៉េ និងលាយជី ២០-២០-១៥ ចំនួន ១គ.ក្រ/ម៉ែត្រការ៉េ",
            "ស្រោចទឹកអោយជោគ ទើបគ្របចំបើង ឬប្លាស្ទិចគ្របដី",
          ],
        },
        cultivation: {
          en: [
            "Take the seeds and spread them out on a wet cloth/mesh that absorbs water well, and wrap the seeds tightly.",
            "Water daily to keep the cloth sufficiently damp, and place them in a steamer/container for incubation.",
            "Incubate the seeds for 2 to 3 nights.",
            "Select seeds that have cracked open ('sparrow mouth') to sow first.",
            "Sow one seed per hole (in the tray), then place the tray on the nursery platform and cover it with a white insect net.",
            "Water sufficiently, especially at noon.",
            "Do not water in the evening as this can cause the seeds or seedlings to rot.",
            "Expose the eggplant seedlings to sunlight (except at noon) and reduce watering for $5-7$ days before transplanting.",
            "Eggplant seedlings aged 25-28 days (having two true leaves) can be transplanted.",
            "Plant one row per bed, with 1meter spacing from one clump to the next.",
          ],
          km: [
            "យកគ្រាប់ដាក់ពង្រាយក្នុងក្រណាត់ស្បៃជក់ទឹក ហើយរុំគ្រាប់អោយហប់ល្អ",
            "ស្រោចទឹករៀងរាល់ថ្ងៃអោយក្រណាត់សើមល្អ ហើយដាក់ក្នុងធុងស្ងោរ",
            "ផ្អាប់គ្រាប់រយះពេល ២ ទៅ ៣យប់",
            "ជ្រើសរើសគ្រាប់ដែលបែកមាត់ចាប់បណ្តុះមុន",
            "បណ្តុះកូនមួយគ្រាប់ក្នុងមួយរន្ធ បន្ទាប់មកដាក់លើរានបណ្តុះ រួចគ្របសំណាញ់សត្វល្អិតពណ៌ស",
            "ស្រោចទឹកអោយគ្រប់គ្រាន់ជាពិសេសនៅថ្ងៃត្រង់",
            "ហាមស្រោចទឹកពេលល្ងាចព្រោះវានឹងអាចបង្កអោយគ្រាប់ ឬកូនបន្លែរលួយបាន",
            "ដាក់កូនត្រប់អោយត្រូវពន្លឺថ្ងៃ (លើកលែងថ្ងៃត្រង់) និងកាត់បន្ថយការស្រោចទឹក កូនអោយបាន ៥-៧ថ្ងៃ មុនដាំ",
            "កូនត្រប់អាយុ ២៥-២៨ថ្ងៃ (មានស្លឹកពីរ) អាចយកទៅដាំបាន",
            "ដាំ១ជួរក្នុង១រង និងមានចន្លោះពី គុម្ពមួយទៅ មួយមានប្រវែង ១ម៉ែត្រ",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/eggplant/Picture35.png",
        title: {
          en: "Round Eggplant F1 variety: Chan Thai",
          km: "ត្រប់ស្រួយ F1 ពូជ ចាន់ថៃ",
        },
        info: {
          en: "Strong plant with many branches, 0.8–1.5 m tall, suitable for fields.",
          km: "ដើមរឹងមាំ មែកច្រើន កំពស់ដើម 0,8-1,5 m ល្អសម្រាប់ ទីវាល។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/eggplant/eggplant6.webp",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/eggplant/eggplant7.webp",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/eggplant/eggplant8.webp",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting: 65 to 70 days after direct planting.",
            "Characteristics: Green, striped, green calyx/cap/collar (sămpŏt kbăl) with white at the base (phnæk kuot - the bottom part).",
            "Fruit Shape and Weight: Round shape, 5.5-6cm x 6-7cm.",
            "Growth Characteristics: Strong stem, many branches.",
            "Plant Height: 0.8-1.5m, suitable for open fields.",
            "Yield: 4.5-6kg/plant.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូលផល65ទៅ 70ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "លក្ខណៈផ្លែ៖បៃតង ឆ្នូត សំពត់ក្បាល បៃតងខ្ចី មានពណ៌ស ផ្នែកគូដ",
            "ទំរង់ និងទំងន់ផ្លែ៖ផ្លែរាងមូល 5,5-6cm x 6-7cm",
            "លក្ខណៈលូតលាស់៖ដើមរឹងមាំ មែកច្រើន",
            "កំពស់ដើម ៖0,8-1,5 m ល្អ សម្រាប់ ទីវាល",
            "ទិន្នផល៖4,5-6kg/ដើម",
            "រដូវដាំដុះ៖១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plow 2–3 times to a depth of 25-30cm, then harrow to break up the soil and level the ground.",
            "Air-dry the soil thoroughly to kill germs/pathogens.",
            "Dry Season Bed Height: 20cm, Bed Width: 1meter.",
            "Rainy Season Bed Height: 40cm, Bed Width: 1meter.",
            "Mix thoroughly 1kg of decomposed animal manure or compost per square meter, and mix in 1kg of $20-20-15$ fertilizer per square meter.",
            "Water thoroughly before covering the beds with straw or plastic mulch.",
          ],
          km: [
            "ភ្ជួរ ២-៣សារ ជម្រៅពី២៥-៣០ស.ម ហើយរាស់បំបែកដី ឲ្យរាបស្មើ",
            "ហាលដីឲ្យស្ងួតល្អ ដើម្បីសម្លាប់មេរោគ",
            "លើករងកម្ពស់រង រដូវប្រាំង ២០ស.ម ទទឹងរង១ម៉ែត្រ",
            "លើករងកម្ពស់ រដូវវស្សា ៤០ស.ម ទទឹងរង១ម៉ែត្រ",
            "ច្របល់ជីលាមកសត្វពុកផុត ឬជីកំប៉ុស្ត ១គ.ក/ម៉ែត្រការ៉េ និងលាយជី ២០-២០-១៥ ចំនួន ១គ.ក្រ/ម៉ែត្រការ៉េ",
            "ស្រោចទឹកអោយជោគ ទើបគ្របចំបើង ឬប្លាស្ទិចគ្របដី",
          ],
        },
        cultivation: {
          en: [
            "Take the seeds and spread them out on a wet cloth/mesh that absorbs water well, and wrap the seeds tightly.",
            "Water daily to keep the cloth sufficiently damp, and place them in a steamer/container for incubation.",
            "Incubate the seeds for 2 to 3 nights.",
            "Select seeds that have cracked open ('sparrow mouth') to sow first.",
            "Sow one seed per hole (in the tray), then place the tray on the nursery platform and cover it with a white insect net.",
            "Water sufficiently, especially at noon.",
            "Do not water in the evening as this can cause the seeds or seedlings to rot.",
            "Expose the eggplant seedlings to sunlight (except at noon) and reduce watering for $5-7$ days before transplanting.",
            "Eggplant seedlings aged 25-28 days (having two true leaves) can be transplanted.",
            "Plant one row per bed, with 1meter spacing from one clump to the next.",
          ],
          km: [
            "យកគ្រាប់ដាក់ពង្រាយក្នុងក្រណាត់ស្បៃជក់ទឹក ហើយរុំគ្រាប់អោយហប់ល្អ",
            "ស្រោចទឹករៀងរាល់ថ្ងៃអោយក្រណាត់សើមល្អ ហើយដាក់ក្នុងធុងស្ងោរ",
            "ផ្អាប់គ្រាប់រយះពេល ២ ទៅ ៣យប់",
            "ជ្រើសរើសគ្រាប់ដែលបែកមាត់ចាប់បណ្តុះមុន",
            "បណ្តុះកូនមួយគ្រាប់ក្នុងមួយរន្ធ បន្ទាប់មកដាក់លើរានបណ្តុះ រួចគ្របសំណាញ់សត្វល្អិតពណ៌ស",
            "ស្រោចទឹកអោយគ្រប់គ្រាន់ជាពិសេសនៅថ្ងៃត្រង់",
            "ហាមស្រោចទឹកពេលល្ងាចព្រោះវានឹងអាចបង្កអោយគ្រាប់ ឬកូនបន្លែរលួយបាន",
            "ដាក់កូនត្រប់អោយត្រូវពន្លឺថ្ងៃ (លើកលែងថ្ងៃត្រង់) និងកាត់បន្ថយការស្រោចទឹក កូនអោយបាន ៥-៧ថ្ងៃ មុនដាំ",
            "កូនត្រប់អាយុ ២៥-២៨ថ្ងៃ (មានស្លឹកពីរ) អាចយកទៅដាំបាន",
            "ដាំ១ជួរក្នុង១រង និងមានចន្លោះពី គុម្ពមួយទៅ មួយមានប្រវែង ១ម៉ែត្រ",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/eggplant/Picture36.png",
        title: {
          en: "Large Eggplant OP variety: Sambo 007",
          km: "ត្រប់ធំ OP ពូជ សំបូ ០០៧",
        },
        info: {
          en: "Strong plant with many branches, 0.8–1.7 m tall, resistant to wilt, root rot, and viral diseases.",
          km: "ដើមរឹងមាំ មែកច្រើន កំពស់ដើម 0,8-1,7m ធន់ជម្ងឺ ស្វិតស្រពោនស្រស់ រលួយឬស និងវីរុស។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/eggplant/eggplant9.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/eggplant/eggplant10.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/eggplant/eggplant11.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
    ],
  },

  okra: {
    name: { en: "Okra", km: "ពោតបារាំង" },
    desc: {
      en: "High-yield okra with tender, crisp pods, strong growth, disease resistance, heat tolerance, and long harvest.",
      km: "ដើមអូក្រា ផ្តល់ទិន្នផលខ្ពស់ មានសំបកទន់ ស្វិត លូតលាស់រឹងមាំ ធន់នឹងជំងឺ ធន់នឹងកំដៅ និងការប្រមូលផលបានយូរ។",
    },
    imgs: [
      {
        src: "image/okra/okra2.jpg",
        title: {
          en: "Red Okra OP variety: RKA001",
          km: "ពោតបារាំង ក្រហម OP ពូជ RKA001",
        },
        info: {
          en: "Grows quickly and tolerates Cambodian weather. with a long harvesting period.",
          km: "លូតលាស់លឿន ធន់នឹងអាកាសធាតុ​កម្ពុជា។​ ប្រមូលផលបានរយៈពេលយូ។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/okra/okra2.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/okra/okra4.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/okra/okra3.webp",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 30 to 35 days after direct planting (OP variety).",
            "Characteristics of the Stem & Fruit: The stem is strong, has many green branches, and the plant height is 0.8-2m. The fruits are green, elongated, pointed at the tail, have 5 sides/ridges, and measure 8-13cm x 1.5-2cm. It grows quickly and is tolerant of the Cambodian climate. This variety is good for use as a vegetable and can be harvested for a long period.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូលផល៖30 ទៅ 35 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់ OP",
            "លក្ខណៈដើម & ផ្លែ៖ដើមរឹងមាំ មែកច្រើនពណ៌បៃតង កំពស់ដើម0,8-2 m ផ្លែបៃតងទ្រវែង ស្រួចកន្ទុយ ដែលមាន5ជ្រុង ប្រវែងផ្លែ 8-13cm x 1,5-2cm។លូតលាស់លឿន ធន់នឹងអាកាសធាតុកម្ពុជា។ ពូជនេះល្អសម្រាប់ធ្វើបន្លែ ប្រមូលផលបានរយៈពេលយូរ។",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil must be plowed until it is fine, and all weeds must be cleaned out and removed completely.",
            "Before planting, it is necessary to dig planting holes with a depth of 20cm and a size of 25cm, with a spacing from one hole to the next of 0.5meters to 1meter.",
            "Place compost containing pond bottom soil and cow manure into those holes to help retain soil moisture.",
          ],
          km: [
            "ត្រូវភ្ជួរដីឲ្យបាន ម៉ដ្ឋល្អ រើសសម្អាតស្មៅចេញឲ្យអស់",
            "មុនដាំចាំបាច់ត្រូវ កាប់រណ្តៅជម្រៅ ២០ស.ម ទំហំ ២៥ស.ម គម្លាតពីរណ្តៅ១ ទៅរណ្តៅ១ ចាប់ពី ០,៥ម៉ែត្រ ទៅ ១ម៉ែត្រ",
            "យកជីកំប៉ុស្តដែលមានប្រភេទដីបាតបឹង លាមកគោ ដាក់ចូលក្នុងរណ្តៅនោះ ដើម្បីរក្សាសំណើមដី។",
          ],
        },
        cultivation: {
          en: [
            "It can be planted either by seedling or by seed.",
            "Planting by seed is easier to grow and fast-growing, saving time on care.",
            "Before planting, the okra seeds must be soaked in water overnight.",
            "Afterward, take the seeds that have been soaked and plant them in the holes, placing 1 okra seed per hole.",
            "You must select only the firm, good quality seeds.",
            "If planted by seed, it is more durable and is guaranteed to survive. But if we plant seedlings, the process of uprooting them and transplanting them makes the seedlings wilt and delays growth for a long time, whereas planting by seed guarantees survival.",
          ],
          km: [
            "គេអាចដាំវាដោយកូនក៏បាន ដោយគ្រាប់ក៏បាន",
            "ការដាំដោយគ្រាប់ ងាយធំធាត់លឿន ចំណេញពេលវេលាថែទាំ",
            "មុនដាំ ត្រូវយកគ្រាប់របស់ពោតបារាំង ទៅត្រាំទឹកមួយយប់សិន",
            "ក្រោយមកយកគ្រាប់ ដែលបានត្រាំទឹករួចនោះ ទៅដាំក្នុងរណ្តៅ ដោយក្នុងមួយរណ្តៅ ដាក់គ្រាប់ពោតបារាំង ១គ្រាប់",
            "ត្រូវជ្រើសរើសយក គ្រាប់ណាដែលណែនល្អ",
            "បើដាំគ្រាប់វា ធន់ជាង វាដឹងតែរស់ហើយ តែបើយើងដាំកូន អាល័យតែទៅដកកូន ទៅធ្លុះកូនវាស្វិតពន្យារពេលយូរ តែបើដាំគ្រាប់វាដឹងរស់ហើយ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/Okra/Picture4.png",
        title: {
          en: "Okra OP variety: Apsaar 001",
          km: "ពោតបារាំង OP ពូជអប្សរ 001",
        },
        info: {
          en: "Harvest period: 30-35 days after direct sowing.",
          km: "អាយុប្រមូលផល30 ទៅ 35 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Okra/Picture5.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Okra/Picture4.png",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Okra/okra5.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 30 to 35 days after direct planting (OP variety).",
            "Characteristics of the Stem & Fruit: The stem is strong, has many green branches, and the plant height is 0.8-2m. The fruits are green, elongated, pointed at the tail, have 5 sides/ridges, and measure 8-13cm x 1.5-2cm. It grows quickly and is tolerant of the Cambodian climate. This variety is good for use as a vegetable and can be harvested for a long period.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូលផល៖30 ទៅ 35 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់ OP",
            "លក្ខណៈដើម & ផ្លែ៖ដើមរឹងមាំ មែកច្រើនពណ៌បៃតង កំពស់ដើម0,8-2 m ផ្លែបៃតងទ្រវែង ស្រួចកន្ទុយ ដែលមាន5ជ្រុង ប្រវែងផ្លែ 8-13cm x 1,5-2cm។លូតលាស់លឿន ធន់នឹងអាកាសធាតុកម្ពុជា។ ពូជនេះល្អសម្រាប់ធ្វើបន្លែ ប្រមូលផលបានរយៈពេលយូរ។",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil must be plowed until it is fine, and all weeds must be cleaned out and removed completely.",
            "Before planting, it is necessary to dig planting holes with a depth of 20cm and a size of 25cm, with a spacing from one hole to the next of 0.5meters to 1meter.",
            "Place compost containing pond bottom soil and cow manure into those holes to help retain soil moisture.",
          ],
          km: [
            "ត្រូវភ្ជួរដីឲ្យបាន ម៉ដ្ឋល្អ រើសសម្អាតស្មៅចេញឲ្យអស់",
            "មុនដាំចាំបាច់ត្រូវ កាប់រណ្តៅជម្រៅ ២០ស.ម ទំហំ ២៥ស.ម គម្លាតពីរណ្តៅ១ ទៅរណ្តៅ១ ចាប់ពី ០,៥ម៉ែត្រ ទៅ ១ម៉ែត្រ",
            "យកជីកំប៉ុស្តដែលមានប្រភេទដីបាតបឹង លាមកគោ ដាក់ចូលក្នុងរណ្តៅនោះ ដើម្បីរក្សាសំណើមដី។",
          ],
        },
        cultivation: {
          en: [
            "It can be planted either by seedling or by seed.",
            "Planting by seed is easier to grow and fast-growing, saving time on care.",
            "Before planting, the okra seeds must be soaked in water overnight.",
            "Afterward, take the seeds that have been soaked and plant them in the holes, placing 1 okra seed per hole.",
            "You must select only the firm, good quality seeds.",
            "If planted by seed, it is more durable and is guaranteed to survive. But if we plant seedlings, the process of uprooting them and transplanting them makes the seedlings wilt and delays growth for a long time, whereas planting by seed guarantees survival.",
          ],
          km: [
            "គេអាចដាំវាដោយកូនក៏បាន ដោយគ្រាប់ក៏បាន",
            "ការដាំដោយគ្រាប់ ងាយធំធាត់លឿន ចំណេញពេលវេលាថែទាំ",
            "មុនដាំ ត្រូវយកគ្រាប់របស់ពោតបារាំង ទៅត្រាំទឹកមួយយប់សិន",
            "ក្រោយមកយកគ្រាប់ ដែលបានត្រាំទឹករួចនោះ ទៅដាំក្នុងរណ្តៅ ដោយក្នុងមួយរណ្តៅ ដាក់គ្រាប់ពោតបារាំង ១គ្រាប់",
            "ត្រូវជ្រើសរើសយក គ្រាប់ណាដែលណែនល្អ",
            "បើដាំគ្រាប់វា ធន់ជាង វាដឹងតែរស់ហើយ តែបើយើងដាំកូន អាល័យតែទៅដកកូន ទៅធ្លុះកូនវាស្វិតពន្យារពេលយូរ តែបើដាំគ្រាប់វាដឹងរស់ហើយ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/Okra/Picture2.png",
        title: {
          en: "Okra OP variety: Daineang 09",
          km: "ពោតបារាំង OP ពូជ ដៃនាង09",
        },
        info: {
          en: "Grows quickly and is resistant to weather and diseases in Cambodia.",
          km: "លូតលាស់លឿន ធន់នឹងអាកាសធាតុ និង​ជម្ងឺ​នៅ​កម្ពុជា។​",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Okra/okra1.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Okra/Okro-plant.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Okra/okra-fruit-plant-fresh-green-okra-on-tree-in-nature-garden-free-photo.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 30 to 35 days after direct planting (OP variety).",
            "Characteristics of the Stem & Fruit: The stem is strong, has many green branches, and the plant height is 0.8-2m. The fruits are green, elongated, pointed at the tail, have 5 sides/ridges, and measure 8-13cm x 1.5-2cm. It grows quickly and is tolerant of the Cambodian climate. This variety is good for use as a vegetable and can be harvested for a long period.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូលផល៖30 ទៅ 35 ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់ OP",
            "លក្ខណៈដើម & ផ្លែ៖ដើមរឹងមាំ មែកច្រើនពណ៌បៃតង កំពស់ដើម0,8-2 m ផ្លែបៃតងទ្រវែង ស្រួចកន្ទុយ ដែលមាន5ជ្រុង ប្រវែងផ្លែ 8-13cm x 1,5-2cm។លូតលាស់លឿន ធន់នឹងអាកាសធាតុកម្ពុជា។ ពូជនេះល្អសម្រាប់ធ្វើបន្លែ ប្រមូលផលបានរយៈពេលយូរ។",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil must be plowed until it is fine, and all weeds must be cleaned out and removed completely.",
            "Before planting, it is necessary to dig planting holes with a depth of 20cm and a size of 25cm, with a spacing from one hole to the next of 0.5meters to 1meter.",
            "Place compost containing pond bottom soil and cow manure into those holes to help retain soil moisture.",
          ],
          km: [
            "ត្រូវភ្ជួរដីឲ្យបាន ម៉ដ្ឋល្អ រើសសម្អាតស្មៅចេញឲ្យអស់",
            "មុនដាំចាំបាច់ត្រូវ កាប់រណ្តៅជម្រៅ ២០ស.ម ទំហំ ២៥ស.ម គម្លាតពីរណ្តៅ១ ទៅរណ្តៅ១ ចាប់ពី ០,៥ម៉ែត្រ ទៅ ១ម៉ែត្រ",
            "យកជីកំប៉ុស្តដែលមានប្រភេទដីបាតបឹង លាមកគោ ដាក់ចូលក្នុងរណ្តៅនោះ ដើម្បីរក្សាសំណើមដី។",
          ],
        },
        cultivation: {
          en: [
            "It can be planted either by seedling or by seed.",
            "Planting by seed is easier to grow and fast-growing, saving time on care.",
            "Before planting, the okra seeds must be soaked in water overnight.",
            "Afterward, take the seeds that have been soaked and plant them in the holes, placing 1 okra seed per hole.",
            "You must select only the firm, good quality seeds.",
            "If planted by seed, it is more durable and is guaranteed to survive. But if we plant seedlings, the process of uprooting them and transplanting them makes the seedlings wilt and delays growth for a long time, whereas planting by seed guarantees survival.",
          ],
          km: [
            "គេអាចដាំវាដោយកូនក៏បាន ដោយគ្រាប់ក៏បាន",
            "ការដាំដោយគ្រាប់ ងាយធំធាត់លឿន ចំណេញពេលវេលាថែទាំ",
            "មុនដាំ ត្រូវយកគ្រាប់របស់ពោតបារាំង ទៅត្រាំទឹកមួយយប់សិន",
            "ក្រោយមកយកគ្រាប់ ដែលបានត្រាំទឹករួចនោះ ទៅដាំក្នុងរណ្តៅ ដោយក្នុងមួយរណ្តៅ ដាក់គ្រាប់ពោតបារាំង ១គ្រាប់",
            "ត្រូវជ្រើសរើសយក គ្រាប់ណាដែលណែនល្អ",
            "បើដាំគ្រាប់វា ធន់ជាង វាដឹងតែរស់ហើយ តែបើយើងដាំកូន អាល័យតែទៅដកកូន ទៅធ្លុះកូនវាស្វិតពន្យារពេលយូរ តែបើដាំគ្រាប់វាដឹងរស់ហើយ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
    ],
  },

  beans: {
    name: { en: "Bean", km: "សណ្ដែក" },
    desc: {
      en: "Fast-growing Bean from KsSeed — strong, tasty, and perfect for Cambodia’s climate!",
      km: "សណ្តែកពី KsSeed លូតលាស់លឿន រឹងមាំឆ្ងាញ់ សមស្របអាកាសធាតុកម្ពុជា។",
    },
    imgs: [
      {
        src: "image/Bean/bean1.webp",
        title: {
          en: "France Bean variety: Piseth.",
          km: "សណ្តែកបារាំង ពូជ ពិសិដ្ឋ",
        },
        info: {
          en: "The pods are long, light green, and contain black seeds.",
          km: "ផ្លែមូលទ្រវែងបៃតងខ្ចី និងមានគ្រាប់ខ្មៅ។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/Bean/bean3.webp",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/Bean/bean4.webp",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/Bean/bean2.jpg",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Extra sweet variety",
            "Harvesting: 75 - 85 days after sowing",
            "Ear size: 18 - 22 cm length",
            "Golden yellow kernels",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "ពូជផ្អែមបំផុត",
            "ប្រមូលផល: ៧៥ - ៨៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៨ - ២២ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: ["Corn requires fertile soil rich in nitrogen"],
          km: [
            "ពោតត្រូវការដីមានជីជាតិ សំបូរដោយអាសូត",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២៥-៣០ សង់ទីម៉ែត្រ",
            "បញ្ចូលជីលាមកសត្វរលួយល្អ ឬជីកំប៉ុស្ត",
            "ធានាការបង្ហូរទឹកល្អ; ពោតមិនអត់ឱនឱ្យដីលិចទឹក",
            "ដាំជាប្លុក ជាជាងជួរតែមួយ ដើម្បីបង្កកំណើតល្អ",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly when soil temperature is at least 10°C",
            "Plant seeds 2.5-5 cm deep",
            "Space plants about 25-30 cm apart in rows 75-90 cm apart",
            "Keep the soil consistently moist, especially during tasseling and silking",
            "Control weeds, especially when plants are young",
          ],
          km: [
            "សាបព្រោះគ្រាប់ដោយផ្ទាល់ នៅពេលសីតុណ្ហភាពដីមានយ៉ាងហោចណាស់ ១០°C",
            "ដាំគ្រាប់ឱ្យជ្រៅ ២.៥-៥ សង់ទីម៉ែត្រ",
            "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ ក្នុងជួរដែលមានចម្ងាយ ៧៥-៩០ សង់ទីម៉ែត្រ",
            "រក្សាសំណើមដីឱ្យស្ថិរភាព ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
            "ទប់ស្កាត់ស្មៅ ជាពិសេសនៅពេលរុក្ខជាតិនៅក្មេង",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/Bean/mungbean1.webp",
        title: {
          en: "Mung bean variety: Ek Phnom.",
          km: "សណ្តែកបាយ ពូជឯកភ្នំ",
        },
        info: {
          en: "fast-growing, nutrient-rich legume with high yield, and excellent drought tolerance.",
          km: "ដំណាំដុះលឿន សំបូរសារធាតុចិញ្ចឹម ផ្តល់ទិន្នផលខ្ពស់ និងធន់នឹងគ្រោះរាំងស្ងួតបានល្អ។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/Bean/mungbean1.webp",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/Bean/mungbean2.jpg",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/Bean/mungbean3.webp",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Tender and juicy",
            "Harvesting: 70 - 80 days after sowing",
            "Ear size: 16 - 20 cm length",
            "Excellent for fresh consumption",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "ទន់ និងមានទឹក",
            "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Corn thrives in well-drained, fertile soil with plenty of organic matter",
            "Till the soil to a depth of about 25 cm",
            "Add compost or well-rotted manure before planting",
            "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
            "Break up any clods of soil for a fine seedbed",
          ],
          km: [
            "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
            "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
            "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
            "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
            "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly outdoors after all danger of frost has passed",
            "Plant seeds about 3-4 cm deep",
            "Space plants approximately 25-30 cm apart",
            "Ensure good air circulation by planting in blocks",
            "Fertilize regularly, especially with nitrogen",
          ],
          km: [
            "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
            "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
            "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
            "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
            "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
          ],
        },
        irrigation: {
          en: [
            "Corn has high water needs, especially during tasseling and silking stages",
            "Water deeply and consistently",
            "Avoid letting the soil dry out completely",
            "Drip irrigation or soaker hoses are effective",
            "Adjust watering based on rainfall and soil moisture",
          ],
          km: [
            "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
            "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
            "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
            "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
          ],
        },
      },
      {
        src: "image/Bean/yardlongbean1.webp",
        title: {
          en: "Yardlong bean OP variety: Rathanak.",
          km: "សណ្តែកកួ OP ពូជ រតនៈ",
        },
        info: {
          en: "Strong growth, high branching, and is resistant to tropical weather, especially in Cambodia.",
          km: "មានកំលាំងលូតលាស់ខ្លាំង មែកច្រើន ធន់នឹងអាកាសធាតុត្រូពិក ពិសេសកម្ពុជា។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Bean/yardlongbean1.webp",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Bean/yardlongbean2.webp",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Bean/yardlongbean3.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting can be done from 50 to 55 days after direct planting.",
            "It is an OP (Open Pollinated) variety (black seeds), which has an affordable price, suitable for market demand.",
            "Fruit Characteristics: Flowers come out in clusters of two, and yield two pods at a time, for 4-9 rounds of fruiting.",
            "The pods are fresh light green, round, long, and pointed at the tail.",
            "Pod length is 65-75 cm x thickness 0.4-0.5 cm, resulting in a high yield.",
            "Growth Characteristics: The seedlings have vigorous growth, many branches, and are tolerant to the weather.",
            "Growing Season: Tropical climate, especially in Cambodia, it can be grown all year round.",
          ],
          km: [
            "យើងអាចប្រមូលផលវាបានពី៥០ទៅ ៥៥ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ប្រភេទពូជOP (គ្រាប់ពូជ ពណ៌ខ្មៅ) ដែលមានតម្លៃសមរម្យ សមស្របនឹងតម្រូវការទីផ្សារ",
            "លក្ខណៈផ្លែ ផ្កាកញ្ចាំផ្កាចេញម្តង២ និងចេញផ្លែ២ រហូត 4-9ដង,",
            "ផ្លែពណ៌បៃតងខ្ចីស្រស់, មូលវែង ស្រួចកន្ទុយ",
            "ប្រវែងផ្លែ 65-75 cm x ម,ក0,4-0,5cm, ទិន្នផលខ្ពស់",
            "លក្ខណៈលូត លាស់កូនមានកំលាំងលូតលាស់ខ្លាំង មែកច្រើន ធន់នឹងអាកាសធាតុ",
            "រដូវដាំដុះ៖ត្រូពិក ពិសេសកម្ពុជា១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plow and harrow the soil until it is fine, then leave the soil to dry for 7 to 10 days.",
            "Make planting beds with a width of 1 meter, and a length according to the available land.",
            "The space between beds can be 0.5 meters.",
            "Bed Height: In the dry season, the bed height is 20-30 cm, and in the rainy season, the height is 30-50 cm.",
            "Apply dry animal manure or compost in an amount of 2-3 kg per 1 square meter area, and apply NPK chemical fertilizer (20-20-15 or 15-15-15). Then, mix it thoroughly with the bed soil.",
            "Cover the beds: Two types of covering can be done to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "ភ្ជួរ រាស់ឲ្យបានម៉ដល្អ ហើយហាលដីឱ្យបានពី ៧ ទៅ១០ថ្ងៃ",
            "លើករងដាំទទឹង ១ ម៉ែត្រ និងបណ្តោយទៅតាមលទ្ធភាពដីដែលមាន",
            "ចន្លោះរង ពីរងមួយទៅរងមួយ អាចមានចន្លោះ០,៥ម៉ែត្រ",
            "កំពស់នៅរដូវប្រាំងរងមានកំពស់២០-៣០សង់ទីម៉ែត្រហើយរដូវវស្សាកំពស់៣០-៥០ សង់ទីម៉ែត្រ",
            "ដាក់លាមកសត្វស្ងួត ឬ ជីកំប៉ុស្តិ៍ ក្នុងបរិមាណ ២-៣គីឡូក្រាម ក្នុងផ្ទៃដី១ម៉ែត្រការ៉េ និង ដាក់ជីគីមី អិន-ប៉េ-កា (២០-២០-១៥, ១៥-១៥-១៥) ហើយច្របល់វា ជាមួយ ដីរងឲ្យសព្វល្អ",
            "គ្របរង ធ្វើបានពីរប្រភេទ ដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី កាត់បន្ថយការដុះស្មៅ",
          ],
        },
        cultivation: {
          en: [
            "Seed sowing must be prepared concurrently with the bed preparation.",
            "Place 1 seed directly into 1 seedling cup or 1 tray cell that has already been filled with soil.",
            "Sprinkle a thin layer of soil over the seeds and water thoroughly. Then, place the tray or cup with the seeds inside a nursery shed.",
            "Water thoroughly every morning (can be 1-2 times per day, depending on the soil condition). If the soil is too dry, the seeds may not germinate.",
            "After the seeds have germinated for 3 days, the seedlings must be hardened before transplanting by exposing them to sunlight and reducing watering for 3–4 days.",
            "This helps the seedlings become strong and prevents wilting after transplanting.",
            "Seedlings aged 6–8 days after germination are ready for transplanting.",
          ],
          km: [
            "ត្រូវរៀបចំបណ្តុះគ្រាប់ ព្រមជាមួយគ្នានឹងការលើករងដាំ",
            "យកគ្រាប់១គ្រាប់ដាក់បណ្តុះផ្ទាល់ក្នុង ១ កន្ទោង ឬ ១ រន្ធថាសបណ្តុះ ដែលបានដាក់ដីហើយ។",
            "រោយដីស្តើងៗពីលើគ្រាប់ស្រោចទឹកឲ្យជោគទើបយកថាស ឬ កន្ទោងដាក់គ្រាប់ ហើយដាក់ក្នុងរោងបណ្តុះ",
            "ស្រោចទឹករៀងរាល់ពេលព្រឹកឲ្យជោគ (អាច ១-២ ដង ក្នុង១ថ្ងៃ អាស្រ័យតាមស្ថានភាពជី) បើសិនដីស្ងួតពេក អាចធ្វើឲ្យគ្រាប់មិនដុះ។",
            "បន្ទាប់ពីគ្រាប់ដុះបាន៣ថ្ងៃ យើងត្រូវពង្រឹងកូនសណ្ដែកសិន មុននឹងយកទៅដាំ (គឺ ត្រូវដាក់កូនសណ្ដែក ឲ្យត្រូវ ពន្លឺថ្ងៃ ហើយកាត់បន្ថយការស្រោចទឹកចំនួន៣-៤ថ្ងៃ) ។",
            "ធ្វើបែបនេះ នឹងជួយឲ្យកូនសណ្ដែករឹងមាំល្អ បន្ទាប់ពីដាំហើយ (គឺ មិនស្រពោន បន្ទាប់ពីដាំ)។",
            "កូនសណ្ដែកអាយុ ចន្លោះ ពី៦ទៅ៨ថ្ងៃ បន្ទាប់ពីបណ្តុះគ្រាប់ហើយ អាចយកដាំបាន។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/Bean/Picture38.png",
        title: {
          en: "Yardlong bean OP variety: Romsaysork.",
          km: "សណ្តែកកួ OP ពូជ រំសាយសក់",
        },
        info: {
          en: "Harvest period: 50 to 55 days after planting.",
          km: "អាយុប្រមូលផល​៥០ទៅ ៥៥ថ្ងៃបន្ទាប់ពីការដាំ។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Bean/Picture38.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Bean/yardlongbean5.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Bean/yardlongbean4.webp",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting can be done from 50 to 55 days after direct planting.",
            "It is an OP (Open Pollinated) variety (black seeds), which has an affordable price, suitable for market demand.",
            "Fruit Characteristics: Flowers come out in clusters of two, and yield two pods at a time, for 4-9 rounds of fruiting.",
            "The pods are fresh light green, round, long, and pointed at the tail.",
            "Pod length is 65-75 cm x thickness 0.4-0.5 cm, resulting in a high yield.",
            "Growth Characteristics: The seedlings have vigorous growth, many branches, and are tolerant to the weather.",
            "Growing Season: Tropical climate, especially in Cambodia, it can be grown all year round.",
          ],
          km: [
            "យើងអាចប្រមូលផលវាបានពី៥០ទៅ ៥៥ថ្ងៃបន្ទាប់ពីដាំផ្ទាល់",
            "ប្រភេទពូជOP (គ្រាប់ពូជ ពណ៌ខ្មៅ) ដែលមានតម្លៃសមរម្យ សមស្របនឹងតម្រូវការទីផ្សារ",
            "លក្ខណៈផ្លែ ផ្កាកញ្ចាំផ្កាចេញម្តង២ និងចេញផ្លែ២ រហូត 4-9ដង,",
            "ផ្លែពណ៌បៃតងខ្ចីស្រស់, មូលវែង ស្រួចកន្ទុយ",
            "ប្រវែងផ្លែ 65-75 cm x ម,ក0,4-0,5cm, ទិន្នផលខ្ពស់",
            "លក្ខណៈលូត លាស់កូនមានកំលាំងលូតលាស់ខ្លាំង មែកច្រើន ធន់នឹងអាកាសធាតុ",
            "រដូវដាំដុះ៖ត្រូពិក ពិសេសកម្ពុជា១ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plow and harrow the soil until it is fine, then leave the soil to dry for 7 to 10 days.",
            "Make planting beds with a width of 1 meter, and a length according to the available land.",
            "The space between beds can be 0.5 meters.",
            "Bed Height: In the dry season, the bed height is 20-30 cm, and in the rainy season, the height is 30-50 cm.",
            "Apply dry animal manure or compost in an amount of 2-3 kg per 1 square meter area, and apply NPK chemical fertilizer (20-20-15 or 15-15-15). Then, mix it thoroughly with the bed soil.",
            "Cover the beds: Two types of covering can be done to prevent bed erosion, protect soil moisture, and reduce weed growth.",
          ],
          km: [
            "ភ្ជួរ រាស់ឲ្យបានម៉ដល្អ ហើយហាលដីឱ្យបានពី ៧ ទៅ១០ថ្ងៃ",
            "លើករងដាំទទឹង ១ ម៉ែត្រ និងបណ្តោយទៅតាមលទ្ធភាពដីដែលមាន",
            "ចន្លោះរង ពីរងមួយទៅរងមួយ អាចមានចន្លោះ០,៥ម៉ែត្រ",
            "កំពស់នៅរដូវប្រាំងរងមានកំពស់២០-៣០សង់ទីម៉ែត្រហើយរដូវវស្សាកំពស់៣០-៥០ សង់ទីម៉ែត្រ",
            "ដាក់លាមកសត្វស្ងួត ឬ ជីកំប៉ុស្តិ៍ ក្នុងបរិមាណ ២-៣គីឡូក្រាម ក្នុងផ្ទៃដី១ម៉ែត្រការ៉េ និង ដាក់ជីគីមី អិន-ប៉េ-កា (២០-២០-១៥, ១៥-១៥-១៥) ហើយច្របល់វា ជាមួយ ដីរងឲ្យសព្វល្អ",
            "គ្របរង ធ្វើបានពីរប្រភេទ ដើម្បីទប់ស្កាត់ការហូរច្រោះរង ការពារសំណើមដី កាត់បន្ថយការដុះស្មៅ",
          ],
        },
        cultivation: {
          en: [
            "Seed sowing must be prepared concurrently with the bed preparation.",
            "Place 1 seed directly into 1 seedling cup or 1 tray cell that has already been filled with soil.",
            "Sprinkle a thin layer of soil over the seeds and water thoroughly. Then, place the tray or cup with the seeds inside a nursery shed.",
            "Water thoroughly every morning (can be 1-2 times per day, depending on the soil condition). If the soil is too dry, the seeds may not germinate.",
            "After the seeds have germinated for 3 days, the seedlings must be hardened before transplanting by exposing them to sunlight and reducing watering for 3–4 days.",
            "This helps the seedlings become strong and prevents wilting after transplanting.",
            "Seedlings aged 6–8 days after germination are ready for transplanting.",
          ],
          km: [
            "ត្រូវរៀបចំបណ្តុះគ្រាប់ ព្រមជាមួយគ្នានឹងការលើករងដាំ",
            "យកគ្រាប់១គ្រាប់ដាក់បណ្តុះផ្ទាល់ក្នុង ១ កន្ទោង ឬ ១ រន្ធថាសបណ្តុះ ដែលបានដាក់ដីហើយ។",
            "រោយដីស្តើងៗពីលើគ្រាប់ស្រោចទឹកឲ្យជោគទើបយកថាស ឬ កន្ទោងដាក់គ្រាប់ ហើយដាក់ក្នុងរោងបណ្តុះ",
            "ស្រោចទឹករៀងរាល់ពេលព្រឹកឲ្យជោគ (អាច ១-២ ដង ក្នុង១ថ្ងៃ អាស្រ័យតាមស្ថានភាពជី) បើសិនដីស្ងួតពេក អាចធ្វើឲ្យគ្រាប់មិនដុះ។",
            "បន្ទាប់ពីគ្រាប់ដុះបាន៣ថ្ងៃ យើងត្រូវពង្រឹងកូនសណ្ដែកសិន មុននឹងយកទៅដាំ (គឺ ត្រូវដាក់កូនសណ្ដែក ឲ្យត្រូវ ពន្លឺថ្ងៃ ហើយកាត់បន្ថយការស្រោចទឹកចំនួន៣-៤ថ្ងៃ) ។",
            "ធ្វើបែបនេះ នឹងជួយឲ្យកូនសណ្ដែករឹងមាំល្អ បន្ទាប់ពីដាំហើយ (គឺ មិនស្រពោន បន្ទាប់ពីដាំ)។",
            "កូនសណ្ដែកអាយុ ចន្លោះ ពី៦ទៅ៨ថ្ងៃ បន្ទាប់ពីបណ្តុះគ្រាប់ហើយ អាចយកដាំបាន។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/Bean/wingbean1.png",
        title: {
          en: "Wing bean OP variety: Vasavi",
          km: "ពពាយជ្រុង OP ពូជ វ៉ាសាវី",
        },
        info: {
          en: "Strong growth, disease-resistant, and tolerant to tropical weather, especially in Cambodia.",
          km: "កំលាំងលូតលាស់ខ្លាំង ធន់និងជម្ងឺ ធន់នឹងអាកាសធាតុត្រូពិក ពិសេសកម្ពុជា។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Bean/wingbean2.webp",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Bean/wingbean4.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Bean/wingbean3.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Before planting, the soil must be plowed to a depth of approximately 25 to 30cm.",
            "To prevent weeds and ensure good crop growth, the soil must be plowed twice and harrowed once.",
            "The soil is then air-dried and left for approximately 7days.",
            "Incorporate cow manure or compost and hoe the soil to mix it thoroughly.",
            "During the second plowing, add a base dressing such as furnace slag or residue (kak samnoal lor) to the soil.",
            "Raise the soil into beds, leaving paths for walking. The beds must be raised to a height of 30cm and a width of 1meter. The distance between beds should be 1meter.",
          ],
          km: [
            "មុនដាក់ដាំត្រូវភ្ជួរដី ឲ្យបានជម្រៅប្រមាណពី ២៥ ទៅ ៣០ស.ម",
            "ដើម្បីកុំឲ្យមានស្មៅ និងដំណាំដុះបានល្អ ត្រូវភ្ជួរដី ២ ដង និងរាស់ម្តង",
            "បន្ទាប់មកហាលដីទុកចោលប្រមាណជា ៧ថ្ងៃ",
            "ដាក់ជីលាមកគោ ឬជីកំប៉ុស រួចជ្រោយដីឲ្យសព្វល្អ",
            "នៅពេលភ្ជួរលើកទី ២ ត្រូវដាក់ដីទ្រាប់បាតដូចជា កាកសំណល់ឡ",
            "លើកដីជារងដោយមានទុកផ្លូវដើរ រងត្រូវលើកំពស់ ៣០ ស.ម និងទទឹង ១ម៉ែត្រ គម្លាតពីរងមួយទៅរងមួយ ១ម៉ែត្រ",
          ],
        },
        cultivation: {
          en: [
            "After the seedlings reach the age of 15 days remove the strongest/healthiest (thloas) winged bean seedlings for transplanting.",
            "Cut off watering one day before removing the seedlings for planting.",
            "Before planting, punch holes in the plastic mulch, spacing them approximately 70-80cm apart.",
            "Planting must be done in the cool evening so that the winged bean seedlings do not wilt.",
            "10 days after planting, a netting trellis must be installed so that the winged bean can climb",
            "For a paired trellis system (trœu baeb ku), the trellis posts are driven along the length of the bed, and the tops of the posts are tied in pairs before the netting is covered over them.",
            "It is necessary to regularly guide the tips of the winged bean vines to twist around the trellis posts so that the plant quickly covers the entire trellis.",
          ],
          km: [
            "ក្រោយពេលបណ្តុះបានអាយុ ១៥ថ្ងៃ ត្រូវដកកូនពពាយណា ដែលធ្លោសៗទៅដាំ",
            "មុនដកកូនយកទៅដាំ ត្រូវផ្តាច់ទឹកមួយថ្ងៃសិន",
            "មុនដាំត្រូវចោះរន្ធប្លាស្ទិក ដោយឃ្លាតពីគ្នា ប្រមាណ ៧០-៨០ ស.ម",
            "ត្រូវធ្វើការដាំដុះ នៅពេលល្ងាចត្រជាក់ ដើម្បីឲ្យកូនពពាយមិនស្វិតពេលដាំបានរយៈពេល ១០ថ្ងៃ ត្រូវយកទ្រើងសំណាញ់ ទៅដាក់ដើម្បី ឲ្យពពាយបោះដៃតោង",
            "ទ្រើងបែបគូ ត្រូវដោត បង្គោលទ្រើងតាម បណ្តោយរង ហើយចាប់ចុងបង្គោលទ្រើង ចងជាគូៗ រួចយកសំណាញ់មកគ្របពីលើ",
            "ត្រូវឧស្សាហ៍ចាប់ចុងត្រួយ ដើមពពាយឲ្យព័ទ្ធ នឹងបង្គោលទ្រើង ដើម្បីឲ្យដើមពពាយ ឆាប់ឡើងពេញទ្រើង។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
    ],
  },
  Papaya: {
    name: { en: "Papaya", km: "ល្ហុង" },
    desc: {
      en: "Grows fast and is resistant to Cambodia’s climate.",
      km: "លូតលាស់លឿន ធន់នឹងអាកាសធាតុ​កម្ពុជា។",
    },
    imgs: [
      {
        src: "image/Papaya/papaya3.jpg",
        title: {
          en: "Khmer papaya OP variety: Malay.",
          km: "ល្ហុងខ្មែរ OP ពូជ ម៉ាឡៃ",
        },
        info: {
          en: "This variety is ideal for vegetable cultivation and provides a long harvesting period.",
          km: "ពូជនេះ​ល្អសម្រាប់ធ្វើបន្លែ ប្រមូលផលបានរយៈពេលយូ។ ",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/Papaya/papaya3.jpg",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/Papaya/Picture11.png",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/Papaya/Picture12.png",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Harvest Age: 6 to 7 months after direct planting.",
            "Characteristics of the Stem & Fruit: 6 to 7 months after direct planting, the stem is robust, with a height of 1.8-2.8 m, and has shiny green petioles attached to palmate leaves that are deeply lobed like fingers. It grows quickly and is tolerant of the Cambodian climate. This variety is good for use as a vegetable and can be harvested for a long period.",
            "Fruit Characteristics: Length 25-35cm x diameter 9-14cm; weight 3.5-5kg/fruit.",
            "Growing Season: All year round.",
          ],
          km: [
            "អាយុប្រមូលផល៖6 ទៅ 7 ខែ បន្ទាប់ពីដាំផ្ទាល់",
            "លក្ខណៈដើម & ផ្លែ៖6 ទៅ 7 ខែ បន្ទាប់ពីដាំផ្ទាល់ដើមរឹងមាំ កំពស់ 1.8-2.8m មានធាងបំពុងបៃតងរលោង ភ្ជាប់ ជាមួយស្លឹក កំបាងឆែកៗដូចម្រាមដៃ។ លូតលាស់លឿន ធន់នឹងអាកាសធាតុកម្ពុជា។ ពូជនេះល្អសម្រាប់ធ្វើបន្លែ ប្រមូលផលបានរយៈពេលយូ។",
            "លក្ខណៈផ្លែ៖ប 25-35cm x មុខកាត់9-14cm ទំងន់= 3.5-5kg/ផ្លែ",
            "រដូវដាំដុះ៖1ឆ្នាំពេញ។",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plow the land and let it dry out 3-4 times, with a 10-day interval between each plowing. During the first plowing, apply rotted animal manure. After plowing, raise the beds (ridges) with a width of 1.5 meters and a length according to the condition of the land. On the beds, dig planting holes in rows, with each hole being 30 cm square and 30 cm deep, leaving a space of 2.5 meters from one hole to the next. In the holes, mix animal manure thoroughly with the soil.",
          ],
          km: [
            "ភ្ជួរដីហាលពី៣-៤លើក ដោយចន្លោះពីមួយលើកទៅមួយលើកមានរយៈពេល១០ ថ្ងៃ។ ពេលភ្ជួរលើកទី១ ត្រូវដាក់ជីលាមកសត្វពុកផុយ។ ភ្ជួររួច ត្រូវលើករងទទឹង ១,៥ម៉ែត្រ និងបណ្តោយទៅតាមស្ថានភាពដី។ នៅលើរងត្រូវជីករណ្តៅជាជួរ ដោយរណ្តៅនិមួយៗមានទំហំ ៣តឹក ៤ជ្រុង និងជម្រៅ ៣តឹក ទុកចន្លោះពីរណ្តៅមួយទៅមួយប្រវែង ២,៥ម៉ែត្រ។ នៅក្នុងរណ្តៅ ដាក់ជីលាមកសត្វច្របល់ជាមួយដីឱ្យសព្វ។",
          ],
        },
        cultivation: {
          en: [
            "Take the seeds and soak them in water for 3 days, then incubate them for 7 days until small white sprouts emerge. Then, place 2-3 seeds in one bag or container. After sowing the seeds, water thoroughly every day for good seedling growth. The area where the bags or containers are placed must be covered with a netting shed to prevent the young papaya seedlings from being exposed to excessive sunlight. When the seeds sprout, thin out some of the seedlings, leaving only the healthiest and most robust ones. Once the seedlings have grown to a height of 10 to 20 cm (5-6 leaves/petioles), they can be dug up and transplanted to the field. In the field, some male papaya plants must be kept; at minimum, there should be at least one male plant among every 25 papaya plants.",
            "Take the papaya seedlings and plant them in the prepared planting holes. The seedlings brought for planting should be 45 days old. Tear open the bag or container and place the seedling in the hole. Then, take the soil from the edge of the hole, cover the roots, and press it firmly. After that, take crushed straw and cover the base of the plant all around, and water thoroughly. Plant 1 seedling per hole, selecting only the healthy seedlings and those identified as female plants. After 5 to 6 days of planting, the young papaya plant should be able to establish roots and strengthen its stem somewhat.",
          ],
          km: [
            "យកគ្រាប់ទៅត្រាំទឹករយៈពេល៣ថ្ងៃ រួចផ្អាប់ទុក៧ថ្ងៃឱ្យចេញពន្លកសៗ ទើបយកទៅដាក់ដាំនៅក្នុងថង់ឬកន្ទោងពី ២-៣ គ្រាប់ក្នុង១ថង់។ ក្រោយពីដាក់គ្រាប់បណ្តុះហើយ ត្រូវស្រោចទឹកឱ្យជោតរៀងរាល់ថ្ងៃ ដើម្បីឱ្យកូនលូតលាស់ បានល្អ និងសម្រាប់កន្លែងដាក់ថង់ឬកន្ទោងបណ្តុះត្រូវធ្វើរោងសំណាញ់ដើម្បីកុំឱ្យកូនល្ហុងត្រូវពន្លឺថ្ងៃខ្លាំងពេក។ នៅពេលគ្រាប់ដុះ ត្រូវដករំលោះកូនចេញខ្លះ ទុកតែដើមណាដែលរឹងមាំល្អ។ លុះដល់កូនដុះបានកំពស់១ទៅ២ តឹក (ស្លឹក៥-៦ធាង) ទើបគាស់យកទៅដាំនៅចំការ។នៅចំការត្រូវរក្សាទុកដើមល្ហុងឈ្មោលខ្លះគឺយ៉ាងតិចបំផុត ក្នុងចំណោមល្ហុងពី២៥ដើម ក៏មានល្ហុងឈ្មោលមួយដើមដែរ។",
            "យកកូនល្ហុងទៅដាំនៅតាមរន្ធដៅដែលបានរៀបចំរួច។ កូនល្ហុងដែលយកមកដាំត្រូវមានអាយុ៤៥ថ្ងៃ ហែកថង់ឬកន្ទោងចេញរួចដាក់ក្នុងរណ្តៅបន្ទាប់មក យកដីនៅមាត់រណ្តៅលុបសង្កត់ឱ្យណែន រួចយកកំទេចចំបើងគ្របជុំវិញគល់ និងស្រោចទឹកឱ្យជោគ។ ដាំ១ ដើម ក្នុង១រណ្តៅដោយជ្រើសរើសកូនល្ហុងដែល មានសុខភាពល្អ និងល្ហុងញី ។ ក្រោយពីដាំបាន រយៈពេល ៥ ទៅ ៦ថ្ងៃ កូនល្ហុងអាចដុះឫសពង្រឹងដើមបានខ្លះ។",
          ],
        },
        irrigation: {
          en: [
            "Papaya requires a lot of water to grow; otherwise, the young papaya plants may become stunted.",
          ],
          km: [
            "ល្ហុងត្រូវការទឹកច្រើនដើម្បីលូតលាស់បើមិនដូច្នេះទេ កូនល្ហុងអាចនឹងក្រិន ។",
          ],
        },
      },
      {
        src: "/placeholder.svg?height=350&width=450",
        title: { en: "Coming Soon!", km: "មកដល់ឆាប់ៗ" },
        info: { en: "Sweet and delicious.", km: "ផ្អែមឆ្ងាញ់" },
        // weight: "18 grams/pkt",
        // views: 934,
        // gallery: [
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cob", km: "ផ្លែ" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cooked", km: "ឆ្អិន" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Harvest", km: "ប្រមូលផល" },
        //   },
        // ],
        // features: {
        //   en: [
        //     "Tender and juicy",
        //     "Harvesting: 70 - 80 days after sowing",
        //     "Ear size: 16 - 20 cm length",
        //     "Excellent for fresh consumption",
        //     "Yield: 2 - 3 ears per plant",
        //   ],
        //   km: [
        //     "ទន់ និងមានទឹក",
        //     "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
        //     "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
        //     "ល្អឥតខ្ចោះសម្រាប់ស៊ីស្រស់",
        //     "ទិន្នផល: ២ - ៣ ផ្លែ/ដើម",
        //   ],
        // },
        // planting: {
        //   distance: {
        //     en: "1.8 m bed distance, 0.9 m between rows",
        //     km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
        //   },
        //   plantDistance: {
        //     en: "0.25 - 0.30 m between plants",
        //     km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
        //   },
        //   density: {
        //     en: "5500 - 5000 plants/1000m²",
        //     km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
        //   },
        // },
        // landPreparation: {
        //   en: [
        //     "Corn thrives in well-drained, fertile soil with plenty of organic matter",
        //     "Till the soil to a depth of about 25 cm",
        //     "Add compost or well-rotted manure before planting",
        //     "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
        //     "Break up any clods of soil for a fine seedbed",
        //   ],
        //   km: [
        //     "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
        //     "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
        //     "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
        //     "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
        //     "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
        //   ],
        // },
        // cultivation: {
        //   en: [
        //     "Sow seeds directly outdoors after all danger of frost has passed",
        //     "Plant seeds about 3-4 cm deep",
        //     "Space plants approximately 25-30 cm apart",
        //     "Ensure good air circulation by planting in blocks",
        //     "Fertilize regularly, especially with nitrogen",
        //   ],
        //   km: [
        //     "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
        //     "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
        //     "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
        //     "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
        //     "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
        //   ],
        // },
        // irrigation: {
        //   en: [
        //     "Corn has high water needs, especially during tasseling and silking stages",
        //     "Water deeply and consistently",
        //     "Avoid letting the soil dry out completely",
        //     "Drip irrigation or soaker hoses are effective",
        //     "Adjust watering based on rainfall and soil moisture",
        //   ],
        //   km: [
        //     "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
        //     "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
        //     "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
        //     "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
        //     "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
        //   ],
        // },
      },
      {
        src: "/placeholder.svg?height=350&width=450",
        title: { en: "Coming Soon!", km: "មកដល់ឆាប់ៗ" },
        info: { en: "Sweet and delicious.", km: "ផ្អែមឆ្ងាញ់" },
        // weight: "18 grams/pkt",
        // views: 934,
        // gallery: [
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cob", km: "ផ្លែ" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cooked", km: "ឆ្អិន" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Harvest", km: "ប្រមូលផល" },
        //   },
        // ],
        // features: {
        //   en: [
        //     "Tender and juicy",
        //     "Harvesting: 70 - 80 days after sowing",
        //     "Ear size: 16 - 20 cm length",
        //     "Excellent for fresh consumption",
        //     "Yield: 2 - 3 ears per plant",
        //   ],
        //   km: [
        //     "ទន់ និងមានទឹក",
        //     "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
        //     "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
        //     "ល្អឥតខ្ចោះសម្រាប់ស៊ីស្រស់",
        //     "ទិន្នផល: ២ - ៣ ផ្លែ/ដើម",
        //   ],
        // },
        // planting: {
        //   distance: {
        //     en: "1.8 m bed distance, 0.9 m between rows",
        //     km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
        //   },
        //   plantDistance: {
        //     en: "0.25 - 0.30 m between plants",
        //     km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
        //   },
        //   density: {
        //     en: "5500 - 5000 plants/1000m²",
        //     km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
        //   },
        // },
        // landPreparation: {
        //   en: [
        //     "Corn thrives in well-drained, fertile soil with plenty of organic matter",
        //     "Till the soil to a depth of about 25 cm",
        //     "Add compost or well-rotted manure before planting",
        //     "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
        //     "Break up any clods of soil for a fine seedbed",
        //   ],
        //   km: [
        //     "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
        //     "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
        //     "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
        //     "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
        //     "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
        //   ],
        // },
        // cultivation: {
        //   en: [
        //     "Sow seeds directly outdoors after all danger of frost has passed",
        //     "Plant seeds about 3-4 cm deep",
        //     "Space plants approximately 25-30 cm apart",
        //     "Ensure good air circulation by planting in blocks",
        //     "Fertilize regularly, especially with nitrogen",
        //   ],
        //   km: [
        //     "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
        //     "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
        //     "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
        //     "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
        //     "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
        //   ],
        // },
        // irrigation: {
        //   en: [
        //     "Corn has high water needs, especially during tasseling and silking stages",
        //     "Water deeply and consistently",
        //     "Avoid letting the soil dry out completely",
        //     "Drip irrigation or soaker hoses are effective",
        //     "Adjust watering based on rainfall and soil moisture",
        //   ],
        //   km: [
        //     "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
        //     "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
        //     "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
        //     "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
        //     "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
        //   ],
        // },
      },
    ],
  },
  Cauliflower: {
    name: { en: "Cauliflower", km: "ខាត់ណា" },
    desc: {
      en: "It grows rapidly, tolerates hot and humid climates, and is resistant to diseases.",
      km: "លូតលាស់លឿន ធន់នឹងអាកាសធាតុក្តៅសើ នឹង ធន់និងជម្ងឺ។",
    },
    imgs: [
      {
        src: "image/Cauliflower/Picture42.png",
        title: {
          en: "Cauliflower variety: Kai Lan 01.",
          km: "ខាត់ណាដើម ពូជ កៃឡាន់ 01",
        },
        info: {
          en: "It grows quickly, tolerates hot and humid weather, has thick stems with tender green leaves.",
          km: "លូតលាស់លឿន​ ធន់នឹងអាកាសធាតុក្តៅសើមមាន ដើមធំ និងស្លឹកបៃតងខ្ចី។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/Cauliflower/Picture42.png",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/Cauliflower/Cauliflower1.jpg",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/Cauliflower/Cauliflower4.webp",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Type: OP (Open Pollinated)",
            "Harvesting: 45–50 days after transplanting seedlings.",
            "Characteristics: Large stem/base tapering at the top, and large, curled leaves. Grows fast, resistant to damping off/wilting disease and stem rot, and tolerant to the Cambodian climate.",
            "Growing Season: Can be planted all year round (1 year full).",
          ],
          km: [
            "ប្រភេទពូជ៖ OP",
            "អាយុប្រមូល៖ 45-50ថ្ងៃ បន្ទាប់សាបកូន",
            "លក្ខណៈដើម៖ដើមធំស្តេចចុង និង ស្លឹកធំរួញ។ លូតលាស់លឿន ធន់នឹងជម្ងឺរលាក់ និងរលួយគល់ ធន់នឹងអាកាសធាតុកម្ពុជា។",
            "រដូវការដាំដុះ៖ ដាំបាន 1ឆ្នាំ ពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plowing and harrowing the soil finely ensures good air circulation, allows nutrients to be spread evenly, and maintains sufficient moisture.",
            "Level the soil to facilitate good bed making and irrigation.",
            "During plowing, broadcast 15 to 20 tons of compost and 250 to 300kg of lime per 1 hectare of land before plowing to incorporate them.",
            "The soil must be dug or plowed back to a depth of approximately 10 to 15cm and air-dried for 7 to 10 days.",
            "Bed making: The beds should be raised to a width of 80 cm and a length according to the land conditions.",
            "The bed height should be 20 - 25 cm, and the spacing between beds should be 30cm.",
          ],
          km: [
            "ការភ្ជួរនិងរាស់បំបែកដី ឱ្យល្អិតគឺធានាអោយមានខ្យល់ចេញចូលបានល្អ ពង្រាយជីជាតិអោយបានស្នើល្អរក្សាសំណើមអោយបានគ្រប់គ្រាន់",
            "កៀរដីអោយស្ទើរដើម្បីអោយការលើករងនិងស្រោចស្រពបានល្អ",
            "ភ្ជួរត្រូវបាចជី កំប៉ុស្តិ៍ចំនួន១៥ទៅ២០តោននិងកំបោរចំនួន២៥០ទៅ៣០០គីឡូក្រាម លើផ្ទៃដី១ហិតាទើបភ្ជួរលុបជាក្រោយ",
            "ត្រូវជីកឬភ្ជួរត្រលប់ជម្រៅប្រហែល១០ ទៅ ១៥សម ហើយហាលដីពី៧ដល់១០ថ្ងៃ",
            "ការលើករង ត្រូវលើករងដែលមានប្រវែងទទឹង 80 ស.ម. និង បណ្តោយតាមសណ្ឋានដី",
            "កម្ពស់រង 20 - 25 ស.ម. និងចន្លោះរង 30 ស.ម.។",
          ],
        },
        cultivation: {
          en: [
            "Regarding the planting method, we plant in rows with a 20cm row spacing, a 20cm clump spacing, and the planting depth should be equal to the depth of the seedling’s original soil plug.",
            "Seedlings with 3-4 leaves or a height starting from 8-12cm can be transplanted.",
          ],
          km: [
            "ចំពោះរបៀបដាំគឺយើងដាំជាជួរ មានចន្លោះជួរប្រវែង២០ស.មចន្លោះគុម្ព មានប្រវែង២០ស.មនឹងជំរៅស្មើនឹងដីនៃកូនដំណាំ",
            "កូនមានសន្លឹកចាប់ពី 3-4 សន្លឹក ឬកម្ពស់ចាប់ពី 8-12 ស.ម. ទើបអាច យកទៅស្ទូងបាន។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/Cauliflower/Picture43.png",
        title: {
          en: "Cauliflower baong OP variety : Amab",
          km: "ខាត់ណាបោងOPពូជ​អាម៉ាប់",
        },
        info: {
          en: "It is disease-resistant and well adapted to Cambodia’s climate.",
          km: "ធន់និងជម្ងឺ​ និង ធន់នឹងអាកាសធាតុ​កម្ពុជា។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/Cauliflower/Picture43.png",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/Cauliflower/Cauliflower២.jpg",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/Cauliflower/Picture13.png",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Type: OP (Open Pollinated)",
            "Harvesting: 45–50 days after transplanting seedlings.",
            "Characteristics: Large stem/base tapering at the top, and large, curled leaves. Grows fast, resistant to damping off/wilting disease and stem rot, and tolerant to the Cambodian climate.",
            "Growing Season: Can be planted all year round (1 year full).",
          ],
          km: [
            "ប្រភេទពូជ៖ OP",
            "អាយុប្រមូល៖ 45-50ថ្ងៃ បន្ទាប់សាបកូន",
            "លក្ខណៈដើម៖ដើមធំស្តេចចុង និង ស្លឹកធំរួញ។ លូតលាស់លឿន ធន់នឹងជម្ងឺរលាក់ និងរលួយគល់ ធន់នឹងអាកាសធាតុកម្ពុជា។",
            "រដូវការដាំដុះ៖ ដាំបាន 1ឆ្នាំ ពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plowing and harrowing the soil finely ensures good air circulation, allows nutrients to be spread evenly, and maintains sufficient moisture.",
            "Level the soil to facilitate good bed making and irrigation.",
            "During plowing, broadcast 15 to 20 tons of compost and 250 to 300kg of lime per 1 hectare of land before plowing to incorporate them.",
            "The soil must be dug or plowed back to a depth of approximately 10 to 15cm and air-dried for 7 to 10 days.",
            "Bed making: The beds should be raised to a width of 80 cm and a length according to the land conditions.",
            "The bed height should be 20 - 25 cm, and the spacing between beds should be 30cm.",
          ],
          km: [
            "ការភ្ជួរនិងរាស់បំបែកដី ឱ្យល្អិតគឺធានាអោយមានខ្យល់ចេញចូលបានល្អ ពង្រាយជីជាតិអោយបានស្នើល្អរក្សាសំណើមអោយបានគ្រប់គ្រាន់",
            "កៀរដីអោយស្ទើរដើម្បីអោយការលើករងនិងស្រោចស្រពបានល្អ",
            "ភ្ជួរត្រូវបាចជី កំប៉ុស្តិ៍ចំនួន១៥ទៅ២០តោននិងកំបោរចំនួន២៥០ទៅ៣០០គីឡូក្រាម លើផ្ទៃដី១ហិតាទើបភ្ជួរលុបជាក្រោយ",
            "ត្រូវជីកឬភ្ជួរត្រលប់ជម្រៅប្រហែល១០ ទៅ ១៥សម ហើយហាលដីពី៧ដល់១០ថ្ងៃ",
            "ការលើករង ត្រូវលើករងដែលមានប្រវែងទទឹង 80 ស.ម. និង បណ្តោយតាមសណ្ឋានដី",
            "កម្ពស់រង 20 - 25 ស.ម. និងចន្លោះរង 30 ស.ម.។",
          ],
        },
        cultivation: {
          en: [
            "Regarding the planting method, we plant in rows with a 20cm row spacing, a 20cm clump spacing, and the planting depth should be equal to the depth of the seedling’s original soil plug.",
            "Seedlings with 3-4 leaves or a height starting from 8-12cm can be transplanted.",
          ],
          km: [
            "ចំពោះរបៀបដាំគឺយើងដាំជាជួរ មានចន្លោះជួរប្រវែង២០ស.មចន្លោះគុម្ព មានប្រវែង២០ស.មនឹងជំរៅស្មើនឹងដីនៃកូនដំណាំ",
            "កូនមានសន្លឹកចាប់ពី 3-4 សន្លឹក ឬកម្ពស់ចាប់ពី 8-12 ស.ម. ទើបអាច យកទៅស្ទូងបាន។",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "/placeholder.svg?height=350&width=450",
        title: { en: "Coming Soon!", km: "មកដល់ឆាប់ៗ" },
        info: { en: "Sweet and delicious.", km: "ផ្អែមឆ្ងាញ់" },
        // weight: "18 grams/pkt",
        // views: 934,
        // gallery: [
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cob", km: "ផ្លែ" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Cooked", km: "ឆ្អិន" },
        //   },
        //   {
        //     src: "/placeholder.svg?height=350&width=450",
        //     label: { en: "Harvest", km: "ប្រមូលផល" },
        //   },
        // ],
        // features: {
        //   en: [
        //     "Tender and juicy",
        //     "Harvesting: 70 - 80 days after sowing",
        //     "Ear size: 16 - 20 cm length",
        //     "Excellent for fresh consumption",
        //     "Yield: 2 - 3 ears per plant",
        //   ],
        //   km: [
        //     "ទន់ និងមានទឹក",
        //     "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
        //     "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
        //     "ល្អឥតខ្ចោះសម្រាប់ស៊ីស្រស់",
        //     "ទិន្នផល: ២ - ៣ ផ្លែ/ដើម",
        //   ],
        // },
        // planting: {
        //   distance: {
        //     en: "1.8 m bed distance, 0.9 m between rows",
        //     km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
        //   },
        //   plantDistance: {
        //     en: "0.25 - 0.30 m between plants",
        //     km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
        //   },
        //   density: {
        //     en: "5500 - 5000 plants/1000m²",
        //     km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
        //   },
        // },
        // landPreparation: {
        //   en: [
        //     "Corn thrives in well-drained, fertile soil with plenty of organic matter",
        //     "Till the soil to a depth of about 25 cm",
        //     "Add compost or well-rotted manure before planting",
        //     "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
        //     "Break up any clods of soil for a fine seedbed",
        //   ],
        //   km: [
        //     "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
        //     "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
        //     "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
        //     "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
        //     "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
        //   ],
        // },
        // cultivation: {
        //   en: [
        //     "Sow seeds directly outdoors after all danger of frost has passed",
        //     "Plant seeds about 3-4 cm deep",
        //     "Space plants approximately 25-30 cm apart",
        //     "Ensure good air circulation by planting in blocks",
        //     "Fertilize regularly, especially with nitrogen",
        //   ],
        //   km: [
        //     "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
        //     "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
        //     "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
        //     "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
        //     "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
        //   ],
        // },
        // irrigation: {
        //   en: [
        //     "Corn has high water needs, especially during tasseling and silking stages",
        //     "Water deeply and consistently",
        //     "Avoid letting the soil dry out completely",
        //     "Drip irrigation or soaker hoses are effective",
        //     "Adjust watering based on rainfall and soil moisture",
        //   ],
        //   km: [
        //     "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
        //     "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
        //     "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
        //     "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
        //     "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
        //   ],
        // },
      },
    ],
  },
  Cruciferous: {
    name: { en: "Cruciferous", km: "ស្ពៃ" },
    desc: {
      en: "KsSeed’s cruciferous seeds grow fast, resist diseases, and adapt well to Cambodia’s tropical climate.",
      km: "គ្រាប់ពូជ ស្ពៃ របស់ KsSeed លូតលាស់លឿន ធន់នឹងជំងឺ និងសម្របខ្លួនបានយ៉ាងល្អទៅនឹងអាកាសធាតុត្រូពិចរបស់កម្ពុជា។",
    },
    imgs: [
      {
        src: "image/Cruciferous/Picture44.png",
        title: {
          en: "Choy Sum OP variety : Chak Angre1",
          km: "ស្ពៃចង្កិះ OP ពូជ ចាក់អង្រែ1",
        },
        info: {
          en: "It grows fast, tolerates Cambodia’s climate, and is resistant to Leaf bumps disease.",
          km: "លូតលាស់លឿន ធន់នឹងអាកាសធាតុ​កម្ពុជា។ ធន់នឹង ជម្ងឺរលាក់ស្លឹក។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/Cruciferous/Picture44.png",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/Cruciferous/ChoySum1.jpg",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/Cruciferous/ChoySum2.jpg",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Extra sweet variety",
            "Harvesting: 75 - 85 days after sowing",
            "Ear size: 18 - 22 cm length",
            "Golden yellow kernels",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "ពូជផ្អែមបំផុត",
            "ប្រមូលផល: ៧៥ - ៨៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៨ - ២២ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: ["Corn requires fertile soil rich in nitrogen"],
          km: [
            "ពោតត្រូវការដីមានជីជាតិ សំបូរដោយអាសូត",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២៥-៣០ សង់ទីម៉ែត្រ",
            "បញ្ចូលជីលាមកសត្វរលួយល្អ ឬជីកំប៉ុស្ត",
            "ធានាការបង្ហូរទឹកល្អ; ពោតមិនអត់ឱនឱ្យដីលិចទឹក",
            "ដាំជាប្លុក ជាជាងជួរតែមួយ ដើម្បីបង្កកំណើតល្អ",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly when soil temperature is at least 10°C",
            "Plant seeds 2.5-5 cm deep",
            "Space plants about 25-30 cm apart in rows 75-90 cm apart",
            "Keep the soil consistently moist, especially during tasseling and silking",
            "Control weeds, especially when plants are young",
          ],
          km: [
            "សាបព្រោះគ្រាប់ដោយផ្ទាល់ នៅពេលសីតុណ្ហភាពដីមានយ៉ាងហោចណាស់ ១០°C",
            "ដាំគ្រាប់ឱ្យជ្រៅ ២.៥-៥ សង់ទីម៉ែត្រ",
            "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ ក្នុងជួរដែលមានចម្ងាយ ៧៥-៩០ សង់ទីម៉ែត្រ",
            "រក្សាសំណើមដីឱ្យស្ថិរភាព ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
            "ទប់ស្កាត់ស្មៅ ជាពិសេសនៅពេលរុក្ខជាតិនៅក្មេង",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/Cruciferous/Picture45.png",
        title: {
          en: "Choy Sum Flower OP variety : Choi Sim",
          km: "ស្ពៃចង្កិះផ្កា OP ពូជ ឆយស៊ីម",
        },
        info: {
          en: "Thick leaves and light green stems, flowering begins 14–16 days after sowing.",
          km: "ស្លឹកក្រាស់ និងដើមបៃតងខ្ចី ចាប់ផ្តើមកំពួចផ្កាបន្ទាប់ពីដុះបាន 14-16ថ្ងៃ។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/Cruciferous/Picture45.png",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/Cruciferous/ChoySumFlower2.jpg",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/Cruciferous/ChoySumFlower1.jpg",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Tender and juicy",
            "Harvesting: 70 - 80 days after sowing",
            "Ear size: 16 - 20 cm length",
            "Excellent for fresh consumption",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "ទន់ និងមានទឹក",
            "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Corn thrives in well-drained, fertile soil with plenty of organic matter",
            "Till the soil to a depth of about 25 cm",
            "Add compost or well-rotted manure before planting",
            "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
            "Break up any clods of soil for a fine seedbed",
          ],
          km: [
            "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
            "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
            "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
            "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
            "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly outdoors after all danger of frost has passed",
            "Plant seeds about 3-4 cm deep",
            "Space plants approximately 25-30 cm apart",
            "Ensure good air circulation by planting in blocks",
            "Fertilize regularly, especially with nitrogen",
          ],
          km: [
            "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
            "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
            "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
            "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
            "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
          ],
        },
        irrigation: {
          en: [
            "Corn has high water needs, especially during tasseling and silking stages",
            "Water deeply and consistently",
            "Avoid letting the soil dry out completely",
            "Drip irrigation or soaker hoses are effective",
            "Adjust watering based on rainfall and soil moisture",
          ],
          km: [
            "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
            "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
            "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
            "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
          ],
        },
      },
      {
        src: "image/Cruciferous/Picture46.png",
        title: {
          en: "Curly cabbage variety: Kenya",
          km: "ស្ពៃក្រញ៉ាញ់ពូជ គេនយ៉ា",
        },
        info: {
          en: "Tolerant to weather and easy to cultivate.",
          km: "ធន់នឹងអាកាសធាតុ និងងាយស្រួលដាំ។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Cruciferous/Picture46.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Cruciferous/curlycabbage3.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Cruciferous/curlycabbage2.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Type: OP (Open Pollinated)",
            "Harvesting: 28–35 days after transplanting seedlings.",
            "Plant Characteristics: Green and curled leaves. The petiole/stalk is flat, white-green, and very tender/crisp. Tolerant to weather and easy to plant.",
            "Growing Season: Can be planted all year round (1 year full).",
          ],
          km: [
            "ប្រភេទពូជ៖ OP",
            "អាយុប្រមូល៖ 28-35ថ្ងៃ បន្ទាប់សាបកូន",
            "លក្ខណៈដើម៖ស្លឹកបៃតង-រួញ ធាង សំប៉ែត បៃតងសរ និង ស្រួយល្អ ធន់នឹងអាកាសធាតុនិងងាយស្រួលដាំ។",
            "រដូវការដាំដុះ៖ ដាំបាន1ឆ្នាំ ពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Plow or chop the soil to a depth of 2–2.5 decimeters (20–25 cm).",
            "Air-dry the soil for 7–10 days in the dry season.",
            "Air-dry the soil for 10–30 days in the rainy season.",
            "Bed Width: 1 meter. Bed Length: According to preference or land conditions.",
            "Bed Height: 1-1.5decimeters 10-15 cm in the dry season. 2-2.5 decimeters 20-25 cm in the rainy season. Spacing between beds: 2.5-3 decimeters 25-30cm.",
          ],
          km: [
            "ភ្ជួរឬកាប់ដីជម្រៅ ២-២,៥ តឹក",
            "ហាលដី ៧-១០ ថ្ងៃ នៅរដូវប្រាំង",
            "ហាលដី ១០-៣០ ថ្ងៃ នៅរដូវវស្សា",
            "ទទឹងរង ១ម៉ែត្រ បណ្តោយរងតាមចំណង់ចង់បានឬតាមស្ថានភាពដី",
            "កម្ពស់ ១-១,៥ តឹក នៅរដូវប្រាំង, កម្ពស់ ២-២,៥ តឹក នៅរដូវវស្សា,ចន្លោះរង ២,៥-៣ តឹក",
          ],
        },
        cultivation: {
          en: [
            "When the cabbage seedlings are 10-15 days, we can remove them for planting, but before removing them, reduce watering for 2–3 days to allow the stems to harden. Water the seedbed to make it damp and easy to remove the seedlings, and remove the seedlings that have large, uniform stems. Water the raised beds thoroughly before planting. Row spacing is 2-2.5 decimeters 20-25 cm, and clump spacing is 2.5 decimeters 25cm. Cut short pieces of straw and cover the base of the cabbage plants to maintain good soil moisture in the dry season. Water the planted bed thoroughly and shade the cabbage seedlings for 2–3 days to protect them from strong sunlight.",
          ],
          km: [
            "នៅពេលកូនស្ពៃមានអាយុ ១០-១៥ ថ្ងៃ យើងអាចដកយកវាទៅដាំបានហើយ តែមុននឹងដកត្រូវបន្ថយការស្រោចទឹក ពី២-៣ថ្ងៃ ដើម្បីឱ្យដើមវារឹង ស្រោចទឹកលើថ្នាលឱ្យសើមងាយស្រួលក្នុងការដកកូននិងដកកូនណាដែលមានដើមធំ ស្មើគ្នា។ ត្រូវស្រោចទឹកលើរងឱ្យជោគល្អមុនពេលដាំ។ ចន្លោះជួរពី ២-២,៥តឹក និងចន្លោះគុម្ព ២,៥តឹក ។ត្រូវកាត់ចំបើងខ្លីៗគ្របតាមគល់ស្ពៃ ដើម្បីរក្សាសំណើមដីបានល្អនៅរដូវប្រាំង ។ ស្រោចទឹកនៅលើរងដែលដាំរួចឱ្យ ជោគគ្របកូនស្ពៃពី២-៣ថ្ងៃដើម្បីការពារកម្ដៅថ្ងៃខ្លាំង ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/Cruciferous/Picture47.jpg",
        title: {
          en: "Pak-choy OP variety : HM001",
          km: "ស្ពៃជើងទា OP ពូជ HM001",
        },
        info: {
          en: "Disease-resistant, with each plant weighing between 0.4–0.7 kg.",
          km: "ធន់និងជម្ងឺ ដើមមានទំងន់​0.4-0.7kg/ដើម។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Cruciferous/Picture47.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Cruciferous/Pak_choy2.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Cruciferous/Pak_choy1.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/Cruciferous/Picture48.png",
        title: {
          en: "Green Mustard or Root Cabbage",
          km: "ស្ពៃខៀវ ពូជ ស្ពៃឬស",
        },
        info: {
          en: "fast-growing, and tolerant to Cambodia’s climate.",
          km: "លូតលាស់លឿន ធន់នឹងអាកាសធាតុ​កម្ពុជា។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Cruciferous/Picture48.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Cruciferous/cabbage1.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Cruciferous/cabbage2.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/Cruciferous/Picture49.jpg",
        title: {
          en: "Bok Choy OP variety: Neang Tom",
          km: "ស្ពៃតឿ OP ពូជ នាងតុម  ",
        },
        info: { en: "Fast-growing variety.", km: "ពូជដុះលឿន" },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Cruciferous/Picture49.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Cruciferous/Neangtom1.webp",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Cruciferous/Neangtom2.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting: 35–40 days after seeding the seedlings.",
            "Plant Characteristics: Large stem base and tender bright green petiole (stalk), with thick green leaves. Grows quickly, is resistant/tolerant to the Cambodian climate, and matures uniformly.",
            "Growing Season: Can be planted all year round (1 year full).",
            "For planting this cabbage, we can sow the seeds directly on the bed or transplant seedlings. Direct sowing saves time in planting and allows for faster harvesting, but it requires more seeds and results in a lower yield than transplanting seedlings.",
          ],
          km: [
            "អាយុប្រមូល៖ 35-40ថ្ងៃ បន្ទាប់សាបកូន",
            "លក្ខណៈដើម៖គល់ធំហើយអុកបៃតងខ្ចីជាមួយធាងស្រួយស្លឹកបៃតងក្រាសលូតលាស់លឿនធន់ នឹងអាកាសធាតុកម្ពុជា។លាស់ជាឯកសណ្ឋាន",
            "រដូវការដាំដុះ៖ ដាំបាន 1ឆ្នាំ ពេញ",
            "ការដាំស្ពៃនេះយើងអាចព្រោះគ្រាប់ផ្ទាល់លើរង និង ដាំកូន។ ការព្រោះចំណេញពេលវេលាក្នុងការដាំ និងប្រមូលផលបានលឿនប៉ុន្តែចំណាយគ្រាប់ច្រើនជាងនិងទទួលបានទិន្នផលតិចជាងការដាំកូនផ្ទាល់។",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "1 part organic matter",
            "1 part cow dung",
            "3 parts coconut coir or peat",
            "3 parts rice husk ash",
            "Compost (if available)",
            "Mix all components thoroughly to create a uniform soil medium.",
            "Build the nursery in a location with sufficient light.",
            "The roof should allow enough sunlight for the seedlings.",
            "The roof height should be 2–2.5 meters above the ground.",
            "The roof should include shade cloth (for hot season) and plastic to protect from rain.",
            "Seedling beds should have a height of 0.5–0.8 meters above the ground.",
            "The nursery should have protective netting against insects.",
            "The temperature inside the nursery should remain below 37°C.",
          ],
          km: [
            "ដីដែលមានជីវជាតិ ១ភាគ",
            "លាមកគោ ១ភាគ",
            "ស្រកីដូងម៉ដ្ឋ ៣ភាគ",
            "ធ្យូងអង្កាម ៣ភាគ",
            "ជីកំប៉ុស្តិ៍គោក(បើមាន)",
            "យកល្បាយទាំងអស់លាយបញ្ចូលគ្នា អោយសសបចូលគ្នាក្លាយជាល្បាយតែមួយ។",
            "ត្រូវសាងសងរោងនៅកន្លែងមានពន្លឺគ្រប់គ្រាន់",
            "ដំបូលអាចអោយពន្លឺចាំចូលត្រូវកូនដំណាំបាន",
            "ដំបូលរោងត្រូវមានកម្ពស់ពី ២ទៅ២.៥ម៉ែត្រពីដី",
            "ដំបូលត្រូវមាន ស្បៃកាត់ពន្លឺ(រដូវក្តៅ) និងផ្លាស្ទីកការពារទឹកភ្លៀង",
            "រានបណ្តុះត្រូវមានកម្ពស់ចាប់ពី ០.៥ ទៅ ០.៨ម៉ែត្រពីដី",
            "រោងបណ្តុះត្រូវមានស្បៃការពារសត្វព័ទ្ធជុំវិញ",
            "សីតុណ្ហភាពក្នុងរោងបណ្តុះទាបជាង៣៧ អង្សារ។",
          ],
        },
        cultivation: {
          en: [
            "Place the prepared soil mix into seedling trays and sow 2–3 seeds per hole.",
            "Water lightly and then place the trays in the nursery.",
            "Water twice a day, at 10 a.m. and 2 p.m.",
            "Add water to the trays or gently water over trays covered with thin mesh.",
            "Separate the seedlings in each hole of the tray, taking one seedling per hole to transplant into the field.",
            "Transplant in the afternoon, making sure the seedling stems are level with the soil. Do not bury seedlings too deep, as this can cause root rot.",
            "Recommended spacing: 2 tœk (width of row) between plants and 2.5 tœk (length of row) between rows, planting one seedling per hole.",
            "Farmers should raise 10–15% extra seedlings to replace any that fail to grow or are damaged.",
          ],
          km: [
            "យកល្បាយដីដែលយើងបានលាយរួចទៅដាក់ក្នុងត្រេបណ្តុះរួចដាក់គ្រាប់ស្ពៃ២-៣គ្រាប់ក្នុងមួយរន្ធ",
            "បន្ទាប់ មកស្រោចទឹកអោយជោករួចយកទៅដាក់ក្នុងរោងបណ្តុះ។",
            "ការស្រោចទឹក គឺស្រោចតែ២ដងក្នុង មួយថ្ងៃ គឺម៉ោង ១០ព្រឹកនិងម៉ោង២រសៀល។",
            "បញ្ចូលទឹកតាមចន្លោះរង (សំរាប់រងគ្របថង់ប្លាស្ទិច) ឬ ស្រោចទឹកលើរង ដែលគ្របចំបើង",
            "បំបែកកូនស្ពៃដែលបណ្តុះក្នុងរន្ធថាសនិមួយៗ ដោយយក ១ ដើម ដាំក្នុង១រណ្តៅ។",
            "ដាំកូនស្ពៃនៅពេលរសៀល ដោយកបគល់ស្មើត្រឹមដីបណ្តុះ ។ កុំដាំកូន ស្ពៃផ្កា កប់លិចដើមជ្រៅ ពេក ពីព្រោះវាបណ្តាលឱ្យដើមកូនរលួយបាន។",
            "ចន្លោះពីគុម្ពមួយ ទៅគុម្ពមួយ គួរតែ ២តឹក (ទទឹងរង) និង ២,៥តឹក (ជួរបណ្តោយរង) ដោយ ដាក់ក្នុង មួយរណ្តៅ១ដើម ។",
            "កសិករ គួរតែបណ្តុះកូនទុកបម្រុងចំនួន ១០ ទៅ ១៥% នៃគ្រាប់សរុប ដើម្បីទុកជួសនៅពេលបាត់ ដើម ឬ ដើមដុះមិនល្អ ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/Cruciferous/Picture50.png",
        title: { en: "Bok Choy F1 variety: Saophea", km: "ស្ពៃតឿ F1 ពូជ សោភា" },
        info: {
          en: "Fast-growing, high-yielding, and tolerant to Cambodia’s climate.",
          km: "លូតលាស់លឿន ទិន្នផលខ្ពស់​ ធន់នឹងអាកាសធាតុ​កម្ពុជា។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/Cruciferous/soaphea1.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/Cruciferous/soaphea2.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/Cruciferous/soaphea3.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting: 35–40 days after seeding the seedlings.",
            "Plant Characteristics: Large stem base and tender bright green petiole (stalk), with thick green leaves. Grows quickly, is resistant/tolerant to the Cambodian climate, and matures uniformly.",
            "Growing Season: Can be planted all year round (1 year full).",
            "For planting this cabbage, we can sow the seeds directly on the bed or transplant seedlings. Direct sowing saves time in planting and allows for faster harvesting, but it requires more seeds and results in a lower yield than transplanting seedlings.",
          ],
          km: [
            "អាយុប្រមូល៖ 35-40ថ្ងៃ បន្ទាប់សាបកូន",
            "លក្ខណៈដើម៖គល់ធំហើយអុកបៃតងខ្ចីជាមួយធាងស្រួយស្លឹកបៃតងក្រាសលូតលាស់លឿនធន់ នឹងអាកាសធាតុកម្ពុជា។លាស់ជាឯកសណ្ឋាន",
            "រដូវការដាំដុះ៖ ដាំបាន 1ឆ្នាំ ពេញ",
            "ការដាំស្ពៃនេះយើងអាចព្រោះគ្រាប់ផ្ទាល់លើរង និង ដាំកូន។ ការព្រោះចំណេញពេលវេលាក្នុងការដាំ និងប្រមូលផលបានលឿនប៉ុន្តែចំណាយគ្រាប់ច្រើនជាងនិងទទួលបានទិន្នផលតិចជាងការដាំកូនផ្ទាល់។",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "1 part organic matter",
            "1 part cow dung",
            "3 parts coconut coir or peat",
            "3 parts rice husk ash",
            "Compost (if available)",
            "Mix all components thoroughly to create a uniform soil medium.",
            "Build the nursery in a location with sufficient light.",
            "The roof should allow enough sunlight for the seedlings.",
            "The roof height should be 2–2.5 meters above the ground.",
            "The roof should include shade cloth (for hot season) and plastic to protect from rain.",
            "Seedling beds should have a height of 0.5–0.8 meters above the ground.",
            "The nursery should have protective netting against insects.",
            "The temperature inside the nursery should remain below 37°C.",
          ],
          km: [
            "ដីដែលមានជីវជាតិ ១ភាគ",
            "លាមកគោ ១ភាគ",
            "ស្រកីដូងម៉ដ្ឋ ៣ភាគ",
            "ធ្យូងអង្កាម ៣ភាគ",
            "ជីកំប៉ុស្តិ៍គោក(បើមាន)",
            "យកល្បាយទាំងអស់លាយបញ្ចូលគ្នា អោយសសបចូលគ្នាក្លាយជាល្បាយតែមួយ។",
            "ត្រូវសាងសងរោងនៅកន្លែងមានពន្លឺគ្រប់គ្រាន់",
            "ដំបូលអាចអោយពន្លឺចាំចូលត្រូវកូនដំណាំបាន",
            "ដំបូលរោងត្រូវមានកម្ពស់ពី ២ទៅ២.៥ម៉ែត្រពីដី",
            "ដំបូលត្រូវមាន ស្បៃកាត់ពន្លឺ(រដូវក្តៅ) និងផ្លាស្ទីកការពារទឹកភ្លៀង",
            "រានបណ្តុះត្រូវមានកម្ពស់ចាប់ពី ០.៥ ទៅ ០.៨ម៉ែត្រពីដី",
            "រោងបណ្តុះត្រូវមានស្បៃការពារសត្វព័ទ្ធជុំវិញ",
            "សីតុណ្ហភាពក្នុងរោងបណ្តុះទាបជាង៣៧ អង្សារ។",
          ],
        },
        cultivation: {
          en: [
            "Place the prepared soil mix into seedling trays and sow 2–3 seeds per hole.",
            "Water lightly and then place the trays in the nursery.",
            "Water twice a day, at 10 a.m. and 2 p.m.",
            "Add water to the trays or gently water over trays covered with thin mesh.",
            "Separate the seedlings in each hole of the tray, taking one seedling per hole to transplant into the field.",
            "Transplant in the afternoon, making sure the seedling stems are level with the soil. Do not bury seedlings too deep, as this can cause root rot.",
            "Recommended spacing: 2 tœk (width of row) between plants and 2.5 tœk (length of row) between rows, planting one seedling per hole.",
            "Farmers should raise 10–15% extra seedlings to replace any that fail to grow or are damaged.",
          ],
          km: [
            "យកល្បាយដីដែលយើងបានលាយរួចទៅដាក់ក្នុងត្រេបណ្តុះរួចដាក់គ្រាប់ស្ពៃ២-៣គ្រាប់ក្នុងមួយរន្ធ",
            "បន្ទាប់ មកស្រោចទឹកអោយជោករួចយកទៅដាក់ក្នុងរោងបណ្តុះ។",
            "ការស្រោចទឹក គឺស្រោចតែ២ដងក្នុង មួយថ្ងៃ គឺម៉ោង ១០ព្រឹកនិងម៉ោង២រសៀល។",
            "បញ្ចូលទឹកតាមចន្លោះរង (សំរាប់រងគ្របថង់ប្លាស្ទិច) ឬ ស្រោចទឹកលើរង ដែលគ្របចំបើង",
            "បំបែកកូនស្ពៃដែលបណ្តុះក្នុងរន្ធថាសនិមួយៗ ដោយយក ១ ដើម ដាំក្នុង១រណ្តៅ។",
            "ដាំកូនស្ពៃនៅពេលរសៀល ដោយកបគល់ស្មើត្រឹមដីបណ្តុះ ។ កុំដាំកូន ស្ពៃផ្កា កប់លិចដើមជ្រៅ ពេក ពីព្រោះវាបណ្តាលឱ្យដើមកូនរលួយបាន។",
            "ចន្លោះពីគុម្ពមួយ ទៅគុម្ពមួយ គួរតែ ២តឹក (ទទឹងរង) និង ២,៥តឹក (ជួរបណ្តោយរង) ដោយ ដាក់ក្នុង មួយរណ្តៅ១ដើម ។",
            "កសិករ គួរតែបណ្តុះកូនទុកបម្រុងចំនួន ១០ ទៅ ១៥% នៃគ្រាប់សរុប ដើម្បីទុកជួសនៅពេលបាត់ ដើម ឬ ដើមដុះមិនល្អ ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
    ],
  },
  Edible_Amaranth: {
    name: { en: "Edible Amaranth", km: "ផ្ទី" },
    desc: {
      en: "Fast-growing, disease-resistant, high-yielding, and tolerant to Cambodia’s climate.",
      km: "គលូតលាស់លឿន​ ធន់នឹងជម្ងី​ ទិន្នផលខ្ពស់ ធន់នឹងអាកាសធាតុ​កម្ពុជា។",
    },
    imgs: [
      {
        src: "image/EdibleAmaranth/Picture51.png",
        title: {
          en: " Green Edible Amaranth variety: AR020 OP",
          km: "ផ្ទីបៃតង ពូជ AR020 OP",
        },
        info: {
          en: "Fast-growing, high-yielding, and tolerant to Cambodia’s climate.",
          km: "លូតលាស់លឿន សមស្រប ធន់នឹងអាកាសធាតុ​កម្ពុជា។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/EdibleAmaranth/Picture51.png",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/EdibleAmaranth/edible1.jpg",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/EdibleAmaranth/Picture51.png",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Variety: OP (Open Pollinated)",
            "Harvesting: 25–35 days after seeding the seedlings.",
            "Plant Characteristics: Slender, light green stem with pointed, light green tubular petioles/leaf stalks. Grows fast, is suitable, and tolerant to the Cambodian climate.",
            "Growing Season: Can be planted all year round (1 year full).",
          ],
          km: [
            "ពូជ៖ OP",
            "អាយុប្រមូល៖ 25-35ថ្ងៃ បន្ទាប់សាបកូន",
            "លក្ខណៈដើម៖ ដើមស្រលូនបៃតងខ្ចី ជាមួយទងស្លឹកកំបោងស្រួចចុងបៃតង ខ្ចី,លូតលាស់លឿនសមស្រប ធន់នឹងអាកាសធាតុកម្ពុជា។",
            "រដូវការដាំដុះ៖ ដាំបាន 1ឆ្នាំ ពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil needs to be prepared to have sufficient nutrients and good permeability, with a higher percentage of sand than clay—such as sandy loam, riverbank silt, or leaf mold (slœk chraek)—to allow planting almost all year round.",
            "For fertilizer application, well-decomposed animal manure or compost can be used at a rate of 2 kg, along with 15-15-15 fertilizer or 16-20-0 fertilizer at a rate of 20 to 30 grams per square meter of soil. For the planting soil, raised beds should be prepared with a width of 100–120 cm, a height of 20–30 cm, and the length depending on the field size. The soil must be cleaned, weeds removed, and loosened well, then left exposed to sunlight for 7–10 days. After preparing the raised bed, make shallow furrows across the width of the bed to a depth of 1–1.5 cm, spaced 20–25 cm apart from one furrow to the next.",
          ],
          km: [
            "ដោយគេត្រូវការរៀបចំដីណាដែលមានជីជាតិគ្រប់គ្រាន់ ជ្រាបទឹកបានល្អ ដែលមានភាគរយជាដីខ្សាច់ច្រើនជាងដឹកណ្តែង ដូចជា ដីល្បាយខ្សាច់ ដីល្បាប់មាត់ទន្លេ ស្លឹក ជ្រែក ជាដើម ទើបដាំបានស្ទើរពេញមួយឆ្នាំ ។",
            "ចំពោះប្រភេទជីនេះដែរ គេអាចប្រើជីលាមកសត្វ ឬជីកំប៉ុស្តិ៍ពុកផុយចំនួន ២គីឡូក្រាម និងជី១៥-១៥-១៥ ឬជី ១៦-២០-០ ចំនួនពី ២០ ទៅ ៣០ ក្រាមក្នុងផ្ទៃដី១ម៉ែត្រការេ។ ឯដីសម្រាប់ដាំ ត្រូវលើករង មានទទឹង ១០០-១២០សង់ទីម៉ែត្រ កម្ពស់២០-៣០សង់ទីម៉ែត្រ និងបណ្តោយអាស្រ័យតាមប្រវែងដីជាក់ស្តែង ហើយដីត្រូវសម្អាត រាស់យកស្មៅចេញ និងភ្ជួរបំបែកដីឱ្យម៉ដ្ឋ រួចហាលចោលរយៈពេល៧-១០ ថ្ងៃសិន។ ក្រោយលើរងរួច ត្រូវឆូតជាចង្អូរកាត់ទទឹងរងជម្រៅ១-១.៥សង់ទីម៉ែត្រ ដោយចន្លោះពីចង្អូរមួយទៅចង្អូរមួយទៀតប្រវែង ២០-២៥ សង់ទីម៉ែត្រ។",
          ],
        },
        cultivation: {
          en: [
            "Before sowing, mix the seeds with ash to easily check whether the seeds are sown too densely or too sparsely. The seeds should be sown as thinly as possible. Then, cover them with rice straw until the plants grow 5-8centimeters tall, then remove the straw and water thoroughly. If the seedlings are growing too densely, some should be thinned out so that the seedlings do not become too crowded, which will allow them to grow well.",
          ],
          km: ["សាបព្រោះគ្រាប់ដោយផ្ទាល់ នៅពេលសីតុណ្ហភាពដីមានយ៉ាងហោចណាស់ ១០°C"],
        },
        irrigation: {
          en: [
            "Farmers should also understand how to water and care for the plants appropriately, as the crop requires very little water. If the soil is waterlogged, it can cause the plant to rot. Conversely, during the dry season with intense heat for a long period, it can cause the plant to grow slowly and the stems to develop poorly.",
          ],
          km: [
            "កសិករក៏គួរយល់ដឹងពីការស្រោចស្រព និងថែទាំឱ្យបានសមស្រប ព្រោះថ្មីត្រូវការទឹកតិចណាស់បើកាលណាដីជាំទឹក អាចធ្វើឲ្យវារលួយ ចំណែកនៅរដូវប្រាំង មានអាកាសធាតុក្តៅខ្លាំងរយៈពេលយូរក៏អាចធ្វើឲ្យវាដុះលូតលាស់ យឺត ហើយដើមដុះមិនសូវល្អផងដែរ។",
          ],
        },
      },
      {
        src: "image/EdibleAmaranth/Picture52.png",
        title: {
          en: "Red Edible Amaranth OP variety: Licana",
          km: "ផ្ទីក្រហម OP ពូជ លិកាណា",
        },
        info: {
          en: "fast-growing, nutritious, and perfect for Cambodia’s warm tropical climate!",
          km: "លូតលាស់លឿន មានជីវជាតិ និងល្អឥតខ្ចោះសម្រាប់អាកាសធាតុត្រូពិចរបស់ប្រទេសកម្ពុជា។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/EdibleAmaranth/Picture52.png",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/EdibleAmaranth/Picture14.png",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/EdibleAmaranth/rededible1.webp",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Variety: OP (Open Pollinated)",
            "Harvesting: 25–35 days after seeding the seedlings.",
            "Plant Characteristics: Slender, light green stem with pointed, light green tubular petioles/leaf stalks. Grows fast, is suitable, and tolerant to the Cambodian climate.",
            "Growing Season: Can be planted all year round (1 year full).",
          ],
          km: [
            "ពូជ៖ OP",
            "អាយុប្រមូល៖ 25-35ថ្ងៃ បន្ទាប់សាបកូន",
            "លក្ខណៈដើម៖ ដើមស្រលូនបៃតងខ្ចី ជាមួយទងស្លឹកកំបោងស្រួចចុងបៃតង ខ្ចី,លូតលាស់លឿនសមស្រប ធន់នឹងអាកាសធាតុកម្ពុជា។",
            "រដូវការដាំដុះ៖ ដាំបាន 1ឆ្នាំ ពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil needs to be prepared to have sufficient nutrients and good permeability, with a higher percentage of sand than clay—such as sandy loam, riverbank silt, or leaf mold (slœk chraek)—to allow planting almost all year round.",
            "For fertilizer application, well-decomposed animal manure or compost can be used at a rate of 2 kg, along with 15-15-15 fertilizer or 16-20-0 fertilizer at a rate of 20 to 30 grams per square meter of soil. For the planting soil, raised beds should be prepared with a width of 100–120 cm, a height of 20–30 cm, and the length depending on the field size. The soil must be cleaned, weeds removed, and loosened well, then left exposed to sunlight for 7–10 days. After preparing the raised bed, make shallow furrows across the width of the bed to a depth of 1–1.5 cm, spaced 20–25 cm apart from one furrow to the next.",
          ],
          km: [
            "ដោយគេត្រូវការរៀបចំដីណាដែលមានជីជាតិគ្រប់គ្រាន់ ជ្រាបទឹកបានល្អ ដែលមានភាគរយជាដីខ្សាច់ច្រើនជាងដឹកណ្តែង ដូចជា ដីល្បាយខ្សាច់ ដីល្បាប់មាត់ទន្លេ ស្លឹក ជ្រែក ជាដើម ទើបដាំបានស្ទើរពេញមួយឆ្នាំ ។",
            "ចំពោះប្រភេទជីនេះដែរ គេអាចប្រើជីលាមកសត្វ ឬជីកំប៉ុស្តិ៍ពុកផុយចំនួន ២គីឡូក្រាម និងជី១៥-១៥-១៥ ឬជី ១៦-២០-០ ចំនួនពី ២០ ទៅ ៣០ ក្រាមក្នុងផ្ទៃដី១ម៉ែត្រការេ។ ឯដីសម្រាប់ដាំ ត្រូវលើករង មានទទឹង ១០០-១២០សង់ទីម៉ែត្រ កម្ពស់២០-៣០សង់ទីម៉ែត្រ និងបណ្តោយអាស្រ័យតាមប្រវែងដីជាក់ស្តែង ហើយដីត្រូវសម្អាត រាស់យកស្មៅចេញ និងភ្ជួរបំបែកដីឱ្យម៉ដ្ឋ រួចហាលចោលរយៈពេល៧-១០ ថ្ងៃសិន។ ក្រោយលើរងរួច ត្រូវឆូតជាចង្អូរកាត់ទទឹងរងជម្រៅ១-១.៥សង់ទីម៉ែត្រ ដោយចន្លោះពីចង្អូរមួយទៅចង្អូរមួយទៀតប្រវែង ២០-២៥ សង់ទីម៉ែត្រ។",
          ],
        },
        cultivation: {
          en: [
            "Before sowing, mix the seeds with ash to easily check whether the seeds are sown too densely or too sparsely. The seeds should be sown as thinly as possible. Then, cover them with rice straw until the plants grow 5-8centimeters tall, then remove the straw and water thoroughly. If the seedlings are growing too densely, some should be thinned out so that the seedlings do not become too crowded, which will allow them to grow well.",
          ],
          km: ["សាបព្រោះគ្រាប់ដោយផ្ទាល់ នៅពេលសីតុណ្ហភាពដីមានយ៉ាងហោចណាស់ ១០°C"],
        },
        irrigation: {
          en: [
            "Farmers should also understand how to water and care for the plants appropriately, as the crop requires very little water. If the soil is waterlogged, it can cause the plant to rot. Conversely, during the dry season with intense heat for a long period, it can cause the plant to grow slowly and the stems to develop poorly.",
          ],
          km: [
            "កសិករក៏គួរយល់ដឹងពីការស្រោចស្រព និងថែទាំឱ្យបានសមស្រប ព្រោះថ្មីត្រូវការទឹកតិចណាស់បើកាលណាដីជាំទឹក អាចធ្វើឲ្យវារលួយ ចំណែកនៅរដូវប្រាំង មានអាកាសធាតុក្តៅខ្លាំងរយៈពេលយូរក៏អាចធ្វើឲ្យវាដុះលូតលាស់ យឺត ហើយដើមដុះមិនសូវល្អផងដែរ។",
          ],
        },
      },
    ],
  },
  Herbs: {
    name: { en: "Herbs", km: "ប្រភេទជី" },
    desc: {
      en: "Fast-growing, aromatic, and rich in nutrients. Highly adaptable with high yield,",
      km: "លូតលាស់លឿន មានក្លិនក្រអូប និងសម្បូរទៅដោយសារធាតុចិញ្ចឹម។ ធន់នឹងអាកាសធាតុ​ ជាមួយនឹងទិន្នផលខ្ពស់។",
    },
    imgs: [
      {
        src: "image/herb/Picture53.png",
        title: { en: "Basil OP variety: SB 001", km: "ជីនាងវង OP ពូជ SB 001" },
        info: {
          en: "Has a fragrance that is resistant to tropical climates, especially Cambodia.",
          km: "មានក្លិនក្រអូបធន់នឹងអាកាសធាតុត្រូពិក ពិសេសកម្ពុជា។",
        },
        weight: "20 grams/pkt",
        views: 1156,
        gallery: [
          {
            src: "image/herb/basil1.jpg",
            label: { en: "Ear", km: "ផ្លែ" },
          },
          {
            src: "image/herb/herb2.png",
            label: { en: "Kernels", km: "គ្រាប់" },
          },
          {
            src: "image/herb/herb1.png",
            label: { en: "Field", km: "វាល" },
          },
        ],
        features: {
          en: [
            "Extra sweet variety",
            "Harvesting: 75 - 85 days after sowing",
            "Ear size: 18 - 22 cm length",
            "Golden yellow kernels",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "ពូជផ្អែមបំផុត",
            "ប្រមូលផល: ៧៥ - ៨៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៨ - ២២ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: ["Corn requires fertile soil rich in nitrogen"],
          km: [
            "ពោតត្រូវការដីមានជីជាតិ សំបូរដោយអាសូត",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២៥-៣០ សង់ទីម៉ែត្រ",
            "បញ្ចូលជីលាមកសត្វរលួយល្អ ឬជីកំប៉ុស្ត",
            "ធានាការបង្ហូរទឹកល្អ; ពោតមិនអត់ឱនឱ្យដីលិចទឹក",
            "ដាំជាប្លុក ជាជាងជួរតែមួយ ដើម្បីបង្កកំណើតល្អ",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly when soil temperature is at least 10°C",
            "Plant seeds 2.5-5 cm deep",
            "Space plants about 25-30 cm apart in rows 75-90 cm apart",
            "Keep the soil consistently moist, especially during tasseling and silking",
            "Control weeds, especially when plants are young",
          ],
          km: [
            "សាបព្រោះគ្រាប់ដោយផ្ទាល់ នៅពេលសីតុណ្ហភាពដីមានយ៉ាងហោចណាស់ ១០°C",
            "ដាំគ្រាប់ឱ្យជ្រៅ ២.៥-៥ សង់ទីម៉ែត្រ",
            "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ ក្នុងជួរដែលមានចម្ងាយ ៧៥-៩០ សង់ទីម៉ែត្រ",
            "រក្សាសំណើមដីឱ្យស្ថិរភាព ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
            "ទប់ស្កាត់ស្មៅ ជាពិសេសនៅពេលរុក្ខជាតិនៅក្មេង",
          ],
        },
        irrigation: {
          en: [
            "Corn is a heavy feeder and requires consistent moisture",
            "Water deeply, especially during dry spells",
            "Apply nitrogen fertilizer when plants are about 30 cm tall and again before tasseling",
            "Avoid overhead watering if possible to reduce fungal diseases",
            "Ensure good drainage to prevent root issues",
          ],
          km: [
            "ពោតគឺជាអ្នកស៊ីច្រើន និងត្រូវការសំណើមស្ថិរភាព",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសក្នុងអំឡុងពេលមានគ្រោះរាំងស្ងួត",
            "ដាក់ជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែល ៣០ សង់ទីម៉ែត្រ និងម្តងទៀត មុនពេលចេញរងើក",
            "ជៀសវាងការស្រោចទឹកលើស្លឹក ប្រសិនបើអាចធ្វើទៅបាន ដើម្បីកាត់បន្ថយជំងឺផ្សិត",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារបញ្ហារោងឫស",
          ],
        },
      },
      {
        src: "image/herb/whiteherb.jpg",
        title: { en: "White Basil variety: Neanglin", km: "ជីសរ ពូជ ជីនាងលីន" },
        info: {
          en: "High-yielding, weather-tolerant, and disease-resistant.",
          km: "ទិន្នផលខ្ពស់ ធន់និងអាកាសធាតុ ធន់និងជម្ងឺ។",
        },
        weight: "18 grams/pkt",
        views: 934,
        gallery: [
          {
            src: "image/herb/whiteherb.jpg",
            label: { en: "Cob", km: "ផ្លែ" },
          },
          {
            src: "image/herb/whiteherb2.png",
            label: { en: "Cooked", km: "ឆ្អិន" },
          },
          {
            src: "image/herb/whiteherb3.jpg",
            label: { en: "Harvest", km: "ប្រមូលផល" },
          },
        ],
        features: {
          en: [
            "Tender and juicy",
            "Harvesting: 70 - 80 days after sowing",
            "Ear size: 16 - 20 cm length",
            "Excellent for fresh consumption",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "ទន់ និងមានទឹក",
            "ប្រមូលផល: ៧០ - ៨០ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៦ - ២០ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "Corn thrives in well-drained, fertile soil with plenty of organic matter",
            "Till the soil to a depth of about 25 cm",
            "Add compost or well-rotted manure before planting",
            "Ensure the soil is slightly acidic to neutral (pH 6.0-7.0)",
            "Break up any clods of soil for a fine seedbed",
          ],
          km: [
            "ពោតលូតលាស់បានល្អនៅក្នុងដីដែលមានការបង្ហូរទឹកល្អ មានជីជាតិ និងមានសារធាតុសរីរាង្គច្រើន",
            "ភ្ជួរដីឱ្យបានជម្រៅប្រហែល ២៥ សង់ទីម៉ែត្រ",
            "បន្ថែមជីកំប៉ុស្ត ឬជីលាមកសត្វដែលរលួយល្អ មុនពេលដាំ",
            "ធានាថាដីមានជាតិអាស៊ីតបន្តិចទៅជាអព្យាក្រឹត (pH ៦.០-៧.០)",
            "បំបែកដុំដីឱ្យល្អិត ដើម្បីបង្កើតគ្រែគ្រាប់ល្អ",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly outdoors after all danger of frost has passed",
            "Plant seeds about 3-4 cm deep",
            "Space plants approximately 25-30 cm apart",
            "Ensure good air circulation by planting in blocks",
            "Fertilize regularly, especially with nitrogen",
          ],
          km: [
            "សាបព្រោះគ្រាប់ដោយផ្ទាល់ក្នុងផ្ទះ បន្ទាប់ពីគ្រោះថ្នាក់នៃសាយសត្វបានកន្លងផុតទៅ",
            "ដាំគ្រាប់ឱ្យជ្រៅប្រហែល ៣-៤ សង់ទីម៉ែត្រ",
            "ច spacing រវាងដើមប្រហែល ២៥-៣០ សង់ទីម៉ែត្រ",
            "ធានាខ្យល់ចរាចរល្អ ដោយការដាំជាប្លុក",
            "ដាក់ជីជាប្រចាំ ជាពិសេសអាសូត",
          ],
        },
        irrigation: {
          en: [
            "Corn has high water needs, especially during tasseling and silking stages",
            "Water deeply and consistently",
            "Avoid letting the soil dry out completely",
            "Drip irrigation or soaker hoses are effective",
            "Adjust watering based on rainfall and soil moisture",
          ],
          km: [
            "ពោតត្រូវការទឹកច្រើន ជាពិសេសអំឡុងពេលចេញរងើក និងចេញរោម",
            "ស្រោចទឹកឱ្យជ្រៅ និងស្ថិរភាព",
            "ជៀសវាងការអនុញ្ញាតឱ្យដីស្ងួតទាំងស្រុង",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ ឬទុយោស្រោចទឹកមានប្រសិទ្ធភាព",
            "កែតម្រូវការស្រោចទឹក ដោយផ្អែកលើទឹកភ្លៀង និងសំណើមដី",
          ],
        },
      },
      {
        src: "image/herb/Picture55.png",
        title: {
          en: "Culantro variety: Long leaves",
          km: "ជីរណា ពូជ ស្លឹកវែង",
        },
        info: {
          en: "Requires less than 5 hours of sunlight or a temperature of 28–35°C.",
          km: "ត្រូវការពន្លឺចន្លោះតិចជាង5ម៉ោង ឬសីតុណ្ហភាព 28-35 C។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/herb/Picture55.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/herb/herb4.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/herb/herb5.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/herb/Picture56.png",
        title: {
          en: "Coriander OP variety: Chiva",
          km: "ជីវ៉ាន់ស៊ុយ​ OP ពូជ​ជីវ៉ា",
        },
        info: {
          en: "Requires less than 5 hours of daylight or a temperature of 28–35°C.",
          km: "ត្រូវការពន្លឺចន្លោះតិចជាង5ម៉ោង ឬ សីតុណ្ហភាព 28-35 C។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/herb/Picture56.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/herb/herb6.webp",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/herb/herb8.png",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/herb/Picture57.png",
        title: {
          en: "Tang ao OP variety: CSTG 001",
          km: "តាំងអោ ពូជ CSTG 001",
        },
        info: {
          en: "It has many branches and is tolerant to tropical climates, especially in Cambodia.",
          km: "មែកច្រើន ធន់នឹងអាកាសធាតុត្រូពិក ពិសេសកម្ពុជា។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/herb/Picture57.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/herb/herb9.png",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/herb/​herb10.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/herb/herb11.png",
        title: {
          en: "Water Celery OP vaariety: Saraytip",
          km: "ភ្លៅកង្កែប OP ពូជសារាយទិព",
        },
        info: {
          en: "Harvest by cutting only the young leaves of the stem and allow it to continue growing.",
          km: "ប្រមូលផល ដោយកាត់ដើមយកតែផ្នែកខ្ចី និងទុកឲ្យលូតលាស់បន្ត។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/herb/herb11.png",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/herb/herb12.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/herb/Picture58.png",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Rapid growth cycle",
            "Harvesting: 65 - 75 days after sowing",
            "Ear size: 17 - 21 cm length",
            "Disease resistant",
            "Yield: 2 - 3 ears per plant",
          ],
          km: [
            "វដ្តដុះលឿន",
            "ប្រមូលផល: ៦៥ - ៧៥ ថ្ងៃបន្ទាប់ពីសាបព្រោះ",
            "ទំហំផ្លែ: ប្រវែង ១៧ - ២១ សង់ទីម៉ែត្រ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [],
          km: [
            "ពោតកូនកាត់ច្រើនតែត្រូវការជីជាតិខ្ពស់ជាងដំណាំដែលបង្កាត់ពូជដោយខ្លួនឯង",
            "កែប្រែដីដោយប្រើជីកំប៉ុស្ត ឬជីលាមកសត្វចាស់ ដើម្បីបង្កើនរចនាសម្ព័ន្ធ និងជីជាតិ",
            "ធានាថាដីមានការបង្ហូរទឹកល្អ និងមាន pH ចាប់ពី ៦.០ ទៅ ៧.០",
            "ភ្ជួរដីឱ្យបានជម្រៅ ២០-២៥ សង់ទីម៉ែត្រ",
            "ជៀសវាងការដាំនៅតំបន់ដែលងាយនឹងលិចទឹក",
          ],
        },
        cultivation: {
          en: [
            "Sow seeds directly after the last frost when soil temperatures are consistently above 10°C",
            "Plant seeds 3-5 cm deep",
            "Spacing: 25-30 cm between plants, 75-90 cm between rows",
            "Plant in blocks (e.g., 4x4 or larger) for optimal pollination",
            "Side-dress with nitrogen fertilizer when plants are about knee-high",
          ],
          km: [
            "ដាំគ្រាប់ឱ្យជ្រៅ ៣-៥ សង់ទីម៉ែត្រ",
            "ច spacing: ២៥-៣០ សង់ទីម៉ែត្ររវាងដើម, ៧៥-៩០ សង់ទីម៉ែត្ររវាងជួរ",
            "ដាំជាប្លុក (ឧ. ៤x៤ ឬធំជាង) សម្រាប់ការបង្កកំណើតល្អបំផុត",
            "ដាក់ជីខាងៗ ដោយប្រើជីអាសូត នៅពេលរុក្ខជាតិមានកម្ពស់ប្រហែលជង្គង់",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
      {
        src: "image/herb/herb3.jpg",
        title: {
          en: "Leek OP variety: Viola",
          km: "ខ្ទឹមស្លឹក OP ពូជ វ៉ាយអូឡា",
        },
        info: {
          en: "Easy to grow, grows quickly, and is tolerant to Cambodia’s climate.",
          km: "ងាយស្រួលដាំលូតលាស់លឿន ធន់នឹងអាកាសធាតុ​កម្ពុជា។",
        },
        weight: "22 grams/pkt",
        views: 1089,
        gallery: [
          {
            src: "image/herb/herb13.jpg",
            label: { en: "Fresh", km: "ស្រស់" },
          },
          {
            src: "image/herb/herb14.jpg",
            label: { en: "Growing", km: "កំពុងដុះ" },
          },
          {
            src: "image/herb/herb15.jpg",
            label: { en: "Mature", km: "ទុំ" },
          },
        ],
        features: {
          en: [
            "Harvesting: 45–55 days after transplanting seedlings.",
            "Growth Characteristics: Easy to plant, grows fast, and is resistant/tolerant to the Cambodian climate.",
            "Tuber/Base Characteristics: White base and pointed tubular long leaves. Grows quickly and is easy to plant.",
            "Growing Season: Can be planted all year round (1 year full).",
          ],
          km: [
            "អាយុប្រមូល៖ 45-55ថ្ងៃ បន្ទាប់សាបកូន",
            "បលក្ខណៈលូតលាស់៖ ងាយស្រួលដាំលូតលាស់លឿន ធន់នឹងអាកាសធាតុកម្ពុជា។",
            "លក្ខណៈមើម៖ គល់សរ និងស្លឹកបំពុងស្រួចចុងវែង។ លូតលាស់លឿន និងងាយស្រួលដាំ។",
            "រដូវការដាំដុះ៖ ដាំបាន1ឆ្នាំពេញ",
          ],
        },
        planting: {
          distance: {
            en: "1.8 m bed distance, 0.9 m between rows",
            km: "ចម្ងាយគ្រែ ១.៨ ម៉ែត្រ ០.៩ ម៉ែត្ររវាងជួរ",
          },
          plantDistance: {
            en: "0.25 - 0.30 m between plants",
            km: "០.២៥ - ០.៣០ ម៉ែត្ររវាងដើម",
          },
          density: {
            en: "5500 - 5000 plants/1000m²",
            km: "៥៥០០ - ៥០០០ ដើម/១០០០ម៉ែត្រការ៉េ",
          },
        },
        landPreparation: {
          en: [
            "The soil must be plowed and harrowed deep and many times to break the soil down finely. Then, the beds are formed using a ridge former (thut). The method of forming the beds (thut rông) is to shape the beds high, with a height of 20 to 25 cm. The bed width is 80 to 100 cm, and the average bed length is 15 m. After the beds are formed, the soil must be broken down finely, leveled, and air-dried for a period of 2 to 3 days before the scallion seedlings are transplanted.",
          ],
          km: [
            "គេភ្ជួរ និងរាស់ដីឱ្យបានជ្រៅ និងច្រើនលើក ហើយបំបែកដីឱ្យល្អិត ទើបគេធូតលើករង របៀបធូតរង គឺឆូតលើករងឱ្យបានខ្ពស់ កម្ពស់ ២០ ទៅ ២៥ ស.ម ទទឹងរងគឺ ៨០ ទៅ ១០០ ស.ម បណ្តោយរងប្រវែង ១៥ ម ជាមធ្យម។ ក្រោយពីលើករងហើយ គេត្រូវវាយបំបែកដីនោះឱ្យល្អិតហើយគេកៀរ ឱ្យស្មើហាលដីឱ្យស្ងួតរយៈពេល ២ ទៅ ៣ ថ្ងៃ ទើបគេយកកូនដើមខ្ទឹមទៅដាំ ។",
          ],
        },
        cultivation: {
          en: [
            "The scallions are transplanted, but before planting, the soil on the bed must be watered thoroughly. Next, holes are pressed into the soil to a depth of 2cm with a spacing of 15 x 20cm for the row and clump spacing. Then, the scallion seedlings are placed into the holes, covering them up to the base (white part), and rice straw is sprinkled over the top to prevent the surface of the scallions from drying out, which causes the scallions to grow slowly.",
          ],
          km: [
            "គេយកខ្ទឹមទៅដាំ តែមុននឹងដាំ គេស្រោចទឹកឱ្យជោគដីលើថ្នាលបន្ទាប់មកគេចុចឱ្យមានរន្ធជម្រៅ២ ស.មក្នុងចន្លោះ ១៥ ស.ម x ២០ ស.ម ជាចន្លោះជួរ និង គុម្ព បន្ទាប់មកទើបយកកូនដើមខ្ទឹមនោះទៅដាក់ក្នុងរន្ធឱ្យ លិចត្រឹមគល់ហើយព្រាចចំបើងពីលើដើម្បីការពារការស្ងួតមុខនៃដើមខ្ទឹម ធ្វើឱ្យខ្ទឹមដុះ លូតលាស់យឺត ។",
          ],
        },
        irrigation: {
          en: [
            "Consistent moisture is crucial for hybrid corn growth and yield",
            "Water deeply, especially during dry periods and critical growth stages",
            "Ensure good drainage to prevent root rot and other diseases",
            "Drip irrigation can be effective for controlled watering",
            "Monitor soil moisture and adjust watering as needed",
          ],
          km: [
            "សំណើមស្ថិរភាពគឺមានសារៈសំខាន់ណាស់ សម្រាប់ការលូតលាស់ និងទិន្នផលនៃពោតកូនកាត់",
            "ស្រោចទឹកឱ្យជ្រៅ ជាពិសេសអំឡុងពេលមានគ្រោះរាំងស្ងួត និងដំណាក់កាលលូតលាស់សំខាន់ៗ",
            "ធានាការបង្ហូរទឹកល្អ ដើម្បីការពារជំងឺរោងឫស និងជំងឺផ្សេងៗ",
            "ប្រព័ន្ធស្រោចទឹកតាមដំណក់ អាចមានប្រសិទ្ធភាពសម្រាប់ការស្រោចទឹកដោយមានការគ្រប់គ្រង",
            "តាមដានសំណើមដី និងកែតម្រូវការស្រោចទឹកតាមតម្រូវការ",
          ],
        },
      },
    ],
  },
};

// Make products available globally
window.products = products;