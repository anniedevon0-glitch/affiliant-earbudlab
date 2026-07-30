'use client'

import Image from 'next/image'
import { Check, X, ExternalLink, ChevronDown, FlaskConical } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/products'
import { StarRating } from '@/components/star-rating'
import { cn } from '@/lib/utils'

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <article
      className="animate-fade-up group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Rank ribbon */}
      <div className="absolute left-5 top-5 z-10 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg">
          #{product.rank}
        </span>
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
          {product.badge}
        </span>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:p-7">
        {/* Image */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-muted/60">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--color-primary)/12%,transparent_70%)]" />
          <Image
            src={product.image || '/placeholder.svg'}
            alt={`${product.brand} ${product.name} wireless earbuds`}
            width={320}
            height={320}
            className="relative z-[1] h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105 md:h-52"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{product.brand}</p>
              <h3 className="text-pretty text-xl font-bold leading-tight md:text-2xl">{product.name}</h3>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold tabular-nums">${product.price}</p>
              <p className="text-xs text-muted-foreground">on Amazon</p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-sm font-semibold">{product.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount.toLocaleString()} reviews)
            </span>
          </div>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{product.summary}</p>

          {/* Real-world test result */}
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3">
            <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-primary">{product.testResult.scenario}:</span>{' '}
              <span className="text-muted-foreground">{product.testResult.result}</span>
            </p>
          </div>

          {/* Specs */}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {product.specs.map((spec) => (
              <div key={spec.label} className="rounded-xl border border-border bg-muted/40 px-3 py-2">
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{spec.label}</p>
                <p className="text-sm font-semibold leading-tight">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Pros / cons toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-5 flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <span>{open ? 'Hide pros & cons' : 'Show pros & cons'}</span>
            <ChevronDown className={cn('h-4 w-4 transition-transform duration-300', open && 'rotate-180')} />
          </button>

          <div
            className={cn(
              'grid overflow-hidden transition-all duration-300 ease-out',
              open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
            )}
          >
            <div className="min-h-0">
              <div className="grid gap-4 sm:grid-cols-2">
                <ul className="space-y-1.5">
                  {product.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1.5">
                  {product.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-md transition-all duration-200 hover:brightness-105 hover:shadow-lg active:scale-[0.98]"
          >
            Buy on Amazon
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}
