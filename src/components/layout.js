import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../css/style.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="bg-pink flex flex-col font-sans min-h-screen text-grey-darkest">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="bg-pink flex flex-col md:justify-center max-w-3xl mx-auto px-4 py-2 md:p-8 w-full">
          {children}
        </div>

        <footer className="bg-blue-darkest">
          <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
              Created by{" "}
              <a
                href="https://taylorbryant.blog"
                className="font-bold no-underline text-white"
              >
                Taylor Bryant
              </a>
            </p>

            <p>
              <a
                href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                className="font-bold no-underline text-white"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
