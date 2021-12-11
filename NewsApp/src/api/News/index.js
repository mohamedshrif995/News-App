import axios from 'axios';

// News  data coming from api endpoint

export const NewsData = () => {

    const url = '/api/news'
    return axios.get(url)
        .then(response => response.data)
}