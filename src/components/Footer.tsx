import React from 'react'
import { Github, Twitter, Mail } from 'lucide-react'
export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © 2023 CodeGroups. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

