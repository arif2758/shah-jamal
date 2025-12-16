export const DATA = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      business: "Businesses",
      social: "Social Work",
      contact: "Contact",
    },
    hero: {
      greeting: "Welcome to my Official Portfolio",
      name: "Md. Shah Jamal Basar",
      title: "Entrepreneur | Philanthropist",
      desc: "A dedicated business leader from a prestigious Muslim family in Bikrampur. Establishing trust through honesty and serving society with devotion.",
      cta: "View Portfolio",
    },
    about: {
      title: "Biography",
      born: "Born on March 17, 1979, in Vikrampur, Munshiganj.",
      family:
        "Youngest of six brothers. Father: Late Dalil Uddin Bachar, Mother: Achia Begum. Spouse: Chaiti Akter Shikha.",
      children: "Proud father of four daughters.",
      values:
        "A warm-hearted philanthropist with strong moral convictions. Recognized as an advocate for justice and equity. Guided by unwavering principles of honesty and integrity.",

      travel:
        "Frequent traveler to Mecca and Medina for religious observances. Experienced in international business travel across multiple Asian destinations.",
    },
    business: {
      title: "Business Portfolio",
      roles: {
        proprietor: "Proprietor",
        chairman: "Chairman",
        partner: "Partner",
        dealer: "Authorized Dealer",
        local: "Local Agent",
      },
    },
    social: {
      title: "Social Contribution & Affiliations",
    },
    contact: {
      title: "Contact Me",
      subtitle:
        "Feel free to reach out for business collaborations or social inquiries.",
      address: "Dhaka, Bangladesh",
      email: "dhakaoilsupply@gmail.com",
      phone: "+880 1712279928",
      phoneAlt: "+880 1711964668",
      cta: "Send Message",
    },
    socialLinks: {
      facebook: "https://www.facebook.com/shah.jamal.1690", // Replace with actual link
      whatsapp: "https://wa.me/8801712279928",
      imo: "tel:+8801712279928", // Imo usually works by number, or specific link if available
      telegram: "https://t.me/8801712279928",
      x: "https://x.com/shahjamal",
    },
  },
  bn: {
    nav: {
      home: "হোম",
      about: "পরিচিতি",
      business: "ব্যবসাসমূহ",
      social: "সামাজিক কর্মকাণ্ড",
      contact: "যোগাযোগ",
    },
    hero: {
      greeting: "অফিশিয়াল পোর্টফোলিওতে স্বাগতম",
      name: "মোঃ শাহ জামাল বাছার",
      title: "বিশিষ্ট ব্যবসায়ী | সমাজসেবক",
      desc: "বিক্রমপুরের সম্ভ্রান্ত মুসলিম পরিবারে জন্ম নেওয়া একজন সফল উদ্যোক্তা। সততাই আমার চলার পথের প্রধান শক্তি।",
      cta: "পোর্টফোলিও দেখুন",
    },
    about: {
      title: "ব্যক্তিগত পরিচিতি",
      born: "১৭/০৩/১৯৭৯ ইং সালে বিক্রমপুর, মুন্সীগঞ্জে জন্মগ্রহণ করেন।",
      family:
        "পিতা মৃত দলিল উদ্দিন বাছার ও মাতা আছিয়া বেগম। ছয় ভাইয়ের মধ্যে সবার ছোট। সহধর্মিণী: চৈতী আক্তার শিখা।",
      children: "চার কন্যা সন্তানের জনক।",
      values:
        "একজন সদাহাস্যোজ্জ্বল, পরোপকারী এবং ধর্মপ্রাণ মানুষ। অন্যায়ের বিরুদ্ধে প্রতিবাদী কণ্ঠস্বর হিসেবে সমাজে পরিচিত। সততাই যার জীবনের মূল চালিকাশক্তি।",
      travel:
        "পবিত্র ওমরাহ পালনের উদ্দেশ্যে একাধিকবার মক্কা ও মদিনা সফর করাসহ ব্যবসার প্রয়োজনে ও ভ্রমণের উদ্দেশ্যে এশিয়ার বিভিন্ন দেশ ভ্রমণ করা হয়েছে।",
    },
    business: {
      title: "ব্যবসায়িক প্রতিষ্ঠানসমূহ",
      roles: {
        proprietor: "স্বত্বাধিকারী",
        chairman: "চেয়ারম্যান",
        partner: "অংশীদার",
        dealer: "ডিলারশিপ",
        local: "লোকাল এজেন্ট",
      },
    },
    social: {
      title: "সামাজিক ও সাংগঠনিক সম্পৃক্ততা",
    },
    contact: {
      title: "যোগাযোগ করুন",
      subtitle: "ব্যবসায়িক সহযোগিতা বা সামাজিক প্রয়োজনে যোগাযোগ করতে পারেন।",
      address: "ঢাকা, বাংলাদেশ",
      email: "dhakaoilsupply@gmail.com",
      phone: "+৮৮০ ১৭১২২৭৯৯২৮",
      phoneAlt: "+৮৮০ ১৭১১৯৬৪৬৬৮",
      cta: "বার্তা পাঠান",
    },
    socialLinks: {
      facebook: "https://facebook.com", // Replace
      whatsapp: "https://wa.me/8801712279928",
      imo: "tel:+8801712279928",
      telegram: "https://t.me/shahjamal", // Placeholder
      x: "https://x.com/shahjamal", // Placeholder
    },
  },

  // ✅ Bilingual Data Structure
  portfolio: [
    {
      name: { en: "Dhaka Marine Ltd.", bn: "ঢাকা মেরিন লিমিটেড" },
      role: "Chairman",
      type: "Marine",
      icon: "Anchor",
    },
    {
      name: { en: "Dhaka Marine Dock Yard", bn: "ঢাকা মেরিন ডক ইয়ার্ড" },
      role: "Proprietor",
      type: "Marine",
      icon: "Ship",
    },
    {
      name: { en: "Dhaka Oil Suppliers", bn: "ঢাকা অয়েল সাপ্লায়ার্স" },
      role: "Proprietor",
      type: "Energy",
      icon: "Droplet",
    },
    {
      name: {
        en: "Green Padma Navigation Co.",
        bn: "গ্রীনপদ্মা নেভিগেশন কোম্পানি",
      },
      role: "Proprietor",
      sub: { en: "Protocol Agency", bn: "প্রটোকল এজেন্সি" },
      type: "Marine",
      icon: "Compass",
    },
    {
      name: { en: "Achia Shipping Lines", bn: "আছিয়া শিপিং লাইন্স" },
      role: "Proprietor",
      type: "Marine",
      icon: "ShipWheel",
    },
    {
      name: { en: "Vision Tour & Travels", bn: "ভিশন টুর এন্ড ট্রাভেলস" },
      role: "Proprietor",
      type: "Travel",
      icon: "Plane",
    },
    {
      name: { en: "Click Travel BD", bn: "ক্লিক ট্রাভেল বিডি" },
      role: "Proprietor",
      type: "Travel",
      icon: "Ticket",
    },
    {
      name: { en: "Ruma Enterprise", bn: "রুমা এন্টার প্রাইজ" },
      role: "Partner",
      type: "Default",
      icon: "Briefcase",
    },
    {
      name: { en: "Belayet Navigation", bn: "বেলায়েত নেভিগেশন" },
      role: "Partner",
      type: "Marine",
      icon: "Navigation",
    },
    {
      name: { en: "B.K Convention Hall", bn: "বি.কে কনভেনশন হল" },
      role: "Partner",
      type: "Default",
      icon: "Building",
    },
    {
      name: { en: "B Mart Super Shop", bn: "বি মার্ট সুপার শপ" },
      role: "Partner",
      type: "Retail",
      icon: "ShoppingBasket",
    },
    {
      name: {
        en: "Shark Shipping & Traders",
        bn: "শার্ক শিপিং এন্ড ট্রেডার্স",
      },
      role: "Local Agent",
      type: "Marine",
      icon: "Container",
    },
    {
      name: { en: "Padma Oil", bn: "পদ্মা অয়েল" },
      role: "Dealer",
      type: "Energy",
      icon: "Fuel",
    },
    {
      name: { en: "Meghna Oil", bn: "মেঘনা অয়েল" },
      role: "Dealer",
      type: "Energy",
      icon: "Fuel",
    },
    {
      name: { en: "Apex Shoe Company", bn: "এপেক্স সু কোম্পানি" },
      role: "Dealer",
      type: "Retail",
      icon: "Footprints",
    },
  ],

  // ✅ Bilingual Memberships
  memberships: [
    {
      en: "Bangladesh Cargo Vessel Owners Association",
      bn: "বাংলাদেশ কার্গো ভেসেল ওনার্স এসোশিয়েশন",
    },
    {
      en: "Bangladesh River Transport Owners Association",
      bn: "বাংলাদেশ রিভার ট্রান্সপোর্ট ওনার্স এসোশিয়েশন",
    },
    {
      en: "Bangladesh Protocol Owners Association",
      bn: "বাংলাদেশ প্রটোকল ওনার্স এসোশিয়েশন",
    },
    { en: "Bashundhara River View Club", bn: "বসুন্ধরা রিভার ভিউ ক্লাব" },
    { en: "Friends Forum", bn: "ফ্রেন্ডস ফোরাম" },
  ],

  // ✅ Bilingual Social Work
  socialWork: [
    {
      role: { en: "General Secretary", bn: "সাধারণ সম্পাদক" },
      org: {
        en: "Uttar Balashur Adarsha Koborsthan",
        bn: "উত্তর বালাশুর আদর্শ কবর স্থান",
      },
    },
    {
      role: { en: "Life Donor Member", bn: "আজীবন দাতা সদস্য" },
      org: {
        en: "Uttar Balashur Kashemul Ulum Madrasa",
        bn: "উত্তর বালাশুর কাসেমুল উলুম মাদ্রাসা",
      },
    },
    {
      role: {
        en: "Construction Committee President",
        bn: "নির্মাণ কমিটির সভাপতি",
      },
      org: {
        en: "Uttar Balashur Bachar Bari Jame Masjid",
        bn: "উত্তর বালাশুর বাছার বাড়ী জামে মসজিদ",
      },
    },
    {
      role: { en: "Finance Secretary", bn: "অর্থ বিষয়ক সম্পাদক" },
      org: {
        en: "Agrosor Bikrampur Foundation (Sreenagar Branch)",
        bn: "অগ্রসর বিক্রমপুর ফাউন্ডেশন (শ্রীনগর শাখা)",
      },
    },
    {
      role: { en: "Founder President", bn: "প্রতিষ্ঠাতা সভাপতি" },
      org: {
        en: "Uttam Balashur Football Club",
        bn: "উত্তম বালাশুর ফুটবল ক্লাব",
      },
    },
  ],
};

// data.ts এর ভেতরে বা শেষে যুক্ত করুন
export const STATS_DATA = [
  {
    value: "25+",
    label: { en: "Years Experience", bn: "বছরের অভিজ্ঞতা" },
    icon: "Calendar",
  },
  {
    value: "15+",
    label: { en: "Business Established", bn: "প্রতিষ্ঠিত ব্যবসা" },
    icon: "Building",
  },
  {
    value: "200+",
    label: { en: "Employees", bn: "কর্মসংস্থান সৃষ্টি" },
    icon: "Users",
  },
  {
    value: "17+",
    label: { en: "Social Projects", bn: "সামাজিক প্রকল্প" },
    icon: "Heart",
  },
];
