import { useMediaQuery } from "react-responsive";
import { DisclosureDesktop } from "./Desktop/DisclosureDesktop";
import { DisclosureMobile } from "./Mobile/DisclosuresMobile";

export const Disclosure = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return <>{isDesktopOrLaptop ? <DisclosureDesktop /> : <DisclosureMobile />}</>;
};
