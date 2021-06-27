import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {

    const submitLogout = () => {
        localStorage.removeItem('user');
    }

    return (

        <div>
            
            
                <NavContent className="nav justify-content-end">
                    <li className="nav-item">
                    
                        <Link to='/items' className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/items/new" className="nav-link">Add Rental</Link>
                    </li>
                    <li>
                        <Link to='/' className="nav-link">
                            <span onClick={() => submitLogout()}>Logout</span>
                        </Link>
                    </li>
                </NavContent>
         </div>
    )
}

export default NavBar;

const NavContent=styled.div`
    width: 90%;
    margin: 0 auto;
    position: absolute;
    padding: 0 70px;
    top: 5px;
    list-style-type: none;
    li{
        font-size: 20px;
        margin-top: 10px;
        a{
            color: grey;
        }
    }
`