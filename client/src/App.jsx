import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
