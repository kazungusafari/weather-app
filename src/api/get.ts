import axios from "axios"

export const get = async (url: string, params: any) => (await axios.get(url, {
    params, headers: {
        'x-rapidapi-host': process.env.REACT_APP_HOST as string,
        'x-rapidapi-key': process.env.REACT_APP_API_KEY as string
    }
}))
