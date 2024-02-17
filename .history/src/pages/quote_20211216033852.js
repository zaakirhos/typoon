import React from 'react'
import Quote from '../components/Quote'

const quote = () => {
    return (
        <Quote>
            
        </Quote>
    )
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
