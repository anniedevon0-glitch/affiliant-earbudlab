import { BatteryFull, Volume2, Waves, BluetoothConnected, Fingerprint, Wallet } from 'lucide-react'

const factors = [
  {
    icon: Volume2,
    title: 'Sound Signature',
    body: 'Decide between a neutral, balanced tuning for detail or a bass-forward profile for workouts and commutes. Look for support for AAC or aptX codecs for higher-quality streaming.',
  },
  {
    icon: Waves,
    title: 'Noise Cancellation',
    body: 'True ANC actively silences engine hum and office chatter. Under $50 it is rare but improving — under $100 you can expect genuinely effective adaptive ANC.',
  },
  {
    icon: BatteryFull,
    title: 'Battery Life',
    body: 'Aim for at least 6–8 hours per charge plus a case that triples it. Fast charging that delivers an hour of playback in 5–10 minutes is a huge convenience.',
  },
  {
    icon: Fingerprint,
    title: 'Fit & Comfort',
    body: 'A secure seal is critical for both sound and noise isolation. Multiple ear-tip sizes, a lightweight shell, and an IPX4+ rating for sweat and rain make a real difference.',
  },
  {
    icon: BluetoothConnected,
    title: 'Connectivity',
    body: 'Bluetooth 5.1 or newer means stable connections and lower latency. Multipoint pairing lets you switch between your phone and laptop without re-pairing.',
  },
  {
    icon: Wallet,
    title: 'Value For Money',
    body: 'The most expensive pair is rarely the smartest buy. Match the feature set to how you actually listen — you can get 90% of the flagship experience for a fraction of the cost.',
  },
]

export function BuyingGuide() {
  return (
    <section id="buying-guide" className="scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-primary">The complete guide</span>
        <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
          How to Choose Wireless Earbuds
        </h2>
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Six factors separate a great pair from a frustrating one. Weigh these before you buy so you get the right
          earbuds for how you actually listen.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {factors.map((factor, i) => {
          const Icon = factor.icon
          return (
            <article
              key={factor.title}
              className="animate-fade-up rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{factor.title}</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">{factor.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
