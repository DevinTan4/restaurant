import { Link, useLocation } from "react-router-dom";
import {
  arrowRightIcon,
  hamburgerMenuIcon,
  instagramIcon,
  logoutIcon,
  profileIcon,
  xIcon,
  youtubeIcon,
} from "../../assets/icons";
import {
  appetizerImg,
  drinksImg,
  kikkoImg,
  mainDishesImg,
  sushiHomeImg,
  sushiHomeImg2,
  sushiHomeTabletImg,
  sushiHomeTabletImg2,
  titlebreakImg,
} from "../../assets/images";
import {
  blackBackgroundImg,
  halfCircleImg,
  halfCircleImg2,
  halfCircleTabletImg,
  halfCircleTabletImg2,
  waveTextureImg,
} from "../../assets/images/backgrounds";

const HomePage = () => {
  const location = useLocation();

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
              <li
                className={`${
                  location.pathname == "/home"
                    ? "text-white border-b pb-1"
                    : "text-beige"
                }`}
              >
                <Link to="/home">Home</Link>
              </li>
              <li className="hover:text-white hover:border-b">
                <a href="#">Tables</a>
              </li>
              <li className="hover:text-white hover:border-b">
                <a href="#">My Orders</a>
              </li>
              <li className="hover:text-white hover:border-b">
                <a href="#">Online Reservation</a>
              </li>
            </ul>
            <div className="flex items-center">
              <div className="hidden bg-gray-700 lg:flex items-center justify-center px-2 py-[14px] rounded w-[134px] font-inter h-10 gap-4 cursor-pointer">
                <img src={logoutIcon} alt="logoutIcon" className="lg:size-6" />
                <span className="text-white">Log out</span>
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
      <main>
        <div className="relative flex flex-col">
          <div className="relative">
            {/* First home image */}
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={halfCircleTabletImg}
              />
              <img
                src={halfCircleImg}
                alt="halfCircleImg"
                className="absolute top-0 z-10 mt-[68px] right-0"
              />
            </picture>
            <picture>
              <source media="(min-width: 1024px)" srcSet={sushiHomeTabletImg} />
              <img
                src={sushiHomeImg}
                alt="sushiImg"
                className="absolute top-0 mt-[116px] z-20 lg:right-0"
              />
            </picture>
          </div>
          <div className="mt-[394px] flex flex-col mr-[33px] text-right lg:mt-[676px]">
            <h1 className="font-goudy text-[40px] font-bold text-white lg:text-7xl">
              Harmony
            </h1>
            <p className="text-beige text-[40px] font-goudy lg:text-7xl">
              on the{" "}
              <span className="font-bold text-white lg:text-7xl">Plate</span>
            </p>
            <p className="text-xs font-light tracking-wider text-white font-inter lg:text-xl">
              Taste the delicate Sushi Symphony
            </p>
          </div>

          {/* Second home image */}
          <div className="absolute top-[393px] right-[84px] lg:left-0 lg:top-[610px]">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={halfCircleTabletImg2}
              />
              <img src={halfCircleImg2} alt="sushiImg" />
            </picture>
          </div>
          <div className="mt-3 lg:-mt-20">
            <picture className="">
              <source
                media="(min-width: 1024px)"
                srcSet={sushiHomeTabletImg2}
              />
              <img src={sushiHomeImg2} alt="SushiImg" />
            </picture>
            <div className="flex justify-center w-full p-16">
              <button className="w-[326px] h-[43px] bg-beige text-white font-goudy lg:w-full">
                Make an order
              </button>
            </div>
          </div>

          {/* Apeetizers, main dishes, and drinks */}
          <div className="flex flex-col gap-12 px-8 desktop:gap-36">
            {/* Appetizers */}
            <div className="mt-[65px] flex flex-col gap-3">
              {/* Title */}
              <div className="flex flex-col items-center gap-2 text-white">
                <h1 className="font-inter text-[8px] tracking-widest lg:text-base">
                  Starter Menu
                </h1>
                <img
                  src={titlebreakImg}
                  alt="titleBreakImg"
                  className="lg:w-20 lg:h-4"
                />
                <h1 className="text-xl font-light tracking-widest font-goudy lg:text-3xl lg:font-bold">
                  Appetizers
                </h1>
              </div>

              {/* Appetizers */}
              <div className="flex flex-col items-center w-full gap-3 text-white desktop:flex-row desktop:items-center desktop:mt-7">
                <div>
                  <img
                    src={appetizerImg}
                    alt="appetizerImg"
                    className="lg:w-[896px] lg:h-[502px] desktop:w-[715px]"
                  />
                </div>
                <div className="w-full">
                  {/* Menu */}
                  <div className="w-full flex flex-col gap-[10px] lg:px-16">
                    {/* Menu Details */}
                    <div>
                      {/* Menu 1 */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-goudy lg:text-2xl">
                          Aburi Salmon Spicy Kani
                        </span>
                        <div className="h-[1px] flex-grow bg-white mx-4"></div>
                        <span className="text-beige lg:text-xl">65</span>
                      </div>
                      <div className="w-[200px] leading-none lg:w-[486px]">
                        <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut officia.
                        </span>
                      </div>
                    </div>

                    <div>
                      {/* Menu 2 */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-goudy lg:text-2xl">
                          Salmon Ponzu Butter
                        </span>
                        <div className="h-[1px] flex-grow bg-white mx-4"></div>
                        <span className="text-beige lg:text-xl">85</span>
                      </div>
                      <div className="w-[200px] leading-none lg:w-[486px]">
                        <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut officia.
                        </span>
                      </div>
                    </div>

                    <div>
                      {/* Menu 3 */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-goudy lg:text-2xl">
                          Gyu Tataki
                        </span>
                        <div className="h-[1px] flex-grow bg-white mx-4"></div>
                        <span className="text-beige lg:text-xl">65</span>
                      </div>
                      <div className="w-[200px] leading-none lg:w-[486px]">
                        <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut officia.
                        </span>
                      </div>
                    </div>

                    <div>
                      {/* Menu 4 */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-goudy lg:text-2xl">
                          Aburi Salmon Spicy Kani
                        </span>
                        <div className="h-[1px] flex-grow bg-white mx-4"></div>
                        <span className="text-beige lg:text-xl">65</span>
                      </div>
                      <div className="w-[200px] leading-none lg:w-[486px]">
                        <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut officia.
                        </span>
                      </div>
                    </div>

                    <div>
                      {/* Menu 5 */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-goudy lg:text-2xl">
                          Salmon Ponzu Butter
                        </span>
                        <div className="h-[1px] flex-grow bg-white mx-4"></div>
                        <span className="text-beige">55</span>
                      </div>
                      <div className="w-[200px] leading-none lg:w-[486px]">
                        <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut officia.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Dishes */}
            <div className="flex flex-col gap-3">
              {/* Title */}
              <div className="flex flex-col items-center gap-2 text-white">
                <h1 className="font-inter text-[8px] tracking-widest lg:text-base">
                  Highlight Menu
                </h1>
                <img
                  src={titlebreakImg}
                  alt="titleBreakImg"
                  className="lg:w-20 lg:h-4"
                />
                <h1 className="text-xl font-light tracking-widest font-goudy lg:font-bold lg:text-3xl">
                  Main Dishes
                </h1>
              </div>

              {/* Main Dishes Menu */}
              <div className="flex flex-col items-center w-full gap-3 text-white desktop:flex-row desktop:mt-7">
                <img
                  src={mainDishesImg}
                  alt="mainDishesImg"
                  className="lg:w-[896px] lg:h-[502px] desktop:w-[705px]"
                />
                {/* Menu */}
                <div className="w-full flex flex-col gap-[10px] lg:px-16">
                  {/* Menu Details */}
                  <div>
                    {/* Menu 1 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-goudy lg:text-2xl">
                        Aburi Salmon Spicy Kani
                      </span>
                      <div className="h-[1px] flex-grow bg-white mx-4"></div>
                      <span className="text-beige lg:text-xl">65</span>
                    </div>
                    <div className="w-[200px] leading-none lg:w-[486px]">
                      <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut officia.
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Menu 2 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-goudy lg:text-2xl">
                        Salmon Ponzu Butter
                      </span>
                      <div className="h-[1px] flex-grow bg-white mx-4"></div>
                      <span className="text-beige lg:text-xl">85</span>
                    </div>
                    <div className="w-[200px] leading-none lg:w-[486px]">
                      <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut officia.
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Menu 3 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-goudy lg:text-2xl">
                        Gyu Tataki
                      </span>
                      <div className="h-[1px] flex-grow bg-white mx-4"></div>
                      <span className="text-beige lg:text-xl">65</span>
                    </div>
                    <div className="w-[200px] leading-none lg:w-[486px]">
                      <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut officia.
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Menu 4 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-goudy lg:text-2xl">
                        Aburi Salmon Spicy Kani
                      </span>
                      <div className="h-[1px] flex-grow bg-white mx-4"></div>
                      <span className="text-beige lg:text-xl">65</span>
                    </div>
                    <div className="w-[200px] leading-none lg:w-[486px]">
                      <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut officia.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drinks */}
            <div className="flex flex-col gap-3">
              {/* Title */}
              <div className="flex flex-col items-center gap-2 text-white">
                <h1 className="font-inter lg:text-base text-[8px] tracking-widest">
                  Hot & Cold
                </h1>
                <img
                  src={titlebreakImg}
                  alt="titleBreakImg"
                  className="lg:w-20 lg:h-4"
                />
                <h1 className="text-xl font-light tracking-widest font-goudy lg:text-3xl lg:font-bold">
                  Drinks
                </h1>
              </div>

              {/* Main Dishes Menu */}
              <div className="flex flex-col items-center w-full gap-3 text-white desktop:flex-row desktop:mt-7">
                <img
                  src={drinksImg}
                  alt="drinksImg"
                  className="lg:-[896px] lg:h-[502px] desktop:w-[715px]"
                />
                {/* Menu */}
                <div className="w-full flex flex-col gap-[10px] lg:px-16">
                  {/* Menu Details */}
                  <div>
                    {/* Menu 1 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-goudy lg:text-2xl">
                        Pristine Water
                      </span>
                      <div className="h-[1px] flex-grow bg-white mx-4"></div>
                      <span className="text-beige lg:text-xl">65</span>
                    </div>
                    <div className="w-[200px] leading-none lg:w-[486px]">
                      <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                        Mineral water
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Menu 2 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-goudy lg:text-2xl">
                        Coca Cola Can
                      </span>
                      <div className="h-[1px] flex-grow bg-white mx-4"></div>
                      <span className="text-beige lg:text-xl">85</span>
                    </div>
                    <div className="w-[200px] leading-none lg:w-[486px]">
                      <span className="flex-wrap text-[10px] font-light font-inter lg:text-base">
                        Carbonated soft drink
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Menu 3 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-goudy lg:text-2xl">
                        Sprite Can
                      </span>
                      <div className="h-[1px] flex-grow bg-white mx-4"></div>
                      <span className="text-beige lg:text-xl">65</span>
                    </div>
                    <div className="w-[200px] leading-none">
                      <span className="flex-wrap text-[10px] font-light font-inter">
                        Carbonated soft drink
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* Menu 4 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-goudy lg:text-2xl">
                        Chi Forest
                      </span>
                      <div className="h-[1px] flex-grow bg-white mx-4"></div>
                      <span className="text-beige">65</span>
                    </div>
                    <div className="w-[200px] leading-none">
                      <span className="flex-wrap text-[10px] font-light font-inter">
                        Sparkling water
                      </span>
                    </div>
                  </div>

                  <div className="mt-[6px] flex justify-between">
                    <span className="font-inter text-[10px] text-beige tracking-widest">
                      SOFT DRINK
                    </span>
                    <img src={arrowRightIcon} alt="arrowRightIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Online Reservation */}
          <div className="reservation-bg w-full h-[521px] mt-20 opacity-30 px-8 pt-[138px] relative">
            <div className="relative reservation-background w-[326px] h-[282px] lg:w-[906px] lg:h-[854px] desktop:w-[1312px]">
              <div className="reservation-wave-bg h-[92px] inset-0 opacity-20 lg:w-[906] lg:h-[287px]"></div>
              <div className="absolute top-0 w-full pl-8 pt-7 lg:pl-[89px] lg:pt-[95px]">
                <h1 className="text-xl tracking-wider text-white font-goudy lg:text-5xl">
                  Online Reservation
                </h1>
                <p className="text-xs text-white lg:text-4xl">
                  For further support, please call{" "}
                  <span className="text-beige">323-123-1-432</span>
                </p>
              </div>

              {/* Reservation Form */}
              <div className="px-8 pt-6 pb-[33px] lg:px-[92px] lg:pt-[69px]">
                <form action="" className="gap-[11px] flex flex-col">
                  {/* Date */}
                  <input
                    type="date"
                    className="w-full text-white bg-[#191919] lg:h-14 lg:placeholder:text-xl"
                  />
                  <div className="flex w-full gap-2">
                    <input
                      type="time"
                      className="bg-[#191919] w-1/2 text-white lg:h-14 lg:placeholder:text-xl"
                    />
                    <input
                      type="text"
                      className="bg-[#191919] w-1/2 text-white lg:h-14 lg:placeholder:text-xl"
                    />
                  </div>
                  <input
                    type="text"
                    name="note"
                    className="bg-[#191919] w-full text-white placeholder:text-xs font-inter lg:h-14 lg:placeholder:text-xl"
                    placeholder="Note"
                  />
                  <button className="h-6 text-[10px] tracking-wider text-white border font-inter border-beige lg:mt-[93px] lg:h-24 lg:text-xl">
                    CHECK AVAILABILITY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="bg-no-repeat footer-bg h-[166px] pt-[26px] flex flex-col items-center gap-[19px] px-[43px]">
          <h1 className="font-light tracking-wide text-center text-white font-inter">
            FOLLOW US
          </h1>
          {/* Social media */}
          <div className="flex justify-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-beige size-10">
              <img src={xIcon} alt="xIcon" className="size-[21px]" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-beige size-10">
              <img
                src={instagramIcon}
                alt="instagramIcon"
                className="size-[21px]"
              />
            </div>
            <div className="flex items-center justify-center rounded-full bg-beige size-10">
              <img
                src={youtubeIcon}
                alt="youtubeIcon"
                className="size-[21px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px] text-center">
            <div className="w-full h-[1px] bg-white"></div>
            <p className="text-white text-[10px] font-inter">
              Copyright &copy; 2024 Pradita University. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
