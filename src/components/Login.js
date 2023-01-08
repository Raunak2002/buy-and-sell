import React, { useState } from 'react';
import { Link,useHistory } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
    const [err, setErr] = useState(false);
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        try{
           await signInWithEmailAndPassword(auth,email,password)
           history.push('/')
        }catch(err){
            setErr(true);
        }
        };   
    
    return (
        <section>
                <div className="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                        <div className="form-input">
                            <label>Email</label>
                            <input name="email" type="text" />
                        </div>

                        <div className="form-input">
                            <label>Password <span className="tooltip"> &#9432;
            	                <span className="tooltip-text">Password must have atleast: <br /><br />
                                &#8226; 1 digit (0-9)<br />
                                &#8226; 1 uppercase &amp; 1 lowercase alphabet<br />
                                &#8226; 1 special character (!#$@^%&amp;?)<br />
                                &#8226; 8 characters &amp; less than 20 characters</span>
                                </span>
                            </label>
                            <input name="password" type="password"/>
                        </div>
                        <button type="submit" className="form-btn">Submit</button><br />
                        {err && <span>Something went wrong</span>}
                        <small>
                            Don't have an account? Register <Link to='/register'>here</Link>
                        </small>
                    </form>
                </div>
        </section>
    )
}
