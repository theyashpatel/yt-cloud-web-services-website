import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitch,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import GreenBtn from "./GreenBtn";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "services",
    },
    {
      id: 3,
      link: "about",
    },
    {
      id: 4,
      link: "support",
    },
    {
      id: 5,
      link: "pricing",
    },
  ];

  return (
    <div className="w-screen h-20 z-20 fixed bg-gray-900 text-white">
      <div className="px-3 flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">onnn</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize p-4 cursor-pointer hover:text-lightColor duration-200"
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex mr-4">
          <GreenBtn title="sign in" className="px-9 py-3" />
        </div>

        {/* burger icon  */}
        <div className="md:hidden">
          <div onClick={() => setNavigation(true)} className="cursor-pointer">
            <FaBars size={30} />
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2
                onClick={() => setNavigation(false)}
                className="text-3xl font-bold capitalize cursor-pointer"
              >
                onnn
              </h2>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-12">
            <GreenBtn className="px-9 py-3 capitalize" title="sign in" />

            <ul className="capitalize">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className=" py-4 text-2xl tracking-wider cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
                <FaFacebook size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
                <FaLinkedinIn size={25} />
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
                <FaTwitch size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
