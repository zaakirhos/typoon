import React from 'react'
import Quote from '../components/Quote'
import Button from '../components/Button'
import { graphql, Link } from 'gatsby'
import ''

const quote = ({data}) => {

    return (
      <>
        {/* <Button to="/" name="Home"></Button> */}
        <Quote quotes={data.allMongodbPoolQuotes.edges}></Quote>
        <Button to="/" name="Home"></Button>
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
