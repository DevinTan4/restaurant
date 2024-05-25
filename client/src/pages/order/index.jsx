import { useEffect, useState } from "react";
import { hamburgerMenuIcon, minIcon, plusIcon } from "../../assets/icons";
import { kikkoImg, orderImg3 } from "../../assets/images";
import { itemImg1 } from "../../assets/images/items";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="h-full home-bg">
      {/* Navbar */}
      <header>
        <nav>
          <div className="flex items-center justify-between px-8 pt-3">
            <img src={kikkoImg} alt="kikkoLogo" />
            <img src={hamburgerMenuIcon} alt="hamburgerMenuIcon" />
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="mt-[45px] px-8 pb-8">
        <div className="flex flex-col gap-11">
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
                <button className="w-full h-6 mt-5 text-white font-goudy bg-dark-beige">
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
