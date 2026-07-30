'use client'

import { ExternalLink, Star } from 'lucide-react'
import { products, categories } from '@/lib/products'
import { cn } from '@/lib/utils'

const categoryLabel = (id: string) => categories.find((c) => c.id === id)?.label ?? id

function AncMeter({ score, label }: { score: number; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold leading-none">{label}</span>
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            'h-full rounded-full',
            score >= 80 ? 'bg-primary' : score >= 50 ? 'bg-accent' : 'bg-muted-foreground/50',
          )}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}

export function ComparisonTable() {
  return (
    <section aria-labelledby="comparison-heading" className="animate-fade-up">
      <div className="mb-4 flex flex-col items-center text-center">
        <h2 id="comparison-heading" className="text-balance text-xl font-bold tracking-tight md:text-2xl">
          Top Pick Comparison Matrix
        </h2>
        <p className="mt-1.5 max-w-xl text-pretty text-sm text-muted-foreground">
          Every earbud we recommend, side by side. Independently tested and ranked so you can decide in seconds.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                <th scope="col" className="px-5 py-3.5 font-semibold">Product</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Category</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Price</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Battery Life</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">ANC Strength</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Rating</th>
                <th scope="col" className="px-5 py-3.5 font-semibold text-right">Buy</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-border/70 text-sm transition-colors last:border-0 hover:bg-muted/40"
                >
                  <td className="px-5 py-4">
                    <div className="flex flex-col leading-tight">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                        {p.brand}
                      </span>
                      <span className="font-bold">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-medium">
                      {categoryLabel(p.category)}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-bold tabular-nums">${p.price}</td>
                  <td className="px-5 py-4 text-muted-foreground">{p.batteryLife}</td>
                  <td className="px-5 py-4">
                    <AncMeter score={p.ancScore} label={p.ancStrength} />
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 font-semibold">
                      <Star className="h-3.5 w-3.5 text-accent" style={{ fill: 'currentColor' }} />
                      {p.rating.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-bold text-accent-foreground shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
                    >
                      View
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
