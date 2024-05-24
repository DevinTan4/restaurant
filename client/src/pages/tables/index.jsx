import { useState } from "react";
import { hamburgerMenuIcon } from "../../assets/icons";
import {
  greenStatusImg,
  kikkoImg,
  redStatusImg,
  yellowStatusImg,
} from "../../assets/images";

const TablesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
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

      <main>
        <div className="px-8 pb-8 mt-5">
          {/* Available counter */}
          <div className="flex items-center justify-end gap-2 text-white font-inter">
            <span>Available</span>
            <span className="w-[35px] h-[19px] bg-beige rounded-sm text-sm p-1 font-medium font-inter text-black flex justify-center items-center">
              5/20
            </span>
          </div>

          {/* Table cards */}
          <div className="mt-[11px] flex flex-col font-inter gap-4">
            <div
              className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center z-20 relative overflow-hidden"
              onClick={toggleDetails}
            >
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-[#FE6365]">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
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

            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-[#28BB6B]">Vacant</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={greenStatusImg} alt="greenStatusImg" />
              </div>
            </div>

            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-[#FFB93A]">Reserved</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={yellowStatusImg} alt="yellowStatusImg" />
              </div>
            </div>
            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-red-600">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-red-600">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-red-600">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-red-600">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-red-600">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-red-600">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-red-600">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
            <div className="w-full h-[120px] bg-[#4D4D4D] border border-beige rounded-2xl pl-6 py-4 flex items-center">
              <div className="flex flex-col justify-between flex-grow h-full text-white">
                <h1 className="font-semibold text-beige">T1</h1>
                <div>
                  <p>John Doe</p>
                  <p className="text-red-600">Occupied</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={redStatusImg} alt="redStatusImg" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TablesPage;
