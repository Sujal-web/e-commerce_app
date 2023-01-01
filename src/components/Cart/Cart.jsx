import "./Cart.scss";
import { DeleteOutlineOutlined } from "@mui/icons-material";

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "t-shirt",
      desc: "White Elegant t-shirt",
      isNew: true,
      oldPrice: 799,
      price: 499,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "coat",
      desc: "coat",
      isNew: true,
      oldPrice: 3499,
      price: 1999,
    },
  ];

  return (
    <div className="cart">
      <h1>Product in your Cart</h1>
      {data?.map((item) => (
        <div key={item.id} className="item">
          <img src={item.img} alt={item.title} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlineOutlined className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹499</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};
