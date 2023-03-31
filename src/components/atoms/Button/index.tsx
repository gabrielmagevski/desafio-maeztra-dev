import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";

export type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  position?: string;
  zIndex?: string;
  mg?: string;
  bg?: string;
  bdr?: string;
  pdg?: string;
  wd?: string;
  hg?: string;
  fw?: string;
  ff?: string;
  fts?: string;
  lh?: string;
  mxwd?: string;
  bdrr?: string;
};

export function CustomButton({ children, ...props }: TypeButton) {
  return <Button {...props}>{children}</Button>;
}
