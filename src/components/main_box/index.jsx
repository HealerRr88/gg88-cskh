import styles from './style.module.css';
import cskh_247_tab from '../../assets/images/cskh-247-tab.webp';
import cskh_247_tab_active from '../../assets/images/cskh-247-tab-active.webp';
import thong_tin_tab from '../../assets/images/thong-tin-tab.webp';
import thong_tin_tab_active from '../../assets/images/thong-tin-tab-active.webp';
import tin_tuc_tab from '../../assets/images/tin-tuc-tab.webp';
import tin_tuc_tab_active from '../../assets/images/tin-tuc-tab-active.webp';

//active tab === 0
import khuyen_mai_va_san_pham from '../../assets/images/khuyen-mai-va-san-pham.webp';
import ho_tro_nap_tien from '../../assets/images/ho-tro-nap-tien.webp';
import trung_tam_khuyen_mai from '../../assets/images/trung-tam-khuyen-mai.webp';
import sua_doi_thong_tin from '../../assets/images/sua-doi-thong-tin.webp';
import ho_tro_rut_tien from '../../assets/images/ho-tro-rut-tien.webp';
import cam_nang_huong_dan from '../../assets/images/cam-nang-huong-dan.webp';

import khuyen_mai_va_san_pham_mobile from '../../assets/images/mobile/khuyen-mai-va-san-pham-mobile.webp';
import ho_tro_nap_tien_mobile from '../../assets/images/mobile/ho-tro-nap-tien-mobile.webp';
import trung_tam_khuyen_mai_mobile from '../../assets/images/mobile/trung-tam-khuyen-mai-mobile.webp';
import sua_doi_thong_tin_mobile from '../../assets/images/mobile/sua-doi-thong-tin-mobile.webp';
import ho_tro_rut_tien_mobile from '../../assets/images/mobile/ho-tro-rut-tien-mobile.webp';
import cam_nang_huong_dan_mobile from '../../assets/images/mobile/cam-nang-huong-dan-mobile.webp';

//active tab === 1
import hop_tac_dai_ly from '../../assets/images/hop-tac-dai-ly.webp';
import hotline from '../../assets/images/hotline.webp';
import thay_doi_thong_tin from '../../assets/images/thay-doi-thong-tin.webp';
import gop_y_nhan_thuong from '../../assets/images/gop-y-nhan-thuong.webp';
import qua_tang_tri_an from '../../assets/images/qua-tang-tri-an.webp';
import telegram_khieu_nai from '../../assets/images/telegram-khieu-nai.webp';

import hop_tac_dai_ly_mobile from '../../assets/images/mobile/hop-tac-dai-ly-mobile.webp';
import hotline_mobile from '../../assets/images/mobile/hotline-mobile.webp';
import thay_doi_thong_tin_mobile from '../../assets/images/mobile/thay-doi-thong-tin-mobile.webp';
import gop_y_nhan_thuong_mobile from '../../assets/images/mobile/gop-y-nhan-thuong-mobile.webp';
import qua_tang_tri_an_mobile from '../../assets/images/mobile/qua-tang-tri-an-mobile.webp';
import telegram_khieu_nai_mobile from '../../assets/images/mobile/telegram-khieu-nai-mobile.webp';

//active tab === 2
import nen_tang_livestream from '../../assets/images/nen-tang-livestream.webp';
import fanpage from '../../assets/images/fanpage.webp';
import kenh_tiktok from '../../assets/images/kenh-tiktok.webp';
import nen_tang_cong_dong from '../../assets/images/nen-tang-cong-dong.webp';
import kenh_telegram from '../../assets/images/kenh-telegram.webp';
import link_toc_do_cao from '../../assets/images/link-toc-do-cao.webp';

import nen_tang_livestream_mobile from '../../assets/images/mobile/nen-tang-livestream-mobile.webp';
import fanpage_mobile from '../../assets/images/mobile/fanpage-mobile.webp';
import kenh_tiktok_mobile from '../../assets/images/mobile/kenh-tiktok-mobile.webp';
import nen_tang_cong_dong_mobile from '../../assets/images/mobile/nen-tang-cong-dong-mobile.webp';
import kenh_telegram_mobile from '../../assets/images/mobile/kenh-telegram-mobile.webp';
import link_toc_do_cao_mobile from '../../assets/images/mobile/link-toc-do-cao-mobile.webp';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AppDownloadComponent from '../app_download';
import { isMobile } from 'react-device-detect';
import { LINK_KEYS } from '../../utils/configs';
import { getLinkByKey } from '../../utils/functions';

export default function MainBoxComponent({
  links,
  isShowChatBox,
  setIsShowChatBox
}) {
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
              <Skeleton height={isMobile ? 69 : 93} className='w-100' />
              <Skeleton height={isMobile ? 69 : 93} className='w-100' />
              <Skeleton height={isMobile ? 69 : 93} className='w-100' />
            </div>
          ) : (
            <>
              {
                activeTab === 0 && (
                  <div className='d-flex flex-column gap-2'>
                    <Link className="arise-animation" onClick={() => { setIsShowChatBox(getLinkByKey(links, LINK_KEYS.KHUYEN_MAI_VA_SAN_PHAM, isMobile)) }}>
                      <img className='w-100' src={isMobile ? khuyen_mai_va_san_pham_mobile : khuyen_mai_va_san_pham} alt="khuyen_mai_va_san_pham" />
                    </Link>
                    <Link className="arise-animation" onClick={() => { setIsShowChatBox(getLinkByKey(links, LINK_KEYS.HO_TRO_NAP_TIEN, isMobile)) }}>
                      <img className='w-100' src={isMobile ? ho_tro_nap_tien_mobile : ho_tro_nap_tien} alt="ho_tro_nap_tien" />
                    </Link>
                    <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.TRUNG_TAM_KHUYEN_MAI, isMobile)} className="arise-animation">
                      <img className='w-100' src={isMobile ? trung_tam_khuyen_mai_mobile : trung_tam_khuyen_mai} alt="trung_tam_khuyen_mai" />
                    </Link>
                  </div>
                )
              }
              {activeTab === 1 && (
                <div className='d-flex flex-column gap-2'>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.HOP_TAC_DAI_LY, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? hop_tac_dai_ly_mobile : hop_tac_dai_ly} alt="hop_tac_dai_ly" />
                  </Link>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.HOTLINE, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? hotline_mobile : hotline} alt="hotline" />
                  </Link>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.THAY_DOI_THONG_TIN, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? thay_doi_thong_tin_mobile : thay_doi_thong_tin} alt="thay_doi_thong_tin" />
                  </Link>
                </div>
              )}
              {activeTab === 2 && (
                <div className='d-flex flex-column gap-2'>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.NEN_TANG_LIVESTREAM, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? nen_tang_livestream_mobile : nen_tang_livestream} alt="nen_tang_livestream" />
                  </Link>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.FANPAGE, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? fanpage_mobile : fanpage} alt="fanpage" />
                  </Link>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.KENH_TIKTOK, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? kenh_tiktok_mobile : kenh_tiktok} alt="kenh_tiktok" />
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
        <div className='flex-fill'>
          {isLoading ? (
            <div className='d-flex flex-column gap-2 pe-md-0 pe-2'>
              <Skeleton height={isMobile ? 69 : 93} className='w-100' />
              <Skeleton height={isMobile ? 69 : 93} className='w-100' />
              <Skeleton height={isMobile ? 69 : 93} className='w-100' />
            </div>
          ) : (
            <>
              {
                activeTab === 0 && (
                  <div className='d-flex flex-column gap-2'>
                    <Link className="arise-animation" onClick={() => { setIsShowChatBox(getLinkByKey(links, LINK_KEYS.SUA_DOI_THONG_TIN, isMobile)) }}>
                      <img className='w-100' src={isMobile ? sua_doi_thong_tin_mobile : sua_doi_thong_tin} alt="sua_doi_thong_tin" />
                    </Link>
                    <Link className="arise-animation" onClick={() => { setIsShowChatBox(getLinkByKey(links, LINK_KEYS.HO_TRO_RUT_TIEN, isMobile)) }}>
                      <img className='w-100' src={isMobile ? ho_tro_rut_tien_mobile : ho_tro_rut_tien} alt="ho_tro_rut_tien" />
                    </Link>
                    <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.CAM_NANG_HUONG_DAN, isMobile)} className="arise-animation">
                      <img className='w-100' src={isMobile ? cam_nang_huong_dan_mobile : cam_nang_huong_dan} alt="cam_nang_huong_dan" />
                    </Link>
                  </div>
                )
              }
              {activeTab === 1 && (
                <div className='d-flex flex-column gap-2'>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.GOP_Y_NHAN_THUONG, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? gop_y_nhan_thuong_mobile : gop_y_nhan_thuong} alt="gop_y_nhan_thuong" />
                  </Link>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.QUA_TANG_TRI_AN_ABOVE, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? qua_tang_tri_an_mobile : qua_tang_tri_an} alt="qua_tang_tri_an" />
                  </Link>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.TELEGRAM_KHIEU_NAI, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? telegram_khieu_nai_mobile : telegram_khieu_nai} alt="telegram_khieu_nai" />
                  </Link>
                </div>
              )}
              {activeTab === 2 && (
                <div className='d-flex flex-column gap-2'>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.NEN_TANG_CONG_DONG, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? nen_tang_cong_dong_mobile : nen_tang_cong_dong} alt="nen_tang_cong_dong" />
                  </Link>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.KENH_TELEGRAM, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? kenh_telegram_mobile : kenh_telegram} alt="kenh_telegram" />
                  </Link>
                  <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.LINK_TOC_DO_CAO, isMobile)} className="arise-animation">
                    <img className='w-100' src={isMobile ? link_toc_do_cao_mobile : link_toc_do_cao} alt="link_toc_do_cao" />
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