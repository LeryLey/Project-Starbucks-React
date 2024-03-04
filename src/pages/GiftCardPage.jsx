import { Link } from "react-router-dom";
import Cards from "../components/Cards";
const GiftCardPage = () => {
  return (
    <div className="pt-4">
      <div className="w-full px-10 space-y-4">
        <div className="flex w-full justify-between  uppercase  font-medium">
          <span className="text-black">Featured</span>
          <Link>
            <span className="text-green-800">See all</span>
          </Link>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default GiftCardPage;
