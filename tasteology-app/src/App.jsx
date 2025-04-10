
import React, { useState } from "react";
import CookingSection from "./components/CookingSection";
import content from "./data/content";
import "./styles/main.scss";



export default function App() {

  const handleAnchorClick = (e) => {
    console.log("Anchor clicked:", e.target);
  };

  return (
    <main>
      <CookingSection
        data={content.cookingMeaning}
        onAnchorClick={handleAnchorClick}
      />
    </main>
  );
}
