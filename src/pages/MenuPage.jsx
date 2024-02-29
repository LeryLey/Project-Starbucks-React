import GroupHomeCoffee from "../Menu/MenuHomeCoffee";
import MenuList from "../components/MenuList";
import GroupDrinks from "../Menu/MenuDrinks";
import GroupFood from "../Menu/MenuFood";
import MenuMerchandise from "../Menu/MenuMerchandise";
const MenuPage = () => {
  return (
    <div>
      <MenuList />
      <div className="lg:pl-36 md:pl-16 pl-0 py-10 flex md:space-x-20 space-x-4">
        {/* left side  */}
        <div className="space-y-6 w-52 lg:block hidden">
          <div>
            <h2 className="text-xl font-medium mb-3">Drinks</h2>
            <ul className="space-y-6">
              <li>
                <a href="#" className="text-gray-500">
                  Oleato™
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Hot Coffee
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Hot Tea
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Hot Drinks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Frappuccino <br />
                  Blended Beverages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Cold Coffees
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Iced Teas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Cold Drinks
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-3">Food</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-500">
                  Hot Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Oatmeal & Yogurt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Bakery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Snacks & Sweets
                </a>
              </li>
            </ul>
          </div>

          {/* at home coffee  */}
          <div className="">
            <h2 className="text-xl font-medium mb-3">At Home Coffee</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-500">
                  Whole Bean
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Ground
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  VIA® Instant
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-3">Merchandise</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-500">
                  Cold Cups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Tumblers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Mugs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Others
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* right side  */}
        <aside className="w-full">
          <div>
            <h1 className="text-3xl font-bold">Menu</h1>
            {/* menu drink  */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-5">Drinks</h2>
              <hr />
              <GroupDrinks />
            </div>
            {/* menu Food Food */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-5">Food</h2>
              <hr />
              <GroupFood />
            </div>
            {/* Menu at home coffee  */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-5">At Home Coffee</h2>
              <hr />
              <GroupHomeCoffee />
            </div>
            {/* Menu  MenuMerchandise */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-5">Merchandise</h2>
              <hr />
              <MenuMerchandise />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MenuPage;
