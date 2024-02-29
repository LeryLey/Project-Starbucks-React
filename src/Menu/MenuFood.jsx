import HotBreakfast from "../assets/hot-breakfast.jpg";
import Bakery from "../assets/bakery.jpg";
import Lunch from "../assets/lunch.jpg";
import Snake from "../assets/snake-sweets.jpg";
import Items from "../components/Items";
const GroupDrinks = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 w-[auto] py-10">
      <Items img={HotBreakfast} name={"Hot Breakfast"} />
      <Items img={Bakery} name={"Bakery"} />
      <Items img={Lunch} name={"Lunch"} />
      <Items img={Snake} name={"Snake & Sweets"} />
    </div>
  );
};

export default GroupDrinks;
