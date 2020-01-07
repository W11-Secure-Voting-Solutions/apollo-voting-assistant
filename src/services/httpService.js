const axios = require("axios");
const URL = ""; 

async function queryBB () {
    const response = await axios.get(URL);
    return response;
}
