import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const DropDownNav = () => {
  return (
    <div>
      <button className="rounded-full p-4 shadow-lg  w-16 flex justify-center items-center backdrop-blur ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark dark:text-zinc-50 sm:hidden">
        <RxHamburgerMenu />
      </button>
    </div>
  );
};

export default DropDownNav;
