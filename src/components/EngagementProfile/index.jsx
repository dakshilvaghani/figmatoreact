import { Text, Heading, Img } from "./..";
import React from "react";

export default function EngagementProfile({
  engagementImage = "images/img_enagagement_icon.png",
  engagementTitle = "Engagement",
  engagementDescription = "We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.READ MORE",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] md:w-full`}
    >
      <Img
        src={engagementImage}
        alt="Engagement Icon"
        className="h-[40px] object-cover"
      />
      <Heading
        size="textxl"
        as="p"
        className="mt-[22px] text-[24px] font-medium uppercase text-black-900"
      >
        {engagementTitle}
      </Heading>
      <Text
        as="p"
        className="mt-3 w-full text-[18px] font-normal leading-[26px] text-blue_gray-900"
      >
        {engagementDescription}
      </Text>
    </div>
  );
}
