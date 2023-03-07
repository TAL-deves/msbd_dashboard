import axios from 'axios';


export default async function getUserData(){
    let data = await axios.get("https://dummyjson.com/users")
    return data;
}