import { Input } from "@nextui-org/react";
import { AccountInputProps } from "~/components/types/wrapperTypes";
import React from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";

export function AccountInput({ ...props }: AccountInputProps) {
  const label = props.formName.split(/(?=[A-Z])/);
  label[0] = label[0].charAt(0).toUpperCase() + label[0].slice(1);

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const commonInputProps = {
    name: props.formName,
    label: label.join(" "),
    isRequired: true,
    className: "max-w-xs row-end-1 mb-3.5"
  };

  return props.isProtected ? (
    <Input
      {...props}
      {...commonInputProps}
      variant="bordered"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  ) : (
    <Input {...props} {...commonInputProps} variant="bordered" />
  );
}
