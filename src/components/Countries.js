import React, {useState} from 'react'
import AddCountryForm from './AddCountryForm'
import styled from 'styled-components'

const CountryDiv = styled.div`
cursor: pointer;
`

const Countries = (props) =>{
    const [countries, setCountries] = useState(['Brazil','Peru','Ecuador', 'Colombia'])
    let user = {
        admin: true,
        id: 1
    }
    let country = {
        id:0
    }
    return(
    <div>
        <h1>Country Page</h1>
         {countries.map(country=><CountryDiv onClick={()=>{props.history.push(`/country/${country}`)}}><h3>{country}</h3></CountryDiv>)}
         {(user.id===country.id)?<AddCountryForm setCountries={setCountries} countries={countries}/>:<></>}
    </div>
    )
}

export default Countries