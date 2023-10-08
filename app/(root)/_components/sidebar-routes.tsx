"use client";

import SidebarItem from "./sidebar-item";
import { routes } from "@/types";

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes
        .filter((route) => route.href !== "/taikhoan/create")
        .map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
    </div>
  );
};

export default SidebarRoutes;
