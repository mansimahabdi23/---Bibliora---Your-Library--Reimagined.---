'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedBooks from '@/components/FeaturedBooks'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-dark">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <FeaturedBooks />
      <Categories />
      <Footer />
    </main>
  )
} 