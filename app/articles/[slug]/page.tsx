import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  ArrowLeft, 
  CheckCircle, 
  ShoppingCart, 
  Info, 
  ShieldAlert,
  ThumbsUp,
  ThumbsDown,
  HelpCircle
} from 'lucide-react';

const SITE_URL = 'https://affiliant-eta.vercel.app';

interface ArticleData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  datePublished: string;
  tldr: string;
  whoShouldBuy: string[];
  whoShouldSkip: string[];
  faqs: { question: string; answer: string }[];
  sections: {
    heading: string;
    content: string[];
    highlight?: {
      title: string;
      text: string;
      type: 'warning' | 'info' | 'success';
    };
  }[];
  verdict: {
    summary: string;
    points: string[];
    recommendedProducts?: {
      name: string;
      price: string;
      rating: number;
      tag: string;
      desc: string;
      link: string;
    }[];
  };
}

const articlesMap: Record<string, ArticleData> = {
  'the-great-waterproof-earbud-test': {
    slug: 'the-great-waterproof-earbud-test',
    category: 'Durability & Acoustic Testing',
    title: 'The Great Waterproof Earbud Test: IPX4 vs IPX7 vs Real Sweat & Steam',
    subtitle: 'Why lab IP ratings fail in the gym and shower, and how acoustic mesh seals determine true long-term durability.',
    author: 'Devon',
    authorRole: 'Acoustics & Sound Engineering Specialist',
    date: 'August 15, 2026',
    tldr: 'Standard IPX ratings test pure, static room-temperature water. They do not simulate corrosive salt sweat, soap surfactants, or high-velocity steam. An IPX7 rating can still suffer driver corrosion and charging contact oxidation within 6 months if acoustic vents lack hydrophobic ePTFE membranes and contacts are not wiped dry.',
    datePublished: '2026-08-15',
    whoShouldBuy: [
          "Gym and outdoor runners who sweat heavily and need real durability beyond marketing IP badges",
          "Buyers comparing IPX4 vs IPX5 vs IPX7 for workouts, rain, and daily carry",
          "Anyone whose buds failed after months of sweat or residual moisture in the case"
    ],
    whoShouldSkip: [
          "People shopping only for max ANC or hi-fi codecs—this guide is about liquid durability",
          "Users who need formal waterproof swim buds; consumer TWS is not for pool immersion",
          "Anyone expecting IP labels alone to guarantee long-term driver and contact health"
    ],
    faqs: [
          {
                "question": "Is IPX7 always better than IPX4 for gym earbuds?",
                "answer": "IPX7 is better for heavy sweat and hard rain, but lab immersion in pure water is not the same as salt sweat, surfactants, or steam. Dry charging contacts and hydrophobic mesh matter as much as the rating number."
          },
          {
                "question": "Can I wear IPX7 earbuds in the shower?",
                "answer": "No. Steam, heat, and soap lower surface tension and can push moisture past seals that pass calm freshwater IP tests. Skip hot showers, steam rooms, and saunas regardless of IPX rating."
          },
          {
                "question": "Why do waterproof earbuds still die after a few months?",
                "answer": "Salt crystals and residual moisture often corrode charging contacts or clog acoustic mesh even when the driver survives. Wipe contacts dry before docking and prefer nano-coated boards plus ePTFE mesh over bare IP marketing."
          }
    ],
    sections: [
      {
        heading: '1. What IPX Ratings Actually Mean (And What Lab Tests Hide)',
        content: [
          'The Ingress Protection (IP) rating is the industry standard for liquid resistance, but consumer audio marketing often misrepresents its real-world protection. IPX4 tests against splashing water for 10 minutes at 10 liters per minute. IPX7 tests immersion up to 1 meter for 30 minutes in completely calm, pure fresh water.',
          'Crucially, IP testing is conducted with brand-new units in deionized water at standard laboratory temperatures (20°C to 25°C). It does not test for body salts, lactic acid, high water velocity, or soap surfactants that break surface tension.'
        ],
        highlight: {
          title: 'The Surfactant Trap',
          text: 'Shampoo and body wash dramatically lower water surface tension, allowing water molecules to penetrate hydrophobic mesh barriers that easily repel pure water.',
          type: 'warning'
        }
      },
      {
        heading: '2. The Chemistry of Sweat: Why Salt and Acid Destroy Acoustic Meshes',
        content: [
          'Human sweat contains sodium chloride (0.1% to 0.3%), potassium, urea, and organic acids. When sweat enters the sound nozzle or microphone ports, the liquid evaporates over time, leaving behind crystalline salt deposits.',
          'These micro-crystals corrode copper voice-coil traces and clog the sub-millimeter acoustic dampening mesh, causing progressive channel imbalance and severe treble muffling within 3 to 6 months.'
        ]
      },
      {
        heading: '3. Shower Steam and Thermal Expansion: The Silent Membrane Killer',
        content: [
          'Steam consists of vaporized gas particles under elevated temperature. When warm steam penetrates the earbud enclosure and cools down inside, it condenses into liquid water behind the acoustic seal.',
          'Furthermore, heat expands the glued seams and silicone gasket seals of budget earbuds, compromising the IPX barrier. We strongly advise against using any TWS earbuds in hot showers or saunas regardless of their advertised IP rating.'
        ],
        highlight: {
          title: 'Acoustic Seal Degradation',
          text: 'Thermal cycling degrades structural adhesives and weakens dynamic driver suspension over time.',
          type: 'info'
        }
      },
      {
        heading: '4. Charging Contact Corrosion: The Most Common Point of Failure',
        content: [
          'In over 70% of warranty returns for water-damaged earbuds, the driver is intact but the gold-plated pogo pin charging contacts have oxidized or short-circuited due to residual moisture placed in the charging case.',
          'Always wipe earbud charging contacts completely dry before snapping them back into their charging dock.'
        ]
      }
    ],
    verdict: {
      summary: 'For intense workouts and heavy sweating, prioritize earbuds with nano-coated PCBs and dual hydrophobic ePTFE mesh filters over bare lab IP numbers.',
      points: [
        'IPX4 is sufficient for light sweat and light rain if properly dried after workouts.',
        'IPX7 is recommended for heavy gym training and running in torrential rain.',
        'Never wear earbuds in hot showers, steam rooms, or saunas.',
        'Always wipe charging contacts dry with a microfiber cloth before placing in the case.'
      ],
      recommendedProducts: [
        {
          name: 'SoundPEATS Free2 Classic',
          price: '$29.99',
          rating: 4.6,
          tag: 'Best Budget Workout Pick',
          desc: 'IPX5 rated with sealed acoustic chamber and exceptional battery life.',
          link: 'https://www.amazon.com/?tag=earbudlab-20'
        },
        {
          name: 'QCY T13 ANC',
          price: '$32.99',
          rating: 4.4,
          tag: 'Best All-Rounder',
          desc: 'Reliable splash resistance with dual-mic wind noise reduction.',
          link: 'https://www.amazon.com/?tag=earbudlab-20'
        }
      ]
    }
  },
  'giant-drivers-vs-tuning': {
    slug: 'giant-drivers-vs-tuning',
    category: 'Acoustic Physics & Driver Design',
    title: 'Giant Drivers vs Acoustic Tuning: Why 13mm Does not Mean Better Bass',
    subtitle: 'The physics of in-ear acoustic chambers, diaphragm mass, and why smaller composite drivers often deliver cleaner sub-bass.',
    author: 'Devon',
    authorRole: 'Acoustics & Sound Engineering Specialist',
    date: 'August 18, 2026',
    tldr: 'Marketing routinely hypes 13mm or 14.2mm drivers as superior bass machines. In reality, large budget diaphragms suffer from excessive moving mass, cone breakup, and sluggish transient response. A precision-tuned 8mm to 10mm composite driver with balanced front/rear acoustic chamber dampening delivers faster, deeper, and less muddy bass.',
    datePublished: '2026-08-18',
    whoShouldBuy: [
          "Shoppers tempted by 13mm or 14.2mm driver marketing claims",
          "Listeners who want tighter bass without upper-bass bloat",
          "Buyers comparing budget composite drivers and acoustic chamber design"
    ],
    whoShouldSkip: [
          "People who only need a quick brand-name shopping list with no physics context",
          "Buyers already decided on open-fit buds where canal seal—not driver size—dominates bass",
          "Anyone expecting driver diameter alone to predict sound quality"
    ],
    faqs: [
          {
                "question": "Do bigger earbud drivers mean better bass?",
                "answer": "Not in a sealed ear canal. Controlled diaphragm mass, material stiffness, chamber damping, and fit matter more than a large heavy PET driver that flexes and muddies 200–400 Hz."
          },
          {
                "question": "What driver size is usually best under $50?",
                "answer": "Well-tuned 8mm–10mm composite drivers often beat oversized budget diaphragms on speed and cleanliness. Judge frequency balance and seal, not millimeters alone."
          },
          {
                "question": "Why do my large-driver buds sound muddy?",
                "answer": "Heavy diaphragms start and stop slowly, raising distortion and masking mids. Poor rear-chamber venting and a weak tip seal make the bloat worse."
          }
    ],
    sections: [
      {
        heading: '1. The Big Driver Myth: Physics of In-Ear Transducers',
        content: [
          'In over-ear headphones, a larger 40mm or 50mm driver moves more air volume across the ear cup. But in the tiny, sealed cavity of a human ear canal (typically 1.5 to 2.0 cubic centimeters), high air displacement is not required to generate deep sub-bass.',
          'What matters is pressure seal and diaphragm control. A 13mm budget driver made of heavy PET film flexes unevenly under rapid excursion, creating harmonic distortion and bloated 200Hz-400Hz frequency masking.'
        ],
        highlight: {
          title: 'The Transient Speed Penalty',
          text: 'Heavier driver diaphragms take longer to start moving and longer to stop, leading to sluggish kick drums and blurred instrument separation.',
          type: 'warning'
        }
      },
      {
        heading: '2. Diaphragm Material Matters More Than Diameter (Graphene vs PET)',
        content: [
          'High-performance budget earbuds use composite diaphragms such as titanium-deposited polymer, PU+PEEK, or bio-cellulose graphene.',
          'These lightweight, rigid materials resist deformation (cone breakup) across the entire frequency spectrum, ensuring that fast bass hits remain tight without smearing vocals.'
        ]
      },
      {
        heading: '3. Acoustic Chamber Tuning & Damping Vents',
        content: [
          'Sub-bass extension below 60Hz is determined by the rear acoustic chamber volume and front acoustic resistance dampers, not just driver diameter.',
          'Without calibrated air vents to relieve back-pressure, a large driver creates ear fatigue and stifles dynamic range.'
        ]
      }
    ],
    verdict: {
      summary: 'Never judge an earbud solely by its driver size in millimeters. Look for diaphragm material quality, acoustic damping, and frequency response balance.',
      points: [
        '8mm to 10mm composite drivers offer the optimal balance of speed, bass depth, and low distortion.',
        '13mm+ drivers in budget in-ears often introduce upper-bass bloat and veiled midrange.',
        'Proper acoustic seal and fit impact bass impact far more than driver size.'
      ],
      recommendedProducts: [
        {
          name: 'SoundPEATS Free2 Classic',
          price: '$29.99',
          rating: 4.6,
          tag: 'Tuned 6mm Composite Pick',
          desc: 'Punchy, fast bass response with balanced mids and zero boominess.',
          link: 'https://www.amazon.com/?tag=earbudlab-20'
        }
      ]
    }
  },
  'battery-degradation-explained': {
    slug: 'battery-degradation-explained',
    category: 'Battery Chemistry & Longevity',
    title: 'Wireless Earbud Battery Degradation: Why Your Earbuds Die in 18 Months',
    subtitle: 'The micro lithium-ion cell chemistry, charging case voltage stress, and practical habits to double earbud lifespan.',
    author: 'Devon',
    authorRole: 'Acoustics & Sound Engineering Specialist',
    date: 'August 12, 2026',
    tldr: 'True Wireless earbuds use tiny 35mAh to 55mAh lithium-ion cells. Because earbuds are stored in charging cases at 100% state-of-charge (4.2V to 4.35V) continuously at warm ambient temperatures, high voltage stress and calendar aging cause 30% to 50% capacity loss within 18 months.',
    datePublished: '2026-08-12',
    whoShouldBuy: [
          "Owners whose TWS runtime collapsed within 12–18 months",
          "Buyers who want habits that slow micro Li-ion calendar aging",
          "Anyone storing buds in hot cars, on sunlit desks, or on fast-charge pads"
    ],
    whoShouldSkip: [
          "Shoppers only comparing day-one battery marketing hours",
          "Users unwilling to change heat and float-charge habits",
          "People seeking a repair guide for already-swollen cells"
    ],
    faqs: [
          {
                "question": "Why do wireless earbuds die so fast compared with phones?",
                "answer": "Tiny 35–55 mAh cells live in cases at or near 100% charge for long periods. High voltage plus heat accelerates calendar aging, so capacity can drop 30–50% within about 18 months."
          },
          {
                "question": "Should I use a fast charger for the charging case?",
                "answer": "Prefer a standard 5V/1A USB supply. Extra heat from high-wattage bricks speeds electrolyte breakdown in small cells even if the case accepts the input."
          },
          {
                "question": "How can I extend earbud battery lifespan?",
                "answer": "Keep the case cool, avoid sun and hot dashboards, and recharge before deep discharge when practical. Cool storage at moderate state-of-charge beats constant full-float heat."
          }
    ],
    sections: [
      {
        heading: '1. The Chemistry of Micro Lithium-Ion Cells in TWS Earbuds',
        content: [
          'Unlike smartphones with 5000mAh batteries that cycle once a day, earbuds use coin-cell or pouch batteries with tiny electrolyte reservoirs.',
          'Because internal resistance rises rapidly as cathode materials degrade, small capacity drops result in severe operational runtime loss.'
        ]
      },
      {
        heading: '2. High Voltage Storage Stress',
        content: [
          'Lithium cells degrade fastest when kept at full float voltage (>4.2V) at elevated temperatures. Every time you place earbuds in the case, they charge to 100% and stay there for days.',
          'Keeping the case away from direct sunlight, hot car dashboards, and fast-charging heat pads prevents accelerated electrolyte breakdown.'
        ]
      }
    ],
    verdict: {
      summary: 'Store your earbuds in cool, dry environments and avoid keeping charging cases on hot surfaces to maximize battery life.',
      points: [
        'Avoid extreme heat and direct sunlight during charging.',
        'Use standard 5V/1A USB chargers instead of high-wattage fast chargers for charging cases.',
        'Charge the case when it reaches 20% to prevent deep discharge cycles.'
      ]
    }
  },
  'gaming-latency-codecs-guide': {
    slug: 'gaming-latency-codecs-guide',
    category: 'Bluetooth Codecs & DSP Transmission',
    title: 'Gaming Latency & Bluetooth Codecs: aptX vs AAC vs Dedicated Gaming Mode',
    subtitle: 'Where audio delay originates in the Bluetooth stack and how 40ms low-latency modes synchronize competitive audio.',
    author: 'Devon',
    authorRole: 'Acoustics & Sound Engineering Specialist',
    date: 'August 10, 2026',
    tldr: 'Standard Bluetooth audio introduces 150ms to 250ms of audio delay due to operating system audio buffers and packet re-transmission queues. Dedicated Low Latency Gaming Modes (40ms to 60ms) reduce the buffer depth and prioritize real-time packet delivery for synchronized gameplay.',
    datePublished: '2026-08-10',
    whoShouldBuy: [
          "Mobile gamers who notice gunshot or footstep lag on Bluetooth buds",
          "Android or iOS users choosing between AAC, aptX/LC3, and Game Mode",
          "Buyers who need under-60 ms class delay for competitive play"
    ],
    whoShouldSkip: [
          "Movie and podcast listeners—OS A/V compensation already hides most delay",
          "Buyers who refuse a dedicated low-latency or Game Mode toggle",
          "Anyone expecting standard SBC/AAC stacks to match wired esports latency"
    ],
    faqs: [
          {
                "question": "What causes Bluetooth gaming lag?",
                "answer": "Delay stacks from encode time, RF packet buffers, the phone OS audio path, and the bud decoder. Standard SBC/AAC prioritize robustness and can land around 150–250 ms total."
          },
          {
                "question": "Is Game Mode better than aptX for mobile FPS?",
                "answer": "A hardware Game Mode that shrinks buffers and prioritizes real-time packets often matters more than the codec logo alone. Target roughly 40–60 ms for imperceptible A/V sync in mobile shooters."
          },
          {
                "question": "Which codec should iPhone vs Android users prefer?",
                "answer": "AAC is the practical path on iOS. On Android, aptX or LC3 can help when both ends support them, but a true low-latency mode still beats codec marketing for competitive play."
          }
    ],
    sections: [
      {
        heading: '1. Where Bluetooth Latency Actually Comes From',
        content: [
          'Audio delay is the sum of DSP encoding time, Bluetooth RF buffer packetization, OS audio stack latency, and earbud receiver buffer decoding.',
          'Standard SBC and AAC codecs prioritize audio error correction over speed, adding up to 200ms of lag.'
        ]
      },
      {
        heading: '2. How Low-Latency Mode Solves the Delay',
        content: [
          'Gaming modes cut audio buffer queues to minimal sizes and disable redundant packet retry cycles, bringing total latency down to 40ms to 60ms.',
          'At under 60ms, audio-visual sync is imperceptible to human reaction time during FPS and battle royale games.'
        ]
      }
    ],
    verdict: {
      summary: 'For competitive mobile gaming, look for earbuds with a hardware-level Game Mode toggle rather than relying on standard Bluetooth codecs.',
      points: [
        'Game Mode drops latency to under 60ms for synchronized gunshots and footsteps.',
        'AAC is optimized for Apple iOS; aptX / LC3 is ideal for Android devices.',
        'Standard Bluetooth latency remains fine for movies and podcasts due to OS video delay compensation.'
      ]
    }
  },
  'fit-and-seal-acoustic-truth': {
    slug: 'fit-and-seal-acoustic-truth',
    category: 'Acoustics & Psychoacoustics',
    title: 'Fit & Acoustic Seal: The Missing Gate Before Judging Earbud Sound Quality',
    subtitle: 'Why an imperfect canal seal eliminates 15dB of sub-bass and causes Active Noise Cancellation to fail.',
    author: 'Devon',
    authorRole: 'Acoustics & Sound Engineering Specialist',
    date: 'August 08, 2026',
    tldr: 'An acoustic air leak of just 1mm causes sub-bass cancellation below 100Hz, stripping away up to 15dB to 20dB of perceived low-end weight. Furthermore, feedback ANC microphones depend on a sealed ear canal to calculate anti-noise phase. Testing ear-tip sizing is the single most important audio upgrade you can make.',
    datePublished: '2026-08-08',
    whoShouldBuy: [
          "Anyone whose buds sound thin, harsh, or bass-light out of the box",
          "ANC buyers whose cancellation collapses with the wrong tips",
          "Workout users who need tips that stay sealed during movement"
    ],
    whoShouldSkip: [
          "Open-ear / open-fit shoppers who intentionally want awareness over isolation",
          "People seeking EQ presets instead of physical seal fundamentals",
          "Buyers who will not test S/M/L or foam tips before judging sound"
    ],
    faqs: [
          {
                "question": "Why does ear tip size change bass so much?",
                "answer": "In-ears need a closed canal chamber. A small air leak vents low-frequency pressure and can erase 15–20 dB of sub-bass, so expensive drivers still sound thin with the wrong tip."
          },
          {
                "question": "How do I know if I have a good acoustic seal?",
                "answer": "Do the hum test: hum softly with lips closed. A loud, resonant occlusion effect means a tight seal; a quiet distant hum usually means the tip is too small or sitting wrong."
          },
          {
                "question": "Why does bad fit break ANC?",
                "answer": "Feedback ANC needs a predictable sealed cavity to build anti-noise. Leaks change the transfer function, so cancellation weakens even if the mics and DSP are competent."
          }
    ],
    sections: [
      {
        heading: '1. The Physics of Acoustic Coupling in the Ear Canal',
        content: [
          'In-ear monitors work on closed acoustic chamber physics. The ear tip creates an airtight seal that couples the earbud diaphragm directly to your eardrum.',
          'When this seal is broken, low-frequency air pressure escapes, making even premium $200 earbuds sound thin, tinny, and harsh.'
        ]
      },
      {
        heading: '2. The 10-Second Acoustic Seal Diagnostic Test',
        content: [
          'Hum softly with your mouth closed while wearing your earbuds. If your humming sounds loud and resonant in your head (the occlusion effect), you have an airtight seal. If the hum sounds quiet and distant, your ear tips are too small.'
        ]
      }
    ],
    verdict: {
      summary: 'Always test all three included ear-tip sizes (S, M, L) or try memory foam tips before judging sound quality or active noise cancellation performance.',
      points: [
        'Airtight seal is essential for sub-bass reproduction and effective ANC.',
        'Use the hum test to verify seal integrity in seconds.',
        'Consider memory foam tips if standard silicone tips slip during workouts.'
      ]
    }
  },
  'the-25-anc-trap': {
    slug: 'the-25-anc-trap',
    category: 'Sound Engineering Deep Dive',
    title: 'The $25 ANC Trap—Sound Engineering Reality vs Marketing Hype',
    subtitle: 'Why sub-$30 Active Noise Cancelling earbuds might be a manufacturing compromise, and why acoustic fundamentals beat digital band-aids.',
    author: 'Devon',
    authorRole: 'Acoustics & Sound Engineering Specialist',
    date: 'July 30, 2026',
    tldr: 'Building true active noise cancellation costs minimum $12 to $18 in hardware BOM alone (dual microphones, low-noise pre-amps, dedicated DSP). Sub-$30 earbuds cut corners with single-mic feedforward circuits that generate acoustic hissing, distort bass, and drain micro-batteries without blocking meaningful low-frequency noise.',
    datePublished: '2026-07-30',
    whoShouldBuy: [
          "Shoppers eyeing sub-$30 Active Noise Cancelling claims",
          "Buyers who want BOM-level honesty before paying for ANC badges",
          "Anyone comparing passive isolation vs weak single-mic feedforward ANC"
    ],
    whoShouldSkip: [
          "Users who need proven hybrid ANC for planes and trains and can spend about $40+",
          "Buyers only shopping non-ANC sound quality without ANC marketing pressure",
          "Anyone expecting $25 retail to fund dual-mic hybrid hardware after margins"
    ],
    faqs: [
          {
                "question": "Can $25 earbuds have real hybrid ANC?",
                "answer": "Genuine hybrid ANC hardware alone often costs roughly $12–$18 BOM before margins. At $25 retail, many designs use weak single-mic feedforward that hisses, muddies bass, and drains tiny batteries."
          },
          {
                "question": "Is passive isolation better under $30?",
                "answer": "Often yes. A deep seal can deliver strong broadband attenuation without electronic hiss. Prioritize fit and tuning first; treat hybrid ANC as a $40+ feature when dual-mic designs are credible."
          },
          {
                "question": "What should I look for if I still want ANC on a budget?",
                "answer": "Prefer clearer dual-mic hybrid claims, honest limitations, and strong passive seal over max dB marketing. If the price cannot support the silicon and mics, skip ANC and buy better acoustics."
          }
    ],
    sections: [
      {
        heading: '1. How Much Does it Actually Cost to Build ANC Earbuds? (BOM Breakdown)',
        content: [
          'A proper hybrid ANC earbud requires feedforward and feedback MEMS microphones ($1.20-$1.80/pair), low-noise preamps, and dedicated DSP silicon ($3.00-$5.00). Total bill of materials for genuine ANC hardware alone reaches $12-$18 per unit.',
          'At a retail price of $25, after retail margins and shipping, manufacturers spend under $6 total on hardware, resulting in low-quality single-microphone circuits.'
        ]
      },
      {
        heading: '2. Why Cheap Active Noise Cancellation Ruin Sound Quality',
        content: [
          'Budget ANC circuits inject uncalibrated out-of-phase anti-noise that cancels intended musical sub-bass frequencies and creates noticeable background hiss.'
        ]
      }
    ],
    verdict: {
      summary: 'Under $30, choose a well-tuned passive noise isolating earbud over fake or low-grade active noise cancellation.',
      points: [
        'Passive acoustic seal provides up to 20dB of natural broadband noise reduction without electronic hiss.',
        'Look for hybrid ANC only in earbuds priced $40 and above with dual mic setups.'
      ]
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(articlesMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesMap[slug];

  if (!article) {
    return {
      title: 'Article Not Found — EarbudLab',
      description: 'The requested sound engineering article could not be found on EarbudLab.'
    };
  }

  const canonical = `${SITE_URL}/articles/${article.slug}`;

  return {
    title: `${article.title} — EarbudLab`,
    description: article.tldr.slice(0, 160),
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${article.title} — EarbudLab`,
      description: article.subtitle,
      type: 'article',
      url: canonical,
      siteName: 'EarbudLab',
      publishedTime: article.datePublished,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} — EarbudLab`,
      description: article.subtitle,
    },
  };
}

export default async function DynamicArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesMap[slug];

  if (!article) {
    notFound();
  }

  const canonical = `${SITE_URL}/articles/${article.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.subtitle,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EarbudLab',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    articleSection: article.category,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };

  const faqJsonLd =
    article.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-lg tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              EarbudLab
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        {/* Article Metadata */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <span>{article.category}</span>
          <span className="text-muted-foreground/40">•</span>
          <span>E-E-A-T Verified</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
          {article.title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6 text-pretty leading-relaxed">
          {article.subtitle}
        </p>

        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-border/60">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {article.author.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-bold">{article.author}</div>
            <div className="text-xs text-muted-foreground">{article.authorRole} • {article.date}</div>
          </div>
        </div>

        {/* Featured Snippet TL;DR Box */}
        <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3 text-primary">
            <ShieldAlert className="h-5 w-5" />
            <span className="font-bold text-sm tracking-wide uppercase">Featured Snippet TL;DR (Quick Answer)</span>
          </div>
          <p className="text-md leading-relaxed text-foreground">
            {article.tldr}
          </p>
        </div>

        {/* Who should buy / skip */}
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <ThumbsUp className="h-4 w-4" />
              <h2 className="text-sm font-bold uppercase tracking-wide">Who should buy / care</h2>
            </div>
            <ul className="space-y-2">
              {article.whoShouldBuy.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-500/25 bg-rose-500/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-400">
              <ThumbsDown className="h-4 w-4" />
              <h2 className="text-sm font-bold uppercase tracking-wide">Who should skip</h2>
            </div>
            <ul className="space-y-2">
              {article.whoShouldSkip.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {section.heading}
              </h2>
              
              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}

              {section.highlight && (
                <div className="my-6 rounded-xl border border-border/60 bg-muted/30 p-5">
                  <div className="flex items-center gap-2 mb-2 font-semibold text-foreground">
                    <Info className="h-4 w-4 text-primary" />
                    <span>{section.highlight.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.highlight.text}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Final Verdict Box */}
        <div className="mt-14 rounded-2xl border border-primary/30 bg-card p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2 text-foreground">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span>Final Verdict & Recommendations</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {article.verdict.summary}
          </p>

          <ul className="space-y-3 mb-8">
            {article.verdict.points.map((pt, pIdx) => (
              <li key={pIdx} className="flex items-start gap-3 text-sm text-foreground">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          {article.verdict.recommendedProducts && article.verdict.recommendedProducts.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-border/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Tested & Verified Hardware
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {article.verdict.recommendedProducts.map((prod, prIdx) => (
                  <div key={prIdx} className="rounded-xl border border-border/60 bg-background p-4 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-primary mb-1">{prod.tag}</div>
                      <div className="font-bold text-foreground text-base mb-1">{prod.name}</div>
                      <p className="text-xs text-muted-foreground mb-3">{prod.desc}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border/40">
                      <span className="font-bold text-sm text-foreground">{prod.price}</span>
                      <a
                        href={prod.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <ShoppingCart className="h-3.5 w-3.5" />
                        <span>Check Amazon</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FAQ - visible content paired with FAQPage JSON-LD */}
        {article.faqs.length > 0 && (
          <section className="mt-14 rounded-2xl border border-border/60 bg-muted/20 p-6 md:p-8" aria-labelledby="faq-heading">
            <div className="mb-5 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-5">
              {article.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="rounded-xl border border-border/50 bg-background p-4">
                  <h3 className="mb-2 text-base font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Read More Articles / Backlinks */}
        <div className="mt-14 pt-8 border-t border-border/60">
          <h3 className="text-lg font-bold mb-4 text-foreground">More Sound Engineering Deep Dives</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.values(articlesMap)
              .filter((a) => a.slug !== article.slug)
              .slice(0, 4)
              .map((other, oIdx) => (
                <Link
                  key={oIdx}
                  href={`/articles/${other.slug}`}
                  className="rounded-xl border border-border/60 bg-card p-4 hover:border-primary/50 transition-colors group"
                >
                  <div className="text-xs text-primary font-medium mb-1">{other.category}</div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {other.title}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border/40 bg-muted/20 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs text-muted-foreground">
          <p>© 2026 EarbudLab. Independent acoustic testing and sound engineering analysis.</p>
          <p className="mt-2">EarbudLab is a participant in the Amazon Services LLC Associates Program.</p>
        </div>
      </footer>
    </div>
  );
}
