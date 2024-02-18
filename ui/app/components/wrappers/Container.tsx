import { ContainerProps } from "../types/wrapperTypes";

export function Container({ ...props }: ContainerProps) {
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    {props.children}
  </div>;
}