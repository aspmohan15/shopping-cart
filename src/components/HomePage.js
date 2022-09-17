import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl p-5 ml-10 lg:p-0 lg:ml-0 lg:text-5xl bg-gradient-to-r from-lime-800 to-lime-500 bg-clip-text text-transparent font-bold tracking-widest">
          Experience the lifestyle...
        </h1>
        <p className="text-gray-700 text-sm lg:text-lg mt-5">
          Get better looking.
        </p>
        <Link to={"/explore"}>
          <button className="mt-5 text-lime-700 border-2 border-lime-700 rounded-lg hover:bg-lime-700 hover:text-white font-bold transition duration-700 ease-out p-3">
            start your shopping journey
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
