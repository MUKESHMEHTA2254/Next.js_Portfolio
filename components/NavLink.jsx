import Link from "next/link";

const NavLink = ({href,title}) => {
  return (
    <div>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] bg-transparent sm:text-xl rounded md:p-0  hover:text-white hover:shadow-xl hover:shadow-purple-500/50"
      >
        {title}
      </Link>
    </div>
  );
}
export default NavLink