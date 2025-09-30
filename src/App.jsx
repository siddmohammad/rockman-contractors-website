import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import FeaturedServices from './components/FeaturedServices'
import QuoteProcess from './components/QuoteProcess'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import ImageModal from './components/ImageModal'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [formData, setFormData] = useState({ name: '', phone: '', suburb: '', message: '' })
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* Value Props */}
      <ValueProps />

      {/* Featured Services */}
      <FeaturedServices />

      {/* 3-Step Quote */}
      <QuoteProcess />

      {/* Gallery */}
      <Gallery 
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Service Areas */}
      <ServiceAreas />

      {/* FAQ */}
      <FAQ 
        activeFaq={activeFaq}
        setActiveFaq={setActiveFaq}
      />

      {/* Contact CTA */}
      <ContactCTA 
        formData={formData}
        setFormData={setFormData}
      />

      {/* Footer */}
      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal 
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App