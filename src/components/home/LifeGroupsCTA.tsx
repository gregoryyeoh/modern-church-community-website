import React from 'react'
import { Users, Heart, BookOpen, Coffee, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const LifeGroupsCTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
                alt="Life Groups"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join a <span className="text-black">Life Group</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Life Groups are the heart of our church community. These small gatherings provide a space to build 
                authentic friendships, grow spiritually, and support one another through life's journey.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-black p-2 rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Community</p>
                    <p className="text-sm text-gray-600">Build lasting friendships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-black p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Support</p>
                    <p className="text-sm text-gray-600">Care for one another</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-black p-2 rounded-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Growth</p>
                    <p className="text-sm text-gray-600">Deepen your faith</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-black p-2 rounded-lg">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fellowship</p>
                    <p className="text-sm text-gray-600">Share life together</p>
                  </div>
                </div>
              </div>

              <Link
                to="/life-groups"
                className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <span>Find Your Group</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifeGroupsCTA
