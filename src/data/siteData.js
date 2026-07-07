export const collections = [
  {
    id: 'gold-sets',
    group: 'jewellery',
    title: 'Gold Sets',
    description: 'Coordinated gold pieces for weddings, ceremonies, and special gifts.',
    image: '/images/gold-set-1.jpg',
    relatedImages: [
      '/images/gold-set-1.jpg',
      '/images/gold-set-2.jpg',
      '/images/gold-set-3.jpg',
      '/images/gold-set-4.jpg',
    ],
  },
  {
    id: 'earrings',
    group: 'jewellery',
    title: 'Earrings',
    description: 'Elegant earring styles for everyday wear, gifts, and special occasions.',
    image: '/images/earing-1.jpg',
    relatedImages: [
      '/images/earing-1.jpg',
      '/images/earing-2.jpg',
      '/images/earing-3.jpg',
      '/images/earing-4.jpg',
      '/images/earing-5.jpg',
    ],
  },
  {
    id: 'rings-bracelets',
    group: 'jewellery',
    title: 'Rings & Bracelets',
    description: 'Detailed rings, bangles, and bracelets crafted for lasting wear.',
    image: '/images/Ring-1.jpg',
    relatedImages: [
      '/images/Ring-1.jpg',
      '/images/Ring-2.jpg',
      '/images/Ring-3.jpg',
      '/images/Ring-4.jpg',
      '/images/Ring-5.jpg',
      '/images/Ring-6.jpg',
      '/images/Ring-7.jpg',
      '/images/Ring-8.jpg',
    ],
  },
  {
    id: 'custom-orders',
    group: 'jewellery',
    title: 'Custom Orders',
    description: 'Speak with our team for sizing, design guidance, and order support.',
    image: '/images/gold-set-2.jpg',
    relatedImages: [
      '/images/gold-set-2.jpg',
      '/images/gold-set-3.jpg',
      '/images/Ring-5.jpg',
      '/images/earing-5.jpg',
    ],
  },
];

export const gemCollections = [
  {
    id: 'ruby',
    group: 'gems',
    title: 'Ruby Gems',
    description: 'Rich red ruby pieces for statement gifts, ceremonies, and heirloom looks.',
    image: '/images/Ruby-1.jpg',
    relatedImages: [
      '/images/Ruby-1.jpg',
      '/images/Ruby-2.jpg',
      '/images/Ruby-3.jpg',
      '/images/Ruby-4.jpg',
      '/images/Ruby-5.jpg',
    ],
  },
  {
    id: 'sapphire',
    group: 'gems',
    title: 'Sapphire Gems',
    description: 'Elegant sapphire-inspired designs with deep color and refined gold settings.',
    image: '/images/Sapphire-1.jpg',
    relatedImages: [
      '/images/Sapphire-1.jpg',
      '/images/Sapphire-2.jpg',
      '/images/Sapphire-3.jpg',
      '/images/Sapphire-4.jpg',
      '/images/Sapphire-5.jpg',
      '/images/Sapphire-6.jpg',
      '/images/Sapphire-7.jpg',
      '/images/Sapphire-8.jpg',
    ],
  },
  {
    id: 'emerald',
    group: 'gems',
    title: 'Emerald Gems',
    description: 'Fresh green gemstone styles for customers who prefer a graceful classic finish.',
    image: '/images/Emerald-1.jpg',
    relatedImages: [
      '/images/Emerald-1.jpg',
      '/images/Emerald-2.jpg',
      '/images/Emerald-3.jpg',
      '/images/Emerald-4.jpg',
      '/images/Emerald-5.jpg',
      '/images/Emerald-6.jpg',
      '/images/Emerald-7.jpg',
      '/images/Emerald-8.jpg',
      '/images/Emerald-9.jpg',
      '/images/Emerald-10.jpg',
      '/images/Emerald-11.jpg',
      '/images/Emerald-12.jpg',
      '/images/Emerald-13.jpg',
    ],
  },
  {
    id: 'diamond',
    group: 'gems',
    title: 'Diamond Pieces',
    description: 'Sparkling diamond and crystal-accented jewelry for special occasions.',
    image: '/images/earing-3.jpg',
    relatedImages: [
      '/images/earing-3.jpg',
      '/images/earing-4.jpg',
      '/images/earing-5.jpg',
      '/images/Ring-7.jpg',
    ],
  },
];

export const allCollections = [...collections, ...gemCollections];

export const homeSlides = [
  {
    image: '/images/hero.jpg',
    title: 'Royal Golden Princess',
    kicker: 'Fine gold and gemstone jewelry',
    description:
      'Visit our Yangon branches or call us today for jewelry details, appointments, and custom orders.',
  },
  {
    image: '/images/gold-set-2.jpg',
    title: 'Elegant Gold Designs',
    kicker: 'Signature collections',
    description:
      'Discover refined gold sets, earrings, rings, bracelets, and coordinated pieces for special occasions.',
  },
  {
    image: '/images/Ruby-2.jpg',
    title: 'Gemstone Highlights',
    kicker: 'Gems collections',
    description:
      'Browse ruby, sapphire, emerald, and diamond-inspired pieces with graceful gold settings.',
  },
];

export const galleryImages = [
  { src: '/images/gold-set-1.jpg', alt: 'Gold jewelry set' },
  { src: '/images/gold-set-2.jpg', alt: 'Gold necklace set' },
  { src: '/images/earing-1.jpg', alt: 'Gold earring design' },
  { src: '/images/Ring-1.jpg', alt: 'Gold ring design' },
  { src: '/images/Ruby-1.jpg', alt: 'Ruby gemstone jewelry' },
  { src: '/images/Sapphire-1.jpg', alt: 'Sapphire gemstone jewelry' },
  { src: '/images/Emerald-1.jpg', alt: 'Emerald gemstone jewelry' },
  { src: '/images/Ring-2.jpg', alt: 'Ring collection piece' },
];

export const newArrivals = [
  {
    name: 'Royal Gold Necklace Set',
    price: 'Ask for price',
    image: '/images/gold-set-3.jpg',
  },
  {
    name: 'Ruby Gemstone Statement Piece',
    price: 'Ask for price',
    image: '/images/Ruby-3.jpg',
  },
  {
    name: 'Golden Princess Ring',
    price: 'Ask for price',
    image: '/images/Ring-3.jpg',
  },
  {
    name: 'Sapphire Gemstone Piece',
    price: 'Ask for price',
    image: '/images/Sapphire-3.jpg',
  },
];

export const shopCategories = [
  {
    title: 'Gold Sets',
    image: '/images/gold-set-4.jpg',
    path: '/collections/gold-sets',
  },
  {
    title: 'Earrings',
    image: '/images/earing-2.jpg',
    path: '/collections/earrings',
  },
  {
    title: 'Rings',
    image: '/images/Ring-4.jpg',
    path: '/collections/rings-bracelets',
  },
  {
    title: 'Ruby Gems',
    image: '/images/Ruby-4.jpg',
    path: '/collections/ruby',
  },
  {
    title: 'Emerald Gems',
    image: '/images/Emerald-4.jpg',
    path: '/collections/emerald',
  },
  {
    title: 'Sapphire Gems',
    image: '/images/Sapphire-4.jpg',
    path: '/collections/sapphire',
  },
];

export const phones = [
  '+95 09 5074312',
  '+95 5015101',
  '+95 409553327',
  '+95 459920102',
  '+95 49250902',
];

export const socialLinks = [
  {
    label: '',
    icon: 'facebook',
    href: 'https://www.facebook.com/share/1BRK3oTo2w/?mibextid=wwXIfr',
  },
  {
    label: '',
    icon: 'facebook',
    href: 'https://www.facebook.com/share/198tBqCACa/?mibextid=wwXIfr',
  },
  {
    label: '',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@royalgoldenprincesss?_r=1&_t=ZS-97pedxXaIcy',
  },
  {
    label: '',
    icon: 'instagram',
    href: 'https://www.instagram.com/golden_princess_jewellery/',
  },
];

export const teamMembers = [
  {
    role: 'Founder & Boss',
    name: 'Royal Golden Princess Leadership',
    description: 'Guiding the showroom experience, product standards, and customer care.',
    image: '/images/logo.jpg',
  },
  {
    role: 'Sales Team',
    name: 'Showroom Staff',
    description: 'Helping customers compare collections, sizing, and order details.',
    image: '/images/gold-set-1.jpg',
  },
  {
    role: 'Jewellery Advisors',
    name: 'Customer Support Staff',
    description: 'Available for branch visits, phone questions, and custom order guidance.',
    image: '/images/Ring-5.jpg',
  },
];

export const mapLocations = [
  {
    title: 'Branch 1 Map',
    description: 'Golden Princess - North Okkalapa branch',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.267049508767!2d96.1629375!3d16.9121143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193af36121bbd%3A0xbb6a64e83e3f6e9b!2sGolden%20Princess!5e0!3m2!1sja!2sjp!4v1783435866406!5m2!1sja!2sjp',
  },
  {
    title: 'Branch 2 Map',
    description: 'Times City Yangon - Level 3, C-302',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15276.805060904868!2d96.1095792871582!3d16.816368599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb34335a92f5%3A0xea3210d0410309d7!2sTimes%20City%20Yangon!5e0!3m2!1sja!2sjp!4v1783435914197!5m2!1sja!2sjp',
  },
];
