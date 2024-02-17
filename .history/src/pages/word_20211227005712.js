import React from "react"
import Quote from "../components/Quote"
import Button from "../components/Button"
import { graphql } from "gatsby"
import "../styles/main.scss"

const quote = ({ data }) => {
  return (
    <>
      <div style={{ position: "absolute", top: "3vh", left: "3vw" }}>
        <Button link="/" name="Home"></Button>
      </div>
      <Word words={data.allWordSet.edges}></Word>
    </>
  )
}

export const query = graphql`
  {
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
