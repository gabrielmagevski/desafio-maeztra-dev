import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";

import SliderMobile from "../../../assets/images/slider/photoSliderMobile.png";
import SliderDesktop from "../../../assets/images/slider/photoSliderDesktop.png";

import { SliderImg, ContainerSlider, TitleSlider, SubTextSlider, AbsoluteSlider, Dots } from "./Slider";
import "./style.css";
import "keen-slider/keen-slider.min.css";
import { Arrow } from "../../atoms/Arrow";
import { Button } from "../../atoms/Button/Button";
import { useMediaQuery } from "react-responsive";

export const Slider = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { perView: 1, origin: "auto" },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <ContainerSlider ref={sliderRef}>
          <div className="keen-slider__slide">
            <SliderImg src={isDesktopOrLaptop ? SliderDesktop : SliderMobile} alt="sliderPhoto" />
            <AbsoluteSlider>
              <TitleSlider>Promoções de Outono</TitleSlider>
              <SubTextSlider>Confiras os melhores looks para combinar com você nesse Outono</SubTextSlider>
              <Button
                bdrr={isDesktopOrLaptop ? "10px" : "4px"}
                mxwd={isDesktopOrLaptop ? "128px" : "100%"}
                pdg={isDesktopOrLaptop ? "14px 30px" : "6px"}
                mg="16px 0px 0px 0px"
              >
                Conferir
              </Button>
            </AbsoluteSlider>
          </div>
          <div className="keen-slider__slide">
            <SliderImg src={isDesktopOrLaptop ? SliderDesktop : SliderMobile} alt="sliderPhoto" />
            <AbsoluteSlider>
              <TitleSlider>Promoções de Outono</TitleSlider>
              <SubTextSlider>Confiras os melhores looks para combinar com você nesse Outono</SubTextSlider>
              <Button
                bdrr={isDesktopOrLaptop ? "10px" : "4px"}
                mxwd={isDesktopOrLaptop ? "128px" : "100%"}
                pdg={isDesktopOrLaptop ? "14px 30px" : "6px"}
                mg="16px 0px 0px 0px"
              >
                Conferir
              </Button>
            </AbsoluteSlider>
          </div>

          {loaded && instanceRef.current && (
            <Dots>
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </Dots>
          )}

          {loaded && instanceRef.current && (
            <>
              <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

              <Arrow
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
        </ContainerSlider>
      </div>
    </>
  );
};
