
import React, { useState } from "react";
import CookingSection from "./components/CookingSection";
import TasteSection from "./components/TasteSection";
import Modal from "./components/Modal";
import content from "./data/content";
import "./styles/main.scss";



export default function App() {
  const [modalImage, setModalImage] = useState(null);

  const handleAnchorClick = (e) => {
    console.log("Anchor clicked:", e.target);
  };

  return (
    <main>
      <CookingSection
        data={content.cookingMeaning}
        onImageClick={setModalImage}
        onAnchorClick={handleAnchorClick}
      />
      <TasteSection
        data={content.tasteColors}
        onImageClick={setModalImage}
      />
      {modalImage && <Modal image={modalImage} onClose={() => setModalImage(null)} />}
    </main>
  );
}
