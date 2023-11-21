import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const LandingPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="h-[760px] sm:h-[828px] md:px-5 relative w-full">
            <div className="h-[760px] sm:h-[828px] m-auto w-full">
              <Img
                className="absolute h-[760px] inset-y-[0] my-auto object-cover right-[0] w-[38%]"
                src="images/img_rectangle32.png"
                alt="rectangleThirtyTwo"
              />
              <div className="absolute bg-gray-100 flex flex-col gap-[35px] h-full inset-y-[0] justify-center left-[0] my-auto p-[13px] w-[63%]">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[245px] mr-[78px] mt-[249px] w-[63%] md:w-full">
                  <Text
                    className="leading-[51.00px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                    size="txtInterBlack45"
                  >
                    <>
                      Start receiving
                      <br />
                      payments instantly!
                    </>
                  </Text>
                  <Text
                    className="mt-[27px] text-base text-black-900"
                    size="txtInterRegular16"
                  >
                    <>
                      Create an account and start receiving payments via debit{" "}
                      <br />
                      and credit cards, USSD and direct bank payments
                    </>
                  </Text>
                  <div className="flex sm:flex-col flex-row font-proximanova gap-[47px] items-center justify-start mt-11 w-[78%] md:w-full">
                    <Button className="cursor-pointer font-bold leading-[normal] min-w-[214px] text-base text-center">
                      Get Started
                    </Button>
                    <div className="flex flex-col items-center justify-start w-[39%] sm:w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <Img
                          className="h-[27px] w-[27px]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                        <Text
                          className="text-base text-center text-pink-800"
                          size="txtProximaNovaSemibold16"
                        >
                          See how it works{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[103px] mb-[75px] md:ml-[0] ml-[637px]"
                  src="images/img_group2.svg"
                  alt="groupTwo"
                />
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[60px] inset-x-[0] justify-start mx-auto top-[5%] w-4/5">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <Img
                  className="h-[33px] md:h-auto md:mt-0 my-2 object-cover"
                  src="images/img_group4.png"
                  alt="groupFour"
                />
                <ul className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[65px] md:mt-0 my-[17px] w-[37%] md:w-full common-row-list">
                  <li>
                    <a href="javascript:" className="text-black-900 text-xs">
                      <Text size="txtInterSemiBold12">Why ALATPay</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[26px] text-black-900 text-xs"
                    >
                      <Text size="txtInterSemiBold12">How it Works</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-7 text-black-900 text-xs"
                    >
                      <Text size="txtInterSemiBold12">Pricing</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[26px] text-black-900 text-xs"
                    >
                      <Text size="txtInterSemiBold12">Developer </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-7 text-black-900 text-xs"
                    >
                      <Text size="txtInterSemiBold12">Contact</Text>
                    </a>
                  </li>
                </ul>
                <div className="flex md:flex-1 flex-row gap-4 items-center justify-between md:ml-[0] ml-[354px] w-[24%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[125px] text-center text-sm"
                    color="white_A700"
                  >
                    Login
                  </Button>
                  <Button className="border border-pink-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[125px] shadow-bs text-center text-sm">
                    Get Started
                  </Button>
                </div>
              </header>
              <div className="bg-gray-900 flex flex-col items-start justify-end md:ml-[0] ml-[681px] mr-28 p-10 sm:px-5 rounded-lg w-[32%] md:w-full">
                <Text
                  className="mt-3 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterBold24"
                >
                  Get Started Now!
                </Text>
                <div className="flex flex-col gap-[7px] items-start justify-start mt-[29px] w-[99%] md:w-full">
                  <Text
                    className="text-[10px] text-white-A700"
                    size="txtInterSemiBold10"
                  >
                    Email Address
                  </Text>
                  <Input
                    name="groupTwo_One"
                    placeholder="Enter email address"
                    className="leading-[normal] p-0 placeholder:text-gray-700 text-[10px] text-left w-full"
                    wrapClassName="border border-gray-700 border-solid w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start mt-[17px] w-[99%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-[10px] text-white-A700"
                      size="txtInterSemiBold10"
                    >
                      Password
                    </Text>
                    <Input
                      name="groupThree"
                      placeholder="Enter password"
                      className="leading-[normal] p-0 placeholder:text-gray-700 text-[10px] text-left w-full"
                      wrapClassName="border border-gray-700 border-solid w-full"
                      type="password"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[18px] w-[99%] md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-[10px] text-white-A700"
                      size="txtInterSemiBold10"
                    >
                      Payment Options
                    </Text>
                    <div className="flex flex-row items-start justify-evenly w-full">
                      <div className="md:h-[43px] h-[52px] relative w-[23%]">
                        <div className="absolute bg-pink-800 border border-pink-800 border-solid bottom-[0] flex flex-col items-center justify-center left-[0] p-[15.98px] rounded w-[58px]">
                          <Text
                            className="text-[10.65px] text-white-A700 w-[25px]"
                            size="txtInterSemiBold1065"
                          >
                            Card
                          </Text>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col h-[15px] items-center justify-start right-[0] rounded-[7px] top-[0] w-[15px]">
                          <Img
                            className="h-[15px] rounded-tl-[7px] rounded-tr-[7px] w-[15px]"
                            src="images/img_vector_green_900.svg"
                            alt="vector_One"
                          />
                        </div>
                      </div>
                      <div className="md:h-[43px] h-[52px] relative w-[42%]">
                        <div className="absolute bg-pink-800 border border-pink-800 border-solid bottom-[0] flex flex-col items-center justify-center left-[0] p-[15.98px] rounded w-[110px]">
                          <Text
                            className="text-[10.65px] text-white-A700 w-[71px]"
                            size="txtInterSemiBold1065"
                          >
                            Bank Transfer
                          </Text>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col h-[15px] items-center justify-start right-[0] rounded-[7px] top-[0] w-[15px]">
                          <Img
                            className="h-[15px] rounded-tl-[7px] rounded-tr-[7px] w-[15px]"
                            src="images/img_vector_green_900.svg"
                            alt="vector_Two"
                          />
                        </div>
                      </div>
                      <Button
                        className="border border-pink-800 border-solid cursor-pointer font-semibold leading-[normal] mt-[7px] rounded text-[10.65px] text-center w-[89px]"
                        color="gray_100"
                        size="sm"
                      >
                        Bank Details
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[275px] mt-9 rounded text-[12.07px] text-center"
                  size="xs"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[9px] items-center justify-start mt-[89px] md:px-5">
            <Text
              className="sm:text-[23.31px] md:text-[25.31px] text-[27.31px] text-black-900 text-center"
              size="txtProximaNovaBold2731"
            >
              Why ALATPAY
            </Text>
            <Text
              className="text-[16.18px] text-black-900 text-center"
              size="txtInterRegular1618"
            >
              Key features you’d get from us.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[29px] items-center justify-start max-w-[1154px] mt-11 mx-auto md:px-5 w-full">
            <Img
              className="md:flex-1 h-[599px] sm:h-auto object-cover rounded-[10px] w-[42%] md:w-full"
              src="images/img_rectangle33.png"
              alt="rectangleThirtyThree"
            />
            <div className="flex md:flex-1 flex-col items-center justify-start w-[57%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[23px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-gray-100 flex flex-1 flex-col gap-[18.21px] items-start justify-center p-[18.21px] rounded-[10px] w-full">
                      <Text
                        className="text-black-900 text-lg w-[204px]"
                        size="txtInterBold18"
                      >
                        Unlimited Transactions
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        <>
                          Process unlimited number of transactions with no
                          hassle.
                          <br />
                          <br />
                          Sign up now to start receiving payments.
                        </>
                      </Text>
                      <Text
                        className="text-[16.18px] text-pink-800 w-[91px]"
                        size="txtInterSemiBold1618"
                      >
                        Get Started
                      </Text>
                    </div>
                    <div className="bg-gray-100 flex flex-1 flex-col gap-[18.21px] items-start justify-center p-[18.21px] rounded-[10px] w-full">
                      <Text
                        className="text-black-900 text-lg w-[227px]"
                        size="txtInterBold18"
                      >
                        Multiple Payment Options
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        <>
                          Receive payments via bank transfer, Debit Cards and
                          USSD.
                          <br />
                          <br />
                          Sign up now to start receiving payments.
                        </>
                      </Text>
                      <Text
                        className="text-[16.18px] text-pink-800 w-[91px]"
                        size="txtInterSemiBold1618"
                      >
                        Get Started
                      </Text>
                    </div>
                    <div className="bg-gray-100 flex flex-1 flex-col gap-[18.21px] items-start justify-center p-[18.21px] rounded-[10px] w-full">
                      <Text
                        className="text-black-900 text-lg w-36"
                        size="txtInterBold18"
                      >
                        Instant Payment
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        <>
                          Receive payments instantly after every transaction
                          <br />
                          <br />
                          Sign up now to start receiving payments.
                        </>
                      </Text>
                      <Text
                        className="text-[16.18px] text-pink-800 w-[91px]"
                        size="txtInterSemiBold1618"
                      >
                        Get Started
                      </Text>
                    </div>
                    <div className="bg-gray-100 flex flex-1 flex-col gap-[18.21px] items-start justify-center p-[18.21px] rounded-[10px] w-full">
                      <Text
                        className="text-black-900 text-lg w-[120px]"
                        size="txtInterBold18"
                      >
                        Easy to Setup
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        <>
                          Set up your business in less than 5 minutes
                          <br />
                          <br />
                          Sign up now to start receiving payments.
                        </>
                      </Text>
                      <Text
                        className="text-[16.18px] text-pink-800 w-[91px]"
                        size="txtInterSemiBold1618"
                      >
                        Get Started
                      </Text>
                    </div>
                    <div className="bg-gray-100 flex flex-1 flex-col gap-[18.21px] items-start justify-center p-[18.21px] rounded-[10px] w-full">
                      <Text
                        className="text-black-900 text-lg w-[170px]"
                        size="txtInterBold18"
                      >
                        No Hidden Charges
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        <>
                          Receive payments from anywhere in the world with no
                          hidden charges. <br />
                          <br />
                          Sign up now to start receiving payments.
                        </>
                      </Text>
                      <Text
                        className="text-[16.18px] text-pink-800 w-[91px]"
                        size="txtInterSemiBold1618"
                      >
                        Get Started
                      </Text>
                    </div>
                    <div className="bg-gray-100 flex flex-1 flex-col gap-[18.21px] items-start justify-center p-[18.21px] rounded-[10px] w-full">
                      <Text
                        className="text-black-900 text-lg w-[166px]"
                        size="txtInterBold18"
                      >
                        Developer Support
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14"
                      >
                        <>
                          Connect to our robust and well documented APIs <br />
                          <br />
                          Sign up now to start receiving payments.
                        </>
                      </Text>
                      <Text
                        className="text-[16.18px] text-pink-800 w-[91px]"
                        size="txtInterSemiBold1618"
                      >
                        Get Started
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[1338px] h-[862px] sm:h-[923px] max-w-[1259px] mt-[61px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col md:gap-10 gap-[656px] h-full inset-y-[0] justify-start my-auto right-[8%] w-[48%]">
              <Img
                className="h-[103px] md:ml-[0] ml-[356px]"
                src="images/img_group2.svg"
                alt="group419"
              />
              <Img
                className="h-[103px] mr-[356px]"
                src="images/img_group2.svg"
                alt="group420"
              />
            </div>
            <div className="absolute bg-gray-100 flex flex-col gap-11 h-max inset-[0] items-center justify-center m-auto p-[72px] md:px-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start">
                <Text
                  className="sm:text-[23.31px] md:text-[25.31px] text-[27.31px] text-black-900 text-center"
                  size="txtProximaNovaBold2731"
                >
                  How it Works
                </Text>
                <Text
                  className="text-[16.18px] text-black-900 text-center"
                  size="txtInterRegular1618"
                >
                  Here’s how it works
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-[22px] w-[93%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                    <div className="flex flex-col gap-[42px] justify-start w-[58%] md:w-full">
                      <div className="flex flex-row gap-[45px] items-end justify-start w-[56%] md:w-full">
                        <Text
                          className="mb-1 md:text-5xl text-[98px] text-black-900"
                          size="txtInterThin98"
                        >
                          1.
                        </Text>
                        <div className="flex flex-col gap-[27px] items-center justify-start mt-[23px]">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-pink-800"
                            size="txtInterLight28"
                          >
                            Create Account
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtInterRegular16"
                          >
                            <>
                              Create a WEMA/ALAT <br />
                              account for your business.
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[108px] w-[81%] md:w-full">
                        <Line className="bg-pink-800 h-[155px] w-px" />
                        <Img
                          className="h-[129px] mt-5"
                          src="images/img_vector3.svg"
                          alt="vectorThree"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[35px] justify-start ml-0.5 md:ml-[0] w-[42%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="md:text-5xl text-[98px] text-black-900"
                          size="txtInterThin98"
                        >
                          3.
                        </Text>
                        <div className="flex flex-col gap-[27px] items-center justify-start mt-6">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-pink-800 w-full"
                            size="txtInterLight28"
                          >
                            Access our API and integrate with your website/app
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtInterRegular16"
                          >
                            <>
                              Direct integration with ALATPay on <br />
                              your website/app
                            </>
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-pink-800 h-[102px] md:ml-[0] ml-[135px] mr-[275px] w-px" />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[22px] items-start justify-between w-2/5 md:w-full">
                      <Text
                        className="md:text-5xl text-[98px] text-black-900"
                        size="txtInterThin98"
                      >
                        2.
                      </Text>
                      <div className="flex flex-col gap-[27px] items-start justify-start sm:mt-0 mt-6">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-pink-800 w-4/5 sm:w-full"
                          size="txtInterLight28"
                        >
                          Sign up using your account number
                        </Text>
                        <Text
                          className="text-base text-black-900 w-full"
                          size="txtInterRegular16"
                        >
                          Register your business on ALAT pay with your Wema/ALAT
                          account number.
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[59px] items-start justify-between w-[45%] md:w-full">
                      <Text
                        className="md:text-5xl text-[98px] text-black-900"
                        size="txtInterThin98"
                      >
                        4.
                      </Text>
                      <div className="flex flex-col gap-[27px] items-start justify-start sm:mt-0 mt-[26px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-pink-800"
                          size="txtInterLight28"
                        >
                          Start receiving payments
                        </Text>
                        <Text
                          className="text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          Start receving payments instantly
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1066px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[27px] items-start justify-start">
              <Text
                className="leading-[51.00px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                size="txtInterBlack45"
              >
                <>
                  Start receiving
                  <br />
                  payments instantly!
                </>
              </Text>
              <Text
                className="text-base text-black-900"
                size="txtInterRegular16"
              >
                <>
                  Create an account and start receiving payments via debit{" "}
                  <br />
                  and credit cards, USSD and direct bank payments
                </>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col font-proximanova items-center justify-start w-[21%] md:w-full">
              <Button className="cursor-pointer font-bold leading-[normal] min-w-[214px] text-base text-center">
                Get Started
              </Button>
            </div>
          </div>
          <footer className="bg-black-900 flex items-center justify-center mt-[90px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-32 items-center justify-center mb-[130px] ml-[145px] mr-[231px] mt-[91px] w-[74%]">
              <Img
                className="h-[62px]"
                src="images/img_group403.svg"
                alt="group403"
              />
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:mt-0 mt-2 w-4/5 md:w-full">
                <div className="flex flex-col gap-[35px] items-center justify-start w-[10%] sm:w-full">
                  <Text
                    className="text-[14.16px] text-white-A700"
                    size="txtInterSemiBold1416"
                  >
                    Quick Links
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">How it Works</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Why ALATPay</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[18px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Developer </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[17px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Pricing</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[34px] items-start justify-start w-[10%] sm:w-full">
                  <Text
                    className="text-[14.16px] text-white-A700"
                    size="txtInterSemiBold1416"
                  >
                    Developer
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">How it Works</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Why ALATPay</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[18px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Developer </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[17px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Pricing</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[34px] items-start justify-start w-[10%] sm:w-full">
                  <Text
                    className="text-[14.16px] text-white-A700"
                    size="txtInterSemiBold1416"
                  >
                    Legal
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">How it Works</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Why ALATPay</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[18px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Developer </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[17px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Pricing</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[34px] items-start justify-start w-[10%] sm:w-full">
                  <Text
                    className="text-[14.16px] text-white-A700"
                    size="txtInterSemiBold1416"
                  >
                    Our App
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">How it Works</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Why ALATPay</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[18px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Developer </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[17px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Pricing</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[35px] items-start justify-start w-[10%] sm:w-full">
                  <Text
                    className="text-[14.16px] text-white-A700"
                    size="txtInterSemiBold1416"
                  >
                    Connect
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">How it Works</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Why ALATPay</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[18px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Developer </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[17px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] text-[12.14px] text-white-A700"
                      >
                        <Text size="txtInterRegular1214">Pricing</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
