//* jsx is a pseudolanguage a js rendition of html. react library is what makes jsx work the way it does. under the hood its used to interpet jsx. most of jsx looks almost identical to html. 2 jsx elements can't be rendered next to each otherΩ. instead they have to be wrapped inside something so the 2 elements count together as 1

//* for example, rendering an h1 and a p together creates console errors</h1><p>This is a paragraph</p>/h1><p>This is a paragraph</p>. the solution is to wrap them in a div inside () */

import React from "react";

import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello world!</h1>document.getElementById("root"));

//what do i want to render. where do i want to render it

                
// JSX
ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById("root"))

//as opposed to vanilla js where you would
                
const myNewP = document.createElement("p")
myNewP.innerHTML = "This is paragraph" // taking that para and appending it to a parent - imperitive programming

//react/jsx is declarative programming

//Imperative vs Declarative Programming - https://www.youtube.com/watch?v=E7Fbf7R3x6I