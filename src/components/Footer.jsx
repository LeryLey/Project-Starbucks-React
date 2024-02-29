const Footer = () => {
    return (
      <footer id="about" className="ring-2 ring-gray-300 py-5 px-9">
        <div className="grid lg:grid-cols-5 md:grid-cols-3  pr-32 pb-10">
          <div className="space-y-8 pb-5">
            <h2 className="text-2xl">About Us</h2>
            <div className="flex flex-col my-2 text-gray-500 space-y-4">
              <a href="#" className="hover:text-black ">
                Our Company
              </a>
              <a href="#" className="hover:text-black ">
                Our Coffee
              </a>
              <a href="#" className="hover:text-black ">
                Stories and News
              </a>
              <a href="#" className="hover:text-black ">
                Starbucks Archive
              </a>
              <a href="#" className="hover:text-black ">
                Customer Service
              </a>
              <a href="#" className="hover:text-black ">
                Contact Us
              </a>
            </div>
          </div>
          <div className="space-y-8 pb-5">
            <h2 className="text-2xl">Careers</h2>
            <div className="flex flex-col my-2 text-gray-500 space-y-4">
              <a href="#" className="hover:text-black ">
                Culture and Values
              </a>
              <a href="#" className="hover:text-black ">
                Inclusion, Diversity, and Equity
              </a>
              <a href="#" className="hover:text-black ">
                College Achievement Plan
              </a>
              <a href="#" className="hover:text-black ">
                Alumni Community
              </a>
              <a href="#" className="hover:text-black ">
                U.S Careers
              </a>
              <a href="#" className="hover:text-black ">
                International Careers
              </a>
            </div>
          </div>
          <div className="space-y-8 pb-5">
            <h2 className="text-2xl">Social Impact</h2>
            <div className="flex flex-col my-2 text-gray-500 space-y-4">
              <a href="#" className="hover:text-black ">
                People
              </a>
              <a href="#" className="hover:text-black ">
                Planet
              </a>
              <a href="#" className="hover:text-black ">
                Environmental and Social Impact Reporting
              </a>
            </div>
          </div>
          <div className="space-y-8 pb-5">
            <h2 className="text-2xl">For Business Partners</h2>
            <div className="flex flex-col my-2 text-gray-500 space-y-4">
              <a href="#" className="hover:text-black ">
                Landlord Support Center
              </a>
              <a href="#" className="hover:text-black ">
                Suppliers
              </a>
              <a href="#" className="hover:text-black ">
                Corporate Gift Card Sales
              </a>
            </div>
          </div>
          <div className="space-y-8 pb-5">
            <h2 className="text-2xl">Order and Pick Up</h2>
            <div className="flex flex-col my-2 text-gray-500 space-y-4">
              <a href="#" className="hover:text-black ">
                Order on the App
              </a>
              <a href="#" className="hover:text-black ">
                Order on the Web
              </a>
              <a href="#" className="hover:text-black ">
                Delivery
              </a>
              <a href="#" className="hover:text-black ">
                Order and Pick Up Options
              </a>
              <a href="#" className="hover:text-black ">
                Explore and Find Coffee for Home
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 py-4">
          <div className="space-x-3 flex ">
            <a href="#" className="text-4xl">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="text-4xl ">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
            <a
              href="#"
              className="text-xl bg-black text-white rounded-full flex w-8 h-8 justify-center items-center"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="#"
              className="text-xl bg-black text-white rounded-full flex w-8 h-8 justify-center items-center"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a
              href="#"
              className="text-xl bg-black text-white rounded-full flex w-8 h-8 justify-center items-center"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
  
          <div className="md:space-x-2 md:space-y-0 space-y-6 my-4 flex md:flex-row flex-col">
            <a href="#" className="hover:underline">
              Privacy Notice
            </a>
            <span className="md:flex hidden text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span className="md:flex hidden text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Do Not Share My Personal Information
            </a>
            <span className="md:flex hidden text-gray-400">|</span>
            <a href="#" className="hover:underline">
              CA Supply Chain Act
            </a>
            <span className="md:flex hidden text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
            <span className="md:flex hidden text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
            <span className="md:flex hidden text-gray-400">|</span>
          </div>
          <span className="text-gray-500">
            © 2024 Starbucks Coffee Company. All rights reserved.
          </span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  