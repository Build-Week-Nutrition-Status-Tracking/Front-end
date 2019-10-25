//rgb(40,143,140)
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.div`
display: flex;
justify-content: space-around;
`

const Navbar = () => {
    const [logged, setLogged] = useState(false)
    const token = localStorage.getItem('token')
    useEffect(()=>{
        console.log('logged in')
    },[token])
    return (
        <Nav>
            {localStorage.getItem('token')?<><Link to='/signin' 
            onClick={()=>{
                setLogged(!logged)
                localStorage.removeItem('token')}}>Logout</Link><br></br></>:<>
            <Link to="/signin">Sign In</Link> <br />
            <Link to="/signup">Sign Up</Link>
            <br />
            </>}
            <Link to="/homepage">Home Page</Link>
        </Nav>
    );
};

export default Navbar;