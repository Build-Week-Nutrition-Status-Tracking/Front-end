import React, { useState } from "react";
import AddCommunityForm from "./AddCommunityForm";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Communities = props => {
  const currentCountry = props.match.params.id;
  const [communities, setCommunities] = useState([
    "los angeles",
    "rowland heights",
    "chino",
    "walnut"
  ]);
  let user = {
    admin: true
  };
  return (
    <div>
      <h1>{currentCountry}</h1>
      {communities.map(community => (
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
            {community}
          </Typography>
        </Box>
      ))}
      {user.admin ? (
        <AddCommunityForm
          setCommunities={setCommunities}
          communities={communities}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Communities;
