import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import SearchBar from './component/SearchBar'
import ProductList from './component/ProductList'
import ProductLine from './component/ProductLine'
import ContactForm from './component/ContactForm'

const App = () => {
  let TodoList = [
    { Travel: "Dawn Prayer", IsCompleted: false },
    { Travel: "Recite Quran", IsCompleted: true },
    { Travel: "Exercise", IsCompleted: false },
    { Travel: "BreakFast", IsCompleted: false },
    { Travel: "Shower", IsCompleted: false },
    { Travel: "Noon Prayer", IsCompleted: false },
    { Travel: "Recite Quran", IsCompleted: false },
    { Travel: "Lunch", IsCompleted: false },
    { Travel: "Nap", IsCompleted: false },
    { Travel: "Evening Prayer", IsCompleted: true },
  ]

  let [action, setAction] = useState(TodoList);

  const ChangeAction = (index) => {
    const updated = [...action];
    updated[index].IsCompleted = !updated[index].IsCompleted; // toggle true/false
    setAction(updated);
  }

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
