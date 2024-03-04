import { Link } from "react-router-dom";
import Star from "../assets/Starbucks-Rewards-1024x471.png";
import Coffee from "../assets/025.webp";
import GroupExtras from "../components/GroupExtras";
import Scan from "../assets/scan-and-pay.png";
import Save from "../assets/save-in-app.png";
import Register from "../assets/register.png";
import Preload from "../assets/preload.png";
const Rewards = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <div className="bg-[#1e3932] flex text-gray-200 font-bold text-sm px-10 py-3 ">
          <h1>STARBUCKS® REWARDS</h1>
        </div>
      </div>
      <div className="bg-blue-50 relative  md:h-screen h-screen flex items-center md:flex-row flex-col">
        <div className="absolute right-0 overflow-x-hidden lg:h-full md:h-96 bottom-0">
          <img
            src={Star}
            className="w-full flex md:h-full h-52 duration-500 bottom-0 "
          />
        </div>
        <div className="px-10 md:pt-0 pt-10 space-y-5  md:text-start text-center z-[1]">
          <h2 className="text-4xl font-medium ">
            FREE COFFEE <br /> IS A TAP AWAY
          </h2>
          <div className="space-y-5">
            <p className="text-lg font-medium">
              Join now to start earning Rewards.
            </p>
            <div>
              <Link>
                <button
                  type="button"
                  className="bg-[#006241] mt-4 text-white px-5 pt-1 pb-2 rounded-full font-medium  duration-0 hover:bg-green-700 active:bg-green-900"
                >
                  Join now
                </button>
              </Link>
              <div className="mt-5">
                <span className=" text-xl">
                  Or
                  <Link>
                    <a href="/" className="underline hover:text-green-800">
                      {" "}
                      join in the app{" "}
                    </a>
                  </Link>
                  for the best experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center py-32 space-y-5">
          <h2 className="text-3xl font-medium ">Getting started is easy</h2>
          <div>
            <span>Earn Stars and get rewarded in a few easy steps.</span>
            <div className=" grid lg:grid-cols-3 lg:gap-y-0 sm:gap-y-10 my-10 md:grid-cols-2 gap-y-10 duration-500">
              <article className="flex flex-col justify-center items-center text-center space-y-8  md:px-16">
                <h1 className="rounded-full ring-1 ring-green-800 w-12 h-12 flex items-center justify-center font-bold text-xl text-green-800">
                  1
                </h1>
                <div className="space-y-4">
                  <span className="text-lg font-bold text-gray-800">
                    Create an account
                  </span>
                  <div>
                    <p className="md:w-full sm:w-96 w-80">
                      To get started,
                      <Link>
                        <a href="/" className="underline text-green-800">
                          {" "}
                          join now{" "}
                        </a>
                      </Link>
                      . You can also
                      <Link>
                        <a href="/" className="underline text-green-800">
                          {" "}
                          join in the app{" "}
                        </a>
                      </Link>
                      to get access to the full range of Starbucks® Rewards
                      benefits.
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex flex-col justify-center items-center text-center space-y-8 md:px-16 ">
                <h1 className="rounded-full ring-1 ring-green-800 w-12 h-12 flex items-center justify-center font-bold text-xl text-green-800">
                  2
                </h1>
                <div className="space-y-4">
                  <span className="text-lg font-bold text-gray-800">
                    Order and pay how you’d like
                  </span>
                  <div>
                    <p className="md:w-full sm:w-96 w-80">
                      Use cash, credit/debit card or save some time and pay
                      right through the app. You’ll collect Stars all ways.
                      <Link>
                        <a href="/" className="text-green-800 underline">
                          Learn how
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
              <article className="flex flex-col justify-center items-center text-center space-y-8 md:px-16">
                <h1 className="rounded-full ring-1 ring-green-800 w-12 h-12 flex items-center justify-center font-bold text-xl text-green-800">
                  3
                </h1>
                <div className="space-y-4">
                  <span className="text-lg font-bold text-gray-800">
                    Earn Stars, get Rewards
                  </span>
                  <div>
                    <p className="md:w-full sm:w-96 w-80">
                      As you earn Stars, you can redeem them for Rewards—like
                      free food, drinks, and more. Start redeeming with as
                      little as 25 Stars!
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* star  */}
      <div>
        <div className="bg-blue-50 flex justify-center pt-10  relative">
          <div>
            <h1 className="text-center sm:text-3xl text-2xl font-medium mb-12">
              Get your favorites for free
            </h1>
            <div
              id="start"
              className="relative flex justify-center sm:space-x-10 space-x-5 pb-5 "
            >
              <div
                id="line"
                className="absolute md:w-20 w-10 h-1 bg-green-800 left-4 bottom-0"
              ></div>
              <div id="star1" className="flex cursor-pointer">
                <span className="sm:text-3xl text-2xl">25</span>
                <span className="text-yellow-700 ">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>
              <div id="star2" className="flex cursor-pointer">
                <span className="sm:text-3xl text-2xl">100</span>
                <span className="text-yellow-700 ">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>

              <div id="star3" className="flex cursor-pointer">
                <span className="sm:text-3xl text-2xl">200</span>
                <span className="text-yellow-700 ">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>
              <div id="star4" className="flex cursor-pointer">
                <span className="sm:text-3xl text-2xl">300</span>
                <span className="text-yellow-700 ">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>
              <div id="star5" className="flex cursor-pointer">
                <span className="sm:text-3xl text-2xl">400</span>
                <span className="text-yellow-700 ">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* items star  */}
        <div
          id="items-star"
          className="bg-blue-100 flex justify-center items-center"
        >
          <div className="flex md:flex-row flex-col items-center">
            <img src={Coffee} className="w-96" />
            <div className="md:pb-0 pb-10">
              <h2 className="text-2xl md:text-start text-center font-medium mb-3">
                Customize your drink
              </h2>
              <div className="flex justify-center">
                <p className="md:w-96 w-[80%] text-black md:text-start text-center">
                  Make your drink just right with an extra espresso shot,
                  nondairy milk or a dash of your favorite syrup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-20">
        <h2 className="text-3xl font-medium">Endless Extras</h2>
        <div className="mt-8 mb-12 flex justify-center">
          <p className="w-[50%] font-medium">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>
        </div>
        <GroupExtras />
      </div>
      {/* payment */}
      <div className="flex justify-center items-center bg-gray-100 px-10">
        <div className="w-full">
          <div className="mt-10 mb-20 w-full justify-center flex flex-col items-center">
            <h2 className="text-center text-3xl font-medium">
              Cash or card, you earn Stars
            </h2>
            <p className="mt-4 w-[80%] text-center">
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </div>
          <div className="flex my-10 space-x-10">
            <div className="flex lg:flex-row flex-col">
              <div className="mr-20 lg:mb-0 mb-10 w-96">
                <h2 className="text-2xl font-medium">1★Star per dollar</h2>
                <div>
                  <span className="text-xl">Pay as you go</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="flex space-x-7">
                  <img src={Scan} className="w-32" />
                  <div>
                    <h2 className="text-2xl font-medium">
                      Scan and pay separately
                    </h2>
                    <p className="w-80 mt-3">
                      Use cash or credit/debit card at the <br /> register.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex space-x-7">
                    <img src={Save} className="w-32" />
                    <div>
                      <h2 className="text-2xl font-medium">
                        Save payment in the app
                      </h2>
                      <p className="md:w-80 mt-3">
                        Check-out faster by saving a credit/debit card or PayPal
                        to your account. You’ll be able to order ahead or scan
                        and pay at the register in one step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
