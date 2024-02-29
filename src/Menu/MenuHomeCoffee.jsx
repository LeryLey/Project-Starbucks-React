import WholeBean from "../assets/whole-bean.jpg";
import Ground from "../assets/ground.jpg";
import Via from "../assets/via.jpg";
import Items from "../components/Items"
const GroupHomeCoffee = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 w-[auto] py-10">
      <Items img={WholeBean} name={"Hot Breakfast"} />
      <Items img={Ground} name={"Ground"} />
      <Items img={Via} name={"Via"} />
    </div>
  );
};

export default GroupHomeCoffee
