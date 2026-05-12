import qr_android_img from "../../assets/images/qr-android.png";
import android_app_btn_img from "../../assets/images/android-app-btn.png";
import google_play_img from "../../assets/images/google-play.png";
import qr_ios_img from "../../assets/images/qr-ios.png";
import ios_app_btn_img from "../../assets/images/ios-app-btn.png";
import app_store_img from "../../assets/images/app-store.png";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { getLinkByKey } from "../../utils/functions";
import { LINK_KEYS } from "../../utils/config";
import { isMobile } from "react-device-detect";

export default function AppDownloadComponent({ links }) {
  return (
    <div className={`col-md-4 col-12 mx-auto d-flex mt-md-4 mt-3 ps-1 ${styles.appDownloadContainer}`}>
      <div className="col-6 d-flex align-items-center pe-2">
        <div className="col-5 pe-2">
          <img className="w-100" src={qr_android_img} alt="qr_android_img" />
        </div>
        <div className="col-7">
          <Link to={getLinkByKey(links, LINK_KEYS.TAI_APP_ANDROID, isMobile)}>
            <img className="w-100" src={android_app_btn_img} alt="android_app_btn_img" />
          </Link>
          <Link to={getLinkByKey(links, LINK_KEYS.TAI_APP_ANDROID, isMobile)}>
            <img className="w-100" src={google_play_img} alt="google_play_img" />
          </Link>
        </div>
      </div>
      <div className="col-6 d-flex align-items-center ps-2">
        <div className="col-5 pe-2">
          <img className="w-100" src={qr_ios_img} alt="qr_ios_img" />
        </div>
        <div className="col-7">
          <Link to={getLinkByKey(links, LINK_KEYS.TAI_APP_IOS, isMobile)}>
            <img className="w-100" src={ios_app_btn_img} alt="ios_app_btn_img" />
          </Link>
          <Link to={getLinkByKey(links, LINK_KEYS.TAI_APP_IOS, isMobile)}>
            <img className="w-100" src={app_store_img} alt="app_store_img" />
          </Link>
        </div>
      </div>
    </div>
  )
}