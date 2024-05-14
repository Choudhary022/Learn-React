import User from "./User"
import UserClass from "./UserClass";

export const About = () => {

    return (<div>
        This is about component
        {/* <User  name={"Akash Chouodhary (function) "} location={"Hyderabad"}/> */}
        <UserClass name={"Akash Choudhary (class)"} location={"Hyderabad"}/>
    </div>)
}

export default About;