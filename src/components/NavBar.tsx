import MaxWidthWrapper from "./MaxWidthWrapper";

const NavBar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div></div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
