import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
{
  name: "Louise Johnston",
  suburb: "Forster",
  rating: 5,
  text: "Highly recommend Rockman Contractors. If you need painting done, Sam and his team are hard-working and do quality work. We have had internal, external and commercial painting done and will hire them again for future painting projects.",
  image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop&crop=face"
},
    {
      name: "Mike Ginter",
      suburb: "Gosford",
      rating: 5,
      text: "Fast quote, competitive pricing, and excellent workmanship. Our office building looks brand new. Great job!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Anthony",
      suburb: "Woy Woy",
      rating: 5,
      text: "Great price, great communication and prompt job. Highly recommend Sam and his team",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ]

  const marqueeText = [
    "Excellent workmanship!",
    "Professional service",
    "Highly recommended",
    "Great attention to detail",
    "Fast and reliable",
    "Quality finishes",
    "Competitive pricing",
    "Clean and tidy"
  ]

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      {/* Marquee */}
      <div className="mb-16">
        <div className="flex items-center space-x-8 marquee">
          {marqueeText.concat(marqueeText).map((text, index) => (
            <span key={index} className="text-2xl md:text-3xl font-bold text-yellow-400 whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied customers across the Central Coast
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.suburb}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials