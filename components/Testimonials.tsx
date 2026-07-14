import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-max">
        <SectionHeading
          label="Testimonials"
          title="What Attendees Say"
          description="Feedback from previous technology events organized by the ARENA summit team."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="glass flex flex-col rounded-2xl p-6 transition duration-300 hover:border-cyan-300">
              <div className="flex gap-1" role="img" aria-label="Rated five out of five stars">
                {['s1', 's2', 's3', 's4', 's5'].map((starId) => (
                  <Star key={`${testimonial.id}-${starId}`} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
