// const path = require(`path`)

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

  // Define a template for blog post
 /*  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  ) */

  // if (result.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your blog posts`,
  //     result.errors
  //   )
  //   return
  // }

//   const posts = result.data.allMarkdownRemark.nodes

//   // Create blog posts pages
//   // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   // `context` is available in the template as a prop and as a variable in GraphQL

//   if (posts.length > 0) {
//     posts.forEach((post, index) => {
//       const previousPostId = index === 0 ? null : posts[index - 1].id
//       const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

//       createPage({
//         path: post.fields.slug,
//         component: blogPost,
//         context: {
//           id: post.id,
//           previousPostId,
//           nextPostId,
//         },
//       })
//     })
//   }
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }

let constellations = []

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  console.log("(1)", "read")

  //fetch the data
  let x = 0
  for (const i of constellationData) {
    const fetchConstellation = () =>
      axios.put(`https://api.snaccooperative.org`, {
        command: "read",
        constellationid: i["SNAC ID"],
      })
    let result = await fetchConstellation()
    if ("constellation" in result.data) {
      x++
      constellations.push(result)
    }
  }

  console.log(constellations.length)
  console.log(x)

  //Assumed data is retrieved
  console.log("(2)", "retrieved")
  let i = 0
  constellations.forEach(c => {
    const { constellation } = c.data
    const constNode = {
      //     // Required fields
      id: `${constellationData[i]["SNAC ID"]}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Constellation`, // name of the graphQL query --> allRandomUser {}
        //       // contentDigest will be added just after
        //       // but it is required
      },
      children: [],

      //     // Other fields that you want to query with graphQl
      arkId: constellation.ark.split("/").pop() || null,
      triCoID: constellationData[i]["TriCo ID"] || null,
      mentions: parseInt(constellationData[i]["Mntns"]) || 0,
      entityType: constellation.entityType || null,
      sources: constellation.sources || null,
      nameEntries: constellation.nameEntries || null,
      occupations: constellation.occupations || null,
      biogHists: constellation.biogHists || null,
      relations: constellation.relations || null,
      sameAsRelations: constellation.sameAsRelations || null,
      resourceRelations: constellation.resourceRelations || null,
      places: constellation.places || null,
      subjects: constellation.subjects || null,
      genders: constellation.genders || null,
      dates: constellation.dates || null,
    }

    // add it to userNode
    constNode.internal.contentDigest = c.data.constellation.ark

    // Create node with the gatsby createNode() API
    // });
    createNode(constNode)
    i++
  })

  return
}