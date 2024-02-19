import { Input } from "@nextui-org/react";
import { AccountInputProps } from "~/components/types/wrapperTypes";
import React from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";
import { camelCaseToUserFacingName } from "~/components/appUtils";

export function AccountInput({ ...props }: AccountInputProps) {
  const label = camelCaseToUserFacingName(props.formName);

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const commonInputProps = {
    name: props.formName,
    label: label,
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
