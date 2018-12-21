// we dont need to import component 
// since we are not creating a class that extends component, instead, we are creating a function 
 // './' indicates relative path
import React from "react";



// a component is a function which returns some jsx
// advantages of using arrow function is using this keyword
// a compoenet is a function returning some jsx
// we don

const person = (props) => {
	// props is an object giving us access to all of the attributes we passed to our own components
	// props care set and managed outside
	// props.children refers to anything between the opening and closing tag of the component 
	// 'state' is not available in function components
	// use function components as often as possible, using state too often can make app unpredictable

	return (
		<div>
		  <p> I'm {props.name} and {props.age} years old </p>
		  <p> {props.children} </p>
		</div>
	)
};

export default person

