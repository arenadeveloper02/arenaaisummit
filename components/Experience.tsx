import Image from 'next/image'
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

const experienceImages: Record<string, string> = {
  'main-stage': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80',
  workshops: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
  showcase: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  networking: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  demos: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
  investors: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
}

const fallbackImage =
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80'

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
            const image = experienceImages[item.id] ?? fallbackImage
            return (
              <div
                key={item.id}
                className={`glass group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300 ${item.span}`}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
