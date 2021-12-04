import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url)=>{
    const {data}= await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b58111cd7bmsh6bb41433bc57590p1acebdjsn82b65d2dc1a6'
          }
        })
}