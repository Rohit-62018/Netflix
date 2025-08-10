import React, { useState } from "react";
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'

export default function Login() {
    const [signState, setSignState] = useState("Sign In");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loding, setLoading] = useState(false);
    const user_auth = async(event)=>{
        event.preventDefault();
        setLoading(true);
        try {
            if (signState === "Sign In") {
            await login(email, password); 
        } else {
            await signup(name, email, password);
        }
         setLoading(false);
    } catch (error) {
        console.error(error.message);
        }
    }
    return (
        loding? <div className="loading-spinner">
            <img src={netflix_spinner} alt="" />
        </div>:
        <div className="login">
            <img src={logo} alt="" className="login-logo"/>
            <div className="login-form">
                <h1>{ signState }</h1>
                <form onSubmit={user_auth}>
                    {signState==="Sign Up" ? <input type="text" placeholder="your name" onChange={(e)=>{setName(e.target.value)}} value={name}/> : <></>}
                    <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                   <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button type="submit">{ signState }</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState==="Sign In" ? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p> :
                     <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p> }
                </div>
            </div>
        </div>
    )
}