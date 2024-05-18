import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="h-full px-10 py-20 text-white bg-black bg-opacity-100 bg-default font-inter">
      {/* Title */}
      <div>
        <h1 className="text-[32px] font-semibold font-goudy">
          Create account.
        </h1>
        <p className="font-light text-beige font-inter">
          Create Your Account Today
        </p>
      </div>

      {/* InputForm */}
      <div className="mt-[77px]">
        <form action="" className="flex flex-col gap-5">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="text-xl font-light bg-transparent border-b h-[52px] focus:outline-none w-full placeholder:text-lg"
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="text-xl font-light bg-transparent border-b h-[52px] focus:outline-none w-full placeholder:text-lg"
          />
          {/* Phone Number */}
          <input
            type="text"
            placeholder="Phone Number"
            className="text-xl font-light bg-transparent border-b h-[52px] focus:outline-none w-full placeholder:text-lg"
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="text-xl font-light bg-transparent border-b h-[52px] focus:outline-none w-full placeholder:text-lg"
          />
        </form>
        {/* Sign Up */}
        <button className="font-medium border h-[43px] w-full mt-[77px]">
          SIGN UP
        </button>
        <p className="mt-[77px] text-center text-beige">
          Already have an account?{" "}
          <span className="font-bold text-white">
            <Link to="/login">LOG IN</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
