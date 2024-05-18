import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
