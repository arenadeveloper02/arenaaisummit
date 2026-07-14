import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sponsors from '@/components/Sponsors'
import About from '@/components/About'
import Speakers from '@/components/Speakers'
import Agenda from '@/components/Agenda'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import RegistrationForm from '@/components/RegistrationForm'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'ARENA AI Summit 2026',
  description:
    'ARENA AI Summit 2026 brings together global AI leaders, researchers, founders, developers, investors, and enterprise decision-makers for two days of keynotes, technical sessions, live demonstrations, workshops, and networking.',
  startDate: '2026-09-17T09:00:00+05:30',
  endDate: '2026-09-18T18:00:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Bengaluru International Convention Centre',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'IN',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'ARENA AI Summit Team',
    url: 'https://arenaaisummit.example.com',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Explorer Pass',
      price: '9999',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://arenaaisummit.example.com/#tickets',
    },
    {
      '@type': 'Offer',
      name: 'Professional Pass',
      price: '19999',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://arenaaisummit.example.com/#tickets',
    },
    {
      '@type': 'Offer',
      name: 'Executive Pass',
      price: '39999',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://arenaaisummit.example.com/#tickets',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Sponsors />
        <About />
        <Speakers />
        <Agenda />
        <Experience />
        <Testimonials />
        <Pricing />
        <RegistrationForm />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
