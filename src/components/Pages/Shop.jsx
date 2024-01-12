import React from 'react'
import Hero from '../hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollections from '../NewCollection/NewCollections'
import NewsLetter from '../NewsLetter/NewsLetter'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
