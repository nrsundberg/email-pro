import { ContainerProps } from "../types/wrapperTypes";

export function AppPage({ ...props }: ContainerProps) {
  return <div className="dark">{props.children}</div>;
}

export function PageMainContent({ ...props }: ContainerProps) {
  return (
    <div className="relative flex justify-center">
      <div className="mt-10 self-center md:w-1/2 lg:w-2/3">
        {props.children}
      </div>
    </div>
  );
}
