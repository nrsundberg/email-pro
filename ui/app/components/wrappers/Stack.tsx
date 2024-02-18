import { StackProps } from "../types/wrapperTypes";

export default function Stack({
  direction = "rows",
  spacing = 3,
  justify = "start",
  children
}: StackProps) {
  const directionalClasses =
    `grid-${direction}-${children?.length} ` + (spacing && `gap-${spacing}`);

  return (
    <div className={`justify-${justify} grid ` + directionalClasses}>
      {children}
    </div>
  );
}
