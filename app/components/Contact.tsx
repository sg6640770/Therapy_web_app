'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    method: '',
    consent: false,
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    setFormData(prev => ({ ...prev, [name]: checked !== undefined ? checked : value }))
  }

  const validate = () => {
    const errs: { [key: string]: string } = {}
    if (!formData.name) errs.name = 'Name is required'
    if (!formData.phone) errs.phone = 'Phone is required'
    if (!formData.email.includes('@')) errs.email = 'Valid email required'
    if (!formData.message) errs.message = 'Please tell us what brings you here'
    if (!formData.time) errs.time = 'Preferred time is required'
    if (!formData.method) errs.method = 'Preferred contact method is required'
    if (!formData.consent) errs.consent = 'Consent is required'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      alert('Form submitted!')
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        time: '',
        method: '',
        consent: false,
      })
      setErrors({})
    }
  }

  return (
    <section id="contact" className="bg-gray-1000 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* LEFT: Office Info */}
        <div className="space-y-8 w-full lg:w-1/3 text-center lg:text-left">
          <div>
            <h3 className="text-3xl font-bold mb-2">Our Office</h3>
            <p className="text-base">
              <MapPin className="inline w-5 h-5 mr-1 text-green-400" />
              1287 Maplewood Drive, Los Angeles, CA 90026
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="inline-block mt-2 bg-[#114d51] text-white text-sm px-4 py-2 rounded-md hover:bg-[#0d3c3f] transition"
            >
              View on Google Maps
            </a>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2">Hours</h3>
            <p><strong>In-Person:</strong> Tue & Thu, 10 AM–6 PM</p>
            <p><strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2">Contact</h3>
            <p><Phone className="inline w-5 h-5 mr-1" /> (323) 555-0192</p>
            <p><Mail className="inline w-5 h-5 mr-1" /> serena@blakepsychology.com</p>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4 text-green-900">Get In Touch</h2>
            <p className="text-center text-gray-600 mb-6">
              Fill out the brief form below and Dr. Serena Blake will respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border p-3 rounded"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border p-3 rounded"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 234–5678"
                  className="w-full border p-3 rounded"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-semibold mb-1">What brings you here?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly share your reason for reaching out..."
                  className="w-full border p-3 rounded"
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="time" className="block font-semibold mb-1">Preferred Time</label>
                <input
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="e.g. Mornings, Evenings"
                  className="w-full border p-3 rounded"
                />
                {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
              </div>

              {/* Contact Method */}
              <div>
                <label htmlFor="method" className="block font-semibold mb-1">Preferred Contact Method</label>
                <select
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                >
                  <option value="">Select...</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="text">Text</option>
                </select>
                {errors.method && <p className="text-red-600 text-sm mt-1">{errors.method}</p>}
              </div>

              {/* Consent Checkbox */}
              <div className="border p-4 rounded bg-gray-50">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <span>I agree to be contacted</span>
                </label>
                {errors.consent && <p className="text-red-600 text-sm mt-1">{errors.consent}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#114d51] hover:bg-[#0d3c3f] text-white py-3 px-4 rounded font-semibold transition"
              >
                Submit
              </button>

              <p className="text-sm text-center text-gray-500 mt-3">
                ⓘ By submitting, you confirm you are 18+ and agree to our <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* NOTE SECTION */}
      <div className="mt-10 bg-white text-gray-800 border-l-4 border-red-600 p-5 rounded-md shadow max-w-4xl mx-auto">
        <p className="flex items-center gap-2 text-red-600 font-semibold text-base mb-1">
          <span className="text-xl">⚠</span> Please Note:
        </p>
        <p className="text-base leading-relaxed">
          I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes
          so you can file for <span className="font-semibold text-blue-800">out-of-network benefits</span> with your insurance company.
        </p>
      </div>
    </section>
  )
}
