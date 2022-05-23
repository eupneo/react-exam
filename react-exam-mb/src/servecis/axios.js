import axios from "axios";

axios.defaults.baseURL = "https://zenithar-dev.herokuapp.com";
axios.defaults.headers.common = {'Authorization': "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs"};
export default axios;