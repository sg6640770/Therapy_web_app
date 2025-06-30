'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions are held via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice is required to avoid a full session charge.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#1E4A4A] py-20 px-4 text-[#CDEDEE]" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-[#347c7c] bg-[#1f5a5a] rounded-lg shadow-sm transition-all duration-300"
              >
                <button
                  className="w-full p-5 flex items-center justify-between font-semibold text-left text-lg focus:outline-none hover:bg-[#236060] transition"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 p-5' : 'max-h-0 p-0'
                  }`}
                >
                  <p className="text-[#A9F1F1] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
