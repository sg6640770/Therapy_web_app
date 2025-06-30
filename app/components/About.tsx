'use client'
import Image from 'next/image';
export default function About() {
  return (
    <section className="bg-gray-1000 py-16 px-4 text-gray-800 text-lg" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">About</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
  src="/images/dr_serena.jpg" // ✅ Rename image to remove space!
  alt="Dr. Serena Blake"
  width={256}
  height={320}
  className="rounded-xl shadow-lg transition hover:scale-105 duration-300"
/>


          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Hi I&apos;m Serena Blake</h3>
            <p className="text-lg text-white leading-relaxed mb-4">
              I am a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>

            <p className="text-sm text-white">
              <strong>Office:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026<br />
              <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM<br />
              <strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
