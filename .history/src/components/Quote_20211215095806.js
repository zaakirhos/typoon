import React, {use} from "react"
import "../styles/Quote.css"

const getQquotes = async () => {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=10"
  )
  const data = await response.json()
  return data
}

function Quote() {

       const [quotes, setQuotes] = useState([])
       const [wordClicker, setWordClicker] = useState(false)
       const [isExhausted, setIsExhausted] = useState(false)

       useEffect(() => {
         getQquotes()
           .then(result => {
             setWords(result)
           })
           .catch(error => {
             console.log(error)
           })
       }, [wordClicker])

  return (
    <div>
      <div class="timer" id="timer"></div>
      <div class="container">
        <div class="quote-display" id="quoteDisplay"></div>
        <i style={{ color: "gray" }}>
          &mdash; <h4 class="author" style={{ display: "inline" }}></h4>
        </i>
        <textarea id="quoteInput" class="quote-input" autofocus></textarea>
      </div>
    </div>
  )
}

export default Quote
