import * as React from "react"
import { Link } from "gatsby"

import AppLayout from "../components/Layouts/AppLayout"
import SeoController from "../lib/SeoController"



const UsingDSG = () => (
  <AppLayout>
    <h1>
      Hello from a <b>DSG Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </AppLayout>
)

const seoData = {
    title: 'Tech Talent Recruitment and Acquisition',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
    canonical: 'https://www.analogueshifts.com',
    ogImage: '/images/a4.jpg',
}

export const Head = () => <SeoController seoData={seoData} />

export default UsingDSG
