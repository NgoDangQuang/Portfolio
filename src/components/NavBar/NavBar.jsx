import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiMoon, HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode";
import SocialMedia from "../SocialMedia";
const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const goToSection = (data) => {
    const element = document.getElementById(data);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    if (openMenu) {
      setOpenMenu(!openMenu);
    }
  };

  return (
    <nav className="flex items-center dark:bg-green-black-500 px-4 py-4 dark:text-white text-black bg-white laptop:px-16 fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center">
        <div className="text-xl mr-4 text-wheat-600">{"<DangQuang/>"}</div>
        <div
          className="border-2 border-[#EFD871] border-solid flex relative rounded-full gap-1 items-center p-[1px]"
          onClick={() => toggleDarkMode(!isDarkMode)}
        >
          <HiMoon size={"18px"} color="#E9C46A" className="cursor-pointer" />
          <BsSunFill size={"18px"} color="#E9C46A" className="cursor-pointer" />
          {isDarkMode ? (
            <div className="w-[18px] h-[18px] rounded-full bg-gray-300 absolute right-0 mr-[1px] my-[1px]"></div>
          ) : (
            <div className="w-[18px] h-[18px] rounded-full bg-gray-600 absolute left-0 ml-[1px] my-[1px]"></div>
          )}
        </div>
      </div>
      <ul className=" laptop:gap-2 ml-auto text-16 font-semibold flex">
        {!openMenu && isMobile ? (
          <HiOutlineMenu
            size={"30px"}
            className="cursor-pointer text-wheat-600"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("home")}
            >
              <span className="text-wheat-600">01.</span>Home
            </li>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("about-me")}
            >
              <span className="text-wheat-600">02.</span>About
            </li>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("skills")}
            >
              <span className="text-wheat-600">03.</span>Skills
            </li>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("portfolio")}
            >
              <span className="text-wheat-600">04.</span>Portfolio
            </li>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("contact")}
            >
              <span className="text-wheat-600">05.</span>Contact
            </li>
          </>
        )}

        {openMenu && (
          <div className="absolute top-0 right-0 bottom-0 dark:bg-green-black-500 dark:text-wheat-400 bg-white text-center text-13 text-gray-600 w-[100%] py-8 z-50 h-screen flex flex-col justify-center">
            <MdOutlineClose
              size={"24px"}
              className="cursor-pointer absolute top-4 right-4"
              onClick={handleMenu}
            />
            <li
              className="menu-items-hover"
              onClick={() => goToSection("home")}
            >
              <span className="text-wheat-600">01.</span>Home
            </li>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("about-me")}
            >
              <span className="text-wheat-600">02.</span>About
            </li>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("skills")}
            >
              <span className="text-wheat-600">03.</span>Skills
            </li>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("portfolio")}
            >
              <span className="text-wheat-600">04.</span>Portfolio
            </li>
            <li
              className="menu-items-hover"
              onClick={() => goToSection("contact")}
            >
              <span className="text-wheat-600">05.</span>Contact
            </li>

            <SocialMedia />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
