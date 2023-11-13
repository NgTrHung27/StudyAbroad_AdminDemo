"use client";

import React from "react";
import Container from "../container";
import LogoHome from "./logo_Home";
import NavItemHome from "./nav-item_Home";
import NavBtHome from "./nav_button_Home";
import { School, User } from "@prisma/client";
import { SafeUser } from "../../types";

interface Props {
  schools: School[];
  currentUser?: SafeUser | null;
}

const Navbar = ({ schools, currentUser }: Props) => {
  return (
    <div className="fixed w-full inset-y-0 h-[72px] z-50">
      <div className="bg-[#7D1F1F] h-full ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-1 md:gap-3 relative  ">
            <LogoHome />
            <NavItemHome schools={schools} />
            <NavBtHome currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
