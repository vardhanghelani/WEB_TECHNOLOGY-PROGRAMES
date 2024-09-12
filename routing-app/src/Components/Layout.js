import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col border border-warning">
                        <Link to="/">Home</Link> &nbsp; &nbsp;
                        <Link to="/About">About</Link> &nbsp; &nbsp;
                        <Link to="/Contact">Contact</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 border border-primary">
                        <h1>Side Bar</h1>
                    </div>
                    <div className="col-9 border border-danger">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
