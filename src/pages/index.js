import * as React from "react";
/* import { StaticImage } from "gatsby-plugin-image";*/
import Layout from "../components/layout";
import Header from "../components/Header"

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <Header/>
      {/* <section className="relative pt-12 bg-blueGray-50">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <StaticImage
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="../images/home-fruits.jpg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-green-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-300 mt-8">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">Equilibrio y bienestar a tu alcance</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Descubre el camino hacia una vida equilibrada y llena de bienestar.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export const Head = () => <title>Homepage</title>

export default IndexPage;
