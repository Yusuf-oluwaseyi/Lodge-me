
import logo from "../assets/mainlogo.png";
import logoText from "../assets/logoText.png";
import MobileNav from "./MobileNav";
import { MenuIcon } from "@heroicons/react/solid";

const Navbar = () => {
  

  return (
    <div className=" md:px-24 px-0">
      <div className="md:flex justify-between items-center hidden pt-10">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="" className="w-32 h-auto" />
          {/* <img src={logoText} alt="" /> */}
        </div>
        <div className="">
          <ul className="flex gap-16">
            <li className="cursor-pointer hover:text-[#FAA530]">Home</li>
            <li className="cursor-pointer hover:text-[#FAA530]">What we do</li>
            <li className="cursor-pointer hover:text-[#FAA530]">
              Our Products
            </li>
            <li className="cursor-pointer hover:text-[#FAA530]">
              What they say
            </li>
            <li className="cursor-pointer hover:text-[#FAA530]">Contact Us</li>
          </ul>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
