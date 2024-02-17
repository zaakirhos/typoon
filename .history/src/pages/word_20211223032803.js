import React from "react"
import Word from "../components/Word"
import { graphql } from "gatsby"

const quote = ({ data }) => {
  return <Word words={data.allWord.edges}></Word>
}

export const query = graphql`
  {
    allWordSet {
      edges {
        node {
          wordSet
        }
      }
    }
  }
`

export default quote
