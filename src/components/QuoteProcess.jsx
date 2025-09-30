import React from 'react'
import { motion } from 'framer-motion'

const QuoteProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Send Photos & Suburb",
      description: "Take photos of your space and send them via WhatsApp with your suburb",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Scope Confirmation",
      description: "We'll review your requirements and recommend the best painting system",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Get your Free Quote",
      description: "Receive a detailed and transparent quote tailored to your project, with no hidden costs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Simple <span className="text-yellow-400">3-Step</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your painting project started with our fast and easy quote process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl font-bold z-10 hidden md:flex">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                } text-center md:text-left`}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                    <div className="text-yellow-400 mb-4 flex justify-center md:justify-start">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for alignment */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteProcess