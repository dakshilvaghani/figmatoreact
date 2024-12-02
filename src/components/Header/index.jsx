import { Text, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col items-start top-0 right-0 left-0 mx-auto flex-1 absolute md:relative`}
    >
      <Img
        src="images/img_asset_1.png"
        alt="Header Image"
        className="h-[110px]  self-center object-contain md:w-full"
      />
      <div className="mx-auto mt-2.5 flex w-full max-w-[1340px] items-center justify-between gap-5 lg:pr-[9rem] lg:pl-[1.25rem] md:flex-col md:px-5">
        {/* Logo */}
        <Img
          src="images/img_logo_1_1.png"
          alt="Logo"
          className="h-[84px] w-[22%] object-contain md:w-full"
        />

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-[34px] mr-5">
          <li>
            <a href="#about-us" className="lg:text-[15px]">
              <Text
                as="p"
                className="font-roboto text-[18px] font-normal text-black-900"
              >
                About Us
              </Text>
            </a>
          </li>
          <li>
            <a href="#services" className="lg:text-[15px]">
              <Text
                as="p"
                className="font-roboto text-[18px] font-normal text-black-900"
              >
                Services
              </Text>
            </a>
          </li>
          <li>
            <a href="#team" className="lg:text-[15px]">
              <Text
                as="p"
                className="font-roboto text-[18px] font-normal text-black-900"
              >
                Team
              </Text>
            </a>
          </li>
          <li>
            <a href="#clients" className="lg:text-[15px]">
              <Text
                as="p"
                className="font-roboto text-[18px] font-normal text-black-900"
              >
                Clients
              </Text>
            </a>
          </li>
          <li>
            <a href="#contact-us" className="lg:text-[15px]">
              <Text
                as="p"
                className="font-roboto text-[18px] font-normal text-black-900"
              >
                Contact Us
              </Text>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
