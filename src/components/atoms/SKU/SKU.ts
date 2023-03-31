import styled from "styled-components";
import { SKUProps } from ".";

export const SKUButton = styled.button<SKUProps>`
  background-color: ${(props) => (props.color ? props.color : "#000")};
  border-radius: 4px;
  width: 27px;
  height: 27px;
  border: none;
  margin-top: 8px;

  &:first-child {
    border: 1px solid var(--color-2-500);
  }

  &:focus {
    border: 1px solid var(--color-2-500);
  }
`;
