
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBg from "@/components/mainHeader/mainHeaderBg";
import NavLink from "../NavLink/NavLink";
const MainHeader = () => {

  return (
    <>
      <MainHeaderBg />
      <header className="flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-[10%] relative z-10">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 no-underline text-[#ddd6cb] font-bold tracking-[0.15rem] text-2xl drop-shadow-lg uppercase font-[Montserrat]"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className="w-20 h-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
            priority
          />
          NextLevel Food
        </Link>

        <nav className="mt-4 md:mt-0">
          <ul className="flex gap-6 list-none p-0 m-0 text-xl">
            <li>
              <NavLink
                href="/meals"
              >
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/community"
              >
                Foodies Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
