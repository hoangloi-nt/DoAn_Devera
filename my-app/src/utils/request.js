const { default: axios } = require("axios");

const request = axios.create({
  baseURL: "http://localhost:1337/"
});

export const get = async (path, option = {}) => {
    const respone = await request.get(path, option);
    return respone.data;
}

export default request;