import { FaTrademark } from "react-icons/fa";
import { CgCopyright } from "react-icons/cg";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div>
      {/* ================= Footer Top Start here ================== */}
      <div className="w-full py-16 grid grid-cols-1 md:grid-cols-3 lgl:grid-cols-4 xl:grid-cols-6 gap-16 border-b-[1px] border-b-zinc-800">
        {/* Col one */}
        <div className="col-span-2 flex flex-col">
          <p className="font-bold text-yellow-700 text-3xl tracking-wider uppercase mb-4 relative">
            Vahin Technologies
            <span className="absolute top-1 font-normal text-xs text-center">
              <FaTrademark />
            </span>
          </p>
          <p>
          Established in 2022, Vahin Technologies stands out as a prominent provider of computer peripherals
          and Survilance Accessories. At Vahin, customer satisfaction reigns supreme. Not only do we prioritize
          delivering exceptional products, but we also place great emphasis on providing excellent customer service. 
          Our dedicated support team <span className="text-blue-500 hover:text-yellow-600 cursor-pointer">Read More</span>
          </p>
        </div>

        <FooterList
          title="Products"
          list={["BNC & DC", "Coaxial cables", "Networking Tools", "Fibers", "Networking Cables", "Survillance Related accessories"]}
        />
        <FooterList
          title="Features"
          list={["Pricing", "Services", "Contact"]}
        />
        <FooterList
          title="Other Services"
          list={[
            "CCtv Installation",
            "Laptop Accessories",
            "Desktop Accessories",
            "HP Authorised Service Center",
            "Survilance Products",
          ]}
        />
      </div>
      <div className="flex justify-between items-center py-6">
        <div>
          <p className="text-xl font-medium text-yellow-600">Social Media</p>
          <div className="flex items-center gap-4 mt-4">
            <a href = "mailto: rajsahil1228@gmail.com">
            <MdEmail className="text-lg text-gray-200 hover:text-yellow-600 cursor-pointer" />
            </a>
            <BsFacebook className="text-lg text-gray-200 hover:text-yellow-600 cursor-pointer" />
            <BsInstagram className="text-lg text-gray-200 hover:text-yellow-600 cursor-pointer" />
            <AiOutlineLinkedin className="text-lg text-gray-200 hover:text-yellow-600 cursor-pointer" />
            <BsYoutube className="text-lg text-gray-200 hover:text-yellow-600 cursor-pointer" />
          </div>
        </div>
        <p className="hidden mdl:flex items-center gap-.5 text-sm text-yellow-600">
          <CgCopyright /> VahinTech_2023 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
