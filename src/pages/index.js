import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`brooke`, `wedding`, `thomas`, `website`]} />

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

    <div class="flex flex-wrap w-full">
      <div class="w-1/2">
        <Img
          fluid={props.data.one.childImageSharp.fluid}
          class=""
          alt="Brooke & Kyle"
        />
      </div>
      <div class="w-1/2">
        <Img
          fluid={props.data.two.childImageSharp.fluid}
          class=""
          alt="Brooke & Kyle 2"
        />
      </div>
    </div>

    <div class="flex flex-wrap w-full">
      <div class="w-full">
        <Img
          fluid={props.data.three.childImageSharp.fluid}
          class=""
          alt="Brooke & Kyle"
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "IMG_9035.jpg" }) {
      ...fluidImage
    }
    one: file(relativePath: { eq: "IMG_8958.jpg" }) {
      ...fluidImage
    }
    two: file(relativePath: { eq: "IMG_8999.jpg" }) {
      ...fluidImage
    }
    three: file(relativePath: { eq: "IMG_9111.jpg" }) {
      ...fluidImage
    }
  }
`;
