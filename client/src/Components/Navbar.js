import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({backTo, link}) => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper" style={{backgroundColor:"rgb(1, 22, 39)"}}>
                    <Link to="/" className="brand-logo center" style={{fontFamily: 'Philosopher sans-serif'}}>Collabot</Link>
                    <ul id="nav-mobile" className="right">
                        <li><a><i className="material-icons right">exit_to_app</i>Logout</a></li>
                    </ul>
                    <ul id="nav-mobile" className="left">
                    {
                        backTo ? 
                            <li><Link to={link}><i className="material-icons left">arrow_back</i>Back To {backTo}</Link></li>
                        :
                            null
                    }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar