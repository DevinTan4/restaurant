import { Link } from "react-router-dom";
import { eyeIcon } from "../../assets/icons";

const LoginPage = () => {
  return (
    <div className="h-full px-10 py-[140px] text-white bg-black bg-opacity-100 bg-default font-inter">
      {/* Title */}
      <div>
        <h1 className="text-[32px] font-semibold font-goudy">
          Log in account.
        </h1>
        <p className="text-xs font-light text-beige font-inter">
          Securely Access Your Account
        </p>
      </div>

      {/* InputForm */}
      <div className="mt-[77px]">
        <form action="" className="flex flex-col gap-5">
          {/* Email / Username */}
          <input
            type="text"
            placeholder="Email / Username"
            className="text-xl font-light bg-transparent border-b h-[52px] focus:outline-none w-full placeholder:text-lg"
          />
          {/* Password */}
          <div className="flex items-center border-b">
            <input
              type="password"
              placeholder="Password"
              className="text-xl font-light bg-transparent h-[52px] focus:outline-none w-full placeholder:text-lg"
            />
            <img src={eyeIcon} alt="eyeIcon" className="size-6" />
          </div>
        </form>
        {/* Forgot Password? */}
        <p className="mt-6 text-xs font-light text-beige">Forgot Password?</p>
        {/* Sign Up */}
        <button className="font-medium border h-[43px] w-full mt-[77px]">
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
  );
};

export default LoginPage;
