import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 w-full h-20 shadow-md z-[100] bg-gradient-to-b from-sky-950 to-sky-700 text-white">
        <div className="flex justify-between  items-center overflow-hidden w-full h-full px-4  2xl:px-16 py-10">
          <Link to="/">
            <img
              className="w-16 h-16 rounded-full"
              src="/ualogo.jpg"
              alt="Logo"
            />

           
          </Link>
          <div className="hidden md:flex items-center">
            <ul className="uppercase flex">
              <li className="border-b border-transparent text-sm uppercase hover:border-b hover:border-gray">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <Link to={"/experience"}>Experience</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <button className="bg-white rounded-2xl text-black w-16 h-8"><Link to={"/skills"}>Skills</Link></button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-black/70 z-[101] ${
          nav ? "" : "hidden"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-sky-900 via-black-transparent to-transparent p-10 ease-in duration-500 ${
            nav ? "" : "left-[-100%]"
          }`}
        >
          <div className="left-0 overflow-hidden">
            <Link to="/">
              <img
                className="w-12 h-12"
                src="/name.png"
                alt="Logo"
              />
             
            </Link>
          
          </div>
          <div className="py-4 pl-4">
            <ul className="uppercase">
              <li className="py-4">
                <Link to="/">Home</Link>
              </li>
              <li className="py-4">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="py-4">
                <Link to={"/experience"}>Experience</Link>
              </li>
              <li className="py-4">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="py-4">
                <Link to={"/skills"}>Skills</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden fixed top-4 right-4 z-[102]">
        <div
          onClick={handleNav}
          className="p-2 rounded-full bg-white shadow-lg cursor-pointer"
        >
          {nav ? <AiOutlineClose size="24" /> : <AiOutlineMenu size="24" />}
        </div>
      </div>
    </>
  );
}
