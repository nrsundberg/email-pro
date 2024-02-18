import { InputProps } from "@nextui-org/react";

export type ContainerProps = {
  children: JSX.Element;
};

export type StackProps = {
  // column is default
  direction?: "rows" | "cols";
  spacing?: number;
  justify?: "center" | "start" | "end" | "around";
  children: (JSX.Element | null)[];
};

export interface AccountInputProps extends InputProps {
  formName: string;
  isProtected?: boolean;
}
