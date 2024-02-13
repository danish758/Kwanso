import React, { ReactNode } from "react";
import BlogHeader from "./components/blogs/BlogHeader";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <BlogHeader />
      {children}
    </>
  );
};

export default Layout;
