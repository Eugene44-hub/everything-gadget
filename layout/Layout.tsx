import React from "react";
import { ILayoutProps } from "../types/types";

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className="">
      <div></div>
      {children}
    </div>
  );
};

export default Layout;
