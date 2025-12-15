import { useEffect, useState } from 'react';
import styles from './style.module.css';
import ComponentLoading from '../loading/component';
import { isMobile } from 'react-device-detect';

export default function ChatBoxComponent({
  isShowChatBox,
  setIsShowChatBox
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [isShowChatBox]);

  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className={`d-flex align-items-center justify-content-end p-md-3 p-2 ${styles.chatBoxHeader}`}>
        <svg width={isMobile ? 20 : 40} height={isMobile ? 20 : 40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={() => { setIsShowChatBox(null) }}>
          <path d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM22.3567 20C22.3567 20 27.5883 25.2317 27.845 25.4883C28.4967 26.14 28.4967 27.195 27.845 27.845C27.1933 28.4967 26.1383 28.4967 25.4883 27.845C25.2317 27.59 20 22.3567 20 22.3567C20 22.3567 14.7683 27.5883 14.5117 27.845C13.86 28.4967 12.805 28.4967 12.155 27.845C11.5033 27.1933 11.5033 26.1383 12.155 25.4883C12.41 25.2317 17.6433 20 17.6433 20C17.6433 20 12.4117 14.7683 12.155 14.5117C11.5033 13.86 11.5033 12.805 12.155 12.155C12.8067 11.5033 13.8617 11.5033 14.5117 12.155C14.7683 12.41 20 17.6433 20 17.6433C20 17.6433 25.2317 12.4117 25.4883 12.155C26.14 11.5033 27.195 11.5033 27.845 12.155C28.4967 12.8067 28.4967 13.8617 27.845 14.5117C27.59 14.7683 22.3567 20 22.3567 20Z" fill="url(#paint0_radial_131_1681)" />
          <defs>
            <radialGradient id="paint0_radial_131_1681" cx="0" cy="0" r="1" gradientTransform="matrix(0.232558 36.9231 -34.6502 -15.4344 18.3721 2.18672e-06)" gradientUnits="userSpaceOnUse">
              <stop offset="0.00990684" stopColor="#F8F751" />
              <stop offset="1" stopColor="#F7BF07" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className='flex-fill'>
        {
          isLoading ? (
            <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
              <ComponentLoading />
            </div>
          ) : (
            <iframe title='chat' className='w-100 h-100' src={isShowChatBox} style={{ border: 0 }}></iframe>
          )
        }
      </div>
    </div>
  )
}