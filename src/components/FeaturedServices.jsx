import React from 'react'
import { motion } from 'framer-motion'

const FeaturedServices = () => {
  const services = [
    {
      title: "Interior Repaints",
      description: "Transform your indoor spaces with premium finishes",
      inclusions: ["Wall preparation", "Premium paints", "Clean finish", "Furniture protection"],
      image: "https://unsplash.com/photos/PtddYaHbvUY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU5MjM1MzA5fA&force=true"
    },
    {
      title: "Exterior Weatherproofing",
      description: "Protect your property from harsh Australian weather",
      inclusions: ["Weather-resistant coatings", "Surface preparation", "Crack and gap sealing", "Long-lasting protection"],
      image: "https://unsplash.com/photos/mTV2ZiyBHlM/download?force=true"
    },
    {
      title: "Feature Walls & Decorating",
      description: "Create stunning focal points with custom designs and finishes",
      inclusions: [
        "Accent wall painting",
        "Textured and decorative finishes",
        "Wallpaper installation",
        "Custom colour styling"
      ],
      image: "https://unsplash.com/photos/hKAoa7ZkFpI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU5MjM0NDE0fA&force=true"
    },
    {
      title: "Commercial & Strata",
      description: "Reliable painting services for businesses and properties",
      inclusions: [
        "Minimal disruption",
        "Flexible scheduling",
        "High-durability finishes",
        "Project management"
      ],
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    }
  ]

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Professional painting and decorating solutions tailored to your needs
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`sticky-card bg-black rounded-3xl overflow-hidden border border-yellow-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 w-full h-64 lg:h-auto">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="lg:w-1/2 w-full p-8 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white mb-6 text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.inclusions.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-white">
                      <svg className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href={`sms:+61493153433?&body=Hi%20Rockman%20Contractors,%20I'd%20like%20a%20quote%20for%20${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
