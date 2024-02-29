// eslint-disable-next-line react/prop-types
const MenuDrink = ({ name, img }) => {
  return (
    <article className="flex items-center space-x-4">
      <img src={img} className="rounded-full md:w-28 w-20" />
      <h2 className="text-xl">{name}</h2>
    </article>
  );
};

export default MenuDrink;
