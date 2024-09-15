import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col border border-warning bg-info text-center">
                        <Link to="/">Home</Link> &nbsp; &nbsp;
                        <Link to="/About">About</Link> &nbsp; &nbsp;
                        <Link to="/Contact">Contact</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 border border-primary bg-danger">
                        <h1>Side Bar</h1>
                    </div>
                    <div className="col-9 border border-danger bg-primary">
                        <Outlet />
                    </div>
                </div>
                <div class='row border border-success text-center bg-warning '>
                    <div class='col'>
                        <h1>Footer</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
