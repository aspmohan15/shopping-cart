import React from "react";
import { Link } from "react-router-dom";

const SmallMenu = ({ item }) => {
  return (
    <>
      <Link to={item.route}>
        <div className="relative cursor-pointer rounded-md h-[12rem] hover:scale-110 transition transform duration-500 ease-in bg group hover:shadow-xl hover:shadow-gray-300">
          <img src={item.image} alt="" className="w-full h-full object-cover" />
          <div className="border-2 p-2 opacity-60 rounded-xl absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-center bg-zinc-500 group-hover:scale-75 transition transform duration-500 ease-in">
            <h1 className="text-md mb-2 font-bold text-gray-800">
              {item.title}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SmallMenu;
