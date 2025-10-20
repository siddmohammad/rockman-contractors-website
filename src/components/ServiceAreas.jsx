import React from 'react'
import { motion } from 'framer-motion'

const ServiceAreas = () => {
  const suburbs = [
  // Central Coast (10)
  "Gosford", "Terrigal", "Erina", "Woy Woy", "The Entrance",
  "Avoca Beach", "Umina Beach", "Bateau Bay", "Long Jetty", "Wyong",

  // Newcastle & Hunter (9)
  "Newcastle", "Merewether", "Bar Beach", "Cooks Hill", "Hamilton",
  "Charlestown", "Adamstown", "Belmont", "Swansea",

  // Port Macquarie & Mid North Coast (9)
  "Port Macquarie", "Lake Cathie", "Bonny Hills", "Wauchope",
  "Flynns Beach", "Lighthouse Beach", "Laurieton", "Kempsey", "King Creek"
]

  return (
    <section id="areas" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://unsplash.com/photos/o4dGFm2YVow/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y2VudHJhbCUyMGNvYXN0JTIwbnN3fGVufDB8fHx8MTc1OTIzNTkyN3ww&force=true" 
          alt="Central Coast Map"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Service <span className="text-yellow-400">Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proudly Serving Across Coastal NSW — Central Coast, Newcastle & Port Macquarie.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {suburbs.map((suburb, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium text-black">{suburb}</span>
                </motion.div>
              ))}
            </div>
            
<div className="text-center mt-8">
  <p className="text-gray-600 mb-4">
    Don't see your suburb? Contact us to confirm availability.
  </p>
  <motion.a
    href="sms:+61493153433?&body=Hi%20Rockman%20Contractors,%20do%20you%20service%20my%20area?"
    className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Check Availability
    <svg
      className="w-5 h-5 ml-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  </motion.a>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas