import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import data from "./data";
import Categories from "./Categories";
import whatsappLogo from './whatsappLogo.png'

function App() {
 const [menuItems, setMenuItems] = useState(data);
 const [categories, setCategories] = useState([]);

 const allCat = ["all", ...new Set(data.map((item) => item.category))];
 console.log(allCat);

 const filterItems = (category) => {
  if (category === "all") {
   setMenuItems(data);
   return;
  }
  const newItems = data.filter((item) => item.category === category);
  setMenuItems(newItems);
 };

 return (
  <main>
   <section className="menu section">
    <div className="title">
     <h2 data-text="My projects">My projects</h2>
     <div className="underline"></div>
    </div>
    <Categories filterItems={filterItems} categories={categories} />
    <Menu data={menuItems} />
   <a href="https://wa.me/7020702101?text=HasheerPeerzade"> <img  src={whatsappLogo} alt="whatsappLogo" className="whatsappLogo"/></a>
   </section>
  </main>
 );
}

export default App;
