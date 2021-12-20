import { FC } from "react";
import { useSelector } from "react-redux";
import images from "../assets";
import { loadingSelector } from "../redux/ui/selectors";
import { userTokenSelector } from "../redux/user/selectors";
import Lottie, { Options } from "react-lottie";
import dogstep from "../assets/lottie/dogstep.json";
import "./styles.css";
import { Link } from "react-router-dom";
import { fetchLogout } from "../services/user/services";

const Layout: FC = ({ children }) => {
  const { Filedog, Guardian, Silhoutte } = images;

  const loading = useSelector(loadingSelector);
  const tokenUser = useSelector(userTokenSelector);
  const userLogout = () => {
    fetchLogout();
  };

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: dogstep,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="restaurant-container">
      {loading ? (
        <div className="loader-container">
          <Lottie
            speed={2.2}
            options={defaultOptions}
            height={400}
            width={400}
          />
          <p>Loading ...</p>
        </div>
      ) : null}
      <header className="restaurant-header">
        <Link to="/">
          <Guardian className="restaurant-logo" />
        </Link>
        <p className="dogc-save">Docg Save</p>
        <ul className="restaurant-firstMenu">
          {!tokenUser ? (
            <li className="clickable">
              <Link to="/Login">Log in/Sign in</Link>
            </li>
          ) : (
            <li className="clickable" onClick={() => userLogout()}>
              Logout
            </li>
          )}
        </ul>
      </header>
      <div className="restaurant-content">{children}</div>
      <footer className="restaurant-footer">
        <ul className="footer-greyList">
          <li className="clickable">Community</li>
          <li className="clickable">Restaurant resources</li>
        </ul>
        <ul className="footer-greyList">
          <li className="clickable">Careers</li>
          <li className="clickable">Press</li>
        </ul>
        <div>
          <Link to="/">
            <Guardian className="footer-logo" />
          </Link>
        </div>
        <ul className="footer-second-greyList">
          <li className="clickable">{"Terms & conditions"}</li>
          <li className="clickable">Privacy Policy</li>
        </ul>
        <div className="footer-rights">
          <p>© 2021 DogcFile.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
