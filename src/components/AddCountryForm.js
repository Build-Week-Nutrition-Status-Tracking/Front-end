import React, {useState} from 'react'

const AddCountryForm = ({setCountries, countries})=>{// for list of countries
    const [country, setCountry] = useState('')// for individual country
    
    const submitForm=(e)=>{
        e.preventDefault()
        console.log(country)
        setCountries([...countries, country])
        setCountry('')
    }
    return(
    <form>
        <input name='country' onChange={(e)=>{setCountry(e.target.value)}} placeholder='Country' value={country} ></input>
        <button onClick={(e)=>{submitForm(e)}}>Add Country</button>
    </form>
    )
}

export default AddCountryForm
