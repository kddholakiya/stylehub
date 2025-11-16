import React from 'react'
import { Navbar } from './_components/Navbar'
import Hero from './_components/Hero'
import PopularCollections from './_components/PopularCollections'
import NewProducts from './_components/NewProducts'
import DiscoverSection from './_components/DiscoverSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCollections />
      <NewProducts />
      <DiscoverSection />
    </div>
  )
}

export default Home
