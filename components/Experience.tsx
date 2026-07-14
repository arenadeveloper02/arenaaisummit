import { Briefcase, MonitorPlay, Rocket, Sparkles, Users, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { experienceItems } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

const experienceIcons: Record<string, LucideIcon> = {
  'main-stage': MonitorPlay,
  workshops: Wrench,
  showcase: Rocket,
  networking: Users,
  demos: Sparkles,
  investors: Briefcase,
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-max">
        <SectionHeading
          label="The Experience"
          title="More Than Talks — A Full Summit Experience"
          description="Every corner of the venue is designed for learning, discovery, and connection."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {experienceItems.map((item) => {
            const Icon = experienceIcons[item.id] ?? Sparkles
            return (
              <div
                key={item.id}
                className={`glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${item.span}`}
              >
                <div aria-hidden="true" className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-300 group-hover:opacity-90 ${item.gradient}`} />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
