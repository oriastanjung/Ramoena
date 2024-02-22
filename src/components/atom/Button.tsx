import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
  isSecondary?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  type,
  children,
  isPrimary,
  isSecondary,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        `${
          isPrimary
            ? "bg-green-500 text-black hover:bg-green-600"
            : isSecondary
            ? "bg-gray-500 hover:bg-zinc-800 text-white"
            : "text-white"
        } font-semibold px-6 py-3 rounded-[50px] duration-300 ease-in-out`,
        className
      )}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
