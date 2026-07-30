'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Are wireless earbuds under $50 actually any good?',
    a: 'Absolutely. Budget earbuds have improved dramatically — picks like the SoundPEATS Free2 Classic and QCY T13 ANC offer stable Bluetooth, long battery life, and even active noise cancellation. You give up some polish and codec support versus premium models, but the core experience is excellent for the price.',
  },
  {
    q: 'Do I really need active noise cancellation (ANC)?',
    a: 'It depends on where you listen. If you commute, fly, or work in a noisy environment, ANC is transformative. If you mostly listen at home or need to stay aware of your surroundings, a good passive seal with transparency mode may be all you need — and it saves money.',
  },
  {
    q: 'How long should the battery last?',
    a: 'Aim for at least 6–8 hours of playback per charge, with a case that provides 2–3 full recharges for 24–36 hours total. Fast charging is a bonus: many models give an hour or more of listening from just 5–10 minutes in the case.',
  },
  {
    q: 'What does the IPX rating mean?',
    a: 'IPX ratings measure water resistance. IPX4 handles sweat and light rain, making it fine for workouts. IPX5 and IPX6 add resistance to stronger water jets. None of these ratings mean the earbuds are safe for swimming or full submersion.',
  },
  {
    q: 'How does EarbudLab make money?',
    a: 'We earn a commission when you buy through our Amazon affiliate links, at no extra cost to you. Our rankings are editorially independent and based on hands-on testing — we only recommend products we would use ourselves.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-primary">Questions &amp; answers</span>
        <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">Frequently Asked Questions</h2>
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Everything you need to know before picking your next pair of wireless earbuds.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-pretty text-sm font-semibold md:text-base">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300',
                    isOpen && 'rotate-180 text-primary',
                  )}
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="min-h-0">
                  <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
