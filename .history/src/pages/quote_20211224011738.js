import React from 'react'
import Quote from '../components/Quote'
import Button from
import { graphql } from 'gatsby'

const quote = ({data}) => {

    return (
      <>
        <Button to="/index" name="Home"></Button>
        <Quote quotes={data.allMongodbPoolQuotes.edges}></Quote>
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
