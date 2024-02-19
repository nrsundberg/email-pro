import { ContainerProps } from "../types/wrapperTypes";

export default function GeneralAppPage({ ...props }: ContainerProps) {
  return (
    // <div className="blur-[106px] bg-gradient-to-br from-primary to-purple-700 dark:from-purple-400 relative flex justify-center">
    <div className="relative flex justify-center">
      <div className="mt-10 self-center md:w-1/2 lg:w-2/3">
        {props.children}
      </div>
    </div>
  );
}
