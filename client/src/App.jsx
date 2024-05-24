import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import TablesPage from "./pages/tables";
import OrderPage from "./pages/order";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tables" element={<TablesPage />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
