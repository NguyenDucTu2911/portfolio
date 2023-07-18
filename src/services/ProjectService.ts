import axios from "./axios";

const fetchAllProject = () => {
    return axios.get("/")
}
export {
    fetchAllProject,
}