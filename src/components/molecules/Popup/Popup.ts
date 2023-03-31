import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Popup = styled.div`
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  width: 100%;
  max-width: 298px;
  height: 307px;
  padding: 45px 20px 24px;
`;

export const PopupContent = styled.div`
  max-width: 258px;
  width: 100%;
  margin: 0 auto;
`;

export const PopupIcon = styled.img`
  max-width: 100%;
  margin-bottom: 18px;
`;

export const PopupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitlePopup = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 20px;
  text-transform: uppercase;
  color: #464b54;
`;

export const SubTextPopup = styled.p`
  max-width: 220px;
  margin-top: 13px;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 23px;
  color: #787d83;
  margin-bottom: 26px;
  text-align: center;
`;

export const PopupIconSend = styled.img`
  max-width: 100%;
  margin-left: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 29%;
  right: 47px;
  border: none;
  background: transparent;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`;
