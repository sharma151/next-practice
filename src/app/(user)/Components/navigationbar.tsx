import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className=" flex justify-between ">
          <div className="px-2 border  border-white items-center rounded-md pb-1">
            {" "}
            <Link href="/" passHref>
              <p className="text-gray-300 hover:text-white">LOGO</p>
            </Link>
          </div>
          <div className=" flex  items-center space-x-4">
            <Link href="/" passHref>
              <p className="text-gray-300 hover:text-white">Home</p>
            </Link>
            <Link href="/teams" passHref>
              <p className="text-gray-300 hover:text-white">Teams</p>
            </Link>
            <Link href="/about" passHref>
              <p className="text-gray-300 hover:text-white">About</p>
            </Link>
            <Link href="/contact" passHref>
              <p className="text-gray-300 hover:text-white">Contact</p>
            </Link>
            <Link href="/clientcomp" passHref>
              <p className="text-gray-300 hover:text-white">Clientcomp</p>
            </Link>
            <Link href="/servercomp" passHref>
              <p className="text-gray-300 hover:text-white">servercomp</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
