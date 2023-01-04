import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
//the really cool part of jsx is u can return the jsx you want the component to represent. its always a good idea to wrap the tags in (). instead if writing the elements in a single line break it into returns so the jsx is easier to read like html
return (  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,)    
        }
//jsx prints errors in console if more than 1 tag is wrapped inside the jsx return. workaround is to wrap 2 elements in a div tag.

//w react use camelcase AND start first letter w a CAPITAL

ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
) 

//webpage w tons of these elements gets crazy to maintain. enter react