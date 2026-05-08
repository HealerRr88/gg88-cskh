import phone_icon from '../../assets/images/phone-icon.webp';
import telegram_icon from '../../assets/images/telegram-icon.webp';
import email_icon from '../../assets/images/email-icon.webp';
import facebook_icon from '../../assets/images/facebook-icon.webp';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { LINK_KEYS } from '../../utils/configs';
import { getLinkByKey } from '../../utils/functions';
import { isMobile } from 'react-device-detect';

export default function ContactComponent({ links }) {


  return (
    <div className="d-flex justify-content-between align-items-center my-md-0 my-4">
      <Link target='__bank' to={`tel:${getLinkByKey(links, LINK_KEYS.HOTLINE, isMobile)}`} className='col-3 text-center cursor-pointer arise-animation'>
        <img className='col-md-8 col-9' src={phone_icon} alt="phone_icon" />
        <div className={`${styles.contactInfo}`}>033.8282.555</div>
      </Link>
      <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.HO_TRO_247, isMobile)} className='col-3 text-center cursor-pointer arise-animation'>
        <img className='col-md-8 col-9' src={telegram_icon} alt="telegram_icon" />
        <div className={`${styles.contactInfo}`}>Hỗ trợ 24/7</div>
      </Link>
      <Link to={`mailto:${getLinkByKey(links, LINK_KEYS.ADMIN_EMAIL, isMobile)}`} className='col-3 text-center cursor-pointer arise-animation'>
        <img className='col-md-8 col-9' src={email_icon} alt="email_icon" />
        <div className={`${styles.contactInfo}`}>admin@gg88.com</div>
      </Link>
      <Link target='__bank' to={getLinkByKey(links, LINK_KEYS.FACEBOOK, isMobile)} className='col-3 text-center cursor-pointer arise-animation'>
        <img className='col-md-8 col-9' src={facebook_icon} alt="facebook_icon" />
        <div className={`${styles.contactInfo}`}>Facebook</div>
      </Link>
    </div>
  )
}