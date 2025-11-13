import React, { useState } from 'react'
import { Send, Heart, BookOpen, Sparkles } from 'lucide-react'

const Prayer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
    isPublic: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Prayer request submitted:', formData)
    alert('Thank you for sharing your prayer request. Our prayer team will be lifting you up!')
    setFormData({ name: '', email: '', request: '', isPublic: false })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const scriptures = [
    {
      verse: 'Philippians 4:6-7',
      text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
    },
    {
      verse: 'Matthew 7:7',
      text: 'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.',
    },
    {
      verse: '1 Thessalonians 5:16-18',
      text: 'Rejoice always, pray continually, give thanks in all circumstances; for this is God\'s will for you in Christ Jesus.',
    },
    {
      verse: 'James 5:16',
      text: 'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.',
    },
  ]

  const prayerRequests = [
    {
      name: 'Sarah M.',
      request: 'Please pray for my family as we navigate a difficult season. We need God\'s wisdom and peace.',
      date: '2 days ago',
      prayers: 45,
    },
    {
      name: 'John D.',
      request: 'Praying for healing and strength as I recover from surgery. Thank you for your support.',
      date: '3 days ago',
      prayers: 67,
    },
    {
      name: 'Emily R.',
      request: 'Seeking guidance for a major career decision. Trusting God\'s plan for my life.',
      date: '5 days ago',
      prayers: 52,
    },
    {
      name: 'Michael T.',
      request: 'Please pray for my friend who is struggling with depression. They need hope and encouragement.',
      date: '1 week ago',
      prayers: 89,
    },
  ]

  return (
    <div className="min-h-screen">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=600&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Prayer <span className="text-white">Requests</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Share your burdens, celebrate your blessings, and join us in prayer
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-black p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Submit a Prayer Request</h2>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We believe in the power of prayer. Share your request with our prayer team, 
                and we'll lift you up in prayer. You're not alone.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="request" className="block text-sm font-semibold text-gray-700 mb-2">
                    Prayer Request
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    placeholder="Share your prayer request..."
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isPublic"
                    name="isPublic"
                    checked={formData.isPublic}
                    onChange={handleChange}
                    className="w-5 h-5 text-black border-gray-300 rounded focus:ring-black"
                  />
                  <label htmlFor="isPublic" className="ml-3 text-sm text-gray-700">
                    Share publicly so others can pray with me
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Submit Prayer Request</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-black p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Encouraging Scriptures</h2>
              </div>
              <div className="space-y-6">
                {scriptures.map((scripture, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-black"
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <Sparkles className="w-5 h-5 text-black mt-1" />
                      <h3 className="text-lg font-bold text-gray-900">{scripture.verse}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">{scripture.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Community <span className="text-black">Prayer Requests</span>
              </h2>
              <div className="w-24 h-1 bg-black mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us in praying for our community members. Click the heart to let them know you're praying.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {prayerRequests.map((request, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{request.name}</h3>
                      <p className="text-sm text-gray-500">{request.date}</p>
                    </div>
                    <button className="group bg-gray-100 p-3 rounded-full hover:bg-black transition-all duration-300">
                      <Heart className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{request.request}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Heart className="w-4 h-4 mr-2 text-black" fill="currentColor" />
                    <span>{request.prayers} people are praying</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Prayer
