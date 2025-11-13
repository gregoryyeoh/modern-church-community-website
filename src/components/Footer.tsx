import React from 'react'
import { Heart, Facebook, Instagram, Youtube, Mail, MapPin, Phone, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-xl">
                <Heart className="w-5 h-5 text-black" fill="black" />
              </div>
              <span className="text-xl font-bold">Grace Community</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A place where faith meets family. Join us as we grow together in love, hope, and community.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Sunday Worship</p>
                  <p>9:00 AM & 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Wednesday Prayer</p>
                  <p>7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <p>123 Faith Avenue<br />Hope City, HC 12345</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <p>hello@gracecommunity.org</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-900 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-900 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-900 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Stay connected with our community through social media and never miss an update!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Grace Community Church. All rights reserved. Built with love and faith.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
