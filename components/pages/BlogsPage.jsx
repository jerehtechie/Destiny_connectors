// src/components/DestinyConnector/pages/BlogsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How Kenyans in the Diaspora Can Safely Buy Land Back Home in 2026',
    excerpt: 'A complete guide including virtual tours, secure payment methods, power of attorney tips, and how to avoid common fraud pitfalls when investing remotely.',
    image: "https://images.unsplash.com/photo-1709842387288-bcebd36ce629?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: 'March 5, 2026',
    readTime: '8 min read',
    author: 'James Mwangi',
    category: 'Diaspora Investment',
    slug: 'diaspora-land-buying-guide-2026',
  },
  {
    id: 2,
    title: '5 Costly Mistakes to Avoid When Buying Land in Kenya This Year',
    excerpt: 'From fake titles to boundary disputes and hidden charges — learn the red flags and how Destiny Connector helps protect your investment.',
    image: "https://images.unsplash.com/photo-1663429975679-05daee9f31a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: 'February 18, 2026',
    readTime: '6 min read',
    author: 'Sarah Wambui',
    category: 'Buyer Guides',
    slug: 'mistakes-buying-land-kenya-2026',
  },
  {
    id: 3,
    title: 'Best Places to Invest in Land in Kenya 2026 – Top Growing Corridors',
    excerpt: 'Updated analysis of high-appreciation areas: Kitengela, Athi River, Kiambu, Machakos, Kilifi, and emerging hotspots along new infrastructure projects.',
    image: "https://images.unsplash.com/photo-1613457231357-a5db3bc5bd81?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: 'January 29, 2026',
    readTime: '10 min read',
    author: 'David Omondi',
    category: 'Market Trends',
    slug: 'best-land-investment-locations-kenya-2026',
  },
  {
    id: 4,
    title: 'Understanding Freehold vs Leasehold Titles in Kenya – Which is Better for You?',
    excerpt: 'Clear comparison, pros/cons, conversion processes, and why most of our projects come with verified freehold titles.',
    image: "https://images.unsplash.com/photo-1720027068414-fff0abffeec0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: 'January 10, 2026',
    readTime: '7 min read',
    author: 'Mercy Akinyi',
    category: 'Legal Insights',
    slug: 'freehold-vs-leasehold-titles-kenya',
  },
  {
    id: 5,
    title: 'Land Banking in Kenya: Smart Strategy or Risky Gamble in 2026?',
    excerpt: 'When it makes sense, how to choose the right parcels, exit strategies, and real case studies from our clients.',
    image: "https://images.unsplash.com/photo-1709842387194-85d8756d6c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFuZCUyMEJhbmtpbmclMjBpbiUyMEtlbnlhJTNBJTIwU21hcnQlMjBTdHJhdGVneSUyMG9yJTIwUmlza3klMjBHYW1ibGUlMjBpbiUyMDIwMjYlM0Z8ZW58MHx8MHx8fDA%3D",
    date: 'December 15, 2025',
    readTime: '9 min read',
    author: 'Peter Kamau',
    category: 'Investment Strategies',
    slug: 'land-banking-kenya-2026',
  },

  // ... other posts remain the same (you can keep the array as before)
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000')",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <BookOpen className="w-10 h-10 text-red-500" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Insights & Resources
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-light mt-4 max-w-4xl mx-auto leading-relaxed">
              Expert guides, market updates, legal tips and investment strategies to help you own land confidently in Kenya.
            </p>

            <div className="mt-10 inline-flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition shadow-lg">
                Contact an Expert
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold border border-white/40 hover:bg-white/20 transition">
                Book Site Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
            <button className="px-5 py-2.5 bg-blue-700 text-white rounded-full text-sm font-medium">
              All Topics
            </button>
            {['Diaspora Investment', 'Buyer Guides', 'Market Trends', 'Legal Insights', 'Investment Strategies'].map((cat) => (
              <button
                key={cat}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full group"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-blue-600" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4 text-blue-600" />
                      {post.author}
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 text-sm md:text-base transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full transition shadow-md">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-950 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated on Kenya's Land Market
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Get exclusive insights, market alerts, and investment opportunities delivered to your inbox.
          </p>

          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <button
              type="submit"
              className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition shadow-lg"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm mt-6 opacity-75">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}