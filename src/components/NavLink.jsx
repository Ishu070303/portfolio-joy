import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-1 ${pathName === link.link && "bg-black text-white"}`} href={link.link}>{link.title}</Link>
  )
}

export default NavLink;