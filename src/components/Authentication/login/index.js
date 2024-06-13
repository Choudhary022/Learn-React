import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../utils/store/userSlice";

const Login = () => {

    const dispatch = useDispatch();

    const responseMessage = (response) => {
        dispatch(loginUser(jwtDecode(response.credential)))
    };
    const errorMessage = (error) => {
        console.log("Error  while google LogIn :", error);
    };

    return (<div className="flex items-center justify-center  ">

        <div className="border border-gray-200   p-10  rounded-lg  shadow-lg ">
            <div className="flex gap-5 m-5">
                <GoogleLogin className="border p-2" onSuccess={responseMessage} onError={() => errorMessage} />
            </div>
        </div>
    </div>)
}

export default Login;