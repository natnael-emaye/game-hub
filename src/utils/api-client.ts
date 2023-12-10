import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e19683af0bf243719c00eeda7c5f8150",
    },
});
