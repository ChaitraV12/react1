import { useState } from "react";

const UserLogin = () => {
    let [email, useemail] = useState("");
    let [password, usepassword] = useState("")
    let validate = () => {
        if (email == "afe@gmail.com" && password == "123456") {
            alert`login successfully`
        }
        else {
            alert`login failure`
        }
    }
    return (
        <div className="userlogin">
            <form action="">
                <label htmlFor="">
                    email:
                    <input value={email} onChange={(e) => { useemail(e.target.value) }} type="text" />
                </label>
                <br />
                <label htmlFor="">
                    password:
                    <input value={password} onChange={(e) => { usepassword(e.target.value) }} type="password" />
                </label>
                <br />
                <button onClick={validate}>login</button>
            </form>
        </div>
    );
}

export default UserLogin;