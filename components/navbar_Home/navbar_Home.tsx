"use client";

import React from "react";
import Container from "../container";
import LogoHome from "./logo_Home";
import NavItemHome from "./nav-item_Home";
import NavBtHome from "./nav_button_Home";
const ChuyenHuong = [];
const Navbar = () => {
  return (
    <div className="">
      <div className="bg-[#7D1F1F] ">
        <Container>
          <div className="flex flex-row items-center justify-center gap-3 ">
            <LogoHome/>
            <NavItemHome />
            <NavBtHome />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
