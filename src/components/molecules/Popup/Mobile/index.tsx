import { useEffect, useState } from "react";
import { Button } from "../../../atoms/Button/Button";
import { Input } from "../../../atoms/Input/Input";
import { CloseButton, Overlay, Popup, PopupContent, PopupIcon, PopupIconSend, PopupWrapper, SubTextPopup, TitlePopup } from "../Popup";

import EmailIcon from "../../../../assets/images/Popup/mail-icon.png";
import SendIcon from "../../../../assets/images/Popup/send-icon.png";

export const MobilePopup = () => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
    localStorage.setItem("POPUP_Conditional", "already--opened");
  };

  useEffect(() => {
    const searchPermissionModal = localStorage.getItem("POPUP_Conditional");
    if (searchPermissionModal === "already--opened") return setOpen(false);
  }, [open]);

  useEffect(() => {
    const searchPermissionModal = localStorage.getItem("POPUP_Conditional");

    if (!searchPermissionModal) {
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  }, []);

  if (!open) return null;
  return (
    <>
      <Overlay>
        <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
        <Popup>
          <PopupContent>
            <PopupWrapper>
              <PopupIcon src={EmailIcon} alt="Email" />
              <TitlePopup>Bem Vindo à MAEZTRA</TitlePopup>
              <SubTextPopup>
                Receba em Primeira mão <b>desconto e ofertas exclusivas</b>
              </SubTextPopup>
              <Input pd="0px 11px" clp="#787D83" placeholder="Digite seu e-mail" hg="40px" bg="transparent" bdr="5px" type="email" />
              <Button fts="0.75rem" lh="20px" bdrr="10px" ff="Titillium Web" mg="12px 0px 0px 0px" hg="40px" type="submit">
                ENVIAR <PopupIconSend src={SendIcon} alt="Send" />
              </Button>
            </PopupWrapper>
          </PopupContent>
        </Popup>
      </Overlay>
    </>
  );
};
