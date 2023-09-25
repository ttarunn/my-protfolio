import React from "react";
import { github } from "../assets";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const f_class = "w-6 h-6 cursor-pointer";
  return (
    <>
      <div className="flex justify-center">
        {
          <img
            src={github}
            alt="github"
            className={f_class}
            onClick={() => window.open("https://github.com/ttarunn", "_blank")}
          />
        }

        <AiFillInstagram
          color="gradient"
          className={f_class}
          onClick={() =>
            window.open("https://www.instagram.com/ittarunn/", "_blank")
          }
        />
        <AiFillTwitterCircle
          color="gradient"
          className={f_class}
          onClick={() => window.open("https://twitter.com/ittarunn", "_blank")}
        />
        <BsFacebook
          color="gradient"
          className="w-6 h-5 cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/ittarunn/", "_blank")
          }
        />
      </div>
      <div className="text-secondary text-center p-5">
        © Copyright 2023. Developed by TARUN
      </div>
    </>
  );
};

export default Footer;
