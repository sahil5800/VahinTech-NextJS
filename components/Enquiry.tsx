import React from "react";
import Image from "next/image";
import { MdConnectWithoutContact } from "react-icons/md";
import Link from "next/link";
const Enquiry = () => {
    return(
      <div>
        <div className="w-full flex items-center justify-center group">
        <div className="py-20 w-[500px] flex items-center justify-center relative">
        <Image
            className="absolute -left-20 top-14 group-hover:-left-[280px] group-hover:rotate-25 w-96 duration-500"
            src={require("/Images/card2.jpg")}
            alt="enquiry1"
          />
        <Image className="z-10 w-96" src={require("/Images/card.jpg")} alt="enquiry2" />
          <Image
            className="absolute -right-20 group-hover:-right-[294px] top-14 group-hover:rotate-13 w-96 duration-500"
            src={require("/Images/card3.jpg")}
            alt="enquiry3"
          />
        </div>
        </div>
        <div className="text-4xl font-medium text-yellow-100 flex flex-col items-center gap-2">
        <h1>"Your Security Is Our Highest Priority"</h1> 
        <Link href="/Login">
        <button className="w-52 h-12 font-medium text-xl uppercase bg-transparent flex items-center justify-center gap-1 hover:bg-yellow-600 hover:text-black mt-6 border rounded-full group">
          Contact
          <div className="w-5 h-5 relative overflow-hidden">
            <MdConnectWithoutContact className="text-2xl -mt-[1px] absolute top-0 -translate-x-5 -translate-y-5 text-black group-hover:translate-x-0 group-hover:translate-y-0 duration-300" />
            <MdConnectWithoutContact className="text-2xl -mt-[1px] absolute top-0 translate-x-0 translate-y-0 text-yellow-100 group-hover:translate-x-5 group-hover:translate-y-5 duration-300" />
          </div>
        </button>
        </Link>
      </div>
      </div>
    )
}

export default Enquiry
