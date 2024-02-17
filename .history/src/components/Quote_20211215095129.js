import React from 'react'
import 

function Quote() {
    return (
        <div>
             <div class="timer" id="timer"></div>
  <div class="container">
    <div class="quote-display" id="quoteDisplay"></div>
    <i style="color: gray">&mdash; <h4 class="author" style="display: inline;" ></h4></i>
    <textarea id="quoteInput" class="quote-input" autofocus></textarea>
  </div>
        </div>
    )
}

export default Quote
