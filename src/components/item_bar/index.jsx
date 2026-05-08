import livestream_icon from '../../assets/images/livestream-icon.webp';
import lien_minh_kjc_icon from '../../assets/images/lien-minh-kjc-icon.webp';
import qua_tang_tri_an_big_icon from '../../assets/images/qua-tang-tri-an-big-icon.webp';
import thu_thap_chu_cai_icon from '../../assets/images/thu-thap-chu-cai-icon.webp';
import vong_quay_may_man_icon from '../../assets/images/vong-quay-may-man-icon.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { LINK_KEYS } from '../../utils/configs';
import { getLinkByKey } from '../../utils/functions';

export default function ItemBarComponent({ links }) {


  return (
    isMobile ? (
      <div className='container mt-3'>
        <Swiper
          spaceBetween={10}
          slidesPerView={4.3}
          scrollbar={{ draggable: true }}
          onSlideChange={() => { }}
          onSwiper={(swiper) => { }}
          className={`${styles.itemBar}`}
        >
          <SwiperSlide>
            <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.LIVESTREAM_ME_SAY, isMobile)} className='flex-fill text-center arise-animation'>
              <img className='img-fluid' src={livestream_icon} alt="livestream_icon" />
              <div className={styles.itemBarText}>LIVESTREAM MÊ SAY</div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.LIEN_MINH_KJC, isMobile)} className='flex-fill text-center arise-animation'>
              <img className='img-fluid' src={lien_minh_kjc_icon} alt="lien_minh_kjc_icon" />
              <div className={styles.itemBarText}>LIÊN MINH KJC</div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.QUA_TANG_TRI_AN, isMobile)} className='flex-fill text-center arise-animation'>
              <img className='img-fluid' src={qua_tang_tri_an_big_icon} alt="qua_tang_tri_an_big_icon" />
              <div className={styles.itemBarText}>QUÀ TẶNG TRI ÂN</div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.THU_THAP_CHU_CAI, isMobile)} className='flex-fill text-center arise-animation'>
              <img className='img-fluid' src={thu_thap_chu_cai_icon} alt="thu_thap_chu_cai_icon" />
              <div className={styles.itemBarText}>THU THẬP CHỮ CÁI</div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.VONG_QUAY_MAY_MAN, isMobile)} className='flex-fill text-center arise-animation'>
              <img className='img-fluid' src={vong_quay_may_man_icon} alt="vong_quay_may_man_icon" />
              <div className={styles.itemBarText}>QUAY MAY MẮN</div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    ) : (
      <div className={`d-flex justify-content-between align-items-center gap-4 p-3 mt-5 ${styles.itemBar}`}>
        <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.LIVESTREAM_ME_SAY, isMobile)} className='flex-fill text-center arise-animation'>
          <img className='img-fluid' src={livestream_icon} alt="livestream_icon" />
          <div className={styles.itemBarText}>LIVESTREAM MÊ SAY</div>
        </Link>
        <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.LIEN_MINH_KJC, isMobile)} className='flex-fill text-center arise-animation'>
          <img className='img-fluid' src={lien_minh_kjc_icon} alt="lien_minh_kjc_icon" />
          <div className={styles.itemBarText}>LIÊN MINH KJC</div>
        </Link>
        <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.QUA_TANG_TRI_AN, isMobile)} className='flex-fill text-center arise-animation'>
          <img className='img-fluid' src={qua_tang_tri_an_big_icon} alt="qua_tang_tri_an_big_icon" />
          <div className={styles.itemBarText}>QUÀ TẶNG TRI ÂN</div>
        </Link>
        <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.THU_THAP_CHU_CAI, isMobile)} className='flex-fill text-center arise-animation'>
          <img className='img-fluid' src={thu_thap_chu_cai_icon} alt="thu_thap_chu_cai_icon" />
          <div className={styles.itemBarText}>THU THẬP CHỮ CÁI</div>
        </Link>
        <Link target='__blank' to={getLinkByKey(links, LINK_KEYS.VONG_QUAY_MAY_MAN, isMobile)} className='flex-fill text-center arise-animation'>
          <img className='img-fluid' src={vong_quay_may_man_icon} alt="vong_quay_may_man_icon" />
          <div className={styles.itemBarText}>VÒNG QUAY MAY MẮN</div>
        </Link>
      </div>
    )
  )
}