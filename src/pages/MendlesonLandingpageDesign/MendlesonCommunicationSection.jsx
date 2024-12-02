import { Heading, Img } from "../../components";
import React from "react";

export default function MendlesonCommunicationSection() {
  return (
    <>
      {/* mendleson communication section */}
      <div className="mt-40 flex items-start md:flex-col">
        <div className="relative mt-12 h-[580px] flex-1 self-end md:w-full md:flex-none md:self-stretch md:px-5">
          <Img
            src="images/img_assets_3.png"
            alt="Assets Image"
            className="absolute bottom-0 left-0 top-0 my-auto h-[580px] w-[26%] object-contain"
          />
          <Img
            src="images/img_vector_smart_object21.png"
            alt="Vector Image"
            className="absolute bottom-[0.25px] left-0 right-0 mx-auto h-[438px] w-[70%] object-contain"
          />
        </div>
        <Heading
          size="text4xl"
          as="h1"
          className="w-[32%] text-[56px] font-medium leading-[66px] text-black-900 lg:w-[32%] lg:text-[47px] md:w-full md:px-5 md:text-[36px] sm:text-[30px]"
        >
          <>
            Mendleson
            <br />
            Communication
            <br />
            and Engagement
          </>
        </Heading>
      </div>
    </>
  );
}
