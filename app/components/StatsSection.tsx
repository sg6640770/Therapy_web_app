export default function StatsSection() {
  return (
    <section className="bg-[#2c5557] text-white py-20 border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20 text-center md:text-left">
        
        {/* Experience Block */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">8+</h2>
          <h3 className="text-xl font-semibold mb-1">Years of Experience</h3>
          <p className="text-gray-200 text-base leading-relaxed">
            Providing compassionate and effective individual and couples therapy.
          </p>
        </div>

        {/* Sessions Block */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">500+</h2>
          <h3 className="text-xl font-semibold mb-1">Client Sessions</h3>
          <p className="text-gray-200 text-base leading-relaxed">
            Helping individuals and couples heal, grow, and find purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
