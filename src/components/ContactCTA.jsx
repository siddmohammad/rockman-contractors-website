import React from 'react'
import { motion } from 'framer-motion'

const ContactCTA = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the form data
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', phone: '', suburb: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your <span className="text-yellow-400">Project?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/61XXXXXXXXX?text=Hi%20Rockman%20Contractors,%20I%27d%20like%20a%20quote%20please"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6 mr-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp: Click to message
                </motion.a>
                
                <motion.a
                  href="tel:+61XXXXXXXXX"
                  className="flex items-center text-gray-600 hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-6 h-6 mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone: 049 315 3433
                </motion.a>
                
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours: Mon-Sat 7am-6pm
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Business Details</h4>
              <div className="text-gray-600 space-y-2">
                <p>ABN: 37 657 315 396</p>
                <p>Based on the Central Coast, NSW</p>
                <p>Locally owned & operated</p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-600 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-600 mb-2">Suburb *</label>
              <input
                type="text"
                name="suburb"
                value={formData.suburb}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                placeholder="Your suburb"
              />
            </div>
            
            <div>
              <label className="block text-gray-600 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
            
            <p className="text-sm text-gray-500 text-center">
              Or get an instant quote via WhatsApp above
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA