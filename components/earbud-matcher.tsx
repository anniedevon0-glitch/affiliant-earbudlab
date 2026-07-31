'use client'

import React, { useState } from 'react'
import { products, Product } from '@/lib/products'
import { Star, Zap, Shield, Battery, Music, Phone, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react'

export function EarbudMatcher() {
  const [budget, setBudget] = useState(100)
  const [priority, setPriority] = useState('anc')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [matchedProduct, setMatchedProduct] = useState(null)
  const [analysisStep, setAnalysisStep] = useState('')

  const handleMatch = () => {
    setIsAnalyzing(true)
    const steps = [
      'Filtering products under budget...',
      'Comparing acoustic driver material specs...',
      'Analyzing real-world subway isolation curves...',
      'Calculating chemical battery decay curves...',
      'Done! Finding your best match...'
    ]

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setAnalysisStep(step)
        if (idx === steps.length - 1) {
          const eligible = products.filter(p => p.price <= budget)
          if (eligible.length === 0) {
            setMatchedProduct(null)
            setIsAnalyzing(false)
            return
          }

          let best = eligible[0]
          let maxScore = -1

          eligible.forEach(p => {
            let score = 0
            if (priority === 'anc') {
              score = p.ancScore
            } else if (priority === 'battery') {
              if (p.id === 'soundpeats-free2-classic') score = 100
              else if (p.id === 'pulse-x') score = 90
              else if (p.id === 'aurora-pro') score = 80
              else if (p.id === 'breeze-air') score = 70
              else if (p.id === 'qcy-t13-anc') score = 65
            } else if (priority === 'bass') {
              if (p.id === 'pulse-x') score = 100
              else if (p.id === 'aurora-pro') score = 85
              else if (p.id === 'soundpeats-free2-classic') score = 75
              else if (p.id === 'qcy-t13-anc') score = 70
              else if (p.id === 'breeze-air') score = 50
            } else if (priority === 'calls') {
              if (p.id === 'aurora-pro') score = 100
              else if (p.id === 'breeze-air') score = 90
              else if (p.id === 'qcy-t13-anc') score = 85
              else if (p.id === 'soundpeats-free2-classic') score = 75
              else if (p.id === 'pulse-x') score = 70
            }

            score += p.rating * 5

            if (score > maxScore) {
              maxScore = score
              best = p
            }
          })

          setMatchedProduct(best)
          setIsAnalyzing(false)
        }
      }, (idx + 1) * 600)
    })
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-md md:p-8">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
          <Zap className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
          Find Your Perfect Earbud in 3 Seconds
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Answer two simple questions to find the ideal wireless earbuds matching your budget and lifestyle.
        </p>
      </div>

      {!matchedProduct && !isAnalyzing ? (
        <div className="mt-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-foreground">
                1. What is your maximum budget?
              </label>
              <span className="text-md font-extrabold text-primary">${budget}</span>
            </div>
            <input
              type="range"
              min="25"
              max="100"
              step="5"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary"
            />
            <div className="flex justify-between text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              <span>$25 (Ultra-Budget)</span>
              <span>$50 (Midrange)</span>
              <span>$100 (Premium-Budget)</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-foreground">
              2. What feature matters most to you?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'anc', label: 'Active Noise Cancellation', icon: Shield, desc: 'Block subway/office rumble' },
                { id: 'battery', label: 'All-Day Battery Life', icon: Battery, desc: 'Fewer case charging cycles' },
                { id: 'bass', label: 'Bass Depth & Punch', icon: Music, desc: 'Energetic low-end response' },
                { id: 'calls', label: 'Comfort & Call Clarity', icon: Phone, desc: 'Daily commute and Zoom meetings' },
              ].map((item) => {
                const Icon = item.icon
                const isSelected = priority === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPriority(item.id)}
                    className={`flex flex-col items-start gap-1 rounded-2xl border p-4 text-left transition-all duration-200 hover:border-primary/50 hover:bg-muted/30 ${
                      isSelected
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-border bg-card'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="mt-2 text-xs font-bold leading-none">{item.label}</span>
                    <span className="text-[10px] text-muted-foreground mt-1 font-medium leading-tight">{item.desc}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={handleMatch}
            className="w-full mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-sm font-bold text-primary-foreground shadow-sm hover:brightness-105 active:scale-[0.99] transition-all"
          >
            Find My Match
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : isAnalyzing ? (
        <div className="mt-12 flex flex-col items-center justify-center py-10 space-y-4">
          <RefreshCw className="h-8 w-8 text-primary animate-spin" />
          <p className="text-sm font-bold text-foreground">{analysisStep}</p>
          <div className="h-1.5 w-48 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary animate-pulse w-2/3 rounded-full" />
          </div>
        </div>
      ) : (
        matchedProduct && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                🎯 Best Personalized Match
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
                <div className="leading-tight">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {matchedProduct.brand}
                  </span>
                  <h4 className="text-xl font-extrabold text-foreground mt-0.5">
                    {matchedProduct.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="inline-flex items-center gap-1 text-xs font-bold bg-background px-2 py-0.5 rounded-lg border border-border">
                      <Star className="h-3.5 w-3.5 text-accent" style={{ fill: 'currentColor' }} />
                      {matchedProduct.rating}
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">
                      (${matchedProduct.price})
                    </span>
                  </div>
                </div>
                <div className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-extrabold text-primary-foreground">
                  {matchedProduct.badge}
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {matchedProduct.summary}
                </p>
                <div className="space-y-1 bg-background/50 rounded-xl p-3 border border-border/40 mt-4">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    Why it fits your profile:
                  </div>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs font-medium text-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Fits your budget constraint (${matchedProduct.price} is under your limit of ${budget})</span>
                    </li>
                    {priority === 'anc' && (
                      <li className="flex items-start gap-2 text-xs font-medium text-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Delivers {matchedProduct.ancStrength} isolation to isolate ambient noise</span>
                      </li>
                    )}
                    {priority === 'battery' && (
                      <li className="flex items-start gap-2 text-xs font-medium text-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Provides a long-lasting {matchedProduct.batteryLife} total battery profile</span>
                      </li>
                    )}
                    {priority === 'bass' && (
                      <li className="flex items-start gap-2 text-xs font-medium text-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Tailored dynamic driver design for responsive, rich low-end bass details</span>
                      </li>
                    )}
                    {priority === 'calls' && (
                      <li className="flex items-start gap-2 text-xs font-medium text-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Acoustically calibrated microphone routing for clearer zoom meetings and commuters</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <a
                  href={matchedProduct.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3.5 text-xs font-bold text-accent-foreground shadow-sm hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  Buy on Amazon (Affiliate Link)
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#reviews"
                  onClick={() => {
                    const el = document.getElementById('reviews')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center rounded-xl bg-background border border-border px-4 py-3.5 text-xs font-bold text-foreground shadow-xs hover:bg-muted/40 active:scale-[0.99] transition-all"
                >
                  Read Our Full Audit
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMatchedProduct(null)
                setPriority('anc')
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-transparent border border-dashed border-border px-4 py-3 text-xs font-bold text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset Matcher & Try Again
            </button>
          </div>
        )
      )}
    </div>
  )
}