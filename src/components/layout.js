import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 flex flex-row">
          <div className="h-20 w-20 self-center mr-2">
            <StaticImage 
              className="h-full w-full self-center" 
              src="../images/icon.png" alt="Logo"/>
          </div>
          <div>
            <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">anggiFitCode</a><br />
            <span className="text-xs text-grey-dark">Just me</span>
          </div>
        </div>
        <div className="sm:mb-0 self-center">
          <Link to="/" className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Home</Link>
          <Link to="/about" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">About me</Link>
          <Link href="/blog" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Blog</Link>
        </div>
      </nav>
      <main>
        <h1 className="text-3xl text-pink-500">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
