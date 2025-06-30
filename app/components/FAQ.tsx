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
    <div className="bg-[#1E4A4A] text-[#CDEDEE] text-lg">
      <section className="py-16 px-4 max-w-4xl mx-auto" id="faq">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full text-left p-4 font-semibold flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 text-blue-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
