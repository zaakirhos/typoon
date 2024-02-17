import React from "react"
import Word from "../components/Word"
import Button from "../components/Button"
import { graphql, Link } from "gatsby"
import "../styles/main.scss"

const quote = ({ data }) => {
  return <Word words={data.allWordSet.edges}></Word>
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
