import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// CountUp Component
const CountUp = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration * 60) // 60fps
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const ValueProps = () => {
  const stats = [
    {
      value: 200,
      suffix: '+',
      label: "Projects Completed",
      description: "Successfully delivered quality painting projects"
    },
    {
      value: 10,
      suffix: '+',
      label: "Years Experience", 
      description: "Serving customers with expertise"
    },
    {
      value: 95,
      suffix: '%',
      label: "Happy Customers",
      description: "Customer satisfaction rate"
    }
  ]

  const props = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Interior & Exterior",
      description: "Complete painting solutions for inside and outside your property"
    },
    {
      icon: (
<svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6M15 15v6" />
  </svg>
      ),
      title: "Feature Walls",
      description: "Highlight your space with striking, professional feature wall finishes."
    },
    {
      icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Helmet */}
    <path d="M4 11a8 8 0 0116 0v1H4v-1z" />
    <path d="M9 4v3m6-3v3" />
    {/* Face outline */}
    <circle cx="12" cy="14" r="4" />
    {/* Shoulders */}
    <path d="M6 20c1.5-2 4-3 6-3s4.5 1 6 3" />
  </svg>
      ),
      title: "Colour Consultation",
      description: "Expert advice to choose the perfect colours for your space"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Insured & Safe",
      description: "Fully insured with comprehensive safety protocols"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Clean Worksites",
      description: "We respect your property and leave sites spotless"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Local Coastal NSW",
      description: "Trusted painters for Central Coast, Newcastle & Port Macquarie — with local experience."
    }
  ]

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-yellow-500">Rockman</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Quality finishes. Experienced hands. Local team.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-700">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-white shadow border border-gray-200 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-yellow-500 mb-4 flex justify-center">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {prop.title}
              </h3>
              <p className="text-gray-700">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProps
