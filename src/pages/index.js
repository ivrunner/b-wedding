import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="text-center">
      <div class="flex flex-wrap">
        <div class="w-full border-4 border-bk-pink">
          <Img
            fluid={props.data.imageOne.childImageSharp.fluid}
            class=""
            alt="Brooke & Kyle"
          />
        </div>

        <div class="w-full md:w-1/2 p-4">
          <h1 class="text-bk-pink">Time & Date</h1>
          <h2 class="text-bk-pink">Saturday July 1st, 2019</h2>
          <p class="text-white">at 2 o'clock in the afternoon</p>
        </div>
        <div class="w-full md:w-1/2 p-4">
          <h1 class="text-bk-pink">First Brethren Church</h1>
          <h2 class="text-bk-pink">K of C Hall</h2>
          <p class="text-white">13050 Williams County Rd C</p>
          <p class="text-white">Bryan, Ohio 43506</p>
        </div>
        <div class="w-full md:w-1/2 p-4 pb-8">
          <h1 class="text-bk-pink">Reception to follow at:</h1>
          <h2 class="text-bk-pink">K of C Hall</h2>
          <p class="text-white">111 Elliott Rd</p>
          <p class="text-white">Defiance, Ohio 43512</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "bkpic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
