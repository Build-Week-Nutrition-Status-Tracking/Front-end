//rgb(40,143,140)
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.div`
display: flex;
justify-content: space-around;
background: rgb(40,143,140);
padding: 2%;
margin:0;   
a{
    color: snow;
    font-size: 18px;
    text-decoration: none;
}
`

const Navbar = () => {
    const [logged, setLogged] = useState(false)
    const token = localStorage.getItem('token')
    useEffect(()=>{
        console.log('logged in')
    },[token])
    return (
        <Nav>
            <Link to="/homepage">Home Page</Link>
            {(localStorage.getItem('token'))?<><Link to="/users">Users</Link>
            <Link to='/signin' 
            onClick={()=>{
                setLogged(!logged)
                localStorage.removeItem('token')}}>Logout</Link></>:<>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
            </>}
        </Nav>
    );
};

export default Navbar;