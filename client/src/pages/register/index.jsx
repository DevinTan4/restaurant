import { Link, useNavigate } from "react-router-dom";
import { eyeIcon } from "../../assets/icons";
import { bannerImg, bannerImgDesktop } from "../../assets/images";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/login");
  };

  return (
    <div className="h-[844px] lg:h-[1366px] desktop:h-[1024px] lg:flex lg:flex-col desktop:flex-row">
      {/* Banner */}
      <div className="lg:h-1/2 desktop:w-1/2 desktop:h-full">
        <picture>
          <source media="(min-width: 1024)" srcSet={bannerImg} />
          <source media="(min-width: 1366px" srcSet={bannerImgDesktop} />
          <img
            src={bannerImg}
            alt="bannerImg"
            className="hidden object-cover size-full lg:block"
          />
        </picture>
      </div>

      {/* Form */}
      <div className="h-full px-10 py-20 text-white bg-black bg-opacity-100 bg-default font-inter lg:h-1/2 lg:px-60 lg:pt-10 lg:pb-[38px] desktop:w-1/2 desktop:h-full desktop:px-[120px] desktop:py-[172px] object-cover">
        {/* Title */}
        <div>
          <h1 className="text-[32px] font-semibold font-goudy lg:text-[44px]">
            Create account.
          </h1>
          <p className="text-xs font-light text-beige font-inter lg:text-base">
            Create Your Account Today
          </p>
        </div>

        {/* InputForm */}
        <div className="mt-[77px] lg:mt-[52px]">
          <form action="" className="flex flex-col gap-5 lg:gap-[22px]">
            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              className="text-xl font-light bg-transparent border-b h-[52px] focus:outline-none w-full placeholder:text-lg lg:placeholder:text-xl"
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="text-xl font-light bg-transparent border-b h-[52px] focus:outline-none w-full placeholder:text-lg lg:placeholder:text-xl"
            />
            {/* Phone Number */}
            <input
              type="text"
              placeholder="Phone Number"
              className="text-xl font-light bg-transparent border-b h-[52px] focus:outline-none w-full placeholder:text-lg lg:placeholder:text-xl"
            />
            {/* Password */}
            <div className="flex items-center border-b">
              <input
                type="password"
                placeholder="Password"
                className="text-xl font-light bg-transparent h-[52px] focus:outline-none w-full placeholder:text-lg lg:placeholder:text-xl"
              />
              <img src={eyeIcon} alt="eyeIcon" className="size-6 lg:size-7" />
            </div>
          </form>
          {/* Sign Up */}
          <button
            className="font-medium border h-[43px] w-full mt-[77px] lg:mt-[52px] lg:text-xl lg:h-14"
            onClick={handleSignUp}
          >
            SIGN UP
          </button>
          <p className="mt-[77px] text-center text-beige lg:mt-[52px]">
            Already have an account?{" "}
            <span className="font-bold text-white">
              <Link to="/login">LOG IN</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
