import axios from "./request";
const getToken = (id) => {
  return axios.get("/api.php?f=token", { params: { id } });
};

const getData = async (key, option_id) => {
  const token = await getToken(key, option_id);
  const data = { token,ext:{option_id} };
  return axios.get("/api.php?f=phpok", {
    params: data,
  });
};

const postMsg = async (id,dataVal) => {
  const data = {
    id,
    ...dataVal
  }
  const result = await axios.post("/api.php?c=post&f=ok", data,{headers: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'}});
  return result;
}

const getContent = async (id) => {
  return await axios.get("/api.php?c=content", {params:{id}})
}

export default {
  getToken,
  getData,
  postMsg,
  getContent
};
