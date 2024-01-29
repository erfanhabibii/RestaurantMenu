import React, { useState } from "react";
import menus from './data'
import Categories from './Components/Categories'
import Menu from './Components/Menu'
import "./App.css";

const allCategories = ['all', ...new Set(menus.map(menu => menu.category))]

export default function App() {

    const [allMenus, setAllMenus] = useState(menus)
    const [categories, setCategories] = useState(allCategories)

    const filterMenus = (category) => {
        if(category === 'all') {
            setAllMenus(menus)
            return
        }

        let filteredMenus = menus.filter(menu => menu.category === category)
        setAllMenus(filteredMenus)
    }

  return (
    <>
      <main>
        <section className='py-20 mx-auto container'>
          <div className='text-center mb-8'>
            <h2 className="text-[2.5rem]/[1] tracking-wider font-semibold text-grey-900 mb-3">Our Menu</h2>
            <div className='w-20 h-1 mx-auto bg-gold-50'></div>
          </div>
          <Categories categories={categories} filterMenus={filterMenus} />
          <Menu allMenus={allMenus} />
        </section>
      </main>
    </>
  );
}
