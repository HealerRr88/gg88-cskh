import HeaderComponent from "../../../components/header";
import left_woman from "../../../assets/images/left-woman.png";
import ContactComponent from "../../../components/contact";
import MainBoxComponent from "../../../components/main_box";
import ItemBarComponent from "../../../components/item_bar";
import { useState } from "react";
import ChatBoxComponent from "../../../components/chat_box";

export default function PCPage() {
  const [isShowChatBox, setIsShowChatBox] = useState(false);

  return (
    <div className="pb-5">
      <HeaderComponent />
      <div className={`container d-flex mt-4 ${(isShowChatBox ? '' : 'align-items-center')}`}>
        {
          isShowChatBox ? (
            <div className="col-5 pe-4 flex-grow-1">
              <ChatBoxComponent
                setIsShowChatBox={setIsShowChatBox}
              />
            </div>
          ) : (
            <div className="col-5 arise-animation" style={{ paddingTop: 150 }}>
              <img src={left_woman} alt="left_woman" className="img-fluid" />
            </div>
          )
        }
        <div className={`col-md-7 col-12`}>
          <ContactComponent />
          <MainBoxComponent
            isShowChatBox={isShowChatBox}
            setIsShowChatBox={setIsShowChatBox}
          />
        </div>
      </div>
      <div className="container">
        <ItemBarComponent />
      </div>
    </div>
  );
}