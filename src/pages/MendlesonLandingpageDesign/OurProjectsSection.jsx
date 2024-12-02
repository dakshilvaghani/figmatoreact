import { Img, Heading } from "../../components";
import React from "react";

export default function OurProjectsSection() {
  return (
    <>
      {/* our projects section */}
      <div className="relative mt-[-196px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-end px-3.5 lg:px-5 md:px-5">
          <Heading
            as="p"
            className="mr-[328px] text-[48px] font-medium text-black-900 lg:text-[40px] md:mr-0 md:text-[32px] sm:text-[26px]"
          >
            OUR PROJECTS
          </Heading>
          <Img
            src="images/img_group_31.svg"
            alt="Project Image"
            className="mr-[328px] h-[6px] w-[44%] object-contain md:mr-0"
          />
          <div className="mt-[26px] flex justify-end gap-[22px] self-stretch md:flex-col">
            <Img
              src="images/img_our_project_1_img.png"
              alt="First Project"
              className="h-[666px] w-[50%] object-contain md:w-full"
            />
            <div className="flex flex-1 flex-col gap-[22px] md:self-stretch">
              <Img
                src="images/img_our_project_2.png"
                alt="Second Project"
                className="h-[322px] object-cover"
              />
              <Img
                src="images/img_our_project_3_img.png"
                alt="Third Project"
                className="h-[322px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
