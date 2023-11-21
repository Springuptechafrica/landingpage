import React from "react";

const sizeClasses = {
  txtInterSemiBold1065: "font-inter font-semibold",
  txtInterBold18: "font-bold font-inter",
  txtInterSemiBold12: "font-inter font-semibold",
  txtProximaNovaSemibold16: "font-proximanova font-semibold",
  txtInterLight28: "font-inter font-light",
  txtInterBold24: "font-bold font-inter",
  txtProximaNovaBold2731: "font-bold font-proximanova",
  txtInterRegular1618: "font-inter font-normal",
  txtInterBlack45: "font-black font-inter",
  txtInterSemiBold10: "font-inter font-semibold",
  txtInterSemiBold1618: "font-inter font-semibold",
  txtInterThin98: "font-hairline font-inter",
  txtInterSemiBold1416: "font-inter font-semibold",
  txtInterRegular1214: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
