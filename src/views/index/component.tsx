import { FC } from "react";
import { useSelector } from "react-redux";
import {
  userInfoSelector,
  userTokenSelector,
} from "../../redux/user/selectors";
import "./styles.css";

const Index: FC = () => {
  return (
    <div className="index-container">
      <div className="section-1">
        <div className="section-1-content">
          <p className="section-title">Save, Share and get your documents</p>
        </div>
      </div>
      <div className="info-section-1">
        <div className="info-section-1-content-1">
          <span>Save easy your documents</span>
        </div>
        <div className="info-section-1-content-2">
          <p>
            Dogc Save is easy to use, you can save documents easy and secure.
          </p>
          <p>You can search your documents to download it.</p>
          <p>Try it</p>
        </div>
      </div>
      <div className="section-2">
        <div className="section-1-content">
          <p className="section-title">Be secure</p>
          <p className="product-section-2-description">
            We protect your documents, share your documents safe
          </p>
          <button className="button enter-button">
            <span>Enter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
