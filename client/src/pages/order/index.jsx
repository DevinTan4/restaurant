import { useEffect, useState } from "react";
import {
  hamburgerMenuIcon,
  logoutIcon,
  minIcon,
  plusIcon,
} from "../../assets/icons";
import { kikkoImg } from "../../assets/images";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/api/menu", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID") + ",00";
  };

  const handleOrder = async (itemName, price, imageurl) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:4000/api/orders",
        {
          itemName,
          quantity: 1,
          totalPrice: price,
          imageurl,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log("Order placed:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
      console.error(error.response?.data);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-full home-bg">
      <header>
        {/* Navbar */}
        <nav>
          <div className="px-6 pt-5 h-[29px] flex justify-between items-center">
            <img
              src={kikkoImg}
              alt="hamburgerMenuIcon"
              className="w-[124px] h-[45px]"
            />
            <ul className="hidden lg:flex lg:text-beige lg:gap-10">
              <li className="hover:text-white hover:border-b">
                <Link to="/home">Home</Link>
              </li>
              <li className="hover:text-white hover:border-b">
                <Link to="/tables">Tables</Link>
              </li>
              <li
                className={`${
                  location.pathname == "/orders"
                    ? "text-white border-b pb-1"
                    : "text-beige"
                }`}
              >
                <a href="/orders">My Orders</a>
              </li>
              <li className="hover:text-white hover:border-b">
                <a href="/cart">Payment</a>
              </li>
            </ul>
            <div className="flex items-center">
              <div className="hidden bg-gray-700 lg:flex items-center justify-center px-2 py-[14px] rounded w-[134px] font-inter h-10 gap-4 cursor-pointer">
                <img src={logoutIcon} alt="logoutIcon" className="lg:size-6" />
                <span className="text-white" onClick={handleLogout}>
                  Log out
                </span>
              </div>
              <img
                src={hamburgerMenuIcon}
                alt="profileIcon"
                className="size-5 lg:hidden"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="mt-[45px] px-8 pb-8">
        <div className="flex flex-col gap-11 lg:grid lg:grid-cols-2 desktop:grid-cols-3">
          {/* Card */}
          {menuItems.map((item) => (
            <div
              key={item._id}
              className="w-full h-full overflow-hidden bg-black rounded-3xl"
            >
              <img
                src={item.imageurl}
                alt="itemImg"
                className="w-full h-[215px] object-cover"
              />
              <div className="px-7 pt-[14px] pb-[34px] text-white font-goudy">
                {/* Title */}
                <div>
                  <h1 className="text-[28px] text-beige">{item.name}</h1>
                  <p className="flex flex-wrap text-xs font-inter">
                    {item.description}
                  </p>
                </div>
                {/* Price and amount */}
                <div className="flex items-center justify-between mt-12">
                  <div className="flex text-white font-goudy">
                    <div className="w-[22px] h-[18px] border flex justify-center items-center">
                      <img src={minIcon} alt="minIcon" />
                    </div>
                    <div className="w-[22px] h-[18px] border flex justify-center items-center text-[10px]">
                      1
                    </div>
                    <div className="w-[22px] h-[18px] border flex justify-center items-center">
                      <img src={plusIcon} alt="plusIcon" />
                    </div>
                  </div>
                  <div className="flex gap-2 text-xl">
                    Rp
                    <span className="text-beige">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </div>

                {/* Order button */}
                <button
                  className="w-full h-6 mt-5 text-white font-goudy bg-dark-beige"
                  onClick={() =>
                    handleOrder(item.name, item.price, item.imageurl)
                  }
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OrderPage;
