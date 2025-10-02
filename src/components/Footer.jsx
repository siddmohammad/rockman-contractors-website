import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="text-center">
          
          {/* Logo */}
          <div className="mb-8 flex justify-center">
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
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2025 Rockman Contractors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
