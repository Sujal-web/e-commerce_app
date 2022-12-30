import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            consequatur porro animi omnis facere, quasi dolorem, eaque, aliquid
            error vero quas officia impedit magni quia inventore id quam
            expedita alias neque unde earum esse at itaque. Sunt.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            consequatur porro animi omnis facere, quasi dolorem, eaque, aliquid
            error vero quas officia impedit magni quia inventore id quam
            expedita alias neque unde earum esse at itaque. Sunt.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Trendzone</span>
          <span className="copyright">
            Ⓒ Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};
