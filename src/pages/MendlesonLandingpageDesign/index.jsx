import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";
import EngagementProfile from "../../components/EngagementProfile";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import OurClientsSection from "./OurClientsSection";
import OurProjectsSection from "./OurProjectsSection";
import React, { Suspense } from "react";

const teamMembersList = [
  { userImage: "images/img_person_1_img_1.png", userName: "Jessica D’suza" },
  { userImage: "images/img_person_2_img_1.png", userName: "Johny Williams" },
  { userImage: "images/img_person_3_img_1.png", userName: "Sanya R," },
];

export default function MendlesonLandingpageDesignPage() {
  return (
    <>
      <Helmet>
        <title>Mendleson Communication - Expert Engagement & Services</title>
        <meta
          name="description"
          content="Discover Mendleson Communication's dedication to impactful engagement and professional services. Explore our team, projects, and client success stories. Contact us for partnerships."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="mb-1 flex flex-col gap-[74px] lg:gap-[74px] md:gap-[55px] sm:gap-[37px]">
          <div className="flex flex-col gap-[72px] lg:gap-[72px] md:gap-[54px] sm:gap-9">
            <div className="relative h-screen">
              {/* Header */}
              <Header />

              {/* top right */}
              <div className="absolute top-0 right-0">
                <Img
                  src="images/img_asset_2.png"
                  alt="Secondary Image"
                  className="
      h-[350px] 
      w-full 
      object-contain 
      lg:h-[300px] 
      md:h-[250px] md:w-[80%] 
      sm:h-[200px] sm:w-[70%] 
      sm:right-2 
      sm:top-2"
                />
              </div>

              {/* Mendleson Communication Section */}
              <div
                className="
  absolute 
  w-[430px] 
  top-[27%] 
  left-[70%] 
  transform -translate-x-1/2 
  flex flex-col 
  items-start 
  space-y-10 
  z-12 
  lg:w-[350px] 
  md:w-[300px] 
  sm:w-[90%] 
  sm:top-[20%] 
  sm:space-y-6
"
              >
                {/* Heading */}
                <Heading
                  size="text4xl"
                  as="h1"
                  className="
      text-[56px] 
      font-medium 
      leading-[66px] 
      text-black-900 
      lg:text-[47px] lg:leading-[56px] 
      md:text-[36px] md:leading-[46px] 
      sm:text-[30px] sm:leading-[40px]
    "
                >
                  <>
                    Mendleson
                    <br />
                    Communication
                    <br />
                    and Engagement
                  </>
                </Heading>

                {/* Paragraph */}
                <Text
                  as="p"
                  className="
      w-full 
      text-[18px] 
      font-normal 
      leading-[28px] 
      text-blue_gray-900 
      lg:text-[15px] lg:leading-[24px] 
      md:text-[14px] md:leading-[22px] 
      sm:w-full sm:text-[14px] sm:leading-[20px]
    "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Malesuada sed ipsum, ut quam volutpat, tortor.
                </Text>
              </div>

              {/* Background Section */}
              <div className="absolute bottom-0 left-0 w-full h-[788px]">
                <Img
                  src="images/img_group_2.png"
                  alt="Background Image"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Foreground Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10">
                <Img
                  src="images/img_vector_smart_object21.png"
                  alt="Foreground Vector"
                  className="h-[438px] w-[58%] object-contain"
                />
              </div>

              {/* Background Decoration Image */}
              <div className="absolute bottom-0 left-0 ">
                <Img
                  src="images/img_assets_3.png"
                  alt="Background Decoration"
                  className="h-[500px] object-contain"
                />
              </div>

              {/* Vector Image */}
              <div className="absolute bottom-[11px] right-0">
                <Img
                  src="images/img_assets_4.png"
                  alt="Vector Image"
                  className="h-[248px] w-full object-contain"
                />
              </div>
            </div>

            <div className="relative h-[1086px]">
              <div className="absolute bottom-[38%] left-0 right-0 mx-auto flex flex-1 flex-col items-center px-14 md:px-5 sm:px-4">
                <Heading
                  as="h2"
                  className="text-[48px] font-medium text-black-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                >
                  SERVICES
                </Heading>
                <Img
                  src="images/img_group_31.svg"
                  alt="Image Group"
                  className="h-[6px] w-[16%] object-contain"
                />
              </div>

              <div
                id="about-us"
                className="absolute right-[8%] top-0 m-auto flex w-[40%] flex-col gap-[34px]"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col items-start">
                    <Heading
                      as="h3"
                      className="text-[48px] font-medium text-black-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                    >
                      ABOUT US
                    </Heading>
                    <Img
                      src="images/img_group_31.svg"
                      alt="About Us Image"
                      className="h-[6px] w-[36%] object-contain"
                    />
                  </div>
                  <Text
                    as="p"
                    className="text-[18px] font-normal leading-[26px] text-blue_gray-900 lg:text-[15px]"
                  >
                    We love what we do and are driven by achieving great results
                    for our clients. Our awards and impressive client list are
                    testament to our high quality approach. We deliver value,
                    creaKvity, results and excepKonal levels of customer service
                    and professionalism. We specialise in infrastructure
                    development, energy and natural resources.
                  </Text>
                </div>
                <div className="mr-[38px] flex gap-[68px] md:mr-0 md:flex-col">
                  <EngagementProfile className="mb-[22px] md:mb-0 md:px-5" />
                  <EngagementProfile
                    engagementImage="images/img_coomunication_icon.png"
                    engagementTitle="Communications"
                    engagementDescription="We are award-winning leaders in communications and campaign management.READ MORE"
                    className="md:px-5"
                  />
                </div>
              </div>

              <div className="container-xs absolute bottom-px left-0 right-0 flex items-start justify-between gap-5 lg:px-5 md:relative md:flex-col md:px-5">
                <div className="mt-[52px] flex w-[46%] flex-col items-end gap-5 md:w-full">
                  <Heading
                    size="text2xl"
                    as="h4"
                    className="text-[42px] font-medium uppercase text-blue_gray-900 lg:text-[35px] md:text-[26px]"
                  >
                    Engagement
                  </Heading>
                  <Text
                    size="texts"
                    as="p"
                    className="w-full text-right text-[16px] font-normal leading-[23px] text-blue_gray-900 lg:text-[13px]"
                  >
                    We love what we do and are driven by achieving great results
                    for our clients. Our awards and impressive client list are
                    testament to our high quality approach. We deliver value,
                    creaKvity, results and excepKonal levels of customer service
                    and professionalism. We specialise in infrastructure
                    development, energy and natural resources.
                  </Text>
                </div>
                <Img
                  src="images/img_engagement_vector.png"
                  alt="Engagement Image"
                  className="mr-6 h-[374px] w-[40%] self-center object-contain md:mr-0 md:w-full"
                />
              </div>
              <Img
                src="images/img_about_us_1.png"
                alt="About Us Image"
                className="absolute left-[8%] top-[8%] m-auto h-[408px] w-[38%] object-contain"
              />
              <Img
                src="images/img_asset_5_1.png"
                alt="Vector Image"
                className="absolute bottom-[16%] left-0 m-auto h-[430px] w-[20%] object-contain"
              />
            </div>

            <div id="team" className="relative h-[2966px]">
              <div className="absolute bottom-[41%] left-0 right-0 mx-auto flex flex-1 flex-col items-center px-14 md:px-5 sm:px-4">
                <Heading
                  as="h5"
                  className="text-[48px] font-medium text-black-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                >
                  OUR TEAM
                </Heading>
                <Img
                  src="images/img_group_31.svg"
                  alt="Secondary Image"
                  className="h-[6px] w-[16%] object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                <div className="flex items-start md:flex-col">
                  <div className="flex flex-1 items-center justify-between gap-[171px] md:flex-col md:gap-5 md:self-stretch md:px-5">
                    <Img
                      src="images/img_coominucation_vector.png"
                      alt="Communication Image"
                      className="h-[250px] w-[40%] object-contain md:w-full"
                    />
                    <div className="mb-1.5 flex w-[38%] flex-col items-start gap-5 self-end md:mb-0 md:w-full">
                      <Heading size="text2xl" as="h6">
                        Communications
                      </Heading>
                      <Text
                        as="p"
                        className="w-full text-[18px] font-normal leading-[26px] text-blue_gray-900 lg:text-[15px]"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Faucibus quam quis egestas orci. Scelerisque eu, vitae
                        sapien, pellentesque et. Sit ac fames facilisis nibh
                        faucibus.{" "}
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_asset_6_1.png"
                    alt="Asset6one"
                    className="relative ml-[-16px] h-[430px] w-[14%] self-center object-contain md:ml-0 md:w-full"
                  />
                </div>
                <div className="relative mt-[-114px]">
                  <div className="mx-[172px] flex items-start justify-between gap-5 md:mx-0 md:flex-col">
                    <div className="mt-[70px] flex w-[44%] flex-col items-end gap-5 md:w-full md:px-5">
                      <Heading
                        size="text2xl"
                        as="p"
                        className="text-[42px] font-medium uppercase text-blue_gray-900 lg:text-[35px] md:text-[26px]"
                      >
                        facilitation
                      </Heading>
                      <Text
                        size="texts"
                        as="p"
                        className="w-full text-right text-[16px] font-normal leading-[23px] text-blue_gray-900 lg:text-[13px]"
                      >
                        <>
                          We love what we do and are driven by achieving great
                          results for our clients. Our awards and impressive
                          client list are testament to our high quality
                          approach. We deliver value, creaKvity, results and
                          excepKonal levels of customer service and
                          professionalism. We specialise in infrastructure
                          development, energy and <br />
                          natural resources.
                        </>
                      </Text>
                    </div>
                    <Img
                      src="images/img_facilation_vector.png"
                      alt="Facilitation Image"
                      className="mr-[94px] h-[386px] w-[40%] self-center object-contain md:mr-0 md:w-full"
                    />
                  </div>

                  <div className="relative mt-[-216px] flex flex-col">
                    <Img
                      src="images/img_asset_7_1.png"
                      alt="Asset7one"
                      className="relative z-[4] h-[470px] w-[12%] object-contain"
                    />
                    <div className="relative mt-[-2px] flex flex-col items-end">
                      <Img
                        src="images/img_asset_8_2.png"
                        alt="Asset8two"
                        className="relative z-[3] h-[456px] w-[16%] object-contain"
                      />
                      <div className="relative mt-[-248px] flex flex-col items-center self-stretch">
                        <div className="container-xs lg:px-5 md:px-5">
                          <div className="flex items-start justify-between gap-5 md:flex-col">
                            <div className="mt-[18px] flex w-[44%] flex-col items-end gap-5 md:w-full">
                              <Heading
                                size="text2xl"
                                as="p"
                                className="text-[42px] font-medium uppercase text-blue_gray-900 lg:text-[35px] md:text-[26px]"
                              >
                                Traning & Mentoring
                              </Heading>
                              <Text
                                size="texts"
                                as="p"
                                className="w-full text-right text-[16px] font-normal leading-[23px] text-blue_gray-900 lg:text-[13px]"
                              >
                                We love what we do and are driven by achieving
                                great results for our clients. Our awards and
                                impressive client list are testament to our high
                                quality approach. We deliver value, creaKvity,
                                results and excepKonal levels of customer
                                service and professionalism. We specialise in
                                infrastructure development, energy and natural
                                resources.
                              </Text>
                            </div>
                            <Img
                              src="images/img_training_and_vector.png"
                              alt="Training Image"
                              className="h-[348px] w-[38%] self-center object-contain md:w-full"
                            />
                          </div>
                        </div>
                        <div className="relative mt-[-34px] flex flex-col self-stretch">
                          <Img
                            src="images/img_asset_5_2.png"
                            alt="Asset5two"
                            className="relative z-[2] h-[430px] w-[22%] object-contain"
                          />
                          <div className="relative mt-[-8px] flex flex-col items-end">
                            <Img
                              src="images/img_asset_8_3.png"
                              alt="Asset8three"
                              className="relative z-[1] h-[504px] w-[16%] object-contain"
                            />

                            {/* our projects section */}
                            <OurProjectsSection />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-xs absolute left-0 right-0 top-1/4 z-[5] flex items-center justify-between gap-5 lg:px-5 md:relative md:flex-col md:px-5">
                <Img
                  src="images/img_consultation_vector.png"
                  alt="Consultation Image"
                  className="h-[362px] w-[44%] object-contain md:w-full"
                />
                <div className="mb-2 flex w-[38%] flex-col gap-5 self-end md:w-full">
                  <Heading
                    size="text2xl"
                    as="p"
                    className="text-[42px] font-medium uppercase leading-[49px] text-blue_gray-900 lg:text-[35px] md:text-[26px]"
                  >
                    <>
                      Consultation and
                      <br />
                      Research
                    </>
                  </Heading>
                  <Text
                    as="p"
                    className="text-[18px] font-normal leading-[26px] text-blue_gray-900 lg:text-[15px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus quam quis egestas orci. Scelerisque eu, vitae
                    sapien, pellentesque et. Sit ac fames facilisis nibh
                    faucibus.{" "}
                  </Text>
                </div>
              </div>
              <div className="container-xs absolute bottom-[29%] left-0 right-0 z-[6] flex gap-[138px] px-6 lg:px-5 md:relative md:flex-col md:px-5">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {teamMembersList.map((d, index) => (
                    <UserProfile {...d} key={"productList" + index} />
                  ))}
                </Suspense>
              </div>
            </div>

            {/* our clients section */}
            <OurClientsSection />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
