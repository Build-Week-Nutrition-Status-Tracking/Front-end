import React, {useState} from 'react';
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const Users = () => {
    //axios call to get users --> display their Id, name, admin, country_code 
    const [users, setUsers] = useState([{
        id: 1,
        name: 'uzias',
        admin: false,
        country_code: null 
    }])
    const [admin, setAdmin] = useState(false)
    const [country, setCountry] = useState(countries[0])
    const handleChange = (e) =>{
        setAdmin(!  admin)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        admin?console.log('null'):console.log(country)
    }  


    return (
        <div>
            {users.map(user=>
                <>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.admin ? 'true':'false'}</p>
                    <p>{user.country_code}</p>
                    <form>
                        <label> Grant Administrative Privileges<br/>
                            <select onChange={(e)=>{handleChange(e)}}>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </label>
                        
                        {admin?<select disabled>
                            <option>-</option>)
                        </select>:<select onChange={(e)=>{setCountry(e.target.value)}}>
                            {countries.map(country=>
                                <option>{country}</option>)}
                        </select>}
                        <button onClick={handleSubmit}>Save Changes</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Users;