import { useEffect, useState } from "react";
import {
  binIcon,
  hamburgerMenuIcon,
  logoutIcon,
  trashIcon,
} from "../../assets/icons";
import { kikkoImg, orderImg, orderImg2, orderImg3 } from "../../assets/images";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const [orders, setOrders] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/api/orders", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/account/user", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const total =
        orders.reduce(
          (total, order) => total + order.totalPrice * order.quantity,
          0
        ) * 1.1;
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [orders]);

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID") + ",00";
  };

  const handleIncrement = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      const updatedOrders = orders.map((order) =>
        order._id === orderId
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );
      setOrders(updatedOrders);
      await axios.put(
        `http://localhost:4000/api/orders/update-quantity`,
        { orderId, operation: "increment" },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleDecrement = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      const updatedOrders = orders.map((order) =>
        order._id === orderId && order.quantity > 1
          ? { ...order, quantity: order.quantity - 1 }
          : order
      );
      setOrders(updatedOrders);
      await axios.put(
        `http://localhost:4000/api/orders/update-quantity`,
        { orderId, operation: "decrement" },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveItem = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete("http://localhost:4000/api/orders", {
        headers: {
          Authorization: token,
        },
        data: {
          orderId: orderId,
        },
      });

      if (response.status === 200) {
        const updatedOrders = orders.filter((order) => order._id !== orderId);
        setOrders(updatedOrders);
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = userInfo[0]._id;

      await Promise.all(
        orders.map(async (order) => {
          await axios.post(
            "http://localhost:4000/api/payments",
            {
              orderId: order._id,
              paymentDate: new Date(),
              amount: order.totalPrice * order.quantity * 1.1,
              accountId: userId,
            },
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );
        })
      );

      alert("Checkout berhasil!");

      setOrders([]);
    } catch (error) {
      console.error("Error during checkout:", error);
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
              <li className="hover:text-white hover:border-b">
                <a href="/orders">My Orders</a>
              </li>
              <li
                className={`${
                  location.pathname == "/cart"
                    ? "text-white border-b pb-1"
                    : "text-beige"
                }`}
              >
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
      <main className="px-8 pb-5 text-white font-inter mt-7">
        <div>
          {/* User details */}
          {userInfo.map((user, index) => (
            <div className="flex flex-col" key={index}>
              <span className="text-2xl tracking-wider font-goudy">
                {user.username}
              </span>
              <span className="text-[14px] opacity-50">{user.email}</span>
            </div>
          ))}

          {/* Table status */}
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex justify-between">
              <span className="tracking-wider font-goudy">
                Dining Preferences
              </span>
              <span className="tracking-wider font-goudy text-beige">
                Dine in
              </span>
            </div>
            <div className="flex justify-between">
              <span className="tracking-wide font-goudy">Table Assignment</span>
              <span className="tracking-wider font-goudy text-beige">19</span>
            </div>
          </div>

          {/* Orders menu */}
          <div className="flex flex-col gap-5 mt-5">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-[#4d4c4e] w-full h-full px-4 py-[19px] flex gap-6"
              >
                <img
                  src={order.imageurl}
                  alt="orderImg"
                  className="size-[70px]"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="flex justify-between">
                    <span className="tracking-wider font-goudy">
                      {order.itemName}
                    </span>
                    <span className="text-xl text-beige font-goudy">
                      {formatPrice(order.totalPrice * order.quantity)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={trashIcon}
                      alt="trashIcon"
                      className="cursor-pointer size-5"
                      onClick={() => handleRemoveItem(order._id)}
                    />
                    <div className="flex ml-[13px] justify-center items-center">
                      <div
                        className="flex items-center justify-center w-6 h-5 bg-black border cursor-pointer"
                        onClick={() => handleIncrement(order._id)}
                      >
                        +
                      </div>
                      <div className="flex items-center justify-center w-6 h-5 text-sm bg-black border font-goudy">
                        {order.quantity}
                      </div>
                      <div
                        className="flex items-center justify-center w-6 h-5 bg-black border cursor-pointer"
                        onClick={() => handleDecrement(order._id)}
                      >
                        -
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="w-full h-full mt-[38px]">
            <div className="flex flex-col gap-5 py-6 border-t border-beige">
              <div className="flex justify-between">
                <span className="font-semibold">Sub Total</span>
                <span className="font-semibold">
                  <span className="font-light">Rp</span>{" "}
                  {formatPrice(
                    orders.reduce(
                      (total, order) =>
                        total + order.totalPrice * order.quantity,
                      0
                    )
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Tax</span>
                <span className="font-semibold">
                  <span className="font-light">Rp</span>{" "}
                  {formatPrice(
                    orders.reduce(
                      (total, order) =>
                        total + order.totalPrice * order.quantity,
                      0
                    ) * 0.1
                  )}
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="py-6 border-t border-t-beige">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  <span className="font-light">Rp</span>{" "}
                  {formatPrice(totalAmount)}
                </span>
              </div>
            </div>

            {/* Check out */}
            <button
              className="bg-dark-beige w-full h-[43px] font-goudy tracking-widest"
              onClickCapture={handleCheckout}
            >
              Check Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
