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
      <div className="bg-bk-blue flex flex-col font-sans min-h-screen text-grey-darkest">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="bg-bk-blue flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-4 md:p-4 w-full">
          {children}
        </div>

        <footer className="bg-bk-pink-dark">
          <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
              Created by{" "}
              <a
                href="http://www.richmatney.com"
                className="font-bold no-underline text-white"
              >
                Matney Design Co.
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
