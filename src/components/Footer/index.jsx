import { Text, Heading, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-center gap-[22px] mx-[130px] md:mx-0`}
    >
      <div className="self-stretch">
        <div className="flex justify-center bg-blue-100 py-10 sm:py-5">
          <div className="container-xs mt-1.5 flex justify-center md:px-5">
            <div className="flex w-full flex-wrap items-start justify-between gap-5 md:flex-col">
              {/* Social Section */}
              <div className="flex flex-col items-start gap-3 md:w-full">
                <Heading
                  size="headingxs"
                  as="h6"
                  className="text-[16px] font-bold text-black-900"
                >
                  Social
                </Heading>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center gap-2">
                        <Img
                          src="images/img_linkedin_1.png"
                          alt="Linkedin Icon"
                          className="h-4 w-4 object-cover"
                        />
                        <Text
                          size="textxs"
                          as="p"
                          className="text-[14px] font-normal text-blue_gray-900"
                        >
                          Linkedin
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center gap-2">
                        <Img
                          src="images/img_facebook_1.png"
                          alt="Facebook Icon"
                          className="h-4 w-4 object-cover"
                        />
                        <Text
                          size="textxs"
                          as="p"
                          className="text-[14px] font-normal text-blue_gray-900"
                        >
                          Facebook
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center gap-2">
                        <Img
                          src="images/img_close.png"
                          alt="Facebook Icon"
                          className="h-4 w-4 object-cover"
                        />
                        <Text
                          size="textxs"
                          as="p"
                          className="text-[14px] font-normal text-blue_gray-900"
                        >
                          Google +
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Explore Section */}
              <div className="flex flex-col items-start gap-3 md:w-full">
                <Heading
                  size="headingxs"
                  as="h6"
                  className="text-[16px] font-bold text-black-900"
                >
                  Explore
                </Heading>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="Services" target="_blank" rel="noreferrer">
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[14px] font-normal text-blue_gray-900"
                      >
                        Services
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Team" target="_blank" rel="noreferrer">
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[14px] font-normal text-blue_gray-900"
                      >
                        Team
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="Clients" target="_blank" rel="noreferrer">
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[14px] font-normal text-blue_gray-900"
                      >
                        Clients
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="flex flex-col items-start gap-3 md:w-full">
                <Heading
                  size="headingxs"
                  as="h6"
                  className="text-[16px] font-bold text-black-900"
                >
                  Contact
                </Heading>
                <Text
                  size="textxs"
                  as="p"
                  className="text-[14px] font-normal leading-[24px] text-blue_gray-900"
                >
                  Lorem Ipsum dummy address
                  <br />
                  used for display
                  <br />
                  1234567890
                </Text>
              </div>

              {/* email Section */}
              <div className="flex flex-col items-start gap-3 md:w-full">
                <Heading
                  size="headingxs"
                  as="h6"
                  className="text-[16px] font-bold text-black-900"
                >
                  Email
                </Heading>

                <Text
                  size="textxs"
                  as="p"
                  className="text-[14px] font-normal text-blue_gray-900"
                >
                  mendlesoncommunication@email.com
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xs flex flex-col items-center px-14 md:px-5">
        <Text
          size="textxs"
          as="p"
          className="text-[14px] font-normal text-blue_gray-900"
        >
          © Copyright 2018 Mendleson Communication Pty Ltd
        </Text>
      </div>
    </footer>
  );
}
