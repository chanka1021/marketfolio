import React from 'react'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'
import CategorieSections from '../components/CategorieSections'
import ProductByCat from '../components/ProductByCat'
function Home() {
  return (
    <div>
      <Searchbar/>
      <Banner/>
      <CategorieSections/>

      <ProductByCat  cat="All Categories"/>
      <ProductByCat cat = "Computers"/>
      <ProductByCat cat="Home & Garden"/>
      <ProductByCat cat="Dog"/>

      homesasas
      asas
    </div>
  )
}

export default Home
