"use client";

import React from "react";
import Container from "../container";
import Logo from "./logo";
import NavItem from "./nav-item";
import Search from "./search";
import UserMenu from "./user-menu";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 shadow-sm">
      <div className="py-4 border-b-[1px] bg-[#7D1F1F]">
        <Container>
          <div className="flex flex-row items-center justify-center gap-3 ">
            <Logo />
            <NavItem />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
