/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');
const axios = require('axios');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  
  try {
    const response = await axios.get("https://api.analogueshifts.com/api/jobs")
    const data = response.data.jobs

    data.map(job => {
      createPage({
        path: `/jobs/${job.display}`,
        component: path.resolve("./src/pages/jobs/display.js"), // Replace with your template path
        context: job,
      })
    })
  } catch (error) {
    console.error("Error fetching data from the API:", error)
  }

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
