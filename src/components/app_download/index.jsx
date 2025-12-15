import che_do_vip_btn from '../../assets/images/che-do-vip-btn.png'
import tai_app_btn from '../../assets/images/tai-app-btn.png'
import khuyen_mai_btn from '../../assets/images/khuyen-mai-btn.png'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { useState } from 'react';
import './styles.css';
import styles from './style.module.css';
import { useSelector } from 'react-redux'
import { LINK_KEYS } from '../../utils/configs'

export default function AppDownloadComponent() {
  const [isShowDownloadModal, setIsShowDownloadModal] = useState(false);
  const [appDownloadPlatform, setAppDownloadPlatform] = useState('iOS');

  const links = useSelector(state => state.links);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center gap-4 mt-md-3">
        <Link target='__blank' to={links.find(x => x.key === LINK_KEYS.CHE_DO_VIP_BUTTON.key)?.url} className='flex-fill arise-animation'>
          <img className='w-100' src={che_do_vip_btn} alt="che_do_vip_btn" />
        </Link>
        <div className='col-3 cursor-pointer arise-animation' onClick={() => setIsShowDownloadModal(true)}>
          <img className='w-100' src={tai_app_btn} alt="tai_app_btn" />
        </div>
        <Link target='__blank' to={links.find(x => x.key === LINK_KEYS.KHUYEN_MAI_BUTTON.key)?.url} className='flex-fill arise-animation'>
          <img className='w-100' src={khuyen_mai_btn} alt="khuyen_mai_btn" />
        </Link>
      </div>

      <Modal
        show={isShowDownloadModal}
        onHide={() => setIsShowDownloadModal(false)}
        centered
      >
        <Modal.Body>
          <div className={`${styles.appDownloadPopup}`}>
            <div className='fw-bold text-center' style={{ fontSize: 20 }}>TẢI ỨNG DỤNG</div>
            <div className='text-center' style={{ fontSize: 14 }}>Nhấn nút bên dưới để cài đặt APP GG88 cho {appDownloadPlatform}</div>
            <div className='d-flex justify-content-between align-items-center mt-3 rounded-pill' style={{ backgroundColor: '#E2E8F0', padding: 3, height: 45 }}>
              <div className={`h-100 col-6 rounded-pill d-flex align-items-center justify-content-center fw-bold ${(appDownloadPlatform === 'iOS' ? 'bg-white' : '')}`}
                onClick={() => setAppDownloadPlatform('iOS')}
              >
                iOS
              </div>
              <div className={`h-100 col-6 rounded-pill d-flex align-items-center justify-content-center fw-bold text-secondary cursor-pointer ${(appDownloadPlatform === 'Android' ? 'bg-white' : '')}`}
                onClick={() => setAppDownloadPlatform('Android')}
              >
                Android
              </div>
            </div>
            <Link target='__blank' to={appDownloadPlatform === 'iOS' ? links.find(x => x.key === LINK_KEYS.TAI_APP_IOS.key)?.url : links.find(x => x.key === LINK_KEYS.TAI_APP_ANDROID.key)?.url} className={`mt-5 rounded-pill cursor-pointer arise-animation d-flex align-items-center justify-content-center ${styles.downloadBtn}`}>
              <span className='text-uppercase'>TẢI APP {appDownloadPlatform}</span>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}