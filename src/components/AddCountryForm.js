import React, {useState} from 'react'

const AddCountryForm = ({setCountry})=>{// for list of countries
    const [country, setCountryObj] = useState({country:''})// for individual country
    
    const submitForm=(e)=>{
        e.preventDefault()
        setCountry(country)

    }
    return(
    <form>
        <input name='Country' onChange={(e)=>{setCountryObj({country:e.target.value})}} placeholder='Country' value={country.country} ></input>
        <button onClick={(e)=>{submitForm(e)}}>Add Country</button>
    </form>
    )
}

export default AddCountryForm
