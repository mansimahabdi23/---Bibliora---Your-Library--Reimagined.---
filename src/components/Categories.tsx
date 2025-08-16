'use client'

const categories = [
  {
    id: 1,
    name: "Fiction & Literature",
    description: "Explore imaginative worlds and compelling narratives",
    icon: "📚",
    bookCount: "2,500+",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Science & Technology",
    description: "Discover the latest in scientific breakthroughs",
    icon: "🔬",
    bookCount: "1,800+",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    name: "History & Biography",
    description: "Journey through time with historical accounts",
    icon: "📖",
    bookCount: "1,200+",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    name: "Arts & Culture",
    description: "Immerse yourself in creative expressions",
    icon: "🎨",
    bookCount: "900+",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    name: "Philosophy & Psychology",
    description: "Explore the depths of human thought",
    icon: "🧠",
    bookCount: "750+",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    name: "Business & Economics",
    description: "Master the principles of commerce",
    icon: "💼",
    bookCount: "1,100+",
    color: "from-teal-500 to-cyan-500"
  }
]

export default function Categories() {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Explore</span>
            <span className="text-gray-100"> Categories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find your perfect read across our diverse collection of categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="card group cursor-pointer hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <span className="text-sm text-gray-400 font-medium">
                  {category.bookCount}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-primary-400 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <button className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
                  Browse Books →
                </button>
                <div className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-300 mb-6">
              Use our advanced search to discover books by author, genre, or keyword
            </p>
            <button className="btn-primary">
              Advanced Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 