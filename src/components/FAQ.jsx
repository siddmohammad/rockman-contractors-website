import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = ({ activeFaq, setActiveFaq }) => {
  const faqs = [
    {
      question: "How long does a typical painting project take?",
      answer: "Project duration depends on the size and complexity. A single room typically takes 1-2 days, while a full house exterior can take 3-5 days. We provide detailed timelines in our quotes."
    },
    {
      question: "Do you provide paint or do I need to purchase it?",
      answer: "We provide all premium quality paints as part of our service. We work with leading brands like Dulux, Taubmans, and Haymes to ensure the best results and durability."
    },
    {
      question: "How do you handle lead paint in older homes?",
      answer: "We are lead-safe certified and follow strict safety protocols. Our team uses specialized equipment and containment methods to safely handle and remove lead paint."
    },
    {
      question: "What happens if it rains during exterior painting?",
      answer: "We closely monitor weather forecasts and only schedule exterior work during suitable conditions. If unexpected weather occurs, we pause work and protect all surfaces until conditions improve."
    },
    {
      question: "How accurate are your quotes?",
      answer: "Our quotes are detailed. We conduct thorough assessments and provide transparent pricing with no hidden costs. What we quote is what you pay."
    },
    {
      question: "What's included in your painting service?",
      answer: "Our comprehensive service includes surface preparation, minor repairs, priming, painting, cleanup, and final inspection. We leave your space clean and ready to enjoy."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Everything you need to know about our painting services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-yellow-500 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <button
                  className="w-full text-left p-6 bg-black hover:bg-gray-900 transition-colors flex items-center justify-between"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 bg-black border-t border-yellow-500"
                    >
                      <p className="text-white">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
