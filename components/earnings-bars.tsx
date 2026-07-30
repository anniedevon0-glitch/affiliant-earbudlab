'use client'

import { useEffect, useState } from 'react'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Gentle growth curve so the chart tells a "scaling" story.
const GROWTH = [0.62, 0.68, 0.74, 0.79, 0.85, 0.9, 0.94, 0.97, 1, 1.05, 1.12, 1.2]

export function EarningsBars({ monthly }: { monthly: number }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const values = GROWTH.map((g) => monthly * g)
  const max = Math.max(...values, 1)

  return (
    <div>
      <div className="flex items-end justify-between gap-1.5" style={{ height: 176 }}>
        {values.map((v, i) => {
          const pct = mounted ? Math.max((v / max) * 100, 2) : 2
          return (
            <div key={i} className="group/bar flex h-full flex-1 flex-col items-center justify-end gap-1.5">
              <div className="relative flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-t-md bg-primary/85 transition-all duration-700 ease-out group-hover/bar:bg-primary"
                  style={{ height: `${pct}%`, transitionDelay: `${i * 45}ms` }}
                >
                  <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-semibold text-background opacity-0 transition-opacity duration-200 group-hover/bar:opacity-100">
                    ${Math.round(v).toLocaleString()}
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-medium text-muted-foreground">{MONTHS[i]}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
