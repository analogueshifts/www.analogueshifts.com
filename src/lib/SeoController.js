import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function SeoController({ seoData, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = seoData.description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>
        {defaultTitle ? `${seoData.title} | ${defaultTitle}` : seoData.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default SeoController
