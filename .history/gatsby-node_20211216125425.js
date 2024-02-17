const axios = require("axios")

const NUMBER_OF_WORD_SETS = 2

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  let wordSets = [] // set of words, each set is 1000 words
  console.log("(1)", "read")
  //fetch the data
  let x = 0
  while (x < NUMBER_OF_WORD_SETS) {
    const fetchWords = () =>
      axios.get(`https://random-word-api.herokuapp.com/word?number=1000`)
    let result = await fetchWords()
    if (result.data) {
      x++
      wordSets.push(result.data)
    }
  }

  console.log

  wordSets.forEach((wordSet, index) => {
    const node = {
      id: createNodeId(`${index}`),
      wordSet: wordSet,
      count: wordSet.length,
      parent: `__SOURCE__`,
      internal: {
        type: `wordSet`,
        // content: JSON.stringify(data),
        // contentDigest: createContentDigest(data),
      },
      children: [],
    }

    createNode(node)
  })
  return;
}
