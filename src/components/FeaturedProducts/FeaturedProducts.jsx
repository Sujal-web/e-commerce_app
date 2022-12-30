import "./FeaturedProducts.scss";
import { Card } from "../Card/Card";

export const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "t-shirt",
      isNew: true,
      oldPrice: 799,
      price: 499,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "coat",
      isNew: true,
      oldPrice: 3499,
      price: 1999,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "skirt",
      oldPrice: 899,
      price: 599,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/8412792/pexels-photo-8412792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 499,
      price: 249,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          consequatur porro animi omnis facere, quasi dolorem, eaque, aliquid
          error vero quas officia impedit magni quia inventore id quam expedita
          alias neque unde earum esse at itaque. Sunt.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
