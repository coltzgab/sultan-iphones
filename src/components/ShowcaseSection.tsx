import { Sparkles } from 'lucide-react'
import { Component as ArgentLoopInfiniteSlider } from '@/components/ui/argent-loop-infinite-slider'

export function ShowcaseSection() {
  return (
    <section className="mx-auto max-w-[1320px] px-7 py-24">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#7b2fbe] shadow-[0_10px_30px_rgba(123,47,190,.08)] backdrop-blur-lg">
            <Sparkles className="h-4 w-4" />
            Experiencia visual premium
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.06em] text-[#0f0f12] md:text-6xl">
            Passe pela vitrine como se estivesse em uma flagship da Apple.
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-black/55 md:text-lg">
          Uma secao editorial com movimento continuo, atmosfera premium e foco total nas imagens
          dos aparelhos.
        </p>
      </div>

      <ArgentLoopInfiniteSlider />
    </section>
  )
}
