import phone_icon from '../../assets/images/phone-icon.png';
import telegram_icon from '../../assets/images/telegram-icon.png';
import email_icon from '../../assets/images/email-icon.png';
import facebook_icon from '../../assets/images/facebook-icon.png';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LINK_KEYS } from '../../utils/configs';

export default function ContactComponent() {

  const links = useSelector(state => state.links);

  return (
    <div className="d-flex justify-content-between align-items-center my-md-0 my-4">
      <Link target='__bank' to={`tel:${links.find(x => x.key === LINK_KEYS.HOTLINE.key)?.url}`} className='col-3 text-center cursor-pointer arise-animation'>
        <img className='col-md-8 col-9' src={phone_icon} alt="phone_icon" />
        <div className={`${styles.contactInfo}`}>033.8282.555</div>
      </Link>
      <Link target='__bank' to={`${links.find(x => x.key === LINK_KEYS.HO_TRO_247.key)?.url}`} className='col-3 text-center cursor-pointer arise-animation'>
        <img className='col-md-8 col-9' src={telegram_icon} alt="telegram_icon" />
        <div className={`${styles.contactInfo}`}>Hỗ trợ 24/7</div>
      </Link>
      <Link to={`mailto:${links.find(x => x.key === LINK_KEYS.ADMIN_EMAIL.key)?.url}`} className='col-3 text-center cursor-pointer arise-animation'>
        <img className='col-md-8 col-9' src={email_icon} alt="email_icon" />
        <div className={`${styles.contactInfo}`}>admin@gg88.com</div>
      </Link>
      <Link target='__bank' to={`${links.find(x => x.key === LINK_KEYS.FACEBOOK.key)?.url}`} className='col-3 text-center cursor-pointer arise-animation'>
        <img className='col-md-8 col-9' src={facebook_icon} alt="facebook_icon" />
        <div className={`${styles.contactInfo}`}>Facebook</div>
      </Link>
    </div>
  )
}