'use client'
import { useState } from 'react'
import { Mail } from 'lucide-react';

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
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
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
    <div className="bg-gray-1000 py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10 items-start ">
        {/* LEFT: Office Info */}
       <div className="space-y-8 w-full lg:w-1/3 text-center lg:text-left">
          <div>
            <h3 className="text-4xl  font-bold mb-2">Our Office</h3>
            <p>
              1287 Maplewood Drive
              <br />
              Los Angeles
              <br />
              CA 90026
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="inline-block mt-2 bg-[#114d51] text-white text-sm px-3 py-1 rounded"
            >
              Google Maps
            </a>
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-2">In-person</h3>
            <p>Tuesday: 10 AM–6 PM</p>
            <p>Thursday: 10 AM–6 PM</p>

            <h3 className="text-4xl font-bold mt-4 mb-2">Virtual</h3>
            <p>Monday: 1 PM–5 PM</p>
            <p>Wednesday: 1 PM–5 PM</p>
            <p>Friday: 1 PM–5 PM</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-2">Contact</h3>
            <p>📞 (323) 555-0192</p>
            <p className="flex items-center gap-2">
  <Mail className="w-5 h-5" />
  serena@blakepsychology.com
</p>

          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="text-sm w-full lg:w-1/2">
          <div className="bg-white border rounded-lg shadow p-8">
            <h2 className="text-4xl font-bold text-center text-green-900 mb-2">Get In Touch</h2>
            <p className="text-center text-gray-700 mb-6">
              Simply fill out the brief fields below and Dr Serena Blake will be in touch with you soon, usually within one
              business day. This form is safe, private, and completely free.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
              <label className="block font-medium">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 border border-gray-400 rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <label className="block font-medium">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-400 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <label className="block font-medium">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 234–5678"
                className="w-full p-3 border border-gray-400 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full p-3 border border-gray-400 rounded"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            
              

              <div className="bg-white border p-4 rounded">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <span>I agree to be contacted</span>
                </label>
                {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#114d51] text-white py-3 rounded hover:bg-[#0d3c3f] transition"
              >
                Submit
              </button>

              <p className="text-sm text-gray-600 mt-2 text-center">
                ⓘ By submitting, you confirm you are 18+ and agree to our{' '}
                <a href="#" className="underline">
                  Privacy Policy & TOS
                </a>{' '}
                and to receive emails & texts from Serena Blake.
              </p>
            </form>
          </div>

         
        </div>
      </div>
       <div className="block mt-6 bg-white border-2 border-red-700 rounded-md p-5 text-sm shadow-md w-full">

            <p className="text-red-600 font-semibold mb-2 flex items-center">
              <span className="mr-2 text-lg">ⓘ</span>
              <span className="text-base font-bold">Please Note:</span>
            </p>
            <p className="text-blue-800 text-lg leading-relaxed">
              I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes
              so you can file for{' '}
              <span className="font-bold text-blue-900">out-of-network benefits</span> with your insurance company.
            </p>
          </div>
    </div>
  )
}
