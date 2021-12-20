import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./layout/component";
import { userInfoSelector, userTokenSelector } from "./redux/user/selectors";
import Error404 from "./views/error404/component";
import Index from "./views/index/component";
import Login from "./views/login/component";
import Home from "./views/home/component";
import Elements from "./views/elements/component";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tokenUser = useSelector(userInfoSelector);

  useEffect(() => {
    if (
      tokenUser.token &&
      tokenUser !== "" &&
      (location.pathname === "/Login" || location.pathname === "/Login/")
    ) {
      navigate("/", { replace: true });
    }
  }, [tokenUser, location, navigate]);

  //<Route path="*" element={<Error404 />} /><Route path="/Locations" element={<Locations />} />
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/Elements" element={<Elements />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
