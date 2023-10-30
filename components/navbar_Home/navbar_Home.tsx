"use client";

import React from "react";
import Container from "../container";
import LogoHome from "./logo_Home";
import NavItemHome from "./nav-item_Home";
import NavBtHome from "./nav_button_Home";
import { School } from "@prisma/client";

interface Props {
  schools: School[];
}

const Navbar = ({ schools }: Props) => {
  return (
    <div className="">
      <div className="bg-[#7D1F1F] ">
        <Container>
          <div className="flex flex-row items-center justify-center gap-3 ">
            <LogoHome />
            <NavItemHome schools={schools} />
            <NavBtHome />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
