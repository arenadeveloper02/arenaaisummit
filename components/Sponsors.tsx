import { sponsors } from '@/lib/data'

export default function Sponsors() {
  return (
    <section aria-label="Partners and sponsors" className="border-y border-slate-200 bg-white py-12">
      <div className="container-max">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted by Industry Leaders
        </p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((sponsor) => (
            <li key={sponsor.id} className="flex items-center justify-center">
              <span className="cursor-default text-lg font-bold tracking-tight text-slate-400 transition duration-300 hover:text-slate-800">
                {sponsor.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
