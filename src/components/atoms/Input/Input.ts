import styled from "styled-components";
import { TypeInput } from ".";

export const Input = styled.input<TypeInput>`
  padding: ${(props) => (props.pd ? props.pd : "0px")};
  width: ${(props) => (props.wd ? props.wd : "100%")};
  max-width: ${(props) => (props.mxwd ? props.mxwd : "100%")};
  border-radius: ${(props) => (props.bdr ? props.bdr : "8px")};
  background-color: ${(props) => (props.bg ? props.bg : "#ebebeb")};
  font-size: ${(props) => (props.fts ? props.fts : "1rem")};
  color: ${(props) => (props.color ? props.color : "#000")};
  border: ${(props) => (props.border ? props.border : "1px solid #ebebeb")};
  outline: 0;
  height: ${(props) => (props.hg ? props.hg : "100%")};

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 21px;
    color: ${(props) => (props.clp ? props.clp : "#353535")};
    padding: 0 0 0 24px;
  }
`;
