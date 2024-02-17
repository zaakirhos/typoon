import React from "react"
import Word from "../components/Quote"
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
