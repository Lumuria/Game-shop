import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';

// بيانات الألعاب لجميع المنصات
const gamesData = [
  // ألعاب PlayStation 5
  {
    id: 'ps5-1',
    name: 'Spider-Man: Miles Morales',
    nameAr: 'سبايدر مان: مايلز موراليس',
    price: 49.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Experience the rise of Miles Morales as the new hero masters incredible powers',
    descriptionAr: 'اختبر صعود مايلز موراليس كبطل جديد يتقن قوى لا تصدق',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: 'ps5-2',
    name: 'Demon\'s Souls',
    nameAr: 'أرواح الشياطين',
    price: 69.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Venture to the northern kingdom of Boletaria',
    descriptionAr: 'انطلق إلى مملكة بوليتاريا الشمالية',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'ps5-3',
    name: 'Ratchet & Clank: Rift Apart',
    nameAr: 'راتشيت وكلانك: ريفت أبارت',
    price: 59.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Go dimension-hopping with Ratchet and Clank',
    descriptionAr: 'انطلق في رحلة عبر الأبعاد مع راتشيت وكلانك',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 'ps5-4',
    name: 'Returnal',
    nameAr: 'ريتورنال',
    price: 69.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Break the cycle of chaos on an alien planet',
    descriptionAr: 'اكسر دورة الفوضى على كوكب غريب',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'ps5-5',
    name: 'Horizon Forbidden West',
    nameAr: 'هورايزن فوربيدن ويست',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Join Aloy as she braves the Forbidden West',
    descriptionAr: 'انضم إلى ألوي وهي تواجه الغرب المحرم',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 278
  },
  {
    id: 'ps5-6',
    name: 'God of War Ragnarök',
    nameAr: 'إله الحرب راجناروك',
    price: 69.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Embark on an epic and heartfelt journey',
    descriptionAr: 'انطلق في رحلة ملحمية ومؤثرة',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 445
  },
  {
    id: 'ps5-7',
    name: 'Gran Turismo 7',
    nameAr: 'جران توريزمو 7',
    price: 69.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'The ultimate racing experience',
    descriptionAr: 'تجربة السباق المثلى',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 198
  },
  {
    id: 'ps5-8',
    name: 'The Last of Us Part I',
    nameAr: 'ذا لاست أوف أس الجزء الأول',
    price: 69.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Experience the emotional storytelling',
    descriptionAr: 'اختبر السرد العاطفي',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 367
  },
  {
    id: 'ps5-9',
    name: 'Ghost of Tsushima Director\'s Cut',
    nameAr: 'شبح تسوشيما نسخة المخرج',
    price: 69.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Forge a new path and wage an unconventional war',
    descriptionAr: 'اشق طريقاً جديداً وخض حرباً غير تقليدية',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 289
  },
  {
    id: 'ps5-10',
    name: 'Resident Evil 4',
    nameAr: 'ريزيدنت إيفل 4',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
    category: 'ps5',
    categoryAr: 'بلايستيشن 5',
    description: 'Survival is just the beginning',
    descriptionAr: 'البقاء هو مجرد البداية',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 234
  },

  // ألعاب PlayStation 4
  {
    id: 'ps4-1',
    name: 'The Last of Us Part II',
    nameAr: 'ذا لاست أوف أس الجزء الثاني',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'Five years after their dangerous journey',
    descriptionAr: 'بعد خمس سنوات من رحلتهما الخطيرة',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 456
  },
  {
    id: 'ps4-2',
    name: 'God of War',
    nameAr: 'إله الحرب',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'His vengeance against the Gods of Olympus',
    descriptionAr: 'انتقامه من آلهة الأوليمب',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 678
  },
  {
    id: 'ps4-3',
    name: 'Spider-Man',
    nameAr: 'سبايدر مان',
    price: 29.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'Be Spider-Man in an original adventure',
    descriptionAr: 'كن سبايدر مان في مغامرة أصلية',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 534
  },
  {
    id: 'ps4-4',
    name: 'Horizon Zero Dawn',
    nameAr: 'هورايزن زيرو داون',
    price: 19.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'Experience Aloy\'s legendary quest',
    descriptionAr: 'اختبر مهمة ألوي الأسطورية',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 445
  },
  {
    id: 'ps4-5',
    name: 'Bloodborne',
    nameAr: 'بلودبورن',
    price: 19.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'Hunt your nightmares',
    descriptionAr: 'اصطد كوابيسك',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 298
  },
  {
    id: 'ps4-6',
    name: 'Uncharted 4: A Thief\'s End',
    nameAr: 'أنشارتد 4: نهاية اللص',
    price: 19.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'Nathan Drake\'s greatest adventure',
    descriptionAr: 'أعظم مغامرات ناثان دريك',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 567
  },
  {
    id: 'ps4-7',
    name: 'Ghost of Tsushima',
    nameAr: 'شبح تسوشيما',
    price: 39.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'Forge a new path and wage war',
    descriptionAr: 'اشق طريقاً جديداً وخض الحرب',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 389
  },
  {
    id: 'ps4-8',
    name: 'Red Dead Redemption 2',
    nameAr: 'ريد ديد ريدمبشن 2',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'America, 1899. The end of the wild west era',
    descriptionAr: 'أمريكا، 1899. نهاية عصر الغرب المتوحش',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 678
  },
  {
    id: 'ps4-9',
    name: 'Death Stranding',
    nameAr: 'ديث ستراندينغ',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'From legendary game creator Hideo Kojima',
    descriptionAr: 'من صانع الألعاب الأسطوري هيديو كوجيما',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 234
  },
  {
    id: 'ps4-10',
    name: 'Marvel\'s Avengers',
    nameAr: 'مارفل أفنجرز',
    price: 19.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    category: 'ps4',
    categoryAr: 'بلايستيشن 4',
    description: 'Assemble into a team of up to four players',
    descriptionAr: 'اجتمع في فريق من أربعة لاعبين',
    inStock: true,
    isNew: false,
    rating: 4.2,
    reviews: 189
  },

  // ألعاب Xbox Series X/S
  {
    id: 'xbox-s-1',
    name: 'Halo Infinite',
    nameAr: 'هالو إنفينيت',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'When all hope is lost and humanity\'s fate hangs in the balance',
    descriptionAr: 'عندما يضيع كل أمل ويتعلق مصير البشرية في الميزان',
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: 345
  },
  {
    id: 'xbox-s-2',
    name: 'Forza Horizon 5',
    nameAr: 'فورزا هورايزن 5',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'Your greatest Horizon Adventure awaits',
    descriptionAr: 'أعظم مغامرات هورايزن في انتظارك',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 'xbox-s-3',
    name: 'Microsoft Flight Simulator',
    nameAr: 'محاكي الطيران مايكروسوفت',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'Take to the skies and explore the world',
    descriptionAr: 'انطلق إلى السماء واستكشف العالم',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 'xbox-s-4',
    name: 'Gears 5',
    nameAr: 'جيرز 5',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'From one of gaming\'s most acclaimed sagas',
    descriptionAr: 'من أكثر الملاحم إشادة في الألعاب',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 298
  },
  {
    id: 'xbox-s-5',
    name: 'Ori and the Will of the Wisps',
    nameAr: 'أوري وإرادة الحكماء',
    price: 29.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'Embark on an all-new adventure',
    descriptionAr: 'انطلق في مغامرة جديدة كلياً',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 189
  },
  {
    id: 'xbox-s-6',
    name: 'Sea of Thieves',
    nameAr: 'بحر اللصوص',
    price: 39.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'A shared world adventure game',
    descriptionAr: 'لعبة مغامرات في عالم مشترك',
    inStock: true,
    isNew: false,
    rating: 4.4,
    reviews: 267
  },
  {
    id: 'xbox-s-7',
    name: 'Age of Empires IV',
    nameAr: 'عصر الإمبراطوريات 4',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'One of the most beloved strategy games',
    descriptionAr: 'واحدة من أحب ألعاب الاستراتيجية',
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: 178
  },
  {
    id: 'xbox-s-8',
    name: 'Psychonauts 2',
    nameAr: 'سايكونوتس 2',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'Razputin Aquato realizes his dream',
    descriptionAr: 'رازبوتين أكواتو يحقق حلمه',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 'xbox-s-9',
    name: 'The Medium',
    nameAr: 'الوسيط',
    price: 49.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'Discover a dark mystery only a medium can solve',
    descriptionAr: 'اكتشف لغزاً مظلماً لا يستطيع حله سوى وسيط',
    inStock: true,
    isNew: false,
    rating: 4.3,
    reviews: 123
  },
  {
    id: 'xbox-s-10',
    name: 'Deathloop',
    nameAr: 'ديث لوب',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'xbox-s',
    categoryAr: 'إكس بوكس سيريز',
    description: 'Break the timeloop or die trying',
    descriptionAr: 'اكسر حلقة الزمن أو مت وأنت تحاول',
    inStock: true,
    isNew: true,
    rating: 4.6,
    reviews: 234
  },

  // ألعاب Xbox One
  {
    id: 'xbox-one-1',
    name: 'Red Dead Redemption 2',
    nameAr: 'ريد ديد ريدمبشن 2',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'America, 1899. The end of the wild west era',
    descriptionAr: 'أمريكا، 1899. نهاية عصر الغرب المتوحش',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 567
  },
  {
    id: 'xbox-one-2',
    name: 'Gears of War 4',
    nameAr: 'جيرز أوف وار 4',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'A new saga begins for one of the most acclaimed video game franchises',
    descriptionAr: 'ملحمة جديدة تبدأ لواحدة من أكثر سلاسل الألعاب إشادة',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 345
  },
  {
    id: 'xbox-one-3',
    name: 'Forza Horizon 4',
    nameAr: 'فورزا هورايزن 4',
    price: 29.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'Dynamic seasons change everything',
    descriptionAr: 'الفصول الديناميكية تغير كل شيء',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 'xbox-one-4',
    name: 'Halo 5: Guardians',
    nameAr: 'هالو 5: الحراس',
    price: 19.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'Peace has been devastated as colony worlds are unexpectedly attacked',
    descriptionAr: 'دُمر السلام حيث تعرضت عوالم المستعمرات لهجمات غير متوقعة',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 298
  },
  {
    id: 'xbox-one-5',
    name: 'Sunset Overdrive',
    nameAr: 'سانسيت أوفردرايف',
    price: 19.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'An open-world playground bursting with insanity',
    descriptionAr: 'ملعب عالم مفتوح مليء بالجنون',
    inStock: true,
    isNew: false,
    rating: 4.4,
    reviews: 189
  },
  {
    id: 'xbox-one-6',
    name: 'Quantum Break',
    nameAr: 'كوانتم بريك',
    price: 24.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'In the aftermath of a split second of destruction',
    descriptionAr: 'في أعقاب جزء من الثانية من الدمار',
    inStock: true,
    isNew: false,
    rating: 4.3,
    reviews: 167
  },
  {
    id: 'xbox-one-7',
    name: 'State of Decay 2',
    nameAr: 'ستيت أوف ديكاي 2',
    price: 29.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'The dead have risen and civilization has fallen',
    descriptionAr: 'نهض الموتى وسقطت الحضارة',
    inStock: true,
    isNew: false,
    rating: 4.2,
    reviews: 234
  },
  {
    id: 'xbox-one-8',
    name: 'Cuphead',
    nameAr: 'كابهيد',
    price: 19.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'A classic run and gun action game',
    descriptionAr: 'لعبة أكشن كلاسيكية من نوع الجري والرماية',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 345
  },
  {
    id: 'xbox-one-9',
    name: 'Ori and the Blind Forest',
    nameAr: 'أوري والغابة العمياء',
    price: 19.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'A visually stunning action-platformer',
    descriptionAr: 'لعبة أكشن منصات مذهلة بصرياً',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 278
  },
  {
    id: 'xbox-one-10',
    name: 'Titanfall 2',
    nameAr: 'تايتانفول 2',
    price: 19.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'xbox-one',
    categoryAr: 'إكس بوكس ون',
    description: 'Respawn Entertainment gives you the most advanced titan technology',
    descriptionAr: 'ريسبون إنترتينمنت تمنحك أحدث تقنيات التايتان',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 456
  },

  // ألعاب PC
  {
    id: 'pc-1',
    name: 'Cyberpunk 2077',
    nameAr: 'سايبربانك 2077',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'An open-world, action-adventure story set in Night City',
    descriptionAr: 'قصة مغامرات أكشن في عالم مفتوح تدور في مدينة الليل',
    inStock: true,
    isNew: true,
    rating: 4.5,
    reviews: 567
  },
  {
    id: 'pc-2',
    name: 'The Witcher 3: Wild Hunt',
    nameAr: 'الساحر 3: الصيد البري',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'You are Geralt of Rivia, mercenary monster slayer',
    descriptionAr: 'أنت جيرالت من ريفيا، قاتل الوحوش المرتزق',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 789
  },
  {
    id: 'pc-3',
    name: 'Half-Life: Alyx',
    nameAr: 'هاف لايف: أليكس',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'Half-Life: Alyx is Valve\'s VR return to the Half-Life series',
    descriptionAr: 'هاف لايف: أليكس هو عودة فالف للواقع الافتراضي لسلسلة هاف لايف',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 345
  },
  {
    id: 'pc-4',
    name: 'Elden Ring',
    nameAr: 'إلدن رينغ',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'Rise, Tarnished, and be guided by grace',
    descriptionAr: 'انهض أيها الملطخ، ودع النعمة ترشدك',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 678
  },
  {
    id: 'pc-5',
    name: 'Valorant',
    nameAr: 'فالورانت',
    price: 0,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'A 5v5 character-based tactical FPS',
    descriptionAr: 'لعبة إطلاق نار تكتيكية 5 ضد 5 قائمة على الشخصيات',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 456
  },
  {
    id: 'pc-6',
    name: 'Counter-Strike: Global Offensive',
    nameAr: 'كاونتر سترايك: الهجوم العالمي',
    price: 0,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'The world\'s #1 competitive FPS',
    descriptionAr: 'لعبة إطلاق النار التنافسية رقم 1 في العالم',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 890
  },
  {
    id: 'pc-7',
    name: 'Minecraft',
    nameAr: 'ماينكرافت',
    price: 26.95,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'Explore infinite worlds and build everything',
    descriptionAr: 'استكشف عوالم لا نهائية وابن كل شيء',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 1234
  },
  {
    id: 'pc-8',
    name: 'Grand Theft Auto V',
    nameAr: 'جراند ثفت أوتو 5',
    price: 29.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath',
    descriptionAr: 'عندما يجتمع محتال شوارع شاب ولص بنوك متقاعد ومختل عقلياً مرعب',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 567
  },
  {
    id: 'pc-9',
    name: 'Among Us',
    nameAr: 'أمونغ أس',
    price: 4.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'Play online or over local WiFi with 4-15 players',
    descriptionAr: 'العب عبر الإنترنت أو الواي فاي المحلي مع 4-15 لاعباً',
    inStock: true,
    isNew: false,
    rating: 4.4,
    reviews: 345
  },
  {
    id: 'pc-10',
    name: 'Fall Guys',
    nameAr: 'فول غايز',
    price: 0,
    originalPrice: 19.99,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
    category: 'pc',
    categoryAr: 'ألعاب الكمبيوتر',
    description: 'Fall Guys is a massively multiplayer party royale game',
    descriptionAr: 'فول غايز هي لعبة حفلة باتل رويال متعددة اللاعبين',
    inStock: true,
    isNew: false,
    rating: 4.3,
    reviews: 234
  }
];

// فئات الألعاب
const categories = [
  { id: 'all', name: 'جميع الألعاب', nameEn: 'All Games' },
  { id: 'ps5', name: 'بلايستيشن 5', nameEn: 'PlayStation 5' },
  { id: 'ps4', name: 'بلايستيشن 4', nameEn: 'PlayStation 4' },
  { id: 'xbox-s', name: 'إكس بوكس سيريز', nameEn: 'Xbox Series X/S' },
  { id: 'xbox-one', name: 'إكس بوكس ون', nameEn: 'Xbox One' },
  { id: 'pc', name: 'ألعاب الكمبيوتر', nameEn: 'PC Games' }
];

const GamesContainer = styled.div`
  min-height: 100vh;
  background: var(--background-color);
  color: var(--text-primary);
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const GamesPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // فلترة الألعاب حسب الفئة المختارة
  const filteredGames = selectedCategory === 'all' 
    ? gamesData 
    : gamesData.filter(game => game.category === selectedCategory);

  // دالة إضافة اللعبة للسلة
  const handleAddToCart = (game: any) => {
    addToCart({
      id: game.id,
      name: language === 'ar' ? game.nameAr : game.name,
      price: game.price,
      discountPrice: game.originalPrice || undefined,
      image: game.image,
      category: language === 'ar' ? game.categoryAr : game.category,
      description: language === 'ar' ? game.descriptionAr : game.description,
      inStock: game.inStock,
      isNew: game.isNew,
      rating: game.rating,
      reviews: []
    });
  };

  return (
    <GamesContainer>
      <Container>
        <Header>
          <Title>
            {language === 'ar' ? 'مكتبة الألعاب' : 'Games Library'}
          </Title>
          <Subtitle>
            {language === 'ar' 
              ? 'اكتشف مجموعة واسعة من الألعاب لجميع المنصات والأذواق'
              : 'Discover a wide range of games for all platforms and tastes'
            }
          </Subtitle>
        </Header>

        <FilterSection>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {language === 'ar' ? category.name : category.nameEn}
            </FilterButton>
          ))}
        </FilterSection>

        {filteredGames.length > 0 ? (
          <ProductsGrid>
            {filteredGames.map(game => (
              <ProductCard
                key={game.id}
                product={{
                  id: game.id,
                  name: language === 'ar' ? game.nameAr : game.name,
                  price: game.price,
                  discountPrice: game.originalPrice || undefined,
                  image: game.image,
                  category: language === 'ar' ? game.categoryAr : game.category,
                  description: language === 'ar' ? game.descriptionAr : game.description,
                  inStock: game.inStock,
                  isNew: game.isNew,
                  rating: game.rating,
                  reviews: []
                }}
              />
            ))}
          </ProductsGrid>
        ) : (
          <NoProducts>
            {language === 'ar' 
              ? 'لا توجد ألعاب في هذه الفئة حالياً'
              : 'No games available in this category'
            }
          </NoProducts>
        )}
      </Container>
    </GamesContainer>
  );
};

export default GamesPage;
