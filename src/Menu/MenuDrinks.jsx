import Oleato from "../assets/oleate.jpg";
import HotCoffee from "../assets/hot-coffee.jpg";
import HotTeas from "../assets/hot-teas.jpg";
import HotDrinks from "../assets/hot-drinks.jpg";
import Frapp from "../assets/SBX20190528_ChaiCremeFrapp.jpg";
import ColdCoffee from "../assets/cold-coffee.jpg";
import IcedTeas from "../assets/iced-teas.jpg";
import ColdDrinks from "../assets/cold-drinks.jpg";
import Items from "../components/Items"

const GroupDrinks = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 w-[auto] py-10">
      <Items img={Oleato} name={"Oleato™"} />
      <Items img={HotCoffee} name={"Hot Coffee"} />
      <Items img={HotTeas} name={"Hot Teas"} />
      <Items img={HotDrinks} name={"Hot Drinks"} />
      <Items img={Frapp} name={"Frappuccino® Blended Beverages"} />
      <Items img={ColdCoffee} name={"Cold Coffee"} />
      <Items img={IcedTeas} name={"Iced Teas"} />
      <Items img={ColdDrinks} name={"Cold Drinks"} />
    </div>
  );
};

export default GroupDrinks;
