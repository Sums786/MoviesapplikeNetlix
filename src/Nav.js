import React, {useState, useEffect } from 'react';
import './Nav.css';

function Nav() {


    const [show, handleShow] = useState(false);

    useEffect(() => {

        handleShow()

        window.addEventListener("scroll", () => {
            if(window.scrollY > 150)
            handleShow(true);
            else
            handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`navbar ${show && "nav_black"}`}>
            <h1 className="name">Netflix Clone</h1>
        </div>
    );
}

export default Nav;
