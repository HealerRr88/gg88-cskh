import styles from './style.module.css';
import cskh_247_tab from '../../assets/images/cskh-247-tab.png';
import cskh_247_tab_active from '../../assets/images/cskh-247-tab-active.png';
import thong_tin_tab from '../../assets/images/thong-tin-tab.png';
import thong_tin_tab_active from '../../assets/images/thong-tin-tab-active.png';
import tin_tuc_tab from '../../assets/images/tin-tuc-tab.png';
import tin_tuc_tab_active from '../../assets/images/tin-tuc-tab-active.png';

//active tab === 0
import khuyen_mai_va_san_pham from '../../assets/images/khuyen-mai-va-san-pham.png';
import ho_tro_nap_tien from '../../assets/images/ho-tro-nap-tien.png';
import trung_tam_khuyen_mai from '../../assets/images/trung-tam-khuyen-mai.png';
import sua_doi_thong_tin from '../../assets/images/sua-doi-thong-tin.png';
import ho_tro_rut_tien from '../../assets/images/ho-tro-rut-tien.png';
import cam_nang_huong_dan from '../../assets/images/cam-nang-huong-dan.png';

//active tab === 1
import hop_tac_dai_ly from '../../assets/images/hop-tac-dai-ly.png';
import hotline from '../../assets/images/hotline.png';
import thay_doi_thong_tin from '../../assets/images/thay-doi-thong-tin.png';
import gop_y_nhan_thuong from '../../assets/images/gop-y-nhan-thuong.png';
import qua_tang_tri_an from '../../assets/images/qua-tang-tri-an.png';
import telegram_khieu_nai from '../../assets/images/telegram-khieu-nai.png';

//active tab === 2
import nen_tang_livestream from '../../assets/images/nen-tang-livestream.png';
import fanpage from '../../assets/images/fanpage.png';
import kenh_tiktok from '../../assets/images/kenh-tiktok.png';
import nen_tang_cong_dong from '../../assets/images/nen-tang-cong-dong.png';
import kenh_telegram from '../../assets/images/kenh-telegram.png';
import link_toc_do_cao from '../../assets/images/link-toc-do-cao.png';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AppDownloadComponent from '../app_download';
import { isMobile } from 'react-device-detect';
import { LINK_KEYS } from '../../utils/configs';
import { useSelector } from 'react-redux';

export default function MainBoxComponent({
  isShowChatBox,
  setIsShowChatBox
}) {
  const links = useSelector(state => state.links);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTabClick = (tabIndex) => {
    if (activeTab !== tabIndex) {
      setIsLoading(true);
      setActiveTab(tabIndex);
      setTimeout(() => setIsLoading(false), 1000);
    }
  }

  return (
    <div className={`mt-md-4 mt-3 ${styles.mainBox}`}>
      <div className='d-flex justify-content-between align-items-center pe-md-0 pe-2'>
        <div className={`flex-fill cursor-pointer arise-animation`}>
          <img className='w-100' src={activeTab === 0 ? cskh_247_tab_active : cskh_247_tab} alt="cskh_247_tab" onClick={() => handleTabClick(0)} />
        </div>
        <div className={`flex-fill cursor-pointer arise-animation ms-md-5 ms-3`}>
          <img className='w-100' src={activeTab === 1 ? thong_tin_tab_active : thong_tin_tab} alt="thong_tin_tab" onClick={() => handleTabClick(1)} />
        </div>
        <div className={`flex-fill cursor-pointer arise-animation ms-md-5 ms-3`}>
          <img className='w-100' src={activeTab === 2 ? tin_tuc_tab_active : tin_tuc_tab} alt="tin_tuc_tab" onClick={() => handleTabClick(2)} />
        </div>
      </div>
      <div className='d-flex justify-content-between gap-2 mt-4'>
        <div className='flex-fill'>
          {isLoading ? (
            <div className='d-flex flex-column gap-2 pe-md-0 pe-2'>
              <Skeleton height={isMobile ? 52 : 93} className='w-100' />
              <Skeleton height={isMobile ? 52 : 93} className='w-100' />
              <Skeleton height={isMobile ? 52 : 93} className='w-100' />
            </div>
          ) : (
            <>
              {
                activeTab === 0 && (
                  <div className='d-flex flex-column gap-2'>
                    <Link to={`${links.find(x => x.key === LINK_KEYS.KHUYEN_MAI_VA_SAN_PHAM.key)?.url}`} className="arise-animation" onClick={() => { setIsShowChatBox(true) }}>
                      <img className='w-100' src={khuyen_mai_va_san_pham} alt="khuyen_mai_va_san_pham" />
                    </Link>
                    <Link to={`${links.find(x => x.key === LINK_KEYS.HO_TRO_NAP_TIEN.key)?.url}`} className="arise-animation" onClick={() => { setIsShowChatBox(true) }}>
                      <img className='w-100' src={ho_tro_nap_tien} alt="ho_tro_nap_tien" />
                    </Link>
                    <Link target='__bank' to={`${links.find(x => x.key === LINK_KEYS.TRUNG_TAM_KHUYEN_MAI.key)?.url}`} className="arise-animation">
                      <img className='w-100' src={trung_tam_khuyen_mai} alt="trung_tam_khuyen_mai" />
                    </Link>
                  </div>
                )
              }
              {activeTab === 1 && (
                <div className='d-flex flex-column gap-2'>
                  <Link target='__bank' to={`${links.find(x => x.key === LINK_KEYS.HOP_TAC_DAI_LY.key)?.url}`} className="arise-animation">
                    <img className='w-100' src={hop_tac_dai_ly} alt="hop_tac_dai_ly" />
                  </Link>
                  <Link target='__bank' to={`${links.find(x => x.key === LINK_KEYS.HOTLINE.key)?.url}`} className="arise-animation">
                    <img className='w-100' src={hotline} alt="hotline" />
                  </Link>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.THAY_DOI_THONG_TIN.key)?.url} className="arise-animation">
                    <img className='w-100' src={thay_doi_thong_tin} alt="thay_doi_thong_tin" />
                  </Link>
                </div>
              )}
              {activeTab === 2 && (
                <div className='d-flex flex-column gap-2'>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.NEN_TANG_LIVESTREAM.key)?.url} className="arise-animation">
                    <img className='w-100' src={nen_tang_livestream} alt="nen_tang_livestream" />
                  </Link>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.FANPAGE.key)?.url} className="arise-animation">
                    <img className='w-100' src={fanpage} alt="fanpage" />
                  </Link>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.KENH_TIKTOK.key)?.url} className="arise-animation">
                    <img className='w-100' src={kenh_tiktok} alt="kenh_tiktok" />
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
        <div className='flex-fill'>
          {isLoading ? (
            <div className='d-flex flex-column gap-2 pe-md-0 pe-2'>
              <Skeleton height={isMobile ? 52 : 93} className='w-100' />
              <Skeleton height={isMobile ? 52 : 93} className='w-100' />
              <Skeleton height={isMobile ? 52 : 93} className='w-100' />
            </div>
          ) : (
            <>
              {
                activeTab === 0 && (
                  <div className='d-flex flex-column gap-2'>
                    <Link to={links.find(x => x.key === LINK_KEYS.SUA_DOI_THONG_TIN.key)?.url} className="arise-animation" onClick={() => { setIsShowChatBox(true) }}>
                      <img className='w-100' src={sua_doi_thong_tin} alt="sua_doi_thong_tin" />
                    </Link>
                    <Link to={links.find(x => x.key === LINK_KEYS.HO_TRO_RUT_TIEN.key)?.url} className="arise-animation" onClick={() => { setIsShowChatBox(true) }}>
                      <img className='w-100' src={ho_tro_rut_tien} alt="ho_tro_rut_tien" />
                    </Link>
                    <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.CAM_NANG_HUONG_DAN.key)?.url} className="arise-animation">
                      <img className='w-100' src={cam_nang_huong_dan} alt="cam_nang_huong_dan" />
                    </Link>
                  </div>
                )
              }
              {activeTab === 1 && (
                <div className='d-flex flex-column gap-2'>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.GOP_Y_NHAN_THUONG.key)?.url} className="arise-animation">
                    <img className='w-100' src={gop_y_nhan_thuong} alt="gop_y_nhan_thuong" />
                  </Link>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.QUA_TANG_TRI_AN_ABOVE.key)?.url} className="arise-animation">
                    <img className='w-100' src={qua_tang_tri_an} alt="qua_tang_tri_an" />
                  </Link>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.TELEGRAM_KHIEU_NAI.key)?.url} className="arise-animation">
                    <img className='w-100' src={telegram_khieu_nai} alt="telegram_khieu_nai" />
                  </Link>
                </div>
              )}
              {activeTab === 2 && (
                <div className='d-flex flex-column gap-2'>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.NEN_TANG_CONG_DONG.key)?.url} className="arise-animation">
                    <img className='w-100' src={nen_tang_cong_dong} alt="nen_tang_cong_dong" />
                  </Link>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.KENH_TELEGRAM.key)?.url} className="arise-animation">
                    <img className='w-100' src={kenh_telegram} alt="kenh_telegram" />
                  </Link>
                  <Link target='__bank' to={links.find(x => x.key === LINK_KEYS.LINK_TOC_DO_CAO.key)?.url} className="arise-animation">
                    <img className='w-100' src={link_toc_do_cao} alt="link_toc_do_cao" />
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {!isMobile && <AppDownloadComponent />}
    </div >
  );
}