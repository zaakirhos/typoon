import React from 'react'
import Quote from '../components/Quote'
import { graphql } from 'gatsby'

const quote = ({data}) => {
    return <Quote quotes={data.allMongodbPoolQuotes.edges}></Quote>
}


export const query = graphql`
  {
    allMongodbPoolQuotes {
      edges {
        node {
            quotes
          description
        }
      }
    }
  }
`


export default quote
