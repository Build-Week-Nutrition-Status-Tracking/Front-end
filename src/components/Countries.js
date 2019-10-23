import React, { useState } from "react";
import AddCountryForm from "./AddCountryForm";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Countries = props => {
  const [countries, setCountries] = useState([
    "Brazil",
    "East Timor",
    "Peru",
    "Ecuador",
    "Cambodia",
    "Pakistan",
    "Colombia",
    "Nepal",
    "Mexico",
    "Nigeria",
    "Morocco",
    "Brunei"
  ]);
  let user = {
    admin: true,
    id: 1
  };
  let country = {
    id: 0
  };
  return (
    <div>
      <Box p={3}>
        <Typography variant="h3" noWrap>
          Country Page
        </Typography>
      </Box>

      {countries.map(country => (
        <div
          onClick={() => {
            props.history.push(`/country/${country}`);
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
            <Typography variant="h5" component="h1">
              {country}
            </Typography>
          </Box>
        </div>
      ))}

      {user.id === country.id ? (
        <AddCountryForm setCountries={setCountries} countries={countries} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Countries;
