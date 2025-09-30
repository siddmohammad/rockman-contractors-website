import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center">
<div className="mb-8 flex justify-center">
<img 
  src="/logo.png" 
  alt="Rockman Contractors Logo" 
  className="h-32 w-auto"
/>

</div>

          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Rockman Contractors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer