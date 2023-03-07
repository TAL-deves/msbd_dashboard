import { fetchData, sendData } from "./handleApiWithAxios";

// Call the fetchData function to get data from the API
const data = await fetchData("/users");

// Call the sendData function to post data to the API
const newData = { name: "John Doe", age: 30 };
const response = await sendData("/users", newData);
