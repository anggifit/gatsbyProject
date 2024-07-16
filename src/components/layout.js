import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Title from "./Title";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav className="font-sans flex items-center justify-between py-2 px-20 bg-white shadow w-full">
        <div className="flex items-center">
          <StaticImage
            className="w-28 mr-4"
            src="../images/AnggiFitLogo-sinFondo-1024x356.png"
            alt="Logo"
          />
        </div>
        <div className="flex items-center">
          <Link
            to="/"
            className="text-md no-underline text-black hover:text-blue-dark ml-4 px-1"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-4 px-1"
          >
            Sobre mi
          </Link>
          <Link
            to="/nutriservicios"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-4 px-1"
          >
            Nutriservicios
          </Link>
          <Link
            to="/blog"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-4 px-1"
          >
            Blog
          </Link>
          <Link
            to="/contacto"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-4 px-1"
          >
            Contacto
          </Link>
        </div>
      </nav>
      <Title pageTitle={pageTitle}>{children}</Title>
    </div>
  );
};

export default Layout;
