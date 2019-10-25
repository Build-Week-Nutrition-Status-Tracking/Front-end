import React, {useState} from 'react'

const AddCommunityForm = ({ postCommunity, id})=>{
    //still working on this!
    const [community, setCommunity] = useState({name:''})
    // const currentCountryId = props.match.params.id
console.log(id)
    const submitForm=(e)=>{
        e.preventDefault()
        postCommunity(id, community)
        setCommunity('')
    }
    return(
    <form>
        <input name='name' onChange={(e)=>{
            console.log(community)
            setCommunity({[e.target.name]:e.target.value})}} placeholder='Community' value={community.name}></input>
        <button onClick={(e)=>{submitForm(e)}}>Add Community!</button>
    </form>
    )
}

export default AddCommunityForm 