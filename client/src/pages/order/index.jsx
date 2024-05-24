import { binIcon, hamburgerMenuIcon, trashIcon } from "../../assets/icons";
import { kikkoImg, orderImg, orderImg2, orderImg3 } from "../../assets/images";

const OrderPage = () => {
  return (
    <div className="h-full home-bg ">
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
      <main className="px-8 pb-5 text-white font-inter mt-7">
        <div>
          {/* User details */}
          <div className="flex flex-col">
            <span className="text-2xl tracking-wider font-goudy">John Doe</span>
            <span className="text-[14px] opacity-50">john.doe@gmail.com</span>
          </div>

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
            <div className="bg-[#4d4c4e] w-full h-full px-4 py-[19px] flex gap-6">
              <img src={orderImg} alt="orderImg" className="size-[70px]" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between">
                  <span className="tracking-wider font-goudy">Gyu Tataki</span>
                  <span className="text-xl text-beige font-goudy">65</span>
                </div>
                <div className="flex items-center">
                  <img src={trashIcon} alt="trashIcon" className="size-5" />
                  <div className="flex ml-[13px] justify-center items-center">
                    <div className="flex items-center justify-center w-6 h-5 bg-black border">
                      +
                    </div>
                    <div className="flex items-center justify-center w-6 h-5 text-sm bg-black border font-goudy">
                      1
                    </div>
                    <div className="flex items-center justify-center w-6 h-5 bg-black border">
                      -
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#4d4c4e] w-full h-full px-4 py-[19px] flex gap-6">
              <img src={orderImg2} alt="orderImg" className="size-[70px]" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between">
                  <span className="tracking-wider font-goudy">
                    Salmon Ponzu Butter
                  </span>
                  <span className="text-xl text-beige font-goudy">85</span>
                </div>
                <div className="flex items-center">
                  <img src={trashIcon} alt="trashIcon" className="size-5" />
                  <div className="flex ml-[13px] justify-center items-center">
                    <div className="flex items-center justify-center w-6 h-5 bg-black border">
                      +
                    </div>
                    <div className="flex items-center justify-center w-6 h-5 text-sm bg-black border font-goudy">
                      1
                    </div>
                    <div className="flex items-center justify-center w-6 h-5 bg-black border">
                      -
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#4d4c4e] w-full h-full px-4 py-[19px] flex gap-6">
              <img src={orderImg3} alt="orderImg" className="size-[70px]" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between">
                  <span className="tracking-wider font-goudy">
                    Aburi Salmon Spicy Kani
                  </span>
                  <span className="text-xl text-beige font-goudy">85</span>
                </div>
                <div className="flex items-center">
                  <img src={trashIcon} alt="trashIcon" className="size-5" />
                  <div className="flex ml-[13px] justify-center items-center">
                    <div className="flex items-center justify-center w-6 h-5 bg-black border">
                      +
                    </div>
                    <div className="flex items-center justify-center w-6 h-5 text-sm bg-black border font-goudy">
                      1
                    </div>
                    <div className="flex items-center justify-center w-6 h-5 bg-black border">
                      -
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="w-full h-full mt-[38px]">
            <div className="flex flex-col gap-5 py-6 border-t border-beige">
              <div className="flex justify-between">
                <span className="font-semibold">Sub Total</span>
                <span className="font-semibold">
                  <span className="font-light">Rp</span> 235.000
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Tax</span>
                <span className="font-semibold">
                  <span className="font-light">Rp</span> 23.500
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="py-6 border-t border-t-beige">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  <span className="font-light">Rp</span>258.000
                </span>
              </div>
            </div>

            {/* Check out */}
            <button className="bg-dark-beige w-full h-[43px] font-goudy tracking-widest">
              Check Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderPage;
