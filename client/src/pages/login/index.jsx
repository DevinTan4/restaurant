import { Link } from "react-router-dom";
import { eyeIcon } from "../../assets/icons";
import { bannerImg, bannerImgDesktop } from "../../assets/images";

const LoginPage = () => {
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
      <div className="h-full px-10 py-[140px] text-white bg-black bg-opacity-100 bg-default font-inter lg:h-1/2 lg:px-60 lg:pt-[60px] lg:pb-[70px] desktop:w-1/2 desktop:h-full desktop:px-[120px] desktop:py-[235px] object-cover bg-cover bg-center">
        {/* Title */}
        <div>
          <h1 className="text-[32px] font-semibold font-goudy lg:text-[44px]">
            Log in account.
          </h1>
          <p className="text-xs font-light text-beige font-inter lg:text-base">
            Securely Access Your Account
          </p>
        </div>

        {/* InputForm */}
        <div className="mt-[77px]">
          <form action="" className="flex flex-col gap-5 lg:gap-6">
            {/* Email / Username */}
            <input
              type="text"
              placeholder="Email / Username"
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
          {/* Forgot Password? */}
          <p className="mt-6 text-xs font-light text-beige lg:text-base">
            Forgot Password?
          </p>
          {/* Sign Up */}
          <button className="font-medium border h-[43px] w-full mt-[77px] lg:text-xl lg:h-[56px]">
            LOG IN
          </button>
          <p className="mt-[77px] text-center text-beige">
            Don't have an account?{" "}
            <span className="font-bold text-white">
              <Link to="/login">SIGN UP</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
