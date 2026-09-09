export type Bilingual = { en: string; ar: string };

export const navItems = [
  { href: '/yachts', en: 'Yachts', ar: 'اليخوت' },
  { href: '/experiences', en: 'Experiences', ar: 'التجارب' },
  { href: '/destinations', en: 'Destinations', ar: 'الوجهات' },
];

export const yachts = [
  { id: 'safina', name: 'Safina', type: { en: 'Classic motor yacht', ar: 'يخت بمحرك كلاسيكي' }, meta: { en: 'Up to 8 guests · 58 ft', ar: 'حتى ٨ ضيوف · ٥٨ قدماً' }, image: '/images/hero-marina.jpg', copy: { en: 'A quiet, considered way to leave the shore behind.', ar: 'طريقة هادئة ومدروسة لمغادرة الشاطئ.' } },
  { id: 'marea', name: 'Marea', type: { en: 'Mediterranean day yacht', ar: 'يخت نهاري متوسطي' }, meta: { en: 'Up to 10 guests · 65 ft', ar: 'حتى ١٠ ضيوف · ٦٥ قدماً' }, image: '/images/alexandria-coast.jpg', copy: { en: 'Open water, soft linen, and room for a long lunch.', ar: 'مياه مفتوحة وكتان ناعم ومساحة لغداء طويل.' } },
  { id: 'layali', name: 'Layali', type: { en: 'Red Sea cruiser', ar: 'طراد البحر الأحمر' }, meta: { en: 'Up to 12 guests · 72 ft', ar: 'حتى ١٢ ضيفاً · ٧٢ قدماً' }, image: '/images/red-sea-cove.jpg', copy: { en: 'For coves that do not appear on the map.', ar: 'لخلجان لا تظهر على الخريطة.' } },
];

export const experiences = [
  { id: 'slow-morning', number: '01', title: { en: 'The slow morning', ar: 'صباح على مهل' }, copy: { en: 'Coffee on the bow, a swim before the heat, and a coastline that reveals itself one mile at a time.', ar: 'قهوة على مقدمة اليخت، وسباحة قبل اشتداد الحر، وساحل يكشف نفسه ميلاً بعد ميل.' }, image: '/images/red-sea-cove.jpg', tone: 'blue' },
  { id: 'long-table', number: '02', title: { en: 'The long table', ar: 'المائدة الطويلة' }, copy: { en: 'A chef-led lunch that follows the light: local fish, bright salads, and the last hour of sun.', ar: 'غداء بإشراف طاهٍ يتبع الضوء: أسماك محلية، وسلطات منعشة، والساعة الأخيرة من الشمس.' }, image: '/images/supper-on-deck.jpg', tone: 'sand' },
  { id: 'river-hour', number: '03', title: { en: 'The river hour', ar: 'ساعة النهر' }, copy: { en: 'An unhurried passage through Luxor, where the Nile turns gold and the day grows quiet.', ar: 'رحلة متمهلة عبر الأقصر، حيث يكتسي النيل بالذهب ويهدأ النهار.' }, image: '/images/nile-sunset.jpg', tone: 'coral' },
];

export const destinations = [
  { id: 'alexandria', name: { en: 'Alexandria', ar: 'الإسكندرية' }, region: { en: 'Mediterranean coast', ar: 'ساحل المتوسط' }, image: '/images/alexandria-coast.jpg', detail: { en: 'Salt air, old cafés, open horizons.', ar: 'هواء مالح، ومقاهٍ عريقة، وآفاق مفتوحة.' } },
  { id: 'el-gouna', name: { en: 'El Gouna', ar: 'الجونة' }, region: { en: 'Red Sea', ar: 'البحر الأحمر' }, image: '/images/hero-marina.jpg', detail: { en: 'A marina made for lingering.', ar: 'مارينا صُممت للإقامة طويلاً.' } },
  { id: 'marsa-alam', name: { en: 'Marsa Alam', ar: 'مرسى علم' }, region: { en: 'Red Sea', ar: 'البحر الأحمر' }, image: '/images/red-sea-cove.jpg', detail: { en: 'Reefs, silence, and clear water.', ar: 'شعاب مرجانية، وصمت، ومياه صافية.' } },
  { id: 'luxor', name: { en: 'Luxor', ar: 'الأقصر' }, region: { en: 'The Nile', ar: 'النيل' }, image: '/images/nile-sunset.jpg', detail: { en: 'The river at its most golden.', ar: 'النهر في أبهى لحظاته الذهبية.' } },
];

export const copy = {
  en: {
    inquire: 'Request an itinerary',
    discover: 'Discover the fleet',
    explore: 'Explore experiences',
    viewAll: 'View all',
    from: 'From the water',
    selected: 'A considered selection',
    next: 'What calls you next?',
  },
  ar: {
    inquire: 'اطلب برنامج رحلتك',
    discover: 'اكتشف الأسطول',
    explore: 'استكشف التجارب',
    viewAll: 'عرض الكل',
    from: 'من على الماء',
    selected: 'اختيارات مدروسة',
    next: 'إلى أين تأخذك الرحلة؟',
  },
};