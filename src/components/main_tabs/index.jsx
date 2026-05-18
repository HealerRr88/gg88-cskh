import styles from "./style.module.css";
import tab_bg from "../../assets/images/tab-bg.png";
import tab_bg_mb from "../../assets/images/tab-bg-mb.png";
import tab_1_img from "../../assets/images/tab-1.png";
import tab_1_mb_img from "../../assets/images/tab-1-mb.png";
import tab_1_img_active from "../../assets/images/tab-1-active.png";
import tab_1_mb_img_active from "../../assets/images/tab-1-mb-active.png";
import tab_2_img from "../../assets/images/tab-2.png";
import tab_2_mb_img from "../../assets/images/tab-2-mb.png";
import tab_2_img_active from "../../assets/images/tab-2-active.png";
import tab_2_mb_img_active from "../../assets/images/tab-2-mb-active.png";
//import tab_3_img from "../../assets/images/tab-3.png";
import tab_3_mb_img from "../../assets/images/tab-3-mb.png";
import tab_3_img_active from "../../assets/images/tab-3-active.png";
import tab_3_mb_img_active from "../../assets/images/tab-3-mb-active.png";
import { useState } from "react";


import ho_tro_nap_tien_img from "../../assets/images/ho-tro-nap-tien.png";
import ho_tro_nap_tien_mb_img from "../../assets/images/ho-tro-nap-tien-mb.png";
import ho_tro_rut_tien_img from "../../assets/images/ho-tro-rut-tien.png";
import ho_tro_rut_tien_mb_img from "../../assets/images/ho-tro-rut-tien-mb.png";
import khuyen_mai_va_san_pham_img from "../../assets/images/khuyen-mai-va-san-pham.png";
import khuyen_mai_va_san_pham_mb_img from "../../assets/images/khuyen-mai-va-san-pham-mb.png";
import sua_doi_thong_tin_img from "../../assets/images/sua-doi-thong-tin.png";
import sua_doi_thong_tin_mb_img from "../../assets/images/sua-doi-thong-tin-mb.png";
import trung_tam_khuyen_mai_img from "../../assets/images/trung-tam-khuyen-mai.png";
import trung_tam_khuyen_mai_mb_img from "../../assets/images/trung-tam-khuyen-mai-mb.png";
import cam_nang_huong_dan_img from "../../assets/images/cam-nang-huong-dan.png";
import cam_nang_huong_dan_mb_img from "../../assets/images/cam-nang-huong-dan-mb.png";

import hop_tac_dai_ly_img from "../../assets/images/hop-tac-dai-ly.png";
import hop_tac_dai_ly_mb_img from "../../assets/images/hop-tac-dai-ly-mb.png";
import khuyen_mai_img from "../../assets/images/khuyen-mai.png";
import khuyen_mai_mb_img from "../../assets/images/khuyen-mai-mb.png";
import hotline_img from "../../assets/images/hotline.png";
import hotline_mb_img from "../../assets/images/hotline-mb.png";
import qua_tang_tri_an_img from "../../assets/images/qua-tang-tri-an.png";
import qua_tang_tri_an_mb_img from "../../assets/images/qua-tang-tri-an-mb.png";
import thay_doi_thong_tin_img from "../../assets/images/thay-doi-thong-tin.png";
import thay_doi_thong_tin_mb_img from "../../assets/images/thay-doi-thong-tin-mb.png";
import telegram_khieu_nai_img from "../../assets/images/telegram-khieu-nai.png";
import telegram_khieu_nai_mb_img from "../../assets/images/telegram-khieu-nai-mb.png";

import nen_tang_livestream_img from "../../assets/images/nen-tang-livestream.png";
import nen_tang_livestream_mb_img from "../../assets/images/nen-tang-livestream-mb.png";
import nen_tang_cong_dong_img from "../../assets/images/nen-tang-cong-dong.png";
import nen_tang_cong_dong_mb_img from "../../assets/images/nen-tang-cong-dong-mb.png";
import fanpage_img from "../../assets/images/fanpage.png";
import fanpage_mb_img from "../../assets/images/fanpage-mb.png";
import kenh_telegram_img from "../../assets/images/kenh-telegram.png";
import kenh_telegram_mb_img from "../../assets/images/kenh-telegram-mb.png";
import kenh_tiktok_img from "../../assets/images/kenh-tiktok.png";
import kenh_tiktok_mb_img from "../../assets/images/kenh-tiktok-mb.png";
import link_toc_do_cao_img from "../../assets/images/link-toc-do-cao.png";
import link_toc_do_cao_mb_img from "../../assets/images/link-toc-do-cao-mb.png";
import ComponentLoading from "../loading/component";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { getLinkByKey } from "../../utils/functions";
import { LINK_KEYS } from "../../utils/config";

export default function MainTabsComponent({ links }) {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const tab_3_img = "https://pub-e70fb91940f34df0b34be84ddacb5e1f.r2.dev/images/tab-3.png";

  const handleClickTab = (tabIndex) => {
    if (activeTab === tabIndex) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setActiveTab(tabIndex);
  }

  const getTabImg = (activeTab, tabIndex, isMobile) => {
    switch (tabIndex) {
      case 0:
        return activeTab === 0 ? (isMobile ? tab_1_mb_img_active : tab_1_img_active) : (isMobile ? tab_1_mb_img : tab_1_img);
      case 1:
        return activeTab === 1 ? (isMobile ? tab_2_mb_img_active : tab_2_img_active) : (isMobile ? tab_2_mb_img : tab_2_img);
      case 2:
        return activeTab === 2 ? (isMobile ? tab_3_mb_img_active : tab_3_img_active) : (isMobile ? tab_3_mb_img : tab_3_img);
      default:
        return isMobile ? tab_1_mb_img : tab_1_img;
    }
  }

  return (
    <div className={`col-md-6 col-12 mx-auto mt-md-4 mt-2`}>
      <div className="position-relative">
        <img className="w-100" src={isMobile ? tab_bg_mb : tab_bg} alt="tab_bg" />

        <div className={`w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-between align-items-center px-md-4 ${styles.tabContainer}`}>
          <div className="flex-fill cursor-pointer"
            onClick={() => handleClickTab(0)}
          >
            <img src={getTabImg(activeTab, 0, isMobile)} className="w-100" alt="tab_1_img" />
          </div>
          <div className="flex-fill cursor-pointer"
            onClick={() => handleClickTab(1)}
          >
            <img src={getTabImg(activeTab, 1, isMobile)} className="w-100" alt="tab_2_img" />
          </div>
          <div className="flex-fill cursor-pointer"
            onClick={() => handleClickTab(2)}
          >
            <img src={getTabImg(activeTab, 2, isMobile)} className="w-100" alt="tab_3_img" />
          </div>
        </div>
      </div>
      {
        loading ? (
          <div style={{ height: isMobile ? 187 : 317 }} className="w-100">
            <ComponentLoading />
          </div>
        ) : (
          <>
            {
              activeTab === 0 && (
                <div className="w-100 d-flex flex-wrap">
                  <Link to={getLinkByKey(links, LINK_KEYS.HO_TRO_NAP_TIEN, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? ho_tro_nap_tien_mb_img : ho_tro_nap_tien_img} alt="ho_tro_nap_tien_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.HO_TRO_RUT_TIEN, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? ho_tro_rut_tien_mb_img : ho_tro_rut_tien_img} alt="ho_tro_rut_tien_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.KHUYEN_MAI_VA_SAN_PHAM, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? khuyen_mai_va_san_pham_mb_img : khuyen_mai_va_san_pham_img} alt="khuyen_mai_va_san_pham_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.SUA_DOI_THONG_TIN, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? sua_doi_thong_tin_mb_img : sua_doi_thong_tin_img} alt="sua_doi_thong_tin_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.TRUNG_TAM_KHUYEN_MAI, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? trung_tam_khuyen_mai_mb_img : trung_tam_khuyen_mai_img} alt="trung_tam_khuyen_mai_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.CAM_NANG_HUONG_DAN, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? cam_nang_huong_dan_mb_img : cam_nang_huong_dan_img} alt="cam_nang_huong_dan_img" />
                  </Link>
                </div>
              )
            }
            {
              activeTab === 1 && (
                <div className="w-100 d-flex flex-wrap">
                  <Link to={getLinkByKey(links, LINK_KEYS.HOP_TAC_DAI_LY, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? hop_tac_dai_ly_mb_img : hop_tac_dai_ly_img} alt="hop_tac_dai_ly_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.KHUYEN_MAI, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? khuyen_mai_mb_img : khuyen_mai_img} alt="khuyen_mai_img" />
                  </Link>
                  <Link to={`tel:${getLinkByKey(links, LINK_KEYS.HOTLINE, isMobile)}`} className="col-4">
                    <img className="w-100" src={isMobile ? hotline_mb_img : hotline_img} alt="hotline_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.QUA_TANG_TRI_AN, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? qua_tang_tri_an_mb_img : qua_tang_tri_an_img} alt="qua_tang_tri_an_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.THAY_DOI_THONG_TIN, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? thay_doi_thong_tin_mb_img : thay_doi_thong_tin_img} alt="thay_doi_thong_tin_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.TELEGRAM_KHIEU_NAI, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? telegram_khieu_nai_mb_img : telegram_khieu_nai_img} alt="telegram_khieu_nai_img" />
                  </Link>
                </div>
              )
            }
            {
              activeTab === 2 && (
                <div className="w-100 d-flex flex-wrap">
                  <Link to={getLinkByKey(links, LINK_KEYS.NEN_TANG_LIVESTREAM, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? nen_tang_livestream_mb_img : nen_tang_livestream_img} alt="nen_tang_livestream_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.NEN_TANG_CONG_DONG, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? nen_tang_cong_dong_mb_img : nen_tang_cong_dong_img} alt="nen_tang_cong_dong_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.FANPAGE, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? fanpage_mb_img : fanpage_img} alt="fanpage_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.KENH_TELEGRAM, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? kenh_telegram_mb_img : kenh_telegram_img} alt="kenh_telegram_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.KENH_TIKTOK, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? kenh_tiktok_mb_img : kenh_tiktok_img} alt="kenh_tiktok_img" />
                  </Link>
                  <Link to={getLinkByKey(links, LINK_KEYS.LINK_TOC_DO_CAO, isMobile)} className="col-4">
                    <img className="w-100" src={isMobile ? link_toc_do_cao_mb_img : link_toc_do_cao_img} alt="link_toc_do_cao_img" />
                  </Link>
                </div>
              )
            }
          </>
        )
      }
    </div>
  )
}