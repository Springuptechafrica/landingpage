import React from "react";

const shapes = { round: "rounded-md" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs text-pink-800",
    pink_800: "bg-pink-800 text-white-A700",
    gray_100: "bg-gray-100 text-gray-700",
  },
} as const;
const sizes = { xs: "p-3", sm: "px-3 py-[15px]", md: "p-[17px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "md",
  variant = "fill",
  color = "pink_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
