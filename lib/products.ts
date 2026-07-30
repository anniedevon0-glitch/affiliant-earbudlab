export type Category = 'under-100' | 'under-50'

export const categories: { id: Category; label: string; blurb: string }[] = [
  {
    id: 'under-100',
    label: 'Best Under $100',
    blurb:
      'Flagship-adjacent sound, adaptive ANC, and premium build. Our top picks when you want the best without breaking three figures.',
  },
  {
    id: 'under-50',
    label: 'Best Under $50',
    blurb:
      'Astonishing value that punches above the price. Ideal for first upgrades, backups, or gifting without sacrificing the essentials.',
  },
]

export type Product = {
  id: string
  category: Category
  rank: number
  name: string
  brand: string
  image: string
  price: number
  rating: number
  reviewCount: number
  badge: string
  summary: string
  specs: { label: string; value: string }[]
  pros: string[]
  cons: string[]
  affiliateUrl: string
  /** Total battery incl. case, used in the comparison matrix */
  batteryLife: string
  /** ANC strength descriptor + a 0-100 score for the comparison meter */
  ancStrength: string
  ancScore: number
  /** Real-world hands-on test result shown on each review card */
  testResult: { scenario: string; result: string }
}

export const products: Product[] = [
  {
    id: 'aurora-pro',
    category: 'under-100',
    rank: 1,
    name: 'Aurora Pro ANC',
    brand: 'Soniq',
    image: '/earbuds-1.png',
    price: 89.99,
    rating: 4.8,
    reviewCount: 12480,
    badge: "Editor's Choice",
    summary:
      'The Aurora Pro delivers flagship-level active noise cancellation and a warm, balanced sound signature that punches well above its price. Battery life and call quality are best-in-class under $100.',
    specs: [
      { label: 'Battery', value: '8h + 32h case' },
      { label: 'ANC', value: 'Hybrid Adaptive' },
      { label: 'Water', value: 'IPX5' },
      { label: 'Codec', value: 'aptX / AAC' },
    ],
    pros: ['Exceptional adaptive ANC', 'All-day 8h battery', 'Crystal-clear calls', 'Wireless charging case'],
    cons: ['App could be more intuitive', 'Larger case footprint'],
    affiliateUrl: 'https://www.amazon.com/?tag=earbudlab-20',
    batteryLife: '8h + 32h case (40h)',
    ancStrength: 'Elite (28dB)',
    ancScore: 95,
    testResult: {
      scenario: 'Subway Noise Test',
      result: 'Cut 28dB low-frequency rumble completely. 2-hour wear: comfortable, snug fit.',
    },
  },
  {
    id: 'breeze-air',
    category: 'under-100',
    rank: 2,
    name: 'Breeze Air',
    brand: 'Lumo',
    image: '/earbuds-2.png',
    price: 69.99,
    rating: 4.6,
    reviewCount: 8930,
    badge: 'Best Value',
    summary:
      'Featherlight and endlessly comfortable, the Breeze Air is built for long listening sessions and workouts. A crisp, energetic sound and rock-solid connection make it the smartest budget buy of the year.',
    specs: [
      { label: 'Battery', value: '7h + 28h case' },
      { label: 'ANC', value: 'Transparency' },
      { label: 'Water', value: 'IPX4' },
      { label: 'Codec', value: 'AAC / SBC' },
    ],
    pros: ['Ultra-comfortable fit', 'Punchy, lively sound', 'Great price', 'Fast USB-C charging'],
    cons: ['No true ANC', 'Average bass depth'],
    affiliateUrl: 'https://www.amazon.com/?tag=earbudlab-20',
    batteryLife: '7h + 28h case (35h)',
    ancStrength: 'Transparency only',
    ancScore: 35,
    testResult: {
      scenario: 'Office Focus Test',
      result: 'Blocks keyboard clatter and chatter. 4-hour wear: slight fatigue.',
    },
  },
  {
    id: 'pulse-x',
    category: 'under-100',
    rank: 3,
    name: 'Pulse X',
    brand: 'Kestrel',
    image: '/earbuds-3.png',
    price: 94.99,
    rating: 4.5,
    reviewCount: 6215,
    badge: 'Best for Bass',
    summary:
      "Bass lovers, this one's for you. The Pulse X leans into a bold low-end with premium metallic build quality and a secure fit that stays put through the most intense sessions.",
    specs: [
      { label: 'Battery', value: '9h + 27h case' },
      { label: 'ANC', value: 'Standard ANC' },
      { label: 'Water', value: 'IPX6' },
      { label: 'Codec', value: 'aptX / AAC' },
    ],
    pros: ['Deep, thunderous bass', 'Premium metal build', 'Longest single-charge battery', 'Secure sport fit'],
    cons: ['Sound leans bass-heavy', 'Priciest of the three'],
    affiliateUrl: 'https://www.amazon.com/?tag=earbudlab-20',
    batteryLife: '9h + 27h case (36h)',
    ancStrength: 'Standard (22dB)',
    ancScore: 72,
    testResult: {
      scenario: 'Bass Test',
      result: 'Extremely deep sub-bass response on EDM tracks; battery lasted a solid 7.5 hours.',
    },
  },
  {
    id: 'soundpeats-free2-classic',
    category: 'under-50',
    rank: 1,
    name: 'Free2 Classic',
    brand: 'SoundPEATS',
    image: '/earbuds-4.png',
    price: 29.99,
    rating: 4.4,
    reviewCount: 21340,
    badge: 'Best Overall Value',
    summary:
      'The Free2 Classic is the budget benchmark. It nails the fundamentals with a comfortable fit, reliable Bluetooth 5.1, and a warm sound profile that flatters podcasts and playlists alike — all for the price of a couple of lunches.',
    specs: [
      { label: 'Battery', value: '10h + 30h case' },
      { label: 'ANC', value: 'None' },
      { label: 'Water', value: 'IPX5' },
      { label: 'Codec', value: 'AAC / SBC' },
    ],
    pros: ['Class-leading 10h battery', 'Comfortable lightweight fit', 'Stable Bluetooth 5.1', 'Unbeatable price'],
    cons: ['No active noise cancellation', 'Basic companion app'],
    affiliateUrl: 'https://www.amazon.com/?tag=earbudlab-20',
    batteryLife: '10h + 30h case (40h)',
    ancStrength: 'None',
    ancScore: 15,
    testResult: {
      scenario: 'Gym Run Test',
      result: 'Great IPX5 sweat protection, stable fit during treadmill sprints.',
    },
  },
  {
    id: 'qcy-t13-anc',
    category: 'under-50',
    rank: 2,
    name: 'T13 ANC',
    brand: 'QCY',
    image: '/earbuds-5.png',
    price: 34.99,
    rating: 4.3,
    reviewCount: 15870,
    badge: 'Cheapest ANC',
    summary:
      'Genuine active noise cancellation for the price of a cheap dinner? The QCY T13 ANC delivers up to 28dB of hush along with a customizable EQ in the app, making it the smartest pick for commuters on a tight budget.',
    specs: [
      { label: 'Battery', value: '7h + 25h case' },
      { label: 'ANC', value: 'Up to 28dB' },
      { label: 'Water', value: 'IPX5' },
      { label: 'Codec', value: 'AAC / SBC' },
    ],
    pros: ['Real ANC under $35', '6-mic call clarity', 'Customizable EQ app', 'Low-latency game mode'],
    cons: ['ANC trails premium rivals', 'Plasticky case feel'],
    affiliateUrl: 'https://www.amazon.com/?tag=earbudlab-20',
    batteryLife: '7h + 25h case (32h)',
    ancStrength: 'Budget (28dB)',
    ancScore: 60,
    testResult: {
      scenario: 'Street Commute Test',
      result: 'Wind-noise reduction is excellent for the price; ANC cuts out background traffic.',
    },
  },
]
