import axios from "axios";

console.log(process.env)

export const get = async (url: string, params: any) => await axios.get(url, {
    params, headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'fa38636ec2msh501f8203b2bd94bp186348jsn215ff867d9c4'
    }
})