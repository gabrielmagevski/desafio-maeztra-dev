import { FooterContent, GroupPayment, GroupSocial, GroupVtexAndMaeztra, Strong } from "./Footer";
import Fb from "../../../assets/images/Footer/fb.png";
import Lk from "../../../assets/images/Footer/linkedin.png";
import Ytb from "../../../assets/images/Footer/ytb.png";
import Ins from "../../../assets/images/Footer/instagram.png";
import Visa from "../../../assets/images/Footer/visa.png";
import Master from "../../../assets/images/Footer/mastecard.png";
import VTEX from "../../../assets/images/Footer/VTEX.png";
import Maeztra from "../../../assets/images/Footer/logoMaeztra.png";
import { Flex } from "../../../global";

export const Footer = () => (
  <>
    <FooterContent>
      <GroupSocial>
        <img src={Fb} alt="facebook" />
        <img src={Lk} alt="linkedin" />
        <img src={Ins} alt="instagram" />
        <img src={Ytb} alt="youtube" />
      </GroupSocial>
      <GroupPayment>
        <img src={Visa} alt="Visa" />
        <img src={Master} alt="masterCard" />
        <img src={Visa} alt="Visa" />
        <img src={Master} alt="masterCard" />
      </GroupPayment>
      <Flex>
        <Flex>
          <GroupVtexAndMaeztra>
            <Strong>Powered by</Strong>
            <img src={VTEX} alt="VTEX" />
          </GroupVtexAndMaeztra>
          <GroupVtexAndMaeztra>
            <Strong>Developed by</Strong>
            <img src={Maeztra} alt="Maeztra" />
          </GroupVtexAndMaeztra>
        </Flex>
      </Flex>
    </FooterContent>
  </>
);
