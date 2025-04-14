import axios from "axios";

const main_url = axios.create({
baseURL: "http://95.130.227.240/api/account/", 
});
export default main_url;