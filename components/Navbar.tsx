import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/page";
import Button from "./shared/Button";

function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-3 py-5">
      <Link href="/">
        <Image src="./hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 rext-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold duration-300 ease-in-out"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type={"button"}
          icon={"./user.svg"}
          title="Log In"
          variant={"btn_dark_green"}
        />
      </div>
      <Image src="menu.svg" alt="menu button" height={32} width={32} className="inline-block lg:hidden cursor-pointer" />
    </nav>
  );
}

export default Navbar;
