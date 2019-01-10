import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="text-center">
      <div class="flex flex-wrap">
        <div class="w-full p-2">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>

        <div class="w-full md:w-1/2 p-2">
          <p className="text-pink-darker">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
      <img
        src={catAndHumanIllustration}
        className="block mx-auto w-1/2"
        alt="Brooke and Kyle"
      />

      <h2 className="bg-yellow inline-block my-8 p-3">
        Hey there! Welcome to your first Gatsby site.
      </h2>

      <p className="leading-loose">
        This is a barebones starter for Gatsby styled using{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-bold no-underline text-grey-darkest"
        >
          Tailwind
        </a>
        , a utility-first CSS framework.
      </p>
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "unsplash-wedding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
