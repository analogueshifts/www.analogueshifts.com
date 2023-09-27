import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from './Navigation'
import Footer from './Footer'

const AppLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <div className="min-h-screen bg-gray-50">

            <Navigation />
            
            <main>{children}</main>
        
            <Footer />
        </div>
    </>
  )
}

export default AppLayout