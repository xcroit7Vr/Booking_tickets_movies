import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

function PurchaseHistory() {
  const [cards] = useState([
    {
      tittle: "Card-1",
      text: `lorem.`,
    },
    {
      tittle: "Card-2",
      text: `lorem.`,
    },
    {
      tittle: "Card-3",
      text: `lorem.`,
    },
    {
      tittle: "Card-4",
      text: `lorem.`,
    },
    {
      tittle: "Card-5",
      text: `lorem.`,
    },
    {
      tittle: "Card-6",
      text: `lorem.`,
    },
  ]);
  return (
    <>
    <NavigationBar selectedCity={''} />
    <div className="ph-body">
      <section className="ph-section">
        <div className="ph-container">
          <h1 className="ph-h1">Purchase History</h1>
          <div className="ph-cards">
            {cards.map((card, i) => (
              <div key={i} className="ph-card">
                <h3>{card.tittle}</h3>
                <p>{card.text}</p>
                <div className="ph-btn-container">
                  <button className="ph-btns">Explore</button>
                  <button className="ph-btns">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default PurchaseHistory;
