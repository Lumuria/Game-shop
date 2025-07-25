import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define translations as constants
const enTranslation = {
  "app": {
    "name": "GameTech Store",
    "tagline": "Your Ultimate Gaming & PC Building Destination"
  },
  "nav": {
    "home": "Home",
    "store": "Store",
    "pcBuilder": "PC Builder",
    "account": "Account",
    "cart": "Cart",
    "search": "Search",
    "language": "Language",
    "theme": "Theme"
  },
  "categories": {
    "games": "Games",
    "accessories": "Accessories",
    "components": "Components",
    "peripherals": "Peripherals"
  },
  "pcBuilder": {
    "title": "Build Your PC",
    "subtitle": "Select components and check compatibility",
    "processor": "Processor",
    "motherboard": "Motherboard",
    "memory": "Memory",
    "graphics": "Graphics Card",
    "storage": "Storage",
    "powerSupply": "Power Supply",
    "case": "Case",
    "cooling": "Cooling",
    "compatibility": "Compatibility",
    "compatibilityScore": "Compatibility Score",
    "powerConsumption": "Power Consumption",
    "performanceEstimate": "Performance Estimate",
    "saveConfig": "Save Configuration",
    "shareConfig": "Share Configuration",
    "addToCart": "Add All to Cart"
  },
  "product": {
    "addToCart": "Add to Cart",
    "addToWishlist": "Add to Wishlist",
    "compare": "Compare",
    "specifications": "Specifications",
    "reviews": "Reviews",
    "relatedProducts": "Related Products",
    "inStock": "In Stock",
    "outOfStock": "Out of Stock",
    "quantity": "Quantity",
    "new": "NEW",
    "sale": "SALE"
  },
  "cart": {
    "title": "Shopping Cart",
    "empty": "Your cart is empty",
    "continueShopping": "Continue Shopping",
    "checkout": "Checkout",
    "total": "Total",
    "subtotal": "Subtotal",
    "tax": "Tax",
    "shipping": "Shipping",
    "discount": "Discount",
    "promoCode": "Promo Code",
    "apply": "Apply",
    "addedToCart": "added to cart"
  },
  "account": {
    "login": "Login",
    "register": "Register",
    "profile": "Profile",
    "orders": "Orders",
    "wishlist": "Wishlist",
    "savedConfigs": "Saved Configurations",
    "notifications": "Notifications",
    "logout": "Logout"
  },
  "footer": {
    "about": "About Us",
    "contact": "Contact",
    "faq": "FAQ",
    "support": "Support",
    "terms": "Terms & Conditions",
    "privacy": "Privacy Policy",
    "copyright": "© 2025 GameTech Store. All rights reserved."
  },
  "theme": {
    "light": "Light Mode",
    "dark": "Dark Mode"
  },
  "language": {
    "en": "English",
    "ar": "العربية"
  },
  "search": {
    "placeholder": "Search products...",
    "noResults": "No products found"
  },
  "home": {
    "browseCategories": "Browse Categories",
    "featuredProducts": "Featured Products",
    "bestSellers": "Best Sellers",
    "pcBuilderPromo": "Create your perfect gaming setup with our PC Builder tool. Choose compatible components and get performance estimates.",
    "startBuilding": "Start Building"
  }
};

const arTranslation = {
  "app": {
    "name": "متجر جيم تك",
    "tagline": "وجهتك المثالية للألعاب وبناء الحواسيب"
  },
  "nav": {
    "home": "الرئيسية",
    "store": "المتجر",
    "pcBuilder": "ابني حاسوبي",
    "account": "الحساب",
    "cart": "سلة التسوق",
    "search": "بحث",
    "language": "اللغة",
    "theme": "المظهر"
  },
  "categories": {
    "games": "الألعاب",
    "accessories": "الملحقات",
    "components": "القطع",
    "peripherals": "الإكسسوارات"
  },
  "pcBuilder": {
    "title": "ابني حاسوبك",
    "subtitle": "اختر المكونات وتحقق من التوافق",
    "processor": "المعالج",
    "motherboard": "اللوحة الأم",
    "memory": "الذاكرة",
    "graphics": "بطاقة الرسوميات",
    "storage": "التخزين",
    "powerSupply": "مزود الطاقة",
    "case": "الهيكل",
    "cooling": "التبريد",
    "compatibility": "التوافق",
    "compatibilityScore": "نسبة التوافق",
    "powerConsumption": "استهلاك الطاقة",
    "performanceEstimate": "تقدير الأداء",
    "saveConfig": "حفظ التكوين",
    "shareConfig": "مشاركة التكوين",
    "addToCart": "إضافة الكل إلى السلة"
  },
  "product": {
    "addToCart": "إضافة إلى السلة",
    "addToWishlist": "إضافة إلى قائمة الرغبات",
    "compare": "مقارنة",
    "specifications": "المواصفات",
    "reviews": "التقييمات",
    "relatedProducts": "منتجات ذات صلة",
    "inStock": "متوفر",
    "outOfStock": "غير متوفر",
    "quantity": "الكمية",
    "new": "جديد",
    "sale": "تخفيض"
  },
  "cart": {
    "title": "سلة التسوق",
    "empty": "سلة التسوق فارغة",
    "continueShopping": "متابعة التسوق",
    "checkout": "إتمام الشراء",
    "total": "المجموع",
    "subtotal": "المجموع الفرعي",
    "tax": "الضريبة",
    "shipping": "الشحن",
    "discount": "الخصم",
    "promoCode": "رمز الخصم",
    "apply": "تطبيق",
    "addedToCart": "تم إضافته إلى السلة"
  },
  "account": {
    "login": "تسجيل الدخول",
    "register": "إنشاء حساب",
    "profile": "الملف الشخصي",
    "orders": "الطلبات",
    "wishlist": "قائمة الرغبات",
    "savedConfigs": "التكوينات المحفوظة",
    "notifications": "الإشعارات",
    "logout": "تسجيل الخروج"
  },
  "footer": {
    "about": "من نحن",
    "contact": "اتصل بنا",
    "faq": "الأسئلة الشائعة",
    "support": "الدعم",
    "terms": "الشروط والأحكام",
    "privacy": "سياسة الخصوصية",
    "copyright": "© 2025 متجر جيم تك. جميع الحقوق محفوظة."
  },
  "theme": {
    "light": "الوضع الفاتح",
    "dark": "الوضع المظلم"
  },
  "language": {
    "en": "English",
    "ar": "العربية"
  },
  "search": {
    "placeholder": "البحث عن المنتجات...",
    "noResults": "لم يتم العثور على منتجات"
  },
  "home": {
    "browseCategories": "تصفح الفئات",
    "featuredProducts": "المنتجات المميزة",
    "bestSellers": "الأكثر مبيعاً",
    "pcBuilderPromo": "أنشئ إعداد الألعاب المثالي باستخدام أداة بناء الحاسوب. اختر المكونات المتوافقة واحصل على تقديرات الأداء.",
    "startBuilding": "ابدأ البناء"
  }
};

const resources = {
  en: {
    translation: enTranslation
  },
  ar: {
    translation: arTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

