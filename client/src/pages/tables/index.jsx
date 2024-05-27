import { useEffect, useState } from "react";
import { hamburgerMenuIcon, logoutIcon } from "../../assets/icons";
import {
  greenStatusImg,
  kikkoImg,
  redStatusImg,
  yellowStatusImg,
} from "../../assets/images";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TablesPage = () => {
  const [tables, setTables] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchTables = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found in local storage");
        return;
      }

      try {
        const response = await axios.get("http://localhost:4000/api/tables", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setTables(response.data);
      } catch (error) {
        console.error("Error fetching tables:", error.response.data);
      }
    };
    fetchTables();
  }, []);

  const getStatusImage = (status) => {
    switch (status) {
      case "occupied":
        return redStatusImg;
      case "reserved":
        return yellowStatusImg;
      case "vacant":
      default:
        return greenStatusImg;
    }
  };

  // Hitung jumlah tabel yang tersedia
  const availableTablesCount = tables.filter(
    (table) => table.status === "vacant"
  ).length;
  const totalTablesCount = tables.length;

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
              <li className="hover:border-b hover:text-white">
                <Link to="/home">Home</Link>
              </li>
              <li
                className={`${
                  location.pathname == "/tables"
                    ? "text-white border-b pb-1"
                    : "text-beige"
                }`}
              >
                <Link to="/tables">Tables</Link>
              </li>
              <li className="hover:text-white hover:border-b">
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

      <main>
        <div className="px-8 pb-8 mt-5">
          {/* Available counter */}
          <div className="flex items-center justify-end gap-2 text-white font-inter">
            <span>Available</span>
            <span className="w-[35px] h-[19px] bg-beige rounded-sm text-sm p-1 font-medium font-inter text-black flex justify-center items-center">
              {availableTablesCount}/{totalTablesCount}
            </span>
          </div>

          {/* Table cards */}
          <div className="mt-[11px] flex flex-col font-inter gap-4 lg:grid lg:grid-cols-2 desktop:grid-cols-3">
            {tables.map((table) => (
              <div
                key={table._id}
                className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center z-20 relative overflow-hidden"
                onClick={toggleDetails}
              >
                <div className="flex flex-col justify-between flex-grow h-full text-white">
                  <h1 className="font-semibold text-beige">{table.name}</h1>
                  <div>
                    <p>
                      {table.reservation && table.reservation.user
                        ? table.reservation.user.username || "N/A"
                        : "N/A"}
                    </p>
                    <p
                      className={
                        table.status === "occupied"
                          ? "text-red-500"
                          : table.status === "reserved"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }
                    >
                      {table.status}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <img
                    src={getStatusImage(table.status)}
                    alt={`${table.status}StatusImg`}
                  />
                </div>
              </div>
            ))}

            {/* Menu details */}
            {isOpen && (
              <div className="z-10 h-full -mt-10 overflow-hidden bg-black rounded-2xl">
                <ul className="p-10 px-6 pb-6 text-white">
                  <li>Salmon Ponzu Butter</li>
                  <li>Gyu Tataki</li>
                  <li>Aburi Salmon Spicy Kani</li>
                  <li>Chi Forest</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TablesPage;
