import ColdCup from "../assets/cold-cup.jpg";
import Tumbler from "../assets/tumbler.jpg";
import Mugs from "../assets/mug.jpg";
import Others from "../assets/others.jpg";
import Items from "../components/Items"

const MenuMerchandise = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 w-[auto] py-10">
      <Items img={ColdCup} name={"Cold Cups"} />
      <Items img={Tumbler} name={"Tumbler"} />
      <Items img={Mugs} name={"Mugs"} />
      <Items img={Others} name={"Others"} />
    </div>
  );
};


export default MenuMerchandise;
