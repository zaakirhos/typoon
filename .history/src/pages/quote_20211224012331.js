import React from 'react'
import Quote from '../components/Quote'
import Button from '../components/Button'
import { graphql, Link } from 'gatsby'
import '../styles/main.scss'

const quote = ({data}) => {

    return (
      <>
        {/* <Button to="/" name="Home"></Button> */}
        <Quote quotes={data.allMongodbPoolQuotes.edges}></Quote>
        <div className="">
          <Button to="/" name="Home"></Button>
        </div>
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
