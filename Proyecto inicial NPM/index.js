const axios = require('axios');

// https://reqres.in/api/users esta es la api que vamos a consultar con axio

const getUsers = async () => 
{
    try 
    {
        let users = await axios.get("https://reqres.in/api/users");
        console.log("Status:", users.status, "Users", users.data.data);
    } 
    catch (error) 
    {
        console.log(error);
    }
}
console.log(getUsers())