"use client";

import React from "react";

const Container = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="w-full mx-auto xl:px-12 md:px-6 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
