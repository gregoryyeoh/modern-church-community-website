import React from 'react'
import { Play, Image as ImageIcon, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const MediaGallery = () => {
  const mediaItems = [
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
      title: 'Sunday Worship Highlights',
    },
    {
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
      title: 'Community Fellowship',
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop',
      title: 'Youth Camp 2024',
    },
    {
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      title: 'Outreach Ministry',
    },
    {
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop',
      title: 'Worship Team',
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
      title: 'Worship Night',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo & Video <span className="text-black">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the joy and spirit of our community through moments captured in worship, fellowship, and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="bg-white text-black p-4 rounded-full">
                      <Play className="w-8 h-8" fill="currentColor" />
                    </div>
                  ) : (
                    <div className="bg-white text-black p-4 rounded-full">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MediaGallery
