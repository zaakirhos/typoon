import React from 'react'
import Quote from '../components/Quote'
i

const quote = ({data}) => {
    return <Quote quotes={data.allMongodbPoolQuotes.edges}></Quote>
}


export const query = graphql`
  {
    allMongodbPoolQuotes {
      edges {
        node {
          description
        }
      }
    }
  }
`


export default quote
