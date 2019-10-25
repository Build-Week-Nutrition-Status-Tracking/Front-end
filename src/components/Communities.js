import React, { useEffect, useState } from "react";
import AddCommunityForm from "./AddCommunityForm";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {getCommunity, postCommunity} from '../actions/index'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'



const Communities = ({history, match, communities, getCommunity, isFetching, postCommunity, community}) => {
  const currentCountryId = match.params.id
  useEffect(()=>{
    getCommunity(currentCountryId)// gets country from backend
  },[])



  return isFetching?<></>:
    (<div>
       {communities.length?<h1>{communities[0].country}</h1>:<></>}
      {communities.map(community => (
        <>
          <div
            onClick={() => {
              history.push({
                pathname: `/country/${currentCountryId}/${community.id}`,
                state:{community}
              });
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
                {community.name}
              </Typography>
            </Box>
          </div>
        </>
      ))}
      
        <AddCommunityForm
          postCommunity={postCommunity}
          id={currentCountryId}
        />
    </div>)
  
};
const mapStateToProps = state =>{
  return{
    ...state,
    communities: state.operation.country.communities,
    isFetching: state.operation.isFetching,
    community: state.operation.community
  }
}
export default connect(mapStateToProps, {getCommunity, postCommunity})(Communities);

{/* <Loader
  type="Puff"
  color="#00BFFF"
  height={100}
  width={100}
  timeout={3000} //3 secs

/> */}