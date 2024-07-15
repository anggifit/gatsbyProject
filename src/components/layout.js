import * as React from "react";
import { Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Title from "./Title";

const Layout = ({ pageTitle, children }) => {
/*   const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); */
  return (
    <div>
      <nav className="font-sans flex items-center justify-between py-2 px-6 bg-white shadow w-full">
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
            className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            About me
          </Link>
          <Link
            to="/blog"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            Blog
          </Link>
        </div>
      </nav>
      <Title pageTitle={pageTitle}>{children}</Title>
    </div>
  );
};

export default Layout;
