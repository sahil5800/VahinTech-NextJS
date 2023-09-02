import React from "react";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return <div className="w-full h-20 border-b-[1px] border-b-zinc-600 flex items-center mdl:justify-between">
        <div className="hidden lgl:flex items-center gap-5">
        <div>
        <Image
        className="w-auto h-auto text-xl"
        src={require("/Images/Logo.jpeg")}
        width={90}
        height={500}
        alt="Picture of the author"
      />
        </div>
        <div className="w-5  h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group">
        <span className="text-xl font-bodyFont font-bold text-yellow-500">Vahin Technologies</span>
        </div>
        </div>
        <div className="hidden lgl:flex items-center gap-20">
        <Link href="/">
        <div className="w-12 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group">
        <span className="absolute left-5 text-yellow-100 group-hover:text-yellow-600">Home</span>
        </div>
        </Link>
        <div className="w-12 h-6 cursor-pointer font-semibold text-yellow-600 uppercase relative group">
        <span className="text-yellow-100 group-hover:text-yellow-600">pricing</span>
        </div>
        <div className="w-12 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group">
        <span className="text-yellow-100 group-hover:text-yellow-600">Services</span>
        </div>
        <div className="w-12  h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group">
        <span className="text-yellow-100 group-hover:text-yellow-600">About</span>
        </div>
        <Link href="/Login">
        <div className="w-12  h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group">
            <FiUser className="text-xl text-yellow-500 group-hover:text-yellow-600"/>
        </div>
        </Link>
        </div>
    </div>
};

export default Header