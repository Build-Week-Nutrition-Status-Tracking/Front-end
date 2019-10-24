import React, {useState} from 'react'

const AddCommunityForm = ({setCommunities, communities, postCommunity})=>{
    //still working on this!
    const [community, setCommunity] = useState('')
    // const currentCountryId = props.match.params.id
    console.log(postCommunity)
    const submitForm=(e)=>{
        e.preventDefault()
        console.log(community)
        setCommunities([...communities, community])
        setCommunity('')
    }
    return(
    <form>
        <input name='community' onChange={(e)=>{setCommunity(e.target.value)}} placeholder='Community' value={community}></input>
        <button onClick={(e)=>{submitForm(e)}}>Add Community!</button>
    </form>
    )
}

export default AddCommunityForm 