import axios from "../data/axios";

const FAQ_URL = "/question";

const getFaq = async () => {
  await axios
    .get(FAQ_URL, { headers: { "Content-Type": "application/json" } })
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};

export default getFaq();
