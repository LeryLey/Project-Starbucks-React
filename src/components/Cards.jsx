import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Card1 from "../assets/card1.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";
import Card4 from "../assets/card4.jpg";
import Card5 from "../assets/card5.jpg";
import Card6 from "../assets/card6.jpg";
import { fromJSON } from "postcss";
const Cards = () => {
  let slides = [
    {
      img: Card1,
    },
    {
      img: Card2,
    },
    {
      img: Card3,
    },
    {
      img: Card4,
    },
    {
      img: Card5,
    },
    {
      img: Card6,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="w-full h-screen relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="h-52 w-96 bg-center bg-cover duration-500 rounded-xl relative group"
      >
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[40%] bg-black/2 p-2 rounded-full cursor-pointer left-5 hover:bg-gray-400/30 active:bg-gray-800 ">
          <BsChevronCompactLeft
            size={30}
            onClick={prevSlide}
            className="duration-0 hover:text-white "
          />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[40%] bg-black/2 p-2 rounded-full cursor-pointer right-5 hover:bg-gray-400/30 active:bg-gray-800 ">
          <BsChevronCompactRight
            size={30}
            onClick={nextSlide}
            className="duration-0 hover:text-white "
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
