import React from 'react'
import Quote from '../components/Quote'
import Button from '../components/Button'
import { graphql, Link } from 'gatsby'
import '../styles/main.scss'

const quote = ({data}) => {

    return (
      <>
        <Button link="/" name="Home"></Button>
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
