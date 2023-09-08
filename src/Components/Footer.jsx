import React, { useState } from "react";
import logoInvertido from "../images/logoInvert.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import footerMobile from "../images/bg-footer-top-mobile.svg"
import footerDesktop from "../images/bg-footer-top-desktop.svg"

const Footer = () => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const [value, setValue] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail.test(value)) {
      setErr(false);
      console.log("enviado");
      setValue("");
    } else {
      setErr(true);
      console.error("error");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section className="mt-[42px]">
      <picture>
        <source media="(max-width: 767px)" srcSet={footerMobile} />
        <source media="(min-width: 768px)" srcSet={footerDesktop} />
        <img className="w-full " src={footerMobile} alt="FooterBackground" />
      </picture>
    <footer className="  bg-veryDarkCyan h-auto ">
      <div className=" new-container md:px-[80px] py-[100px] md:py-[0px] md:pt-[130px] md:pb-[200px]   md:mt-[0px] px-[30px] justify-between  text-white flex flex-col md:flex-row   ">
        <div className=" md:w-[500px] md:ps-[0px]  pt-[50px] md:pt-[0px] flex flex-col  gap-[20px]  md:order-2 ">
          <h1 className="text-[28px] font-bold">Newsletter</h1>
          <p className="md:text-[14px] md:pe-[200px]">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row  items-center gap-4 md:gap-[40px] mt-[20px] relative"
          >
            <input
              value={value}
              onChange={handleChange}
              className="text-black ps-5 rounded-lg h-[50px] w-full"
              type="text"
            />
            {err && (
              <span className="text-red-600 absolute -bottom-[-20px] left-[0px] md:-bottom-[40px] ">Check your email please</span>
            )}
            <button className="btn-footer  md:w-[300px] self-end">
              Subscribe
            </button>
          </form>
        </div>
        <div className="  md:order-1 mt-[50px] md:mt-[0px] flex flex-col gap-6 md:gap-[30px] md:ps-[40px] md:w-[350px]">
          <a href="#">
            <img src={logoInvertido} alt="logo-footer" />
          </a>
          <p className="md:text-[14px] md:pe-[0px] ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="flex flex-row gap-5 items-center ">
            <img src={phone} alt="phone" />
            <p> Phone: +1-543-123-4567</p>
          </div>
          <div className="flex flex-row gap-5  items-center">
            <img src={email} alt="email" />
            <p>example@huddle.com</p>
          </div>
          <ul className="flex flex-row gap-3 text-[24px] md:text-[35px] md:gap-5 mt-[25px] md:mt-[30px] ">
            <li>
              <a className="hover:text-blue-400" href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="#">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
