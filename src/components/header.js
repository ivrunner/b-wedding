import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import bklogo from "../images/bk-logo-01.svg";

const Header = ({ siteTitle }) => (
  <nav className="bg-cover-image bg-repeat">
    <div className="flex flex-wrap items-center justify-center max-w-3xl mx-auto px-8 py-3 md:px-8 md:py-3">
      <Link
        to="/"
        className="flex items-center no-underline py-5 text-white w-1/2 sm:w-1/3 md:w-1/6"
      >
        <img src={bklogo} className="" alt="Brook & Kyle Logo" />
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

export default Header;
