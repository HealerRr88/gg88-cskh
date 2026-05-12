import nhap_code_item_img from "../../../assets/images/nhap-code-item.png";
import livestream_item_img from "../../../assets/images/livestream-item.png";
import ma_du_thuong_item_img from "../../../assets/images/ma-du-thuong-item.png";
import qua_tang_item_img from "../../../assets/images/qua-tang-item.png";
import video_item_img from "../../../assets/images/video-item.png";
import thien_nguyen_item_img from "../../../assets/images/thien-nguyen-item.png";
import circle_lights_img from "../../../assets/images/circle-lights.gif";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { getLinkByKey } from "../../../utils/functions";
import { isMobile } from "react-device-detect";
import { LINK_KEYS } from "../../../utils/config";


export default function PCItemsComponent({ links }) {
  return (
    <div className="col-8 d-flex justify-content-center mx-auto" style={{ marginTop: 60 }}>
      <div className={`col-2 px-2`}>
        <div className={`position-relative ${styles.item}`}>
          <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
          <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
            <img className="col-8" src={nhap_code_item_img} alt="nhap_code_item_img" />
          </div>
          <Link to={getLinkByKey(links, LINK_KEYS.NHAP_CODE, isMobile)} className={`w-100 h-100 position-absolute start-0 top-0 rounded-circle justify-content-center align-items-center ${styles.itemHover}`}>
            <div className="text-white fw-bold">NHẬP CODE</div>
          </Link>
        </div>
      </div>
      <div className={`col-2 px-2`}>
        <div className={`position-relative ${styles.item}`}>
          <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
          <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
            <img className="col-8" src={livestream_item_img} alt="livestream_item_img" />
          </div>
          <Link to={getLinkByKey(links, LINK_KEYS.LIVESTREAM, isMobile)} className={`w-100 h-100 position-absolute start-0 top-0 rounded-circle justify-content-center align-items-center ${styles.itemHover}`}>
            <div className="text-white fw-bold">LIVE STREAM</div>
          </Link>
        </div>
      </div>
      <div className={`col-2 px-2`}>
        <div className={`position-relative ${styles.item}`}>
          <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
          <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
            <img className="col-8" src={ma_du_thuong_item_img} alt="ma_du_thuong_item_img" />
          </div>
          <Link to={getLinkByKey(links, LINK_KEYS.MA_DU_THUONG, isMobile)} className={`w-100 h-100 position-absolute start-0 top-0 rounded-circle justify-content-center align-items-center flex-column ${styles.itemHover}`}>
            <div className="text-white fw-bold">MÃ</div>
            <div className="text-white fw-bold">DỰ THƯỞNG</div>
          </Link>
        </div>
      </div>
      <div className={`col-2 px-2`}>
        <div className={`position-relative ${styles.item}`}>
          <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
          <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
            <img className="col-8" src={qua_tang_item_img} alt="qua_tang_item_img" />
          </div>
          <Link to={getLinkByKey(links, LINK_KEYS.QUA_TANG, isMobile)} className={`w-100 h-100 position-absolute start-0 top-0 rounded-circle justify-content-center align-items-center ${styles.itemHover}`}>
            <div className="text-white fw-bold">QUÀ TẶNG</div>
          </Link>
        </div>
      </div>
      <div className={`col-2 px-2`}>
        <div className={`position-relative ${styles.item}`}>
          <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
          <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
            <img className="col-8" src={video_item_img} alt="video_item_img" />
          </div>
          <Link to={getLinkByKey(links, LINK_KEYS.VIDEO, isMobile)} className={`w-100 h-100 position-absolute start-0 top-0 rounded-circle justify-content-center align-items-center ${styles.itemHover}`}>
            <div className="text-white fw-bold">VIDEO</div>
          </Link>
        </div>
      </div>
      <div className={`col-2 px-2`}>
        <div className={`position-relative ${styles.item}`}>
          <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
          <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
            <img className="col-10" src={thien_nguyen_item_img} alt="thien_nguyen_item_img" />
          </div>
          <Link to={getLinkByKey(links, LINK_KEYS.THIEN_NGUYEN, isMobile)} className={`w-100 h-100 position-absolute start-0 top-0 rounded-circle justify-content-center align-items-center ${styles.itemHover}`}>
            <div className="text-white fw-bold">THIỆN NGUYỆN</div>
          </Link>
        </div>
      </div>
    </div>
  )
}