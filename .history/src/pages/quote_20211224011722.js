import React from 'react'
import Quote from '../components/Quote'
import { graphql } from 'gatsby'

const quote = ({data}) => {
  <Button to="/index" name="Home"></Button>
    return (
      <>
      </>
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
