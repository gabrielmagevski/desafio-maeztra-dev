import React, { InputHTMLAttributes } from "react";
import { Input } from "./Input";

export type TypeInput = InputHTMLAttributes<HTMLInputElement> & {
  pd?: string;
  wd?: string;
  mxwd?: string;
  bdr?: string;
  bg?: string;
  fts?: string;
  color?: string;
  border?: string;
  hg?: string;
  clp?: string;
};

export function CustomInput({ ...props }: TypeInput) {
  return <Input {...props} />;
}
