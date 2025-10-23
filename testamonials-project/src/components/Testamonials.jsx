import React, { useState } from "react";
import "../styles.css";

function Testamonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testamonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testamonials.length - 1) % testamonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testamonials.length);
  };

  return (
    <div className="testamonials">
      <div className="testamonials-quote">
        {testamonials[currentIndex].quote}
      </div>
      <div className="testamonials-author">
        - {testamonials[currentIndex].author}
      </div>
      <div className="testamonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testamonials;