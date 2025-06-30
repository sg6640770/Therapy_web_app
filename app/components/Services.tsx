'use client'
import Image from 'next/image';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description: 'Learn practical tools and coping techniques to manage anxiety and chronic stress. Sessions focus on calming the nervous system and building mental resilience.',
    image: '/images/anxiety.png',
  },
  {
    title: 'Relationship Counseling',
    description: 'Improve communication, resolve conflicts, and foster deeper emotional connections. Suitable for individuals or couples navigating relationship challenges.',
    image: '/images/relation.png',
  },
  {
    title: 'Trauma Recovery',
    description: 'Heal from past experiences with a gentle, trauma-informed approach. Dr. Blake integrates mindfulness and CBT to support long-term recovery.',
    image: '/images/trauma.png',
  },
]

export default function Services() {
  return (
    <section className="py-16 px-4 bg-gray-1000 text-white text-lg" id="services">
      <div className="max-w-6xl text-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Services & Specialties</h2>
        <div className="grid md:grid-cols-3  gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
              <div className="relative w-full h-48 mb-4">
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover rounded-md"
  />
</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              </div>
              <button className="mt-auto border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
