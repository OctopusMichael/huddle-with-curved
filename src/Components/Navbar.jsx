import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <section className="">
      <nav className="new-container flex flex-row justify-between items-center pt-[40px] px-[30px]  md:pt-[80px] md:px-[80px]">
        <div>
          <a href="Logo">
            {" "}
            <img  src={logo} alt="logo" className="w-[120px] md:w-[240px] " />
          </a>
        </div>
        <div>
          <button className=" btn-nav ">Try It Free</button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
