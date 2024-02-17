const axios = require("axios");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  let wordSets = []; // set of words, each set is 1000 words
  console.log("(1)", "read")
  //fetch the data
  let x = 0
  for (const i of constellationData) {
    const fetchConstellation = () =>
      axios.put(`https://random-word-api.herokuapp.com/word?number=1000`)
    let result = await fetchConstellation()
    if ("constellation" in result.data) {
      x++
      constellations.push(result)
    }
  }

  const node = {
    id: createNodeId(`${name}`),
    name,
    children: [],
    parent: null,
    internal: {
      type: `${name}`,
      content: JSON.stringify(data),
      contentDigest: createContentDigest(data),
    },
  }

  createNode(node)
}