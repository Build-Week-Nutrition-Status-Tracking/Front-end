import React, { useEffect, useState } from "react";
import AddCommunityForm from "./AddCommunityForm";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {getCommunity} from '../actions/index'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'



const Communities = ({history, match, communities, getCommunity, isFetching, postCommunity}) => {
  const [com, setCom] = useState([])
  const currentCountryId = match.params.id
  console.log('isFetching',isFetching)
  useEffect(()=>{
    getCommunity(currentCountryId)// gets country from backend
    console.log('community',communities)
  },[])

  console.log(communities)


  return isFetching?<></>:
    (<div>
       {communities.length?<h1>{communities[0].country}</h1>:<></>}
      {communities.map(community => (
        <>
          <div
            onClick={() => {
              history.push(`/country/${currentCountryId}/${community}`);
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
          setCommunities={setCom}
          communities={com}
        />
    </div>)
  
};
const mapStateToProps = state =>{
  console.log(state)
  return{
    ...state,
    communities: state.operation.country.communities,
    isFetching: state.operation.isFetching
  }
}
export default connect(mapStateToProps, {getCommunity})(Communities);

{/* <Loader
  type="Puff"
  color="#00BFFF"
  height={100}
  width={100}
  timeout={3000} //3 secs

/> */}