import { BadgeCheck, Train, Building2, Dumbbell, Waves } from 'lucide-react'

const testConditions = [
  { icon: Train, label: 'Subway & commute' },
  { icon: Building2, label: 'Open office' },
  { icon: Dumbbell, label: 'Gym & running' },
  { icon: Waves, label: 'ANC & sound curve' },
]

export function ReviewerBio() {
  return (
    <section aria-labelledby="reviewer-heading" className="animate-fade-up">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="grid gap-6 p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-8">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-3xl font-extrabold text-primary-foreground shadow-md">
                Dev
              </div>
              <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-accent text-accent-foreground shadow-sm">
                <BadgeCheck className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
                <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                Meet the Reviewer
              </span>
              <h2 id="reviewer-heading" className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
                Dev — Senior Sound Engineer &amp; Tech Reviewer
              </h2>
              <p className="text-sm font-medium text-primary">8+ years of professional audio tuning experience</p>
            </div>

            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Every earbud on EarbudLab is <strong className="text-foreground">personally and rigorously tested</strong>{' '}
              under real-world conditions — never spec sheets alone. Dev measures each pair across daily commutes, busy
              offices, and intense workouts to verify its true sound curve and active noise cancellation (ANC)
              performance before it earns a recommendation.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {testConditions.map((c) => {
                const Icon = c.icon
                return (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {c.label}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
