'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-[#0e1a1b] py-20 px-6 text-white" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Dr. Serena Blake</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Dr. Blake's Image */}
          <div className="shrink-0">
            <Image
              src="/images/dr_serena.jpg"
              alt="Dr. Serena Blake"
              width={280}
              height={350}
              className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Dr. Blake's Bio */}
          <div className="text-base leading-relaxed space-y-5 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold">Hi, I’m Dr. Serena Blake</h3>

            <p>
              I’m a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with over eight years of experience and more than 500 client sessions.
              I blend evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety,
              strengthen relationships, and heal from trauma.
            </p>

            <p>
              Whether you meet me in my Maplewood Drive office or connect virtually via Zoom, my goal is to create a safe, supportive space for you to grow and thrive.
            </p>

            <div className="text-sm bg-white/10 border border-white/20 rounded-lg p-4 space-y-1">
              <p><strong>📍 Office:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
              <p><strong>🏢 In-person:</strong> Tue & Thu, 10 AM–6 PM</p>
              <p><strong>💻 Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
