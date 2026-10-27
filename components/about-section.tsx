import { BadgeCheck } from 'lucide-react'

const services = [
  'Affiliate marketing and account management (Amazon, ShopMy, LTK Shop)',
  'E-commerce product research and promotion',
  'Social media management and content marketing',
  'Blogging and SEO',
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="animate-fade-up">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="p-6 md:p-8">
          <div className="flex flex-col items-start gap-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <BadgeCheck className="h-3.5 w-3.5 text-primary" />
              About the Freelancer
            </span>
            <h2 id="about-heading" className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
              About the Freelancer Behind EarbudLab
            </h2>
            <p className="text-lg font-bold tracking-tight text-foreground">
              Syed Moizam Ali Shah — Freelancer
            </p>
            <p className="text-sm font-medium text-primary">Freelance Digital Marketing &amp; E-Commerce Specialist</p>
          </div>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
            EarbudLab is run by Syed Moizam Ali Shah, an independent freelancer who provides digital marketing, e-commerce, and social media management services to clients in the United States.
          </p>

          <p className="mt-5 text-sm font-semibold text-foreground">Freelance services:</p>
          <ul className="mt-2 space-y-1.5">
            {services.map((service) => (
              <li key={service} className="text-sm leading-relaxed text-muted-foreground">
                {service}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm font-medium text-foreground">
            Available for freelance projects — feel free to get in touch for work.
          </p>
        </div>
      </div>
    </section>
  )
}
