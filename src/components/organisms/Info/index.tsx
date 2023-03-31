import { useMediaQuery } from "react-responsive";
import infoimgMobile from "../../../assets/images/Info/infoimg.png";
import infoimgDesktop from "../../../assets/images/Info/infoDesktop.png";

import { HomeInfoContainer, SubTitleInfo, TitleInfo, WrapperInfo } from "./Info";

export const HomeInfo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <>
      <HomeInfoContainer>
        <WrapperInfo>
          <TitleInfo>Lorem Ipsum</TitleInfo>
          <SubTitleInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
            Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
            luctus ut vulputate scelerisque .
          </SubTitleInfo>
        </WrapperInfo>
        <div>
          <img src={isDesktopOrLaptop ? infoimgDesktop : infoimgMobile} alt="infoimg" />
        </div>
      </HomeInfoContainer>
    </>
  );
};
