const axios = require("axios");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
console.log("(1)", "read")


  const node = {
    id: createNodeId(`${name}`),
    name,
    children: [],
    parent: null,
    internal: {
      type: `${name}`,
      content: JSON.stringify(data),
      contentDigest: createContentDigest(data)
    }
  }

  createNode(node)
}