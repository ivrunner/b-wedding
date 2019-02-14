import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import "../css/style.css";
import mdcCredit from "../images/mdc-credit.svg";

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
          <div className="inline-flex justify-center max-w-xl mx-auto px-5">
            <p class="font-serif text-bk-blue m-auto">Created By </p>
            <a href="http://richmatney.com">
              <img
                src={mdcCredit}
                className="w-10 h-10 my-5 mx-2"
                alt="MDC Logo"
              />
            </a>
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
