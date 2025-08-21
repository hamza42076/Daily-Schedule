import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import SearchBar from './component/SearchBar'
import ProductList from './component/ProductList'
import ProductLine from './component/ProductLine'
import ContactForm from './component/ContactForm'

const App = () => {
  let [data, setData] = useState([])
  let [search, setSearch] = useState("")

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products")
      const result = await response.json()
      setData(result.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Search filter
  const filterProducts = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />

      <HeroSection />
      <ProductLine/>

      {/* ✅ Ab sirf ProductList ka use hoga */}
      <ProductList products={filterProducts} />
      <ContactForm/>
    </>
  )
}

export default App
