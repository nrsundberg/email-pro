import { InputProps } from "@nextui-org/react";
import { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode | ReactNode[];
};

export type StackProps = {
  // column is default
  direction?: "rows" | "cols";
  spacing?: number;
  justify?: "center" | "start" | "end" | "around";
  children: (ReactNode | null)[];
};

export interface AccountInputProps extends InputProps {
  formName: string;
  isProtected?: boolean;
}

export enum HeaderFeatureDisable {
  LOGIN,
  SIGNUP
}
