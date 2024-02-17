import React from 'react'
import TypeSpeed from '../components/TypeSpeed'
import Button from '../components/Button'
import { graphql, Link } from 'gatsby'
import '../styles/main.scss'

const quote = ({data}) => {

    return (
      <>
        <div style={{position: "absolute", top: "0", left: "0"}}>
          <Button link="/" name="Home"></Button>
        </div>
         <TypeSpeed textArray={data.allMongodbPoolQuotes.edges} type="quote"></TypeSpeed>
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
