import React from "react";

const TasteSection = ({ data, onImageClick }) => (
  <section className="taste-section fade-in">
    <div className="title">
      <h2>Taste The Colours</h2>
    </div>
    <div className="colors">
      {data.map((item, i) => (
        <div className="color-block" key={i}>
          <div className="image-container">
            <img
              src={item.image}
              alt={item.color}
              onClick={() => onImageClick(item.image)}
              className="clickable"
            />
          </div>
          <h3>{item.color}</h3>
          <div className="description">{item.description}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TasteSection;