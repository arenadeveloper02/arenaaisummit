import { Cpu, Mic, Sparkles, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

interface AboutFeature {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

const features: AboutFeature[] = [
  { id: 'keynotes', icon: Mic, title: 'Visionary Keynotes', description: 'Hear from leaders shaping the future of artificial intelligence.' },
  { id: 'sessions', icon: Cpu, title: 'Practical AI Sessions', description: 'Learn how organizations are deploying generative AI, agents, automation, and machine learning.' },
  { id: 'networking', icon: Users, title: 'Meaningful Networking', description: 'Connect with founders, engineers, executives, researchers, and investors.' },
  { id: 'innovation', icon: Sparkles, title: 'Live Innovation', description: 'Experience product launches, demonstrations, startup showcases, and interactive labs.' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-max">
        <SectionHeading
          label="About the Summit"
          title="Two Days at the Center of the AI Conversation"
        />
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-base leading-relaxed text-slate-300">
          <p>
            ARENA AI Summit 2026 brings together global AI leaders, researchers, founders, developers, investors, and enterprise decision-makers for two days of keynotes, technical sessions, live demonstrations, workshops, and networking.
          </p>
          <p>
            Whether you are shipping AI products, scaling machine learning infrastructure, or setting AI strategy for your organization, the program is built to deliver depth, credibility, and connections you can act on immediately.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.id} className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-cyan-300 transition group-hover:from-blue-500/30 group-hover:to-purple-600/30">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
