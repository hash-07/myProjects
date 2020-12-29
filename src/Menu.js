import React from "react";


const Menu = ({ data }) => {
 return (
  <div className="section-center">
   {data.map((menuItem) => {
    const { id, title, img, desc, price, linkk } = menuItem;
    return (
     <article key={id} className="menu-item">
      <a href={linkk} rel="noopener noreferrer"  target="_blank">
       <img src={img} alt={title} className="photo" />
      </a>
      <div className="item-info">
       <header>
        <h4>{title} </h4>
        <h4>{price}</h4>
       </header>
       <p className="item-text">{desc}</p>
      </div>
     </article>
    );
   })}
  </div>
 );
};

export default Menu;
