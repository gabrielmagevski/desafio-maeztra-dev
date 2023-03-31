import { useMediaQuery } from "react-responsive";
import { DesktopHeader } from "./desktop/desktopHeader";
import { MobileHeader } from "./mobile/mobileHeader";

export const HeaderIndex = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return <>{isDesktopOrLaptop ? <DesktopHeader /> : <MobileHeader />}</>;
};
