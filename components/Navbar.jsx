import DropDownNav from "./DropDownNav";
import ModeButton from "./ModeButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-full">
      <div className="rounded-full h-[50px] w-[55px]">
        <img
          src="headshot.jpg"
          alt="headshot"
          className="contain rounded-full"
        />
      </div>
      <div className="max-sm:hidden w-full flex flex-row justify-center">
        <ul className="list-none flex justify-between w-[60%] font-semibold ring rounded-full py-2 px-8 dark:bg-zinc-800/90 dark:ring-white/10">
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Blog</li>
          <li>Inspiration</li>
        </ul>
      </div>
      <div className="h-[full] flex flex-row justify-around max-sm:w-36 sm:w-16">
        <DropDownNav />
        <ModeButton />
      </div>
    </nav>
  );
};

export default Navbar;
