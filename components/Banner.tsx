import React from "react";
import Image from "next/image";

const Banner = () => {
    return (
    <div className="container border-b-[1px] border-b-zinc-600">
    <Image
            className="banner absolute w-auto h-auto"
            width={1700}
            src={require("/Images/Banner1.jpg")}
            alt="starIcon"
          />
    <div>
    <div className="flex flex-col gap-16 items-center py-28">
      <Image
            className="star w-auto h-auto animate-spin-slow"
            width={350}
            src={require("/Images/starIcon.png")}
            alt="starIcon"
          />
    </div>
    <div className="flex flex-col gap-16 items-center py-28">
    <Image
        className="logo w-auto h-auto text-xl"
        src={require("/Images/Logo.jpeg")}
        width={100}
        height={500}
        alt="Picture of the author"
      />
    <p className="welcome text-3xl">Welcome!</p>
    </div>
    </div> 
    </div>
    )
};

export default Banner;