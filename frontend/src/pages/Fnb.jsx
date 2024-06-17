import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

// Komponen Tab
const Tab = ({ label, isActive, onClick }) => (
  <button className={`menu-tab-custom ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </button>
);

// Komponen Item
const Item = ({ imgSrc, title, description, price }) => (
  <div className="menu-item-custom">
    <img src={imgSrc} alt={title} />
    <div className="menu-details-custom">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="menu-price-custom">{price}</p>
    </div>
  </div>
);

const FoodBeverageMenu = () => {
  const [activeTab, setActiveTab] = useState("Drink");

  const items = [
    // Items for Drink category
    {
      imgSrc: "/img/fnb/mfood_earl.jpg",
      title: "Milk Shake",
      description: "Minuman Milk Shake",
      price: "Rp65.000",
      category: "Drink",
    },
    {
      imgSrc: "/img/fnb/jasmine_tea.jpg",
      title: "Orange Jasmine Tea",
      description:
        "Aroma teh bunga melati dengan potongan buah jeruk sunkist asli serta selasih yang sangat menyegarkan",
      price: "Rp65.000",
      category: "Drink",
    },
    {
      imgSrc: "/img/fnb/aqua.jpg",
      title: "AQUA 600 ML",
      description: "AQUA 600 ML",
      price: "Rp20.000",
      category: "Drink",
    },
    // Items for Popcorn category
    {
      imgSrc: "/img/fnb/popcron_milo.jpg",
      title: "Popcorn Milo Dinosaurs (M)",
      description: "Popcorn Milo Dinosaurs Medium",
      price: "Rp65.000",
      category: "Popcorn",
    },
    {
      imgSrc: "/img/fnb/Popcorn_Balado.jpg",
      title: "Popcorn Spicy Balado (M)",
      description: "Popcorn Caramel Medium",
      price: "Rp65.000",
      category: "Popcorn",
    },
    {
      imgSrc: "/img/fnb/Popcorn_Caramel.jpg",
      title: "Popcorn Caramel (M)",
      description: "Popcorn Caramel Medium",
      price: "Rp65.000",
      category: "Popcorn",
    },
    // Items for Combo category
    {
      imgSrc: "/img/fnb/combo1.jpg",
      title: "Favourite Combo 1 with 2 Lychee Tea",
      description: "1 Popcorn Mix (M) + 2 Lychee Tea",
      price: "Rp185.000",
      category: "Combo",
    },
    {
      imgSrc: "/img/fnb/combo2.jpg",
      title: "Favourite Combo 1 with 2 Mojito Lime Tea",
      description: "1 Popcorn Mix (M) + 2 Mojito Lime Tea",
      price: "Rp185.000",
      category: "Combo",
    },
    {
      imgSrc: "/img/fnb/combo3.jpg",
      title: "Favourite Combo 1 with 2 Mojito Lime Tea",
      description: "1 Popcorn Mix (M) + 2 XXI Java Tea (s)",
      price: "Rp65.000",
      category: "Combo",
    },
    // Other categories can be added here
  ];

  return (
    <>
      <NavigationBar selectedCity={''} />
      <div className="menu-container-custom">
        <h1>Food & Beverage – BOEMI KEDATON XXI</h1>
        <div className="menu-tabs-custom">
          <Tab
            label="Popcorn"
            isActive={activeTab === "Popcorn"}
            onClick={() => setActiveTab("Popcorn")}
          />
          <Tab
            label="Drink"
            isActive={activeTab === "Drink"}
            onClick={() => setActiveTab("Drink")}
          />
          <Tab
            label="Combo"
            isActive={activeTab === "Combo"}
            onClick={() => setActiveTab("Combo")}
          />
          {/* Add more tabs for other categories */}
        </div>
        <div className="menu-list-custom">
          {items
            .filter((item) => item.category === activeTab)
            .map((item, index) => (
              <Item
                key={index}
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default FoodBeverageMenu;
