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

        <div className="bg-bk-blue flex flex-col flex-1 md:justify-center max-w-3xl mx-auto px-4 py-4 md:p-4 w-full">
          {children}
        </div>
        <div className="text-center w-full bg-wbk-pink-dark">
          <div class="flex flex-wrap w-full bg-bk-pink-dark">
            <div class="w-full p-8">
              <h1 class="text-bk-blue">RSVP</h1>
              <h2 class="text-bk-blue">Please fill out the form below</h2>
              <form name="contact" netlify>
                <p class="p-2">
                  <label>
                    Name <input type="text" name="name" />
                  </label>
                </p>
                <p class="p-2">
                  <label>
                    How Many Attending?{" "}
                    <input type="number-people" name="number-people" />
                  </label>
                </p>
                <p class="p-2">
                  <label>
                    Email <input type="email" name="email" />
                  </label>
                </p>
                <p class="p-2">
                  <button
                    class="bg-bk-blue hover:bg-bk-blue-dark text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center w-full bg-white">
          <div class="flex flex-wrap w-full bg-white">
            <div class="w-full bg-bk-pink p-2">
              <h1 class="text-bk-blue">Registry</h1>
              <h2 class="text-bk-blue">Click one of the images below</h2>
            </div>
          </div>
        </div>

        <footer className="bg-bk-blue">
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
