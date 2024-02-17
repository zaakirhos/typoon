

export.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

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