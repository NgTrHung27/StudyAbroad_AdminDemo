"use client";

import React from "react";
import Container from "../container";
import LogoSeo from "./logo_seo";
import NavItemSeo from "./nav-item_seo";
import NavBtSeo from "./nav_button_seo";
const ChuyenHuong = [];
const Navbar = () => {
  return (
    <div className="">
      <div className="bg-[#7D1F1F] ">
        <Container>
          <div className="flex flex-row items-center justify-center gap-3 ">
            <LogoSeo/>
            <NavItemSeo />
            <NavBtSeo />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
