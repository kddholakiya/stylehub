import React from 'react'
import { Navbar } from './_components/Navbar'
import Hero from './_components/Hero'
import PopularCollections from './_components/PopularCollections'
import NewProducts from './_components/NewProducts'
import DiscoverSection from './_components/DiscoverSection'
import Newsletter from './_components/Newsletter'
import Footer from './_components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCollections />
  <NewProducts />
  <DiscoverSection />
  <Newsletter />
  <Footer />
    </div>
  )
}

export default Home
