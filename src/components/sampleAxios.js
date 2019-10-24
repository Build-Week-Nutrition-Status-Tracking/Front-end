import axios from 'axios'

axios
.get('https://backend-nutrition-tracker.herokuapp.com/screenings/country')
.then(res=>console.log(res))
.catch(err=>console.log(err.response))