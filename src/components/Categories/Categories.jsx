import { Link } from "react-router-dom";
import "./Categories.scss";

export const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to={`/products/1`} className="link">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to={`/products/1`} className="link">
              Women
            </Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/3062612/pexels-photo-3062612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to={`/products/1`} className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1923109/pexels-photo-1923109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to={`/products/1`} className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to={`/products/1`} className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to={`/products/1`} className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
