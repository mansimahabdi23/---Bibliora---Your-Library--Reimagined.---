'use client'

import { useState, useEffect } from 'react'

const featuredBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of decadence and excess, Gatsby explores the darker aspects of the Jazz Age.",
    image: "/imgs/book-1.png",
    category: "Classic Literature"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism and surveillance society.",
    image: "/imgs/book-2.png",
    category: "Science Fiction"
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A brief history of humankind, from ancient humans to the present day.",
    image: "/imgs/book-3.png",
    category: "Non-Fiction"
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "An epic fantasy adventure about a hobbit's journey to reclaim a dwarf kingdom.",
    image: "/imgs/book-4.png",
    category: "Fantasy"
  },
  {
    id: 5,
    title: "Harry Potter",
    author: "J.K. Rowling",
    description: "The magical world of wizards and the battle between good and evil.",
    image: "/imgs/book-5.png",
    category: "Young Adult"
  }
]

export default function FeaturedBooks() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBooks.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredBooks.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredBooks.length) % featuredBooks.length)
  }

  return (
    <section id="books" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured</span>
            <span className="text-gray-100"> Books</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked selection of must-read books across various genres
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredBooks.map((book, index) => (
                <div key={book.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center rounded-2xl"
                      style={{ backgroundImage: `url(${book.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/50 to-transparent rounded-2xl"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                      <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
                          {book.category}
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                          {book.title}
                        </h3>
                        <p className="text-lg text-gray-300 mb-4">
                          by {book.author}
                        </p>
                        <p className="text-gray-200 mb-6 text-lg">
                          {book.description}
                        </p>
                        <button className="btn-primary">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 hover:bg-dark-700 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 hover:bg-dark-700 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredBooks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary-400 w-8' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Book Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="card group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-primary-400 transition-colors">
                {book.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{book.author}</p>
              <span className="inline-block px-2 py-1 bg-dark-700 text-primary-400 text-xs rounded">
                {book.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 