import React from "react";
import mockup from "../images/screen-mockups.svg";
import community from  "../images/icon-communities.svg"
import message from "../images/icon-messages.svg"


const Hero = () => {
  return (
    <section className="px-[30px] md:px[0px]">
      <div className="new-container flex flex-col gap-7 text-center  md:text-start items-center mt-[100px] md:mt-[230px]">
        <h1 className="text-[28px] md:text-[48px] font-bold text-veryDarkCyan">
          Build The Community Your Fans Will Love
        </h1>
        <p className="md:w-[600px] text-center text-[14px]  md:text-[20px]  text-veryDarkCyan ">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <button className="btn">Get Started For Free</button>

        <div className="mt-[110px]">
          <img className="" src={mockup} alt="mockup" />
        </div>
        <div className="   h-[400px] flex flex-col justify-around md:justify-around md:w-full md:px-[80px] md:flex-row  md:gap-0 mt-[100px] md:mt-[60px]">
          <div className="">
            <img className="md:w-[50px] md:mt-[10px] md:ms-[15px]" src={community} alt="comunity" />
            <h1 className="text-[50px] md:text-[100px] font-bold text-center font-sans">
              1.4k+
            </h1>
            <p className="  text-gray-600  text-[14px]  text-center">Communities formed</p>
          </div>
          <div className="" >
            <img className="md:w-[50px] md:mt-[10px] md:ms-[15px]" src={message} alt="message" />
            <h1 className="text-[50px] md:text-[100px] font-bold text-center font-sans">
              2.7m+
            </h1>
            <p className="text-[14px]  text-center  text-gray-600 ">Messages Sent</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
