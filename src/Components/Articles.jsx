import React from "react";
import bgTopMobile from "../images/bg-section-top-mobile-1.svg";
import bgTopDesktop from "../images/bg-section-top-desktop-1.svg";
import bgBottomMobile from "../images/bg-section-bottom-mobile-1.svg";
import bgBottomDesktop from "../images/bg-section-bottom-desktop-1.svg";
import together from "../images/illustration-grow-together.svg";
import conversation from "../images/illustration-flowing-conversation.svg";
import bgTop2Mobile from "../images/bg-section-top-mobile-2.svg";
import bgTop2Desktop from "../images/bg-section-top-desktop-2.svg";
import bgBottom2Mobile from "../images/bg-section-bottom-mobile-2.svg";
import bgBottom2Desktop from "../images/bg-section-bottom-desktop-2.svg";
import users from "../images/illustration-your-users.svg";

const Articles = () => {
  return (
    <section className="  flex flex-col text-center md:text-start md:gap-[0px] mt-[50px] md:mt-[0px]">
      <picture>
        <source srcSet={bgTopMobile} media="(max-width: 767px)" />
        <source srcSet={bgTopDesktop} media="(min-width: 768px)" />
        <img className="w-full" src={bgTopMobile} alt="bgImg" />
      </picture>
      <div className="bg-veryPaleBlue">
        <article className=" articles ">
          <img
            className="w-[250px] md:w-[500px] mx-auto"
            src={together}
            alt="together"
          />
          <div className="article-box">
            <h1 className="articles-h1">Grow Together</h1>
            <p className=" articles-p">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </article>
      </div>
      <picture>
        <source srcSet={bgBottomMobile} media="(max-width: 767px)" />
        <source srcSet={bgBottomDesktop} media="(min-width: 768px)" />
        <img className="w-full" src={bgBottomMobile} alt="bgImg" />
      </picture>

      <article className="articles  my-[50px] md:mt-[300px] md:mb-[120px]">
        <img
          className="w-[250px] md:w-[500px]  mx-auto md:order-2"
          src={conversation}
          alt="conversation"
        />
        <div className="article-box">
          <h1 className="articles-h1"> Flowing Conversations</h1>
          <p className="articles-p">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </article>
      <picture>
        <source srcSet={bgTop2Mobile} media="(max-width: 767px)" />
        <source srcSet={bgTop2Desktop} media="(min-width: 768px)" />
        <img className="w-full" src={bgTop2Mobile} alt="bgImg2" />
      </picture>
      <div className="bg-veryPaleBlue">
        <article className="articles ">
          <img
            className="w-[250px] md:w-[500px] mx-auto"
            src={users}
            alt="users"
          />
          <div className="article-box">
            <h1 className="articles-h1">Your Users</h1>
            <p className="articles-p">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </article>
      </div>
      <picture>
        <source srcSet={bgBottom2Mobile} media="(max-width: 767px)" />
        <source srcSet={bgBottom2Desktop} media="(min-width: 768px)" />
        <img className="w-full" src={bgBottom2Mobile} alt="bgImg2" />
      </picture>

      <div className="my-[100px] md:mt-[280px] text-center flex flex-col  gap-10 items-center md:mb-[135px] justify-center md:px-[80px]">
        <h1 className="text-[28px] md:text-[40px] font-bold">
          {" "}
          Ready To Build Your Community?
        </h1>
        <button className="btn ">Get Started For Free</button>
      </div>
    </section>
  );
};

export default Articles;
