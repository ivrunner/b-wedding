import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import bklogo from "../images/bk-logo-01.svg";

const Header = props => (
  <nav className="bg-cover-image bg-repeat">
    <div className="text-center sm:w-full max-w-xl ml-auto mr-auto relative pin">
      <StaticQuery
        query={graphql`
          query {
            flower: file(relativePath: { eq: "flower-top.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Img fluid={data.flower.childImageSharp.fluid} />}
      />
    </div>

    <div className="flex flex-wrap items-center justify-center max-w-3xl mx-auto px-8 py-0 md:px-8 md:py-3">
      <Link
        to="/"
        className="flex items-center no-underline py-5 text-white w-1/2 sm:w-1/3 md:w-1/6"
      >
        <img src={bklogo} className="" alt="Brooke & Kyle Logo" />
      </Link>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};
const query = graphql`
  query {
    flower: file(relativePath: { eq: "flower-top.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default Header;
