import React from 'react'
export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
