import React from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&h=900&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block text-white">
              Grace Community
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Where faith meets family, and hope becomes home
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Join Us This Sunday</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <Calendar className="w-5 h-5 text-black" />
                <span className="font-medium">Every Sunday</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-black" />
                <span>9:00 AM - Morning Service</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-black" />
                <span>11:00 AM - Contemporary Service</span>
              </div>
            </div>
          </div>

          <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
            <span>Plan Your Visit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
