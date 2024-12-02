import React from "react";

const sizes = {
  textxs: "text-[14px] font-normal",
  texts: "text-[16px] font-normal lg:text-[13px]",
  textmd: "text-[18px] font-normal lg:text-[15px]",
  textlg: "text-[22px] font-normal lg:text-[18px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textmd",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue_gray-900 font-roboto ${className} ${sizes[size]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
