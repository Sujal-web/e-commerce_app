import { useState } from "react";
import "./Product.scss";

export const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const images = [
    "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt="image1"
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            src={images[1]}
            alt="image2"
            onClick={(e) => setSelectedImg(1)}
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
};
