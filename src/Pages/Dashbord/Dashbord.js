import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <div className="drawer drawer-mobiles">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <h1 className="text-2xl text-purple-500">Dashbord</h1>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content bg-transparent">
                        {/* <!-- Sidebar content here --> */}
                    <li><Link to="/Dashbord/Appo">My Appointment</Link></li>
                        <li><Link to="/Dashbord/User">All Users</Link></li>
                        <li><Link to="/Dashbord/AddDoctor">Add a Doctor</Link></li>
                        <li><Link to="/Dashbord/manageDoctor">Manage Doctor</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;