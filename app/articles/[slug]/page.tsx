import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  ArrowLeft, 
  CheckCircle, 
  ShoppingCart, 
  Info, 
  ShieldAlert
} from 'lucide-react';

interface ArticleData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  tldr: string;
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

  return {
    title: `${article.title} — EarbudLab`,
    description: article.subtitle,
    openGraph: {
      title: `${article.title} — EarbudLab`,
      description: article.subtitle,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author]
    }
  };
}

export default async function DynamicArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesMap[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
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
