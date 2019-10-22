import React, {useState} from 'react'
import AddCommunityForm from './AddCommunityForm'

const Communities = (props) =>{
    const currentCountry = props.match.params.id
    const [communities, setCommunities] = useState(['los angeles','rowland heights','chino', 'walnut'])
    let user = {
        admin: true
    }
    return(
    <div>
        <h1>{currentCountry}</h1>
         {communities.map(community=><h3>{community}</h3>)}
         {(user.admin)?<AddCommunityForm setCommunities={setCommunities} communities={communities}/>:<></>}
    </div>
    )
}

export default Communities