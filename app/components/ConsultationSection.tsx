import { Sparkles } from 'lucide-react'; // optional: use your own icon or SVG

export default function ConsultationSection() {
  return (
    <section className="bg-[#1E4A4A] text-[#CDEDEE] py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Left Column */}
      <div className="text-left md:w-1/3">
        <h2 className="text-3xl md:text-4xl font-bold">Schedule A Consultation</h2>
      </div>

      {/* Center Column */}
      <div className="text-center md:text-left md:w-1/2">
        <p className="text-lg font-semibold">
          Dr. Serena Blake is currently accepting new clients.
        </p>
        <p className="text-lg font-semibold">
          Available for online and in-person sessions.
        </p>

        {/* Session Fees */}
        <div className="mt-4 text-sm md:text-base">
          <p className="font-semibold underline mb-1">Session Fees:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>$200 / individual session</li>
            <li>$240 / couples session</li>
          </ul>
        </div>
      </div>

      {/* Right Column - Button */}
      <div className="md:w-auto">
        <button className="flex items-center gap-2 px-6 py-3 border border-[#CDEDEE] text-[#CDEDEE] rounded-md hover:bg-[#2A5E5E] transition duration-200 font-semibold">
          <Sparkles className="w-5 h-5" />
          Start Healing
        </button>
      </div>
    </section>
  );
}
