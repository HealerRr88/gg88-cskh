import { useState } from "react";
import HeaderComponent from "../../../components/header";
import MainBoxComponent from "../../../components/main_box";
import ItemBarComponent from "../../../components/item_bar";
import ContactComponent from "../../../components/contact";
import AppDownloadComponent from "../../../components/app_download";
import ChatBoxComponent from "../../../components/chat_box";

export default function MBPage({ links, gifs }) {
  const [isShowChatBox, setIsShowChatBox] = useState(false);

  return (
    <div className="vh-100 d-flex flex-column overflow-auto">
      <HeaderComponent
        links={links}
      />
      <MainBoxComponent
        links={links}
        isShowChatBox={isShowChatBox}
        setIsShowChatBox={setIsShowChatBox}
      />
      <ItemBarComponent
        links={links}
      />
      <ContactComponent
        links={links}
      />
      <div className="mt-auto mb-3">
        <AppDownloadComponent
          links={links}
        />
      </div>
      {
        isShowChatBox && (
          <div className="position-fixed top-0 start-0 w-100 h-100 z-3 bg-white">
            <ChatBoxComponent
              isShowChatBox={isShowChatBox}
              setIsShowChatBox={setIsShowChatBox}
            />
          </div>
        )
      }
    </div>
  );
}