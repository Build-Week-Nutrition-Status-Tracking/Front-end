import React, {useState} from 'react';

const Users = () => {
    //axios call to get users --> display their Id, name, admin, country_code 
    const [users, setUsers] = useState([{
        id: 1,
        name: 'uzias',
        admin: false,
        country_code: null 
    }])

    return (
        <div>
            {users.map(user=>
                <>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.admin}</p>
                    <p>{user.country_code}</p>
                </>
            )}
        </div>
    );
};

export default Users;