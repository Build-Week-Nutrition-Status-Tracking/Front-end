import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {getUsers} from '../actions/index'

const Users = ({users,error,getUsers}) => {
    //axios call to get users --> display their Id, name, admin, country_code 
    console.log(users)
    useEffect(()=>{
        getUsers()
    },[])
    const [admin, setAdmin] = useState(false)
    // const [country, setCountry] = useState(countries[0])
    const handleChange = (e) =>{
        setAdmin(!  admin)
    }
    // const handleSubmit =(e)=>{
    //     e.preventDefault()
    //     admin?console.log('null'):console.log(country)
    // }  


    return ( 
        <div>
            {users.map(user=>
                <>
                    <p>{user.id}</p>
                    <p>{user.username}</p>
                    <p>admin: {user.admin ? 'true':'false'}</p>
                    <p>Country Code: {user.user_country_id? user.user_country_id: 'not assigned'}</p>
                    {/* <form>
                        <label> Grant Administrative Privileges<br/>
                            <select onChange={(e)=>{handleChange(e)}}>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </label> */}
                        
                        {/* {admin?<select disabled>
                            <option>-</option>)
                        </select>:<select onChange={(e)=>{setCountry(e.target.value)}}>
                            {countries.map(country=>
                                <option>{country}</option>)}
                        </select>}
                        <button onClick={handleSubmit}>Save Changes</button>
                    </form> */}
                </>
            )} 

        </div>
    );
};
const mapStateToProps = state => {
    return{
        ...state,
        users: state.operation.users,
        error: state.operation.error
    }
}

export default connect(mapStateToProps,{getUsers})(Users);