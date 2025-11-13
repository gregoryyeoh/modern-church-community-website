import React from 'react'
import { Heart, Users, BookOpen, Sparkles } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love & Compassion',
      description: 'We believe in showing Christ\'s love through genuine care and compassion for one another.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building authentic relationships where everyone belongs and grows together in faith.',
    },
    {
      icon: BookOpen,
      title: 'Biblical Teaching',
      description: 'Grounded in Scripture, we seek to understand and apply God\'s Word to everyday life.',
    },
    {
      icon: Sparkles,
      title: 'Joyful Worship',
      description: 'Celebrating God\'s goodness through vibrant, heartfelt worship that uplifts the spirit.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-black">Story</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Grace Community Church began with a simple vision: to create a place where people could encounter God's love, 
            build meaningful relationships, and discover their purpose. Today, we're a diverse family united by faith, 
            hope, and a passion for serving our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To know Christ and make Him known. We're committed to helping people grow in their relationship with Jesus, 
                connect with others in authentic community, and serve the world with compassion and purpose.
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A thriving community where every person experiences the transforming love of Christ, discovers their God-given 
                potential, and lives out their faith with joy and purpose.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop"
                alt="Community gathering"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold text-black">
                  15+
                </p>
                <p className="text-gray-600 font-medium">Years Serving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
