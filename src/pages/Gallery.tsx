import React, { useState } from 'react'
import { X, Play, Image as ImageIcon } from 'lucide-react'

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null)
  const [filter, setFilter] = useState('all')

  const albums = [
    {
      title: 'Sunday Worship',
      category: 'worship',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop', title: 'Worship Team' },
        { type: 'video', url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', title: 'Worship Night' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop', title: 'Congregation' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', title: 'Prayer Time' },
      ],
    },
    {
      title: 'Community Events',
      category: 'events',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop', title: 'Fellowship Dinner' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=600&fit=crop', title: 'Youth Camp' },
        { type: 'video', url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&h=600&fit=crop', title: 'Easter Celebration' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', title: 'Marriage Retreat' },
      ],
    },
    {
      title: 'Mission & Outreach',
      category: 'mission',
      items: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop', title: 'Community Service' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop', title: 'Food Drive' },
        { type: 'video', url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop', title: 'Mission Trip' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop', title: 'Volunteer Day' },
      ],
    },
  ]

  const filteredAlbums = filter === 'all' 
    ? albums 
    : albums.filter(album => album.category === filter)

  return (
    <div className="min-h-screen">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=600&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Photo & Video <span className="text-white">Gallery</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Capturing moments of faith, fellowship, and community
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'worship', 'events', 'mission'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {filteredAlbums.map((album, albumIndex) => (
            <div key={albumIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="bg-black w-2 h-8 rounded-full mr-4" />
                {album.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {album.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    onClick={() => setSelectedMedia(item)}
                    className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <img
                      src={item.url}
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
            </div>
          ))}
        </div>
      </section>

      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedMedia.url}
              alt={selectedMedia.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <p className="text-white text-center text-xl font-semibold mt-4">{selectedMedia.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
