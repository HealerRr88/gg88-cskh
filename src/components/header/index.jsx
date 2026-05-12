import styles from "./style.module.css";
import logo_img from "../../assets/images/logo.png";
import home_btn_img from "../../assets/images/home-btn.png";
import login_btn_img from "../../assets/images/login-btn.png";
import { Link } from "react-router-dom";
import { getLinkByKey } from "../../utils/functions";
import { LINK_KEYS } from "../../utils/config";
import { isMobile } from "react-device-detect";

export default function HeaderComponent({ links }) {
  return (
    <div className={`w-100 bg-white position-fixed top-0 start-0 z-3`}>
      <div className={`col-md-6 col-12 mx-auto px-md-0 px-2 d-flex justify-content-between align-items-center ${styles.header}`}>
        <div className={`${styles.logo} flex-shrink-0`}>
          <Link to={getLinkByKey(links, LINK_KEYS.TRANG_CHU, isMobile)}>
            <img className="w-100" src={logo_img} alt="logo" />
          </Link>
        </div>
        <div className="col-md-auto col-6 d-flex justify-content-end align-items-center">
          <Link to={getLinkByKey(links, LINK_KEYS.TRANG_CHU, isMobile)} className={`${styles.headerBtn}`}>
            <img className="w-100" src={home_btn_img} alt="home_btn" />
          </Link>
          <Link to={getLinkByKey(links, LINK_KEYS.DANG_NHAP, isMobile)} className={`ms-md-3 ms-1 ${styles.headerBtn}`}>
            <img className="w-100" src={login_btn_img} alt="login" />
          </Link>
        </div>
      </div>
    </div >
  )
}