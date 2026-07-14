import type {
  AgendaDay,
  ExperienceItem,
  FAQItem,
  NavigationItem,
  PricingPlan,
  Speaker,
  Sponsor,
  Testimonial,
} from '@/lib/types'

export const navigationItems: NavigationItem[] = [
  { id: 'nav-home', label: 'Home', href: '#home' },
  { id: 'nav-speakers', label: 'Speakers', href: '#speakers' },
  { id: 'nav-agenda', label: 'Agenda', href: '#agenda' },
  { id: 'nav-tickets', label: 'Tickets', href: '#tickets' },
  { id: 'nav-faq', label: 'FAQ', href: '#faq' },
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
]

export const sponsors: Sponsor[] = [
  { id: 'openai', name: 'OpenAI' },
  { id: 'nvidia', name: 'NVIDIA' },
  { id: 'microsoft', name: 'Microsoft' },
  { id: 'google-cloud', name: 'Google Cloud' },
  { id: 'aws', name: 'AWS' },
  { id: 'anthropic', name: 'Anthropic' },
]

export const speakers: Speaker[] = [
  { id: 'rajiv-parikh', name: 'Rajiv Parikh', role: 'Growth Marketing CEO', organization: 'GTM Community Builder', topic: 'Go-to-Market Playbooks for AI Products', initials: 'RP', gradient: 'from-blue-600 to-cyan-500', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: true },
  { id: 'maya-rao', name: 'Dr. Maya Rao', role: 'Chief AI Scientist', organization: 'QuantumScale', topic: 'Opening Keynote: The Intelligence Revolution', initials: 'MR', gradient: 'from-purple-600 to-blue-500', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: true },
  { id: 'daniel-kim', name: 'Daniel Kim', role: 'Founder and CEO', organization: 'NeuralForge', topic: 'Building the Human-AI Future', initials: 'DK', gradient: 'from-fuchsia-600 to-purple-500', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: true },
  { id: 'aisha-patel', name: 'Aisha Patel', role: 'VP of Generative AI', organization: 'Nova Systems', topic: 'Building Reliable Enterprise AI Systems', initials: 'AP', gradient: 'from-cyan-600 to-emerald-500', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: true },
  { id: 'lucas-martin', name: 'Lucas Martin', role: 'Director of AI Research', organization: 'FutureMind Labs', topic: 'The Rise of Autonomous AI Agents', initials: 'LM', gradient: 'from-indigo-600 to-purple-500', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: true },
  { id: 'priya-nair', name: 'Priya Nair', role: 'Co-founder', organization: 'Responsible Intelligence Institute', topic: 'Responsible AI and Global Governance', initials: 'PN', gradient: 'from-rose-500 to-fuchsia-600', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: true },
  { id: 'ethan-williams', name: 'Ethan Williams', role: 'Head of AI Infrastructure', organization: 'CloudSphere', topic: 'AI Infrastructure at Global Scale', initials: 'EW', gradient: 'from-sky-600 to-indigo-500', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: true },
  { id: 'sofia-chen', name: 'Sofia Chen', role: 'Robotics and Embodied AI Researcher', organization: 'Independent Researcher', topic: 'Keynote: AI Beyond the Screen', initials: 'SC', gradient: 'from-emerald-600 to-cyan-500', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: true },
  { id: 'arjun-mehta', name: 'Arjun Mehta', role: 'Managing Partner', organization: 'Horizon AI Ventures', topic: 'Funding the Next AI Breakthrough', initials: 'AM', gradient: 'from-blue-600 to-purple-600', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: false },
  { id: 'hana-suzuki', name: 'Hana Suzuki', role: 'Applied ML Lead', organization: 'Kite Analytics', topic: 'Shipping ML Features Users Actually Trust', initials: 'HS', gradient: 'from-violet-600 to-sky-500', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: false },
  { id: 'omar-farouk', name: 'Omar Farouk', role: 'Principal Engineer', organization: 'DeepStack', topic: 'Evaluating LLM Systems in Production', initials: 'OF', gradient: 'from-cyan-500 to-blue-600', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: false },
  { id: 'elena-petrova', name: 'Elena Petrova', role: 'Head of AI Safety', organization: 'Sentinel Labs', topic: 'Practical Guardrails for Agentic Systems', initials: 'EP', gradient: 'from-fuchsia-500 to-indigo-600', linkedin: 'https://www.linkedin.com/', website: 'https://example.com/', featured: false },
]

export const agendaDays: AgendaDay[] = [
  {
    id: 'day-1',
    label: 'Day 1',
    date: 'September 17',
    sessions: [
      { id: 'd1-1', time: '8:00 AM', title: 'Registration and Networking Breakfast', speakers: '', type: 'Networking' },
      { id: 'd1-2', time: '9:00 AM', title: 'Opening Keynote: The Intelligence Revolution', speakers: 'Dr. Maya Rao', type: 'Keynote' },
      { id: 'd1-3', time: '10:00 AM', title: 'Building Reliable Enterprise AI Systems', speakers: 'Aisha Patel', type: 'Session' },
      { id: 'd1-4', time: '11:00 AM', title: 'Networking Break', speakers: '', type: 'Break' },
      { id: 'd1-5', time: '11:30 AM', title: 'Panel: From AI Experiments to Business Impact', speakers: 'Daniel Kim, Priya Nair, Arjun Mehta', type: 'Panel' },
      { id: 'd1-6', time: '1:00 PM', title: 'Lunch and Startup Showcase', speakers: '', type: 'Showcase' },
      { id: 'd1-7', time: '2:00 PM', title: 'The Rise of Autonomous AI Agents', speakers: 'Lucas Martin', type: 'Session' },
      { id: 'd1-8', time: '3:00 PM', title: 'Technical Workshop: Building Production-Ready RAG Systems', speakers: 'Ethan Williams', type: 'Workshop' },
      { id: 'd1-9', time: '4:30 PM', title: 'Responsible AI and Global Governance', speakers: 'Priya Nair', type: 'Session' },
      { id: 'd1-10', time: '6:00 PM', title: 'ARENA AI Summit Networking Reception', speakers: '', type: 'Networking' },
    ],
  },
  {
    id: 'day-2',
    label: 'Day 2',
    date: 'September 18',
    sessions: [
      { id: 'd2-1', time: '8:30 AM', title: 'Breakfast and Community Networking', speakers: '', type: 'Networking' },
      { id: 'd2-2', time: '9:30 AM', title: 'Keynote: AI Beyond the Screen', speakers: 'Sofia Chen', type: 'Keynote' },
      { id: 'd2-3', time: '10:30 AM', title: 'Multimodal AI in the Real World', speakers: 'Lucas Martin', type: 'Session' },
      { id: 'd2-4', time: '11:30 AM', title: 'Networking Break', speakers: '', type: 'Break' },
      { id: 'd2-5', time: '12:00 PM', title: 'AI Infrastructure at Global Scale', speakers: 'Ethan Williams', type: 'Session' },
      { id: 'd2-6', time: '1:00 PM', title: 'Lunch', speakers: '', type: 'Break' },
      { id: 'd2-7', time: '2:00 PM', title: 'Investor Panel: Funding the Next AI Breakthrough', speakers: 'Arjun Mehta', type: 'Panel' },
      { id: 'd2-8', time: '3:00 PM', title: 'Workshop: Designing Safe and Observable AI Agents', speakers: 'Aisha Patel', type: 'Workshop' },
      { id: 'd2-9', time: '4:30 PM', title: 'Closing Keynote: Building the Human-AI Future', speakers: 'Daniel Kim', type: 'Keynote' },
      { id: 'd2-10', time: '5:30 PM', title: 'Closing Remarks and Community Meetup', speakers: '', type: 'Networking' },
    ],
  },
]

export const experienceItems: ExperienceItem[] = [
  { id: 'main-stage', title: 'Main Stage', description: 'Keynotes and headline panels from the leaders defining the AI landscape.', span: 'md:col-span-2', gradient: 'from-blue-600/30 to-purple-600/20' },
  { id: 'workshops', title: 'Technical Workshops', description: 'Hands-on, instructor-led sessions on RAG, agents, and production ML.', span: '', gradient: 'from-cyan-600/30 to-blue-600/20' },
  { id: 'showcase', title: 'Startup Showcase', description: 'Discover breakout AI startups demoing live on the expo floor.', span: '', gradient: 'from-fuchsia-600/30 to-purple-600/20' },
  { id: 'networking', title: 'Executive Networking', description: 'Curated roundtables and lounges for decision-makers and founders.', span: '', gradient: 'from-indigo-600/30 to-cyan-600/20' },
  { id: 'demos', title: 'AI Product Demonstrations', description: 'See the latest models, tools, and platforms in action across the venue.', span: '', gradient: 'from-emerald-600/30 to-cyan-600/20' },
  { id: 'investors', title: 'Investor Meetings', description: 'Structured meetings connecting founders with active AI investors and funds.', span: 'md:col-span-2', gradient: 'from-purple-600/30 to-rose-600/20' },
]

export const testimonials: Testimonial[] = [
  { id: 't-kavya', name: 'Kavya Srinivasan', role: 'Head of Data Science', company: 'FinEdge Analytics', quote: 'An exceptional mix of technical depth and strategic insight. I left with ideas we could immediately apply.', initials: 'KS' },
  { id: 't-marcus', name: 'Marcus Bell', role: 'Chief Technology Officer', company: 'Streamline Robotics', quote: 'The quality of conversations was outstanding. I met founders, researchers, and enterprise leaders in one place.', initials: 'MB' },
  { id: 't-ananya', name: 'Ananya Ghosh', role: 'Product Director', company: 'HelixWorks', quote: 'One of the few conferences where the technical sessions and executive discussions were equally valuable.', initials: 'AG' },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'explorer',
    name: 'Explorer Pass',
    price: '₹9,999',
    popular: false,
    features: [
      'Access to both conference days',
      'Keynotes and panel sessions',
      'Exhibition and startup showcase',
      'Networking application',
      'Digital session recordings',
    ],
    cta: 'Choose Explorer',
  },
  {
    id: 'professional',
    name: 'Professional Pass',
    price: '₹19,999',
    popular: true,
    features: [
      'Everything in Explorer',
      'Technical workshops',
      'Reserved session seating',
      'Speaker meet-and-greet access',
      'Networking reception',
      'Certificate of participation',
    ],
    cta: 'Choose Professional',
  },
  {
    id: 'executive',
    name: 'Executive Pass',
    price: '₹39,999',
    popular: false,
    features: [
      'Everything in Professional',
      'Executive lounge access',
      'Private roundtable sessions',
      'Priority event check-in',
      'Investor and founder networking',
      'Premium dinner invitation',
    ],
    cta: 'Choose Executive',
  },
]

export const faqItems: FAQItem[] = [
  { id: 'faq-1', question: 'Who should attend ARENA AI Summit 2026?', answer: 'The summit is designed for AI researchers, engineers, founders, product leaders, investors, and enterprise decision-makers. Whether you are building AI systems, evaluating them for your organization, or investing in the ecosystem, the program includes dedicated tracks for both technical and strategic audiences.' },
  { id: 'faq-2', question: 'Where is the summit taking place?', answer: 'ARENA AI Summit 2026 takes place at the Bengaluru International Convention Centre in Bengaluru, India, on September 17–18, 2026. Detailed venue directions, parking information, and recommended accommodation will be shared with confirmed attendees.' },
  { id: 'faq-3', question: 'Are workshop sessions included with every ticket?', answer: 'Technical workshops are included with the Professional and Executive passes. Explorer Pass holders have full access to keynotes, panels, and the exhibition floor, and can upgrade to a workshop-inclusive pass at any time before the event, subject to availability.' },
  { id: 'faq-4', question: 'Will session recordings be available?', answer: 'Yes. All ticket tiers include digital recordings of keynotes and panel sessions, delivered within two weeks of the summit. Workshop recordings are available to Professional and Executive pass holders.' },
  { id: 'faq-5', question: 'Can I transfer my ticket to another person?', answer: 'Tickets can be transferred to a colleague free of charge up to 14 days before the event. Simply contact our team with the new attendee\u2019s details and we will reissue the registration.' },
  { id: 'faq-6', question: 'Are group discounts available?', answer: 'Yes. Teams of five or more receive a 10% discount, and teams of ten or more receive 15%. Contact our tickets team with your group size and preferred pass tier for a tailored quote.' },
  { id: 'faq-7', question: 'Will meals be provided?', answer: 'Breakfast, lunch, and refreshments are provided on both days for all attendees. Vegetarian, vegan, and other dietary requirements can be indicated during registration and will be accommodated at the venue.' },
  { id: 'faq-8', question: 'How can my company become a sponsor?', answer: 'We offer sponsorship packages covering the main stage, workshops, the startup showcase, and networking experiences. Email partners@aisummit2026.example with your goals and our partnerships team will share the sponsorship prospectus.' },
  { id: 'faq-9', question: 'Is the venue accessible?', answer: 'Yes. The Bengaluru International Convention Centre is wheelchair accessible with step-free routes, accessible restrooms, and reserved seating areas. If you have specific accessibility needs, choose the Accessibility inquiry type on our contact form and we will make arrangements in advance.' },
  { id: 'faq-10', question: 'What is the cancellation policy?', answer: 'Full refunds are available up to 60 days before the event, and 50% refunds up to 30 days before. Within 30 days of the event, tickets are non-refundable but remain fully transferable to another attendee.' },
]
