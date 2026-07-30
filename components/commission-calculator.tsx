'use client'

import { useState } from 'react'
import { TrendingUp, Users, MousePointerClick, Tag, Percent, Sparkles } from 'lucide-react'
import { EarningsBars } from '@/components/earnings-bars'

type Field = {
  key: string
  label: string
  icon: typeof Users
  min: number
  max: number
  step: number
  prefix?: string
  suffix?: string
}

const FIELDS: Field[] = [
  { key: 'traffic', label: 'Monthly traffic', icon: Users, min: 500, max: 200000, step: 500, suffix: 'visits' },
  { key: 'conversion', label: 'Conversion rate', icon: MousePointerClick, min: 0.5, max: 15, step: 0.1, suffix: '%' },
  { key: 'price', label: 'Avg. product price', icon: Tag, min: 10, max: 500, step: 5, prefix: '$' },
  { key: 'commission', label: 'Commission rate', icon: Percent, min: 1, max: 25, step: 0.5, suffix: '%' },
]

function formatMoney(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export function CommissionCalculator() {
  const [values, setValues] = useState<Record<string, number>>({
    traffic: 25000,
    conversion: 2.5,
    price: 79,
    commission: 8,
  })

  const set = (key: string, val: number) => setValues((v) => ({ ...v, [key]: val }))

  const sales = values.traffic * (values.conversion / 100)
  const monthly = sales * values.price * (values.commission / 100)
  const yearly = monthly * 12
  const perSale = values.price * (values.commission / 100)

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
      {/* Inputs */}
      <div className="animate-fade-up rounded-3xl border border-border bg-card p-6 shadow-sm md:p-7">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" />
          Passive income estimator
        </div>
        <h2 className="mt-1 text-balance text-2xl font-bold tracking-tight">Commission Calculator</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Adjust the levers below to model your affiliate earnings in real time.
        </p>

        <div className="mt-6 space-y-6">
          {FIELDS.map((f) => {
            const Icon = f.icon
            const val = values[f.key]
            const display = f.key === 'traffic' ? val.toLocaleString() : val
            return (
              <div key={f.key}>
                <div className="flex items-center justify-between">
                  <label htmlFor={f.key} className="flex items-center gap-2 text-sm font-medium">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {f.label}
                  </label>
                  <span className="rounded-lg bg-muted px-2.5 py-1 text-sm font-semibold tabular-nums">
                    {f.prefix}
                    {display}
                    {f.suffix ? ` ${f.suffix}` : ''}
                  </span>
                </div>
                <input
                  id={f.key}
                  type="range"
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={val}
                  onChange={(e) => set(f.key, Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
                  style={{
                    background: `linear-gradient(to right, var(--color-primary) ${
                      ((val - f.min) / (f.max - f.min)) * 100
                    }%, var(--color-muted) ${((val - f.min) / (f.max - f.min)) * 100}%)`,
                  }}
                />
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-muted/50 p-4 text-center">
          <div>
            <p className="text-xs text-muted-foreground">Est. monthly sales</p>
            <p className="text-lg font-bold tabular-nums">{Math.round(sales).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Earnings / sale</p>
            <p className="text-lg font-bold tabular-nums">{formatMoney(perSale)}</p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div
        className="animate-fade-up rounded-3xl border border-border bg-card p-6 shadow-sm md:p-7"
        style={{ animationDelay: '90ms' }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
            <p className="text-sm font-medium text-primary">Monthly earnings</p>
            <p className="mt-1 text-3xl font-extrabold tabular-nums text-foreground">{formatMoney(monthly)}</p>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/15 p-5">
            <div className="flex items-center gap-1.5 text-sm font-medium text-accent-foreground/90">
              <TrendingUp className="h-4 w-4" />
              Yearly potential
            </div>
            <p className="mt-1 text-3xl font-extrabold tabular-nums text-foreground">{formatMoney(yearly)}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold">12-month projection</p>
            <p className="text-xs text-muted-foreground">Assumes steady audience growth</p>
          </div>
          <EarningsBars monthly={monthly} />
        </div>

        <p className="mt-5 text-pretty text-xs leading-relaxed text-muted-foreground">
          Estimates are illustrative and depend on niche, seasonality, and program terms. Use them as a planning
          baseline, not a guarantee.
        </p>
      </div>
    </div>
  )
}
