import { useState } from "react";
import '../styles/admin.css'
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
    let [eamil, setemail] = useState("")
    let [password, setpassword] = useState("")
    let navigate = useNavigate()
    let validate = () => {
        if (eamil == "abcd" && password == "1234") {
            alert`login successfull`;
            navigate('/adminhome')
        }
        else {
            alert`login failer`
        }
    }
    return (
        <div className="adminlogin">
            <form action="
            ">
                <label htmlFor="">Email:
                    <input value={eamil} onChange={(e) => { setemail(e.target.value) }} type="text" /> </label>
                <br />
                <label htmlFor="">Password:
                    <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" /> </label>
                <br />
            </form>
            <button onClick={validate}>Login</button>
        </div>
    );
}

export default AdminLogin;