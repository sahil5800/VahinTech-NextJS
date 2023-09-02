import React from "react";

const page = () => {
    return (
      <div className="w-full pt-20 pb-10">
        <h1 className="text-4xl mdl:text-7xl text-yellow-600 font-normal">Lets Connect!</h1>
        <div className="border-[1px] border-zinc-300 p-4 mdl:p-10 mt-10 flex flex-col gap-8 mdl:gap-12">
          <label>Your Email :</label>
          <input
            type="text"
            className="w-full border-b-[1px] border-b-zinc-400 bg-transparent text-base outline-none px-4"
      
          />
          <label>Contact Number :</label>
          <input
            type="text"
            className="w-full border-b-[1px] border-b-zinc-400 bg-transparent text-base outline-none px-4"
          />
          <label>Reason for Approach :</label>
          <input
            type="text"
            className="w-full border-b-[1px] border-b-zinc-400 bg-transparent text-base outline-none px-4"
          />
          <button className="w-46 h-12 rounded-full border text-lg uppercase font-medium hover:bg-yellow-600 hover:text-black duration-300">
            Send Request
          </button>
        </div>
      </div>
    );
  }
  
  export default page