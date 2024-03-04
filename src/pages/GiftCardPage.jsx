import { Link } from "react-router-dom";
import Cards from "../storeData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const GiftCardPage = () => {
  let slideLeft = () => {
    const slide = document.getElementById("slide");
    slide.scrollLeft = slide.scrollLeft - 500;
  };
  let slideRight = () => {
    const slide = document.getElementById("slide");
    slide.scrollLeft = slide.scrollLeft + 500;
  };
  return (
    <div className="pt-4 px-10">
      <div className="w-full  space-y-4">
        <div className="flex w-full justify-between  uppercase  font-medium">
          <span className="text-black">Featured</span>
          <Link>
            <span className="text-green-800">See all</span>
          </Link>
        </div>
      </div>
      {/* slide  cards*/}
      <div className="h-52 w-full flex items-center my-4">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="cursor-pointer active:bg-gray-400/90  rounded-md bg-gray-300/40"
        />
        <div
          id="slide"
          className="flex  h-full  overflow-x-hidden scroll scroll-smooth whitespace-nowrap rounded-xl scrollbar-hide"
        >
          {Cards.map((item) => (
            <img
              src={item.img}
              alt="/"
              key={item.id}
              className="mr-4 rounded-xl cursor-pointer select-none duration-300 hover:scale-[0.9]"
            />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="cursor-pointer active:bg-gray-400/90  rounded-md bg-gray-300/40"
        />
      </div>
    </div>
  );
};

export default GiftCardPage;
