'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Althara Pacta</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sign up as a government
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sign up as a vendor
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              See all tenders
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Sign up as a government
              </button>
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Sign up as a vendor
              </button>
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                See all tenders
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
