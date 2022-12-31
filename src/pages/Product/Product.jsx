import { useState } from "react";
import "./Product.scss";
import { AddShoppingCart } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Balance } from "@mui/icons-material";

export const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

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

      <div className="right">
        <h1>Title</h1>
        <span className="price">₹ 499</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          iusto ipsum blanditiis, eligendi a, mollitia ut iste fuga aperiam,
          laborum expedita placeat natus? Ipsam consectetur architecto,
          doloremque voluptatem adipisci unde?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev == 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISHLIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Men</span>
        </div>
        <hr />
        <div className="details">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};
