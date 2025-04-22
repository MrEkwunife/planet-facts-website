import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-between flex-wrap relative py-4 text-2xl sm:flex-col sm:text-center lg:flex-row lg:items-center px-4 sm:px-12 lg:text-3xl">
      <Logo className="sm:mb-8 lg:mb-0 font-[antonio]" />
      <Nav />
    </header>
  );
};

export default Header;
