import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'


const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="logo">
                <h2><span>J</span>SP</h2>
            </div>
        <div className="navlinks">
            <Link to="/adminhome/viewlist">View List</Link>
            <Link to="/adminhome/addbooks">Add Books</Link>
            <Link to="/adminhome/updatebooks">Update Book</Link>
            <Link to="/">Log Out</Link>
        </div>
        </div>
    );
}

export default AdminNavbar;