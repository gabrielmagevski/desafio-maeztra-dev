import styled from "styled-components";
import { TypeButton } from "./index";

export const Button = styled.button<TypeButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.wd ? props.wd : "100%")};
  max-width: ${(props) => (props.mxwd ? props.mxwd : "100%")};
  height: ${(props) => (props.hg ? props.hg : "auto")};

  position: ${(props) => (props.position ? props.position : "relative")};
  z-index: ${(props) => (props.zIndex ? props.zIndex : "0")};
  margin: ${(props) => (props.mg ? props.mg : "0")};

  background-color: ${(props) => (props.bg ? props.bg : "#FAA500")};
  border: ${(props) => (props.bdr ? props.bdr : " 1px solid #FAA500")};
  border-radius: ${(props) => (props.bdrr ? props.bdrr : "4px")};
  padding: ${(props) => (props.pdg ? props.pdg : "0")};
  transition: filter 300ms;

  font-family: ${(props) => (props.ff ? props.ff : "Montserrat")};
  font-weight: ${(props) => (props.fw ? props.fw : "700")};
  font-size: ${(props) => (props.fts ? props.fts : "0.875rem")};
  line-height: ${(props) => (props.lh ? props.lh : "17px")};
  color: ${(props) => (props.color ? props.color : "#fff")};

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
