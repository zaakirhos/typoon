import React from 'react'
import Quote from '../components/Quote'

const quote = ({data}) => {
    return <Quote quotes={data.allMongodbPoolQuotes.edges}></Quote>
}


export const query = graphql`
  {
    allMongodbPoolQuotes {
      edges {
        node {
          quotes {
            author
            text
          }
          description
        }
      }
    }
  }
`


export default quote
