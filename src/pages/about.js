import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundSection from "../components/Global/BackgroundSection"
import Info from "../components/Home/Info"
import Layout from "../components/layout"

import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title=" About Glow furniture"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bg2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
