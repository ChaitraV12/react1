import "../styles/Landingpage.css"
import { Link } from "react-router-dom"
const Landingpage = () => {
    return (
        <div className="landingpage">
            <h1 style={{ textAlign: "center" }}>Library Managament System</h1>
            <div className="section">
                <Link to="/Admin">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.Y-q_6AwbL289-vo2K2BlSAHaHa&pid=Api&P=0&h=180" alt="" />
                    <h1>Admin</h1>
                </Link>

                <Link to="/User">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0&h=180" alt="" />
                    <h1>User</h1></Link></div>
        </div>
    );
}

export default Landingpage;