import "../styles/Landingpage.css"
import { Link } from "react-router-dom"
const Landingpage = () => {
    return (
        <div className="landingpage">
            <h1 style={{ textAlign: "center" }}>Library Managament System</h1>
            <div className="section">
                <Link to="/Admin">
                    <img src="" alt="" />
                    <h1>Admin</h1>
                </Link>

                <Link to="/User">
                    <img src="" alt="" />
                    <h1>User</h1></Link></div>
        </div>
    );
}

export default Landingpage;