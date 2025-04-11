import React from "react";

const CookingSection = ({ data, onImageClick, onAnchorClick }) => (
  <section className="cooking-section fade-in">
    <div className="wrapper">
      {data.images.map((img, i) => (
        <div className={`image ${img.class}`} key={i}>
          <img
            src={img.src}
            alt={img.alt}
            onClick={() => onImageClick(img.src)}
            className="clickable"
          />
        </div>
      ))}
      <div className="content">
        <h2 className="title">{data.title}</h2>
        <hr />
        <p>{data.description}</p>
        <a onClick={onAnchorClick}>{data.ctaEgg}</a>
        <h3>{data.cta}</h3>
      </div>
    </div>
  </section>
);

export default CookingSection;