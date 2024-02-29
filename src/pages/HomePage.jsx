import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/137-88691.webp";
import img2 from "../assets/137-88120.jpg";
import img3 from "../assets/137-88371.jpg";
import img4 from "../assets/137-88561.jpg";
import img5 from "../assets/137-88575.webp";
import img6 from "../assets/137-88886.webp";
const HomePage = () => {
  return (
    <React.Fragment>
      <div className="py-7 px-7">
        <section className="flex md:flex-row flex-col-reverse">
          <div className="w-full bg-[#efabfc] text-gray-900 flex items-center justify-center md:py-0 py-10">
            <div className="text-center">
              <h2 className="lg:text-5xl text-3xl font-medium">
                Job well done
              </h2>
              <div className="flex flex-col items-center my-8 ">
                <p className="md:w-[65%] w-[80%] lg:text-xl text-xl  mb-8">
                  Show that hard worker your gratitude, just in time for
                  Employee Appreciation Day on March 1.
                </p>
                <div>
                  <Link>
                    <a
                      href="#"
                      className="bg-transparent text-gray-900  font-medium uppercase py-1 px-5 rounded-full border-[1px] border-gray-900 hover:border-white duration-500 hover:text-[#efabfc] hover:bg-white "
                    >
                      Send an aGift
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex items-center bg-gray-100">
            <img src={img6} />
          </div>
        </section>
        <section className="grid md:grid-cols-2 grid-col-1">
          <div className="w-full h-auto flex items-center bg-gray-100">
            <img src={img1} />
          </div>
          <div className="w-full bg-[#006241] text-white flex items-center justify-center md:py-0 py-10">
            <div className="text-center">
              <h2 className="lg:text-2xl text-xl font-medium">
                Get rewarded with Bank of America
              </h2>
              <div className="flex flex-col items-center my-8 ">
                <p className="md:w-[65%] w-[80%] font-medium lg:text-lg text-md  mb-8">
                  Now Starbucks® Rewards members can link their eligible Bank of
                  America card and enjoy special perks, like 2% Cash Back and
                  Bonus Stars on qualifying Starbucks in-app purchases.*
                </p>
                <div>
                  <Link>
                    <a
                      href="#"
                      className="bg-transparent text-white font-medium uppercase py-1 px-5 rounded-full border-[1px] border-white duration-500 hover:text-[#006241] hover:bg-white "
                    >
                      get start
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex md:flex-row flex-col-reverse">
          <div className="w-full bg-[#b2b267] text-white flex items-center justify-center md:py-0 py-10">
            <div className="text-center">
              <h2 className="lg:text-5xl text-3xl font-medium">
                Pass the pistachios
              </h2>
              <div className="flex flex-col items-center my-8 ">
                <p className="md:w-[65%] w-[80%] lg:text-xl text-xl  mb-8">
                  Your favorite winter duo is back: the Pistachio Latte and
                  Pistachio Cream Cold Brew.
                </p>
                <div>
                  <Link>
                    <a
                      href="#"
                      className="bg-transparent text-white font-medium uppercase py-1 px-5 rounded-full border-[1px] border-white duration-500 hover:text-[#006241] hover:bg-white "
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex items-center bg-gray-100">
            <img src={img2} />
          </div>
        </section>
        <section className="grid md:grid-cols-2 grid-col-1">
          <div className="w-full h-auto flex items-center bg-gray-100">
            <img src={img3} />
          </div>
          <div className="w-full bg-[#e99264] text-white flex items-center justify-center md:py-0 py-10">
            <div className="text-center">
              <h2 className="lg:text-4xl text-3xl font-medium">
                Turn up the bright
              </h2>
              <div className="flex flex-col items-center my-8 ">
                <p className="md:w-[65%] w-[80%] lg:text-2xl text-xl  mb-8">
                  A cheerful moment awaits with our Pink Drink, Dragon Drink®
                  and Paradise Drink Starbucks Refreshers® beverage.
                </p>
                <div>
                  <Link>
                    <a
                      href="#"
                      className="bg-transparent text-white font-medium uppercase py-1 px-5 rounded-full border-[1px] border-white duration-500 hover:text-[#006241] hover:bg-white "
                    >
                      Order now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex md:flex-row flex-col-reverse">
          <div className="w-full bg-[#337481] text-white flex items-center justify-center md:py-0 py-10">
            <div className="text-center">
              <h2 className="lg:text-5xl text-3xl font-medium">
                Pass the pistachios
              </h2>
              <div className="flex flex-col items-center my-8 ">
                <p className="md:w-[65%] w-[80%] font-medium lg:text-xl text-xl  mb-8">
                  Your favorite winter duo is back: the Pistachio Latte and
                  Pistachio Cream Cold Brew.
                </p>
                <div>
                  <Link>
                    <a
                      href="#"
                      className="bg-transparent text-white font-medium uppercase py-1 px-5 rounded-full border-[1px] border-white duration-500 hover:text-[#006241] hover:bg-white "
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex items-center bg-gray-100">
            <img src={img4} />
          </div>
        </section>
        <section className="grid md:grid-cols-2 grid-col-1 py-2">
          <div className="w-full h-auto flex items-center bg-gray-100">
            <img src={img5} />
          </div>
          <div className="w-full bg-[#006241] text-white flex items-center justify-center md:py-0 py-10">
            <div className="text-center">
              <h2 className="lg:text-2xl text-xl font-medium">
                “A smile makes a big difference.”
              </h2>
              <h3 className="my-8 lg:text-xl text-md">
                - Brenda, Starbucks Partner (Employee)
              </h3>
              <div className="flex flex-col items-center ">
                <p className="md:w-[65%] w-[80%] font-medium lg:text-lg text-md  mb-8">
                  Our partners uplift each other and their communities every
                  day.
                </p>
                <div>
                  <Link>
                    <a
                      href="#"
                      className="bg-transparent text-white font-medium uppercase py-1 px-5 rounded-full border-[1px] border-white duration-500 hover:text-[#006241] hover:bg-white "
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex flex-col items-center justify-center pt-10">
          <p className="text-sm text-center lg:w-[45%] w-[70%]  font-medium">
            *At participating stores only. Some restrictions apply. Linked Card
            members will earn 2% Cash Back on the full purchase price of every
            Qualifying Purchase. Bonus Star offer excludes taxes and tips. Stars
            may not be earned on purchases of alcohol or on reloads of Starbucks
            Cards that are not registered. For full details, visit
            <a href="#" className="underline ">
              {" "}
              www.starbucks.com/bofa
            </a>
            . Bank of America, N.A. Member FDIC.
          </p>
          <span className="mt-10 text-center">
            **Impossible is a trademark of Impossible Foods Inc. Used under
            license.
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
