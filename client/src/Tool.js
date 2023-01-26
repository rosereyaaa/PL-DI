import React from "react";
import Nav from "./Nav";

function Tool({ name, tool }) {
    console.log(name, tool)
    //const name = props.lastName;
    //const tool = props.tool;
    return (
        <div>
            <Nav />
            <h1>My name is {name}.</h1>
            <p>My favorite design tool is {tool}.</p>
        </div>
    )
}

export default Tool;