import Image from "next/image";

const Card = ({ image, title, btnText }: any) => {
  return (
    <div className="w-full h-[420px] group">
      <div className="w-full h-3/4 overflow-hidden">
        <Image
          className="w-full h-full group-hover:scale-110 duration-300"
          src={image}
          alt="blogImage"
        />
      </div>
      <div className="w-full h-1/4 flex flex-col gap-3 mt-3">
        <h3 className="text-lg font-medium text-yellow-100 group-hover:text-yellow-600 duration-200">
          {title}
        </h3>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <button className="text-base border-[1px] border-zinc-600 px-2 py-[1px] italic hover:border-yellow-600 duration-300">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;