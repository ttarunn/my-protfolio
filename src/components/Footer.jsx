import React from "react";
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const f_class = "w-6 h-6 cursor-pointer hover:text-gray-400";
  return (
    <>
      <div className="flex justify-center">
        {
          <AiFillGithub
            color="gradient"
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
          className="w-6 h-5 cursor-pointer hover:text-gray-400"
          onClick={() =>
            window.open("https://www.facebook.com/ittarunn/", "_blank")
          }
        />
      </div>
      <div className="text-secondary text-center p-5">
        <h2>© Copyright 2023. Made with ❤️</h2>
        <h2>Developed By TARUN</h2>
      </div>
    </>
  );
};

export default Footer;
