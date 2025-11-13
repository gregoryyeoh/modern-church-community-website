import React from 'react'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

const Activities = () => {
  const upcomingEvents = [
    {
      title: 'Youth Summer Camp',
      date: 'July 15-20, 2024',
      location: 'Mountain View Retreat Center',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop',
      attendees: '50+ registered',
      description: 'A week of adventure, worship, and spiritual growth for teens ages 13-18.',
      status: 'upcoming',
    },
    {
      title: 'Community Outreach Day',
      date: 'June 28, 2024',
      location: 'Downtown Hope City',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      attendees: '100+ volunteers',
      description: 'Join us as we serve our community through food distribution and neighborhood cleanup.',
      status: 'upcoming',
    },
    {
      title: 'Worship Night',
      date: 'June 21, 2024',
      location: 'Grace Community Church',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
      attendees: 'Open to all',
      description: 'An evening of powerful worship, prayer, and fellowship under the stars.',
      status: 'upcoming',
    },
    {
      title: 'Easter Celebration',
      date: 'March 31, 2024',
      location: 'Grace Community Church',
      image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&h=400&fit=crop',
      attendees: '500+ attended',
      description: 'A joyful celebration of Christ\'s resurrection with special music and message.',
      status: 'past',
    },
    {
      title: 'Marriage Retreat',
      date: 'February 14-16, 2024',
      location: 'Lakeside Resort',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
      attendees: '30 couples',
      description: 'A weekend focused on strengthening marriages through biblical principles and fun activities.',
      status: 'past',
    },
  ]

  const upcoming = upcomingEvents.filter(e => e.status === 'upcoming')
  const past = upcomingEvents.filter(e => e.status === 'past')

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Events & <span className="text-black">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for life-changing events that bring our community together in faith, fellowship, and fun
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="bg-black w-2 h-8 rounded-full mr-4" />
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcoming.map((event, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-black" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-black" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-4 h-4 mr-2 text-black" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="bg-gray-400 w-2 h-8 rounded-full mr-4" />
            Past Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {past.map((event, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      Past Event
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">{event.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
