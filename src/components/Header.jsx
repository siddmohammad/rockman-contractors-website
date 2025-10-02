import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'areas', label: 'Areas' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div 
            className="cursor-pointer flex items-center"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/logo-light.png" 
              alt="Rockman Contractors Logo" 
              className="block dark:hidden w-24"
            />
            <img 
              src="/logo-dark.png" 
              alt="Rockman Contractors" 
              className="hidden dark:block w-24"
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-300 font-medium transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* CTA button */}
            <motion.a
              href="https://wa.me/610493153433?text=Hi%20Rockman%20Contractors,%20I'd%20like%20a%20quote%20please"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-black dark:bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-5 h-0.5 bg-black dark:bg-white mt-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-black dark:bg-white mt-1 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-3 text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-300 font-medium transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* CTA in Mobile */}
              <motion.a
                href="https://wa.me/610493153433?text=Hi%20Rockman%20Contractors,%20I'd%20like%20a%20quote%20please"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Get Fast Quote
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
