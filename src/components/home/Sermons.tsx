import React, { useState } from 'react'
import { Play, Download, Calendar, User, Video, Headphones, FileText } from 'lucide-react'

const Sermons = () => {
  const [filter, setFilter] = useState('all')

  const sermons = [
    {
      title: 'Walking in Faith',
      speaker: 'Pastor John Smith',
      date: 'June 16, 2024',
      series: 'Faith Foundations',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      duration: '42 min',
    },
    {
      title: 'The Power of Prayer',
      speaker: 'Pastor Sarah Johnson',
      date: 'June 9, 2024',
      series: 'Spiritual Disciplines',
      type: 'audio',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
      duration: '38 min',
    },
    {
      title: 'Love Your Neighbor',
      speaker: 'Pastor John Smith',
      date: 'June 2, 2024',
      series: 'Living Like Jesus',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop',
      duration: '45 min',
    },
    {
      title: 'Finding Hope in Hard Times',
      speaker: 'Pastor Michael Brown',
      date: 'May 26, 2024',
      series: 'Hope Series',
      type: 'text',
      thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
      duration: '15 min read',
    },
    {
      title: 'Grace Upon Grace',
      speaker: 'Pastor Sarah Johnson',
      date: 'May 19, 2024',
      series: 'Faith Foundations',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop',
      duration: '40 min',
    },
    {
      title: 'The Joy of Giving',
      speaker: 'Pastor John Smith',
      date: 'May 12, 2024',
      series: 'Living Like Jesus',
      type: 'audio',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
      duration: '35 min',
    },
  ]

  const filteredSermons = filter === 'all' 
    ? sermons 
    : sermons.filter(s => s.type === filter)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />
      case 'audio':
        return <Headphones className="w-4 h-4" />
      case 'text':
        return <FileText className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sermon <span className="text-black">Archive</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Dive deeper into God's Word with our collection of inspiring messages
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'video', 'audio', 'text'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === type
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black p-4 rounded-full hover:scale-110 transition-transform">
                    <Play className="w-8 h-8" fill="currentColor" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  {getTypeIcon(sermon.type)}
                  <span className="text-sm font-semibold text-gray-700 capitalize">{sermon.type}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {sermon.series}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                  {sermon.title}
                </h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <User className="w-4 h-4 mr-2 text-black" />
                    <span className="text-sm">{sermon.speaker}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-black" />
                    <span className="text-sm">{sermon.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Play className="w-4 h-4 mr-2 text-black" />
                    <span className="text-sm">{sermon.duration}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-black text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Watch</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sermons
