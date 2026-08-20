'use client'

import { Star, Zap, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { ComparisonTable } from '@/components/comparison-table'
import { ProductReviews } from '@/components/product-reviews'
import { CommissionCalculator } from '@/components/commission-calculator'
import { BuyingGuide } from '@/components/buying-guide'
import { FaqSection } from '@/components/faq-section'
import { ReviewerBio } from '@/components/reviewer-bio'
import { EarbudMatcher } from '@/components/earbud-matcher'

const engineeringArticles = [
  {
    slug: 'the-25-anc-trap',
    title: 'The $25 ANC Trap: Sound Engineering Reality vs Marketing Hype',
    description: 'Why cheap active noise cancellation often produces hiss and poor isolation, and what BOM constraints mean for budget ANC.',
    readTime: '6 min read',
    tag: 'ANC & Acoustics',
  },
  {
    slug: 'giant-drivers-vs-tuning',
    title: '13mm vs 10mm Drivers: Why Diaphragm Tuning Beats Raw Size',
    description: 'Why larger dynamic driver diameters do not guarantee better bass, and how acoustic chamber damping controls real response.',
    readTime: '5 min read',
    tag: 'Driver Physics',
  },
  {
    slug: 'battery-degradation-explained',
    title: 'Battery Degradation in Budget TWS: Why One Earbud Dies First',
    description: 'The chemistry behind coin-cell degradation, primary vs secondary Bluetooth draining, and cycle-life preservation.',
    readTime: '7 min read',
    tag: 'Battery Life',
  },
  {
    slug: 'gaming-latency-codecs-guide',
    title: 'Gaming Latency Breakdown: AAC vs aptX LL vs 50ms Gaming Mode',
    description: 'Bluetooth audio buffer pipelines, human auditory latency thresholds, and measuring real round-trip audio delay.',
    readTime: '6 min read',
    tag: 'Latency & Codecs',
  },
  {
    slug: 'fit-and-seal-acoustic-truth',
    title: 'Acoustic Seal & Bass Response: The Frequency Physics of Ear Tips',
    description: 'Why a 0.5mm air leak destroys sub-bass under 100Hz, and how tip material choice transforms measured sound profiles.',
    readTime: '5 min read',
    tag: 'Fit & Ergonomics',
  },
  {
    slug: 'the-great-waterproof-earbud-test',
    title: 'The Great Waterproof Test: Real-World Sweat & IPX Ratings',
    description: 'Why salt-water sweat corrodes IPX7 acoustic meshes, and how conformal coating prevents gym-induced earbud failure.',
    readTime: '6 min read',
    tag: 'Durability & IPX',
  },
]

export default function Page() {
  return (
    <main className="min-h-dvh">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Zap className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-tight">EarbudLab</p>
              <p className="text-[11px] text-muted-foreground">Expert earbud reviews</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 md:px-6 md:pt-14">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Star className="h-3.5 w-3.5 text-accent" style={{ fill: 'currentColor' }} />
            Independent Audio Engineering & Reviews
          </span>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Real Earbud Testing.{' '}
            <span className="text-primary">No Fluff.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
            We measure actual frequency response, ANC attenuation, microphone clarity, and battery cycle longevity under $100.
          </p>
        </div>
      </section>

      {/* Earbud Matcher */}
      <div className="mx-auto max-w-6xl px-4 pt-8 md:px-6">
        <EarbudMatcher />
      </div>

      {/* Sound Engineering Teardowns & Guides */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="mb-6 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <BookOpen className="h-4 w-4" />
            <span>Sound Engineering Guides</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Acoustic Teardowns & Technical Deep-Dives
          </h2>
          <p className="text-sm text-muted-foreground">
            Objective sound engineering analyses, hardware constraints, and audio science to help you choose the right gear.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringArticles.map((art) => (
            <Link
              key={art.slug}
              href={`/articles/${art.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="rounded-md bg-secondary/80 px-2 py-0.5 font-medium text-foreground">
                    {art.tag}
                  </span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {art.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {art.description}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                <span>Read analysis</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <ComparisonTable />
      </div>

      {/* Product Reviews */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <ProductReviews />
      </div>

      {/* Buying Guide */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <BuyingGuide />
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <FaqSection />
      </div>

      {/* Reviewer Bio */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <ReviewerBio />
      </div>

      {/* Commission Calculator */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <CommissionCalculator />
      </div>
    </main>
  )
}
