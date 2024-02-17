import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button"
import Description from "../components/Description"
import '../styles/main.scss'
const { Builder, By, Key, until } = require("selenium-webdriver")



const index = () => {
  ;(async function example() {
    let driver = await new Builder().forBrowser("firefox").build()
    try {
      await driver.get("http://www.google.com/ncr")
      await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN)
      await driver.wait(until.titleIs("webdriver - Google Search"), 1000)
    } finally {
      await driver.quit()
    }
  })()
  
  return (
    <>
      <div className="btn-container">
        <Button link="/quote" name="Quote" ></Button>
        <Button link="/word" name="Word"></Button>
      </div>
      <div className="btn-container">
        <Description
          style={{ height: "fit-content", width: "20vw", background: "#17313C" }}
        >
          <span>Go for this one if you want to boost your typing speed. You will type a random and inspirational quote; Speed up your typing and acquire some wisdom from the perspectives of others</span>
        </Description>
        <Description
          style={{ height: "fit-content", width: "20vw", background: "#33568B" }}
        >
          <span>Go for this one if you want to boost your typing speed and learn new words, some you might have never even heard. Speed up typing and improve your vocabularies</span>
        </Description>
      </div>
    </>
  )
}

export default index

