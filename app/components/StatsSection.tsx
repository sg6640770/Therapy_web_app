export default function StatsSection() {
  return (
    <section className="bg-[#2c5557] text-white py-16 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        
        {/* Experience Block */}
        <div>
          <h2 className="text-5xl font-bold mb-2">8+</h2>
          <h3 className="text-xl font-semibold mb-1">Years Experience</h3>
          <p className="text-gray-200 text-base">
            Providing compassionate and effective Individual and Couples Therapy
          </p>
        </div>

        {/* Sessions Block */}
        <div>
          <h2 className="text-5xl font-bold mb-2">5,00+</h2>
          <h3 className="text-xl font-semibold mb-1">Individual Client Sessions</h3>
          <p className="text-gray-200 text-base">
            Helping individuals and couples heal, grow, and find purpose
          </p>
        </div>
      </div>
    </section>
  )
}
