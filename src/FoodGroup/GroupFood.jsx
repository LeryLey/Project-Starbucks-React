import HotBreakfast from "../assets/hot-breakfast.jpg";
import Bakery from "../assets/bakery.jpg";
import Lunch from "../assets/lunch.jpg";
import Snake from "../assets/snake-sweets.jpg";
import MenuFood from "../FoodGroup/MenuFood";

const GroupDrinks = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 w-[auto] py-10">
      <MenuFood img={HotBreakfast} name={"Hot Breakfast"} />
      <MenuFood img={Bakery} name={"Bakery"} />
      <MenuFood img={Lunch} name={"Lunch"} />
      <MenuFood img={Snake} name={"Snake & Sweets"} />
    </div>
  );
};

export default GroupDrinks;
