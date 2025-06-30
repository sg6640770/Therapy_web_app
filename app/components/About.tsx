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
              width={320}
              height={400}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Dr. Blake's Bio */}
          <div className="text-base leading-relaxed space-y-6 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Hi, I’m Dr. Serena Blake, PsyD</h3>

            <p>
              I'm a licensed clinical psychologist based in Los Angeles with over eight years of experience and more than 500 client sessions.
              My approach blends evidence-based techniques like Cognitive Behavioral Therapy (CBT) and mindfulness with warm, compassionate care.
            </p>

            <p>
              I specialize in helping individuals overcome anxiety, navigate relationship challenges, and recover from trauma. Whether we meet in-person at my Los Angeles office or virtually via Zoom, I strive to create a safe, supportive environment for healing and growth.
            </p>

            <div className="text-sm bg-white/10 border border-white/20 rounded-lg p-4 space-y-1">
              <p><strong>📍 Office:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
              <p><strong>🏢 In-Person Hours:</strong> Tue & Thu, 10 AM – 6 PM</p>
              <p><strong>💻 Virtual Sessions:</strong> Mon, Wed & Fri, 1 PM – 5 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
