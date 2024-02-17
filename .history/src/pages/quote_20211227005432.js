import React from 'react'
import Quote from '../components/Quote'
import Button from '../components/Button'
import { graphql, Link } from 'gatsby'
import '../styles/main.scss'

const quote = ({data, location}) => {

  function renderContent(){
    console.log(location.state)
    if(location.state.type === "quote"){
      return
    }
    else{
        return <Quote textArray={data.allWordSet.edges} type="word"></Quote>
    }
  }
    return (
      <>
        <div style={{position: "absolute", top: "0", left: "0"}}>
          <Button link="/" name="Home"></Button>
        </div>
        {renderContent()}
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
    allWordSet {
      edges {
        node {
          wordSet
        }
      }
    }
  }
`


export default quote
