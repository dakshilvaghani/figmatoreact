import { Img, Heading } from "../../components";
import React from "react";

export default function OurClientsSection() {
  return (
    <>
      {/* our clients section */}
      <div id="clients" className="flex items-start md:flex-col">
        <Img
          src="images/img_assets_9_1.png"
          alt="Vector Image"
          className="h-[404px] w-[10%] object-contain md:w-full"
        />
        <div className="mt-[66px] flex flex-1 flex-col items-start self-end pl-20 pr-14 lg:pl-8 md:self-stretch md:px-5">
          <Heading
            as="p"
            className="ml-[412px] text-[48px] font-medium text-black-900 lg:text-[40px] md:ml-0 md:text-[32px] sm:text-[26px]"
          >
            OUR CLIENTS
          </Heading>
          <Img
            src="images/img_group_31.svg"
            alt="Client Image"
            className="ml-[412px] h-[6px] w-[34%] object-contain md:ml-0"
          />
          <div className="mt-10 flex flex-col gap-16 self-stretch sm:gap-8">
            <div className="flex items-center md:flex-col">
              <div className="flex items-center gap-[15px]">
                <Img
                  src="images/img_layer_19.png"
                  alt="First Logo"
                  className="h-[160px] w-[50%] object-contain"
                />
                <Img
                  src="images/img_layer_20.png"
                  alt="Second Logo"
                  className="h-[130px] w-[30%] object-contain"
                />
              </div>
              <Img
                src="images/img_1280px_brigitte_logo.png"
                alt="Third Logo"
                className="h-[62px] w-[20%] object-contain md:w-full"
              />
              <Img
                src="images/img_layer_22.png"
                alt="Fourth Logo"
                className="ml-[62px] h-[106px] w-[12%] object-contain md:ml-0 md:w-full"
              />
              <Img
                src="images/img_bhp_2017_logo.png"
                alt="Fifth Logo"
                className="ml-[86px] h-[62px] w-[14%] object-contain md:ml-0 md:w-full"
              />
            </div>
            <div className="flex items-center md:flex-col">
              <Img
                src="images/img_layer_21.png"
                alt="Sixth Logo"
                className="h-[106px] w-[14%] object-contain md:w-full"
              />
              <div className="flex w-[52%] items-center justify-between gap-5 px-14 md:w-full md:px-5 sm:flex-col sm:px-4">
                <Img
                  src="images/img_layer_23.png"
                  alt="Seventh Logo"
                  className="h-[120px] w-[46%] object-contain sm:w-full"
                />
                <Img
                  src="images/img_layer_24.png"
                  alt="Eighth Logo"
                  className="h-[98px] w-[42%] object-contain sm:w-full"
                />
              </div>
              <Img
                src="images/img_melbournewaterlogo_1024x282.png"
                alt="Ninth Logo"
                className="h-[58px] w-[18%] object-contain md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
