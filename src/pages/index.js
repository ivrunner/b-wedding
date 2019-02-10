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
          <h2 class="text-bk-blue py-5">Please fill out the form below</h2>
          <form
            name="rsvp"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <p class="p-5">
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
            <p class="p-5">
              <label>
                How Many?:{" "}
                <div class="inline-block relative w-64">
                  <select class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                  <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </label>
            </p>
            <p class="p-5">
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
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
    <div className="text-center justify-center w-full bg-white">
      <div class="flex flex-wrap justify-center w-full bg-white">
        <div class="w-full bg-bk-pink p-2">
          <h1 class="text-bk-blue">Registry</h1>
          <h2 class="text-bk-blue">Click one of the images below</h2>
          <div class="px-20 py-10 w-full justify-center md:w-1/2 md:ml-auto md:mr-auto">
            <a href="http://www.target.com">
              <Img
                fluid={props.data.target.childImageSharp.fluid}
                class=""
                alt="Target Logo"
              />
            </a>
          </div>
          <div class="px-20 pb-10 w-full justify-center md:w-1/2 md:ml-auto md:mr-auto">
            <a href="http://amazon.com">
              <Img
                fluid={props.data.amazon.childImageSharp.fluid}
                class=""
                alt="Amazon Logo"
              />
            </a>
          </div>
          <h3 class="leading-normal text-center px-10 pb-5">
            The Bride & Groom ask that if you feel the need to purchase a gift
            that it be a gift card or money towards a honeymoon. If you do
            purchase a gift please have it shipped to their home at the address
            below:
          </h3>
          <h2 class="leading-normal text-center px-10 pb-10">
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
