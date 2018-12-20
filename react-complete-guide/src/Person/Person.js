// we dont need to import component 
// since we are not creating a class that extends component, instead, we are creating a function 
 // './' indicates relative path
import React from "react";



// a component is a function which returns some jsx
// advantages of using arrow function is using this keyword
// a compoenet is a function returning some jsx
// we don

const person = (props) => {
	return <p> I'm {props.name} and {props.age} years old </p>
}

export default person