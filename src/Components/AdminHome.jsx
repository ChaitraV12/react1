import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminDashBoard from "./AdminDashBoard";
import ViewList from "./ViewList";
import AddBooks from "./AddBooks";
import Updatebooks from "./updatebooks";

const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashBoard/>}></Route>
                <Route path="/viewlist" element={<ViewList/>}></Route>
                <Route path="/AddBooks" element={<AddBooks/>}></Route>
                <Route path="/UpdateBooks" element={<Updatebooks/>}></Route>
            </Routes>
        </div>
     );
}
export default AdminHome;