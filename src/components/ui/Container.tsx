import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="h-full w-full max-w-[1280] mx-auto bg-primary-gradient p-2">{children}</div>;
};

export default Container;
