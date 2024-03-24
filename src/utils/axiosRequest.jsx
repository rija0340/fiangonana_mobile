import axios from "axios";
export const fetchData = async (params, setter) => {
    console.log(params.type);
    try {
        const response = await axios.get("http://localhost/backend_fiangonana_mobile/traitement.php", { params });
        setter(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};