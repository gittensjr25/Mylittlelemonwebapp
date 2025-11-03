import { useState } from "react";
import "./Menu.css";

import greekSalad from "../assets/dishes/Greek Salad.jpg";
import bruschetta from "../assets/dishes/Bruschetta.jpg";
import lemonDessert from "../assets/dishes/lemon cake.jpg";
import pasta from "../assets/dishes/pasta.jpg";
import pizza from "../assets/dishes/Pizza.jpg";
import soup from "../assets/dishes/soup.jpg";
import sandwich from "../assets/dishes/sandwich.jpg";
import steak from "../assets/dishes/steak.jpg";
import seafood from "../assets/dishes/seafood.jpg";
import burger from "../assets/dishes/burger.jpg";

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const dishes = [
    { name: "Greek Salad", image: greekSalad, price: "$12.99" },
    { name: "Bruschetta", image: bruschetta, price: "$8.50" },
    { name: "Lemon Dessert", image: lemonDessert, price: "$6.00" },
    { name: "Pasta Primavera", image: pasta, price: "$14.99" },
    { name: "Margherita Pizza", image: pizza, price: "$11.50" },
    { name: "Tomato Basil Soup", image: soup, price: "$7.25" },
    { name: "Club Sandwich", image: sandwich, price: "$9.99" },
    { name: "Grilled Steak", image: steak, price: "$19.99" },
    { name: "Seafood Platter", image: seafood, price: "$22.50" },
    { name: "Classic Burger", image: burger, price: "$10.50" },
  ];

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="menu-page">
      <h1 className="menu-page-title">Our Menu</h1>

      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🍽 Menu Grid */}
      <div className="menu-page-grid">
        {filteredDishes.map((dish, index) => (
          <div className="menu-page-card" key={index}>
            <img src={dish.image} alt={dish.name} className="menu-page-img" />
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
