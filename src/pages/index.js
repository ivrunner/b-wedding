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
        <div class="w-full md:w-1/2 md:m-auto">
          <Img
            fluid={props.data.imageOne.childImageSharp.fluid}
            class=""
            alt="Brooke & Kyle"
          />
        </div>

        <div class="w-full md:w-1/2 p-10 md:align-middle md:m-auto">
          <div class="py-5">
            <h1 class="font-serif text-bk-pink">Time & Date</h1>
            <h2 class="font-serif text-bk-pink">Saturday July 1st, 2019</h2>
            <h2 class="font-serif text-white">at 2 o'clock in the afternoon</h2>
          </div>
          <div class="py-5">
            <h1 class="font-serif text-bk-pink">First Brethren Church</h1>
            <h2 class="font-serif text-white">13050 Williams County Rd C</h2>
            <h2 class="font-serif text-white">Bryan, Ohio 43506</h2>
          </div>
          <div class="py-5">
            <h1 class="font-serif text-bk-pink">Reception to follow at:</h1>
            <h2 class="font-serif text-bk-pink">K of C Hall</h2>
            <h2 class="font-serif text-white">111 Elliott Rd</h2>
            <h2 class="font-serif text-white">Defiance, Ohio 43512</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center w-full bg-bk-pink-dark">
      <div class="flex flex-wrap w-full bg-bk-pink-dark">
        <div class="w-full p-10">
          <h1 class="font-serif text-bk-blue">RSVP</h1>
          <h2 class="font-serif text-bk-blue py-5">
            Please fill out the form below.
          </h2>
          <form
            name="rsvp"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <p class="text-bk-blue font-serif p-5">
              <label>
                Your Name:{" "}
                <div class="inline-block relative w-64">
                  <input
                    class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                  />
                </div>
              </label>
            </p>
            <p class="text-bk-blue font-serif p-5">
              <label>
                How Many?{" "}
                <div class="inline-block relative w-64">
                  <input
                    class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="number of guests"
                  />
                </div>
              </label>
            </p>
            <p class="text-bk-blue font-serif p-5">
              <label>
                Your Email:{" "}
                <div class="inline-block relative w-64">
                  <input
                    class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                  />
                </div>
              </label>
            </p>
            <p>
              <button
                class="bg-bk-blue hover:bg-bk-pink text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
    <div className="text-center justify-center w-full bg-white">
      <div class="flex flex-wrap justify-center w-full bg-white">
        <div class="w-full bg-bk-pink p-10">
          <h1 class="font-serif text-bk-blue">Registry</h1>
          <h2 class="font-serif text-bk-blue pt-5">
            Click below for the Bride & Groom's Registries
          </h2>
          <div class="px-10 py-10 w-full justify-center md:w-1/2 md:ml-auto md:mr-auto">
            <a href="http://www.target.com">
              <Img
                fluid={props.data.target.childImageSharp.fluid}
                class=""
                alt="Target Logo"
              />
            </a>
          </div>
          <div class="px-10 pb-10 w-full justify-center md:w-1/2 md:ml-auto md:mr-auto">
            <a href="http://amazon.com">
              <Img
                fluid={props.data.amazon.childImageSharp.fluid}
                class=""
                alt="Amazon Logo"
              />
            </a>
          </div>
          <h3 class="font-serif leading-normal text-center text-bk-blue px-0 pb-5">
            The Bride & Groom ask that if you feel the need to purchase a gift
            that it be a gift card or money towards a honeymoon. If you do
            purchase a gift please have it shipped to their home at the address
            below:
          </h3>
          <h2 class="font-serif leading-normal text-center text-bk-blue px-0 pb-10">
            12311 Kensington Lakes Dr Unit 1905, Jacksonville, FL 32246-7167
          </h2>
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

    <div class="flex flex-wrap w-full pb-0">
      <div class="w-full">
        <Img
          fluid={props.data.three.childImageSharp.fluid}
          class=""
          alt="Brooke & Kyle 3"
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
    target: file(relativePath: { eq: "target.png" }) {
      ...fluidImage
    }
    amazon: file(relativePath: { eq: "amazon.png" }) {
      ...fluidImage
    }
  }
`;
