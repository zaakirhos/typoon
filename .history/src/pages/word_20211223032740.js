import React from "react"
import Word from "../components/Word"
import { graphql } from "gatsby"

const quote = ({ data }) => {
  return <Quote quotes={data.allMongodbPoolQuotes.edges}></Quote>
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
