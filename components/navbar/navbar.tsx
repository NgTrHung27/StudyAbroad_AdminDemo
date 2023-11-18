"use client";
import React from "react";
import Container from "../container";
import Logo from "./logo";
import NavItem from "./nav-item";
import Search from "./search";
import UserMenu from "./user-menu";
import Link from "next/link";
import { School } from "@prisma/client";

interface Props {
  school?: School;
}
const NavbarTruong = ({ school }: Props) => {
  return (
    <div className="fixed w-full inset-y-0 h-[72px] z-50 ">
      <div className="h-full bg-[#7D1F1F]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-2 relative ">
            <Link href={"/"}>
              <Logo />
            </Link>
            <div className="">
              <NavItem school={school} />
            </div>
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavbarTruong;
