import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "images/img_person_1_img_1.png",
  userName = "Jessica D’suza",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[50px]`}
    >
      <Img
        src={userImage}
        alt="Profile Image"
        className="h-[220px] w-full object-cover"
      />
      <Heading
        size="textxl"
        as="p"
        className="text-[24px] font-normal text-black-900"
      >
        {userName}
      </Heading>
    </div>
  );
}
