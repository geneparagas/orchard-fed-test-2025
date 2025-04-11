import cooking1 from '../assets/cooking1.jpg';
import cooking2 from '../assets/cooking2.jpg';
import egg from '../assets/egg.jpg';
import red from '../assets/red.jpg';
import green from '../assets/green.jpg';
import white from '../assets/white.jpg';

const content = {
  cookingMeaning: {
    title: "WHAT DOES COOKING MEAN?",
    description: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
    ctaEgg: "THE PERFECT EGG",
    cta: "Keep water between 67 and 68°C for a flavourful, tender yolk",
    images: [
      { src: cooking1, alt: "Cooking setup", class:'image-large'},
      { src: cooking2, alt: "Chef experimenting", class:'image-small'},
      { src: egg, alt: "Perfect egg", class:'image-small-2'},
    ],
  },
  tasteColors: [
    { color: "RED", description: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.", image: red },
    { color: "Green", description: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours", image: green },
    { color: "White", description: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.", image: white },
  ],
};

export default content;