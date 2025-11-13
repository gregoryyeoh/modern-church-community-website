import React from 'react'
import { Users, Calendar, MapPin, Clock, Heart, BookOpen, Coffee, Baby, Music, Dumbbell, ArrowRight } from 'lucide-react'

const LifeGroups = () => {
  const groups = [
    {
      name: 'Young Adults',
      icon: Coffee,
      description: 'Ages 18-30. Connect with peers navigating faith, career, and relationships.',
      day: 'Thursday',
      time: '7:00 PM',
      location: 'Coffee House Downtown',
      leader: 'Sarah & Mike Johnson',
      spots: '5 spots left',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    },
    {
      name: 'Families with Kids',
      icon: Baby,
      description: 'For parents raising children. Share experiences and support each other.',
      day: 'Sunday',
      time: '5:00 PM',
      location: 'Church Fellowship Hall',
      leader: 'Tom & Lisa Brown',
      spots: '3 spots left',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
    },
    {
      name: 'Men\'s Bible Study',
      icon: BookOpen,
      description: 'Deep dive into Scripture with brothers in Christ. Build accountability.',
      day: 'Tuesday',
      time: '6:30 AM',
      location: 'Church Building',
      leader: 'Pastor John Smith',
      spots: 'Open enrollment',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    },
    {
      name: 'Women\'s Fellowship',
      icon: Heart,
      description: 'A safe space for women to grow spiritually and support one another.',
      day: 'Wednesday',
      time: '10:00 AM',
      location: 'Rotating Homes',
      leader: 'Pastor Sarah Johnson',
      spots: '2 spots left',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
    },
    {
      name: 'Worship Team',
      icon: Music,
      description: 'For musicians and singers passionate about leading worship.',
      day: 'Monday',
      time: '7:00 PM',
      location: 'Church Sanctuary',
      leader: 'David Martinez',
      spots: 'Auditions required',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop',
    },
    {
      name: 'Fitness & Faith',
      icon: Dumbbell,
      description: 'Combine physical wellness with spiritual growth through group workouts.',
      day: 'Saturday',
      time: '8:00 AM',
      location: 'City Park',
      leader: 'Chris Anderson',
      spots: 'Open enrollment',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=600&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Life <span className="text-white">Groups</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Find your community. Grow your faith. Build lasting friendships.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join a Life Group?</h2>
            <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Life Groups are where real community happens. It's where you'll find support, encouragement, 
              and authentic relationships that help you grow in your faith journey.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, title: 'Community', desc: 'Build meaningful relationships' },
                { icon: Heart, title: 'Support', desc: 'Care for one another' },
                { icon: BookOpen, title: 'Growth', desc: 'Deepen your faith' },
                { icon: Coffee, title: 'Fellowship', desc: 'Share life together' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Groups</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groups.map((group, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <group.icon className="w-5 h-5 text-black inline" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                      {group.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{group.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-2 text-black" />
                        <span className="text-sm">{group.day}s</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-4 h-4 mr-2 text-black" />
                        <span className="text-sm">{group.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 text-black" />
                        <span className="text-sm">{group.location}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-black" />
                        <span className="text-sm">Led by {group.leader}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-black">{group.spots}</span>
                      <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group">
                        <span>Join Group</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find the Right Group?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We'd love to help you find the perfect fit or even start a new group! 
              Reach out to our Life Groups coordinator and let's connect you with your community.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LifeGroups
