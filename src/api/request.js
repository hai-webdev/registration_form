import axios from "axios";

const request = axios.create();

request.interceptors.response.use((res) => {
  if (!res.status === 200) {
    return res.data;
  }
  if(res.data.status === 1){
    if(res.data.info.rs){
      return res.data.info.rs;
    }
    return res.data.info;
  }
  if(res.data.status === "ok"){
    return res.data.content;
  }
  return res.data;
});

export default request;
