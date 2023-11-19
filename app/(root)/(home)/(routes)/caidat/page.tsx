import { ModeToggle } from "@/components/toggle-theme";
import React from "react";

type Props = {};

const SettingPage = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <ModeToggle />
    </div>
  );
};

export default SettingPage;
