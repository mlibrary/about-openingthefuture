import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import PublisherList from "../components/publishers/publisherList"
import Tagline from "../components/tagline"
import Hero from "../components/hero"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
        byline
      }
      heroSection {
        primaryText
        secondaryText
        buttonLabel
        buttonUrl
      }
      firstCallToActionSection {
        heading
        description
        buttonLabel
        buttonUrl
      }
      secondCallToActionSection {
        heading
        description
        buttonLabel
        buttonUrl
      }
    }
  }
  publishers: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "publisher" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title          
          publisherLink
          orderOnPage
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const hero = data.home.frontmatter.heroSection
  const tagline = data.home.frontmatter.taglineSection
  const publishers = data.publishers.edges
  const cta1 = data.home.frontmatter.firstCallToActionSection
  const cta2 = data.home.frontmatter.secondCallToActionSection

  return (
    <Layout>
      <SEO title="Home" />      
        <section className="hero-container">
          <div className="container">
            <div className="row">
              <div className="hero-primary col-md-12">
                <Hero text={hero.primaryText} />
              </div>
            </div>
            <div className="row">
              <div className="hero-secondary col-md-12">
                <Hero text={hero.secondaryText} />
              </div>
            </div>
          </div>
        </section>
        <section className="books-container container">
          <div className="row">
            <div className="col-md-12 publisher-text">
              <h2>Our Publishers</h2>
              <p>These presses are offering packages of books on topics ranging from pre- and post-communist Russia, and the history and politics of the Central European region, to award-winning books on Latin American culture and language, Rio de Janeiro and guerilla war in Peru, to books on African history, Namibia, the African diaspora and black experience in America and elsewhere.</p>
            </div>
          </div>
          <PublisherList publishers={publishers} />
        </section>        
        <section className="tagline-container">
          <div className="container">
            <div className="row">
              <div className="tagline col-md-12">                
                <Tagline text={tagline.text} />
              </div>
            </div>
            <div className="row mt-4">
              <div className="cta-tagline col-md-12 text-center">
                <p>{tagline.byline}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-container container">
          <div className="row">
            <div className="cta1 col-md-5">
              <h2>{cta1.heading}</h2>
              <p>{cta1.description}</p>
              <a className="card-link btn btn-secondary btn-lg" href={cta1.buttonUrl}>{cta1.buttonLabel}</a>
            </div>
            <div className="cta2 col-md-6">
              <h2>{cta2.heading}</h2>
              <p>{cta2.description}</p>
              <a className="card-link btn btn-secondary btn-lg" href={cta2.buttonUrl}>{cta2.buttonLabel}</a>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage