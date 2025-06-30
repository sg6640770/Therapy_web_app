'use client'
import Image from 'next/image';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      'Learn practical tools and coping techniques to manage anxiety and chronic stress. Sessions focus on calming the nervous system and building mental resilience.',
    image: '/images/anx.png',
  },
  {
    title: 'Relationship Counseling',
    description:
      'Improve communication, resolve conflicts, and foster deeper emotional connections. Suitable for individuals or couples navigating relationship challenges.',
    image: '/images/relations.png',
  },
  {
    title: 'Trauma Recovery',
    description:
      'Heal from past experiences with a gentle, trauma-informed approach. Dr. Blake integrates mindfulness and CBT to support long-term recovery.',
    image: '/images/traumaa.png',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gray-1000 text-white" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Services & Specialties</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
<div className="w-full h-90 relative overflow-hidden rounded-t-xl">
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover"
  />
</div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{service.description}</p>
                <button className="mt-auto mx-auto px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-gray-900 transition">
  Learn More
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
