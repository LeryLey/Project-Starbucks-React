import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <div className="bg-gray-100">
      <nav className="md:px-36 px-4 py-4 relative">
        <span
          id="active"
          className="w-10 h-px bg-green-800 flex absolute bottom-3 md:left-36"
        ></span>
        <ul className="space-x-8">
          <Link>
            <a href="#" className="text-sm">
              Menu
            </a>
          </Link>
          <Link>
            <a href="#" className="text-sm">
              Featured
            </a>
          </Link>
          <Link>
            <a href="#" className="text-sm">
              Previous
            </a>
          </Link>
          <Link>
            <a href="#" className="text-sm">
              Favorite
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MenuList;
