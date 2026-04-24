import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'

const Nocontainer = ({data}) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} />
      <div className="no-container page-container pt-5 pb-5">
        <div className="container">
          <Title title={title} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query nocontainerPage($id: String!) {
	markdownRemark(id: {eq: $id}) {
    html
    frontmatter{
      title
    }
  }
}
`

export default Nocontainer
