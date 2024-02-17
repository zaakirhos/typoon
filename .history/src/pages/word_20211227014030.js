import React from "react"
import TypeSpeed from "../components/TypeSpeed"
import Button from "../components/Button"
import { graphql } from "gatsby"
import "../styles/main.scss"

const quote = ({ data }) => {
  return (
    <>
      <div style={{ position: "absolute", top: "3vh", left: "3vw" }}>
        <Button link="/" name="Home"></Button>
      </div>
      <TypeSpeed textArray={data.allWordSet.edges} type="word"></TypeSpeed>
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
