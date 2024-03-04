import { Link } from "react-router-dom";
import { useState } from "react";
let Navbar = () => {
  let Style = {
    btnStyleOne:
      "bg-transparent text-black py-1 px-5 rounded-full border-[1px] border-[#006241] duration-500 hover:text-white hover:bg-[#006241]",
    btnStyleTwo:
      "bg-black text-white py-1 px-5 rounded-full border-[1px] border-gray-800 duration-500 hover:bg-gray-800",
    styleList:
      "uppercase text-sm font-medium duration-300 hover:text-[#006241]",
  };
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  const handleClick = () => {
    setShow(!show);
    setClose(!close);
  };
  return (
    <nav className="flex relative bg-white shadow-md h-20 lg:px-10 px-5 z-20">
      <div className=" flex  items-center w-full md:space-x-5 space-x-10">
        <a href="#" className="">
          <img
            src="https://www.epbusinessjournal.com/wp-content/uploads/2020/11/starbucks-logo-png-transparent.png"
            className="w-14"
          />
        </a>
        {/* menu  */}
        <div className="md:flex hidden h-20 bg-white w-full justify-between p-7">
          <ul className="flex lg:space-x-9 space-x-4">
            <Link to={"/menu"}>
              <li>
                <button className={Style.styleList}>menu</button>
              </li>
            </Link>
            <Link to={"/rewards"}>
              <li>
                <button className={Style.styleList}>rewards</button>
              </li>
            </Link>
            <Link to={"/gift-cards"}>
              <li>
                <button className={Style.styleList}>gift card</button>
              </li>
            </Link>
          </ul>
          <span className="md:hidden flex h-px my-4 bg-gray-300" />
          <div className="md:space-x-4 flex md:flex-row flex-col-reverse md:items-center md:gap-0 gap-4">
            <a
              href="#"
              id="location-store"
              className="flex  duration-500 hover:underline hover:text-[#006241]"
            >
              <span className="text-xl">
                <ion-icon name="location"></ion-icon>
              </span>
              <span>Find store</span>
            </a>
            <div className="space-x-4  text-sm font-medium inline-block">
              <button type="button" className={Style.btnStyleOne}>
                Sign in
              </button>
              <button type="button" className={Style.btnStyleTwo}>
                John now
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            !close
              ? "hidden"
              : "md:hidden absolute right-0 text-4xl pr-5 cursor-pointer"
          }
          onClick={handleClick}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div
          className={
            !close
              ? "md:hidden absolute right-0 text-4xl pr-5 cursor-pointer"
              : "hidden"
          }
          onClick={handleClick}
        >
          <ion-icon name="close"></ion-icon>
        </div>

        {/* Right Side */}
        <div
          className={
            !show
              ? "md:hidden absolute bg-white top-full w-[60%] justify-between p-7 right-0"
              : "absolute bg-white top-full w-[60%] justify-between p-7 -right-full z-10"
          }
        >
          <ul className="flex flex-col space-y-7 select-none">
            <Link to={"/menu"}>
              <button className={Style.styleList}>menu</button>
            </Link>
            <Link to={"/rewards"}>
              <button className={Style.styleList}>rewards</button>
            </Link>
            <Link to={"/gift-cards"}>
              <button className={Style.styleList}>gift card</button>
            </Link>
          </ul>
          <span className="flex h-px my-4 bg-gray-300" />
          <div className="flex flex-col-reverse  gap-4">
            <a
              href="#"
              id="location-store"
              className="flex duration-500 hover:underline hover:text-[#006241]"
            >
              <span className="text-xl">
                <ion-icon name="location"></ion-icon>
              </span>
              <span>Find store</span>
            </a>
            <div className=" space-y-2 sm:space-x-4 text-sm font-medium ">
              <button type="button" className={Style.btnStyleOne}>
                Sign in
              </button>
              <button type="button" className={Style.btnStyleTwo}>
                John now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
