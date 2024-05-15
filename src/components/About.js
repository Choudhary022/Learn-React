import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            This is about component
            <UserClass name={"first"} location={"Hyderabad"} />
        </div>)
    }
}

export default About;