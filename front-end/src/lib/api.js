import axios from "axios";
const baseUrl = "http://localhost:4000/";

const client = axios.create({
  baseURL: baseUrl,
});

const request = (options) => {
  const onSuccess = (response) => {
    return Promise.resolve(response.data);
  };

  const onError = (error) => {
    console.error("Request Failed:", error.config);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;

const fetch = async () => {
  const data = await request({
    method: "get",
    url: "/",
  });

  return data.result;
};

export const getData = async () => {
  const data = await fetch();
  return data;
};

// export const getData = () => {
//   return axios.get(`${baseUrl}/`);
// };
