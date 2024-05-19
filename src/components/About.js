import { useEffect } from "react";
import UserClass from "./UserClass";

export const About = () => {


    useEffect(() => {
        fetchMyGitHubProfile();
    }, [])

    const fetchMyGitHubProfile = async () => {

        const result = await fetch("https://api.github.com/users/choudhary022")

        const resultJson = await result.json();

        console.log("MyProfile : ", resultJson);

    }


    return (<div>
        This is about component
        <UserClass name={"Akash Choudhary (class)"} location={"Hyderabad"} />
    </div>)
}

export default About;