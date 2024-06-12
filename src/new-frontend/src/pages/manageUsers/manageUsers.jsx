import React from "react";
import ManageUser from "../../components/manageUsers/ManageUsers";
import Navbar from "../../components/navbar/navbar";
import '../../index.css';

function ManageUsers() {
    return (
        <div>
            <Navbar />
            <ManageUser />
        </div>
    );
}

export default ManageUsers;