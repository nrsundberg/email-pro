import { Button, InputProps } from "@nextui-org/react";
import { Link } from "@remix-run/react";

export interface MenuOptionProps extends InputProps {
  queryParam: string;
}

export default function MenuOption({ ...props }: MenuOptionProps) {
  return <Button as={Link}>{props.queryParam}</Button>;
}
