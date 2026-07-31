'use client'

import { Star, Zap, FlaskConical } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { ComparisonTable } from '@/components/comparison-table'
import { ProductReviews } from '@/components/product-reviews'
import { CommissionCalculator } from '@/components/commission-calculator'
import { BuyingGuide } from '@/components/buying-guide'
import { FaqSection } from '@/components/faq-section'
import { ReviewerBio } from '@/components/reviewer-bio'
import { EarbudMatcher } from '@/components/earbud-matcher'

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
            Trusted by 40,000+ readers
          </span>
          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            The Best Wireless Earbuds, Rigorously Tested
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Hands-on reviews of the top wireless earbuds under $100 and under $50 &mdash; each one personally tested on
            subways, in offices, and at the gym to verify real-world sound and noise cancellation.
          </p>
          <a
            href="#reviews"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all duration-200 hover:brightness-105 hover:shadow-lg active:scale-[0.98]"
          >
            See the Top Picks
          </a>
        </div>

        {/* Interactive personalized product matcher */}
        <div className="mt-12">
          <EarbudMatcher />
        </div>

        {/* Comparison matrix directly under the hero CTA */}
        <div className="mt-16">
          <ComparisonTable />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 md:px-6 md:py-12">
        <ProductReviews />
      </section>

      {/* Buying Guide */}
      <section className="border-t border-border/70 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <BuyingGuide />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <FaqSection />
        </div>
      </section>

      {/* Meet the Reviewer */}
      <section className="border-t border-border/70 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <ReviewerBio />
        </div>
      </section>

      {/* Affiliate Business Simulation Hub â isolated from the consumer buying journey */}
      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
              <FlaskConical className="h-3.5 w-3.5 text-primary" />
              For creators &amp; site owners
            </span>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight md:text-3xl">
              Affiliate Business Simulation Hub
            </h2>
            <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
              A showcase sandbox demonstrating the affiliate business model behind this site. Not a product for
              shoppers &mdash; model hypothetical commission earnings from traffic, conversion, and payout assumptions.
            </p>
          </div>
          <CommissionCalculator />
        </div>
      </section>

      <footer className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-muted-foreground md:px-6">
          &copy; {new Date().getFullYear()} EarbudLab. Reviews are editorially independent. This page contains affiliate
          links.
        </div>
      </footer>
    </main>
  )
}
