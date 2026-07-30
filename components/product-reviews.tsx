import { ShieldCheck } from 'lucide-react'
import { products, categories } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

export function ProductReviews() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <ShieldCheck className="h-4 w-4" />
          Independently tested &amp; ranked
        </div>
        <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
          The Best Wireless Earbuds, By Budget
        </h2>
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          We spent 60+ hours testing sound quality, noise cancellation, comfort, and battery life. Here are our top
          picks across two price tiers for 2026.
        </p>
      </div>

      {categories.map((category) => {
        const items = products.filter((p) => p.category === category.id)
        return (
          <section key={category.id} className="space-y-6">
            <div className="flex flex-col gap-1.5 border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">{category.label}</h3>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">{category.blurb}</p>
            </div>
            <div className="space-y-6">
              {items.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </section>
        )
      })}

      <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
        Disclosure: As an Amazon Associate we earn from qualifying purchases. Prices and availability are accurate as
        of the publish date and subject to change.
      </p>
    </div>
  )
}
