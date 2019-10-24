import React, { useState, useEffect } from "react";
import AddCountryForm from "./AddCountryForm";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {connect} from 'react-redux'
import {getCountry, setCountry} from '../actions/index'

const Countries = ({countries, getCountry, history, error, setCountry}) => {
  useEffect(()=>{
    getCountry()// gets country from backend
  },[])
  return (
    <div>
      <Box p={3}>
        <Typography variant="h3" noWrap>
          Country Page
        </Typography>
      </Box>

      {countries.map(country => (
        <div key={country.id}
          onClick={() => {
            history.push(`/country/${country.id}`);
          }}
        >
          <Box
            bgcolor="#ffecb3"
            borderRadius={16}
            width="40%"
            height="100%"
            boxShadow={3}
            p={2}
            m={1}
            mx="auto"
          >
            <Typography key={country.id} variant="h5" component="h1">
              {country.country}
            </Typography>
          </Box>
        </div>
      ))}
        <AddCountryForm setCountry={setCountry}/>
    </div>
  );
};

const mapStateToProps = (state) =>{
return {
  countries: state.operation.countries
}
}

export default connect(mapStateToProps,{getCountry, setCountry})(Countries);
