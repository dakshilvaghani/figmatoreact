import React from "react";

const sizes = {
  textxl: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  text2xl:
    "text-[42px] font-medium lg:text-[35px] md:text-[38px] sm:text-[32px]",
  text3xl:
    "text-[48px] font-medium lg:text-[40px] md:text-[44px] sm:text-[38px]",
  text4xl:
    "text-[56px] font-medium lg:text-[47px] md:text-[48px] sm:text-[42px]",
  headingxs: "text-[16px] font-bold lg:text-[13px]",
};

const Heading = ({
  children,
  className = "",
  size = "text3xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900 font-rubik ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
