export type BrandCategory = 'retail' | 'entertainment' | 'fnb' | 'creative' | 'lifestyle';

export interface Brand {
  id: string;
  name: string;
  slogan?: string;
  year: number;
  category: BrandCategory;
  accent: string;
  description_en: string;
  description_ar: string;
  slogan_ar?: string;
  locations?: string[];
  logo?: string; // path under /public
}

export const brands: Brand[] = [
  {
    id: 'kiddyzone',
    name: 'Kiddy Zone',
    slogan: 'Gift from Another Planet',
    slogan_ar: 'هدية من كوكب آخر',
    year: 2006,
    category: 'retail',
    accent: '#E63946',
    description_en: 'The largest toy retail chain in Qatar, established in 2006, with 14 branches and a growing presence across the UAE and Oman.',
    description_ar: 'أكبر سلسلة لبيع الألعاب بالتجزئة في قطر، تأسست عام 2006، وتضم 14 فرعًا مع توسع متزايد في الإمارات وعُمان.',
    locations: ['Qatar', 'UAE', 'Oman'],
    logo: '/brands/KZ-Logo.svg',
  },
  {
    id: 'spacetoys',
    name: 'Spacetoys',
    year: 2003,
    category: 'retail',
    accent: '#3A86FF',
    description_en: 'Established in 2003, a recognized toy retailer and collector destination, known for toys, TCG collections, and its flagship branch at Doha City Centre.',
    description_ar: 'تأسست عام 2003، وجهة بارزة للألعاب والمقتنيات، ومعروفة بالألعاب ومجموعات TCG وفرعها الرئيسي في سيتي سنتر الدوحة.',
    locations: ['Qatar'],
    logo: '/brands/Space Toys Logo.svg',
  },
  {
    id: 'rondvill',
    name: 'Rondvill',
    slogan: 'Gifted Gifts',
    slogan_ar: 'هدايا موهوبة',
    year: 2023,
    category: 'retail',
    accent: '#9D4EDD',
    description_en: 'A luxury toy retail experience launched in 2023 at Katara’s Gift Building, designed for VIP clientele and premium gifting.',
    description_ar: 'تجربة فاخرة لبيع الألعاب بالتجزئة، انطلقت عام 2023 في مبنى الهدايا بكتارا، مصممة لعملاء VIP وتجربة إهداء راقية.',
    locations: ['Qatar'],
    logo: '/brands/Rondvill-Logo.svg',
  },
  {
    id: 'candyvill',
    name: 'Candyvill',
    slogan: 'Sweetness You Can’t Resist',
    slogan_ar: 'حلاوة لا تُقاوم',
    year: 2023,
    category: 'fnb',
    accent: '#FF6B9D',
    description_en: 'A bright candy destination offering loose candies, chocolates, trending sweets, toy candies, ice cream, and slushies.',
    description_ar: 'وجهة حلويات نابضة بالألوان تقدم الحلويات السائبة والشوكولاتة وحلويات الموضة وحلويات الألعاب والآيس كريم والسلاش.',
    locations: ['Qatar'],
    logo: '/brands/CandyVill-Logo.svg',
  },
  {
    id: 'photobrick',
    name: 'PhotoBrick',
    slogan: 'Build Your Memories',
    slogan_ar: 'ابنِ ذكرياتك',
    year: 2018,
    category: 'creative',
    accent: '#FFB703',
    description_en: 'A creative personalized brick-based photo concept with branches in Australia, the UAE, USA, and Qatar.',
    description_ar: 'مفهوم إبداعي لتحويل الصور إلى لوحات من المكعبات الشخصية، مع فروع في أستراليا والإمارات وأمريكا وقطر.',
    locations: ['Qatar', 'UAE', 'USA', 'Australia'],
    logo: '/brands/Photobrick-Logo.svg',
  },
  {
    id: 'trampo',
    name: 'Trampo Extreme',
    slogan: 'A Family Destination Like No Other',
    slogan_ar: 'وجهة عائلية لا مثيل لها',
    year: 2015,
    category: 'entertainment',
    accent: '#06A77D',
    description_en: 'Active entertainment parks with trampoline arenas, Clip ’n Climb, dodgeball, foam pits, Sky Trail, and adventure attractions across the GCC.',
    description_ar: 'مدن ترفيه نشطة مع ساحات ترامبولين، تسلق Clip ’n Climb، كرة الإعفاء، حفر الإسفنج، Sky Trail، ومغامرات في أنحاء الخليج.',
    locations: ['Qatar', 'UAE', 'Oman', 'Kuwait'],
    logo: '/brands/Trampo-Logo.svg',
  },
  {
    id: 'westfun',
    name: 'West Fun',
    year: 2025,
    category: 'entertainment',
    accent: '#F77F00',
    description_en: 'Launched in 2025 at West Walk Qatar, combining VR games, inflatable play zones, playgrounds, and arcades for families, children, and teens.',
    description_ar: 'انطلقت عام 2025 في ويست ووك قطر، تجمع ألعاب الواقع الافتراضي ومناطق اللعب المنفوخة وألعاب الأركيد للعائلات والأطفال والمراهقين.',
    locations: ['Qatar'],
    logo: '/brands/West Fun-Logo.svg',
  },
  {
    id: 'ecolandia',
    name: 'Ecolandia',
    slogan: 'Play, Explore, and Grow',
    slogan_ar: 'العب، استكشف، وانمُ',
    year: 2025,
    category: 'entertainment',
    accent: '#52B788',
    description_en: 'A safe entertainment and learning space for children up to six years old, with sliders, ball pools, trampolines, and themed educational play areas.',
    description_ar: 'مساحة آمنة للترفيه والتعلم للأطفال حتى سن السادسة، مع زحاليق وبرك كرات وترامبولين ومناطق لعب تعليمية ذات طابع خاص.',
    locations: ['Qatar'],
    logo: '/brands/Ecolandia-Logo.svg',
  },
  {
    id: 'lartducafe',
    name: 'L’Art du Café',
    slogan: 'Change the World, Start with a Coffee',
    slogan_ar: 'غيّر العالم، ابدأ بقهوة',
    year: 2023,
    category: 'fnb',
    accent: '#7F5539',
    description_en: 'A refined café experience in Katara, offering speciality coffees, desserts, pastries, gourmet food, and a luxurious atmosphere.',
    description_ar: 'تجربة مقهى راقية في كتارا، تقدم القهوة المختصة والحلويات والمعجنات والأطباق الفاخرة في أجواء راقية.',
    locations: ['Qatar'],
    logo: '/brands/Lart du cafe-Logo.svg',
  },
];

export const categories: BrandCategory[] = ['retail', 'entertainment', 'fnb', 'creative', 'lifestyle'];
