import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async () => {
        if(username === "" || password === "")
            window.alert("Both username and password are required");
        else {
            const data = {email: username, password: password};
            await axios.post("http://localhost:3001/user/login", data).then((response) => {
                if(!response.data.error) {
                    localStorage.setItem("accessToken", response.data.token);
                    console.log(
                        response.data
                    );
                    alert("Logged In!");
                    navigate("/userProfile", {
                        state:{
                            userName:response.data.userName,
                            email:response.data.email
                        }
                    });
                }
                else {
                    window.alert(response.data.error);
                }
            })
        }
    }

    return (
        <div>
            <label name="userName">Email ID </label>
            <input name="userName" type = "text" autoComplete='off' onChange={(event) => {setUserName(event.target.value)}} />    
            <br/>
            <label name="Password">Password </label>
            <input type = "password" autoComplete='off' onChange={(event) => {setPassword(event.target.value)}} />
            <br/>
        <button onClick={login}> LOGIN </button>
        </div>
    )
}

export default Login
