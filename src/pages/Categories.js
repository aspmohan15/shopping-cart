import React from "react";
import LargeMenu from "../components/Menu/LargeMenu";
import SmallMenu from "../components/Menu/SmallMenu";

import { LargeMenuItems, SmallMenuItems } from "../data";

const Categories = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="  grid sm:grid-cols-1 gap-10 p-20 ">
            {SmallMenuItems.map((item) => {
              return <SmallMenu item={item} key={item.id} />;
            })}
          </div>
          <div className="grid sm:grid-cols-2 gap-5 p-2 ">
            {LargeMenuItems.map((item) => {
              return <LargeMenu item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
