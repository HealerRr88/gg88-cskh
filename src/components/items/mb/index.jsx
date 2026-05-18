import nhap_code_item_img from "../../../assets/images/nhap-code-item.png";
import livestream_item_img from "../../../assets/images/livestream-item.png";
//import ma_du_thuong_item_img from "../../../assets/images/ma-du-thuong-item.png";
import phim_18_item_img from "../../../assets/images/phim-18-item.png";
import qua_tang_item_img from "../../../assets/images/qua-tang-item.png";
import video_item_img from "../../../assets/images/video-item.png";
import thien_nguyen_item_img from "../../../assets/images/thien-nguyen-item.png";
import circle_lights_img from "../../../assets/images/circle-lights.gif";
import items_bg_img from "../../../assets/images/items-bg-mb.png";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { getLinkByKey } from "../../../utils/functions";
import { LINK_KEYS } from "../../../utils/config";
import { isMobile } from "react-device-detect";


export default function MBItemsComponent({ links }) {
  return (
    <div className="position-relative mt-3">
      <img className="w-100" src={items_bg_img} alt="items_bg_img" />
      <div className="w-100 h-100 position-absolute top-0 start-0 d-flex flex-wrap justify-content-center pb-3" style={{ marginTop: 12 }}>
        <Link to={getLinkByKey(links, LINK_KEYS.NHAP_CODE, isMobile)} className={`d-block col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-8" src={nhap_code_item_img} alt="nhap_code_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Nhập CODE
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.LIVESTREAM, isMobile)} className={`d-block col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-8" src={livestream_item_img} alt="livestream_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Livestream
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.MA_DU_THUONG, isMobile)} className={`d-block col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-8" src={phim_18_item_img} alt="phim_18_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Phim 18+
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.QUA_TANG, isMobile)} className={`d-block col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-8" src={qua_tang_item_img} alt="qua_tang_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Quà tặng
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.VIDEO, isMobile)} className={`d-block col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-8" src={video_item_img} alt="video_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Video
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.THIEN_NGUYEN, isMobile)} className={`d-block col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-8" src={thien_nguyen_item_img} alt="thien_nguyen_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Thiện nguyện
          </div>
        </Link>
      </div>
    </div>
  )
}