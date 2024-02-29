import MenuDrink from "./MenuDrink";
import Oleato from "../assets/oleate.jpg";
import HotCoffee from "../assets/hot-coffee.jpg";
import HotTeas from "../assets/hot-teas.jpg";
import HotDrinks from "../assets/hot-drinks.jpg";
import Frapp from "../assets/SBX20190528_ChaiCremeFrapp.jpg";
import ColdCoffee from "../assets/cold-coffee.jpg";
import IcedTeas from "../assets/iced-teas.jpg";
import ColdDrinks from "../assets/cold-drinks.jpg";

const GroupDrinks = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 w-[auto] py-10">
      <MenuDrink img={Oleato} name={"Oleato™"} />
      <MenuDrink img={HotCoffee} name={"Hot Coffee"} />
      <MenuDrink img={HotTeas} name={"Hot Teas"} />
      <MenuDrink img={HotDrinks} name={"Hot Drinks"} />
      <MenuDrink img={Frapp} name={"Frappuccino® Blended Beverages"} />
      <MenuDrink img={ColdCoffee} name={"Cold Coffee"} />
      <MenuDrink img={IcedTeas} name={"Iced Teas"} />
      <MenuDrink img={ColdDrinks} name={"Cold Drinks"} />
    </div>
  );
};

export default GroupDrinks;
