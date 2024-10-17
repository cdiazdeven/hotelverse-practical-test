import axios, { AxiosError } from 'axios';

import { NewsType } from '../types/NewsType';

export const fetchNewsByCategory = async (BASE_URL:string, API_KEY:string, category: string, page: number = 1, pageSize: number = 10) => {

    try {

        const response = await axios.get(`${BASE_URL}/everything?q=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`);

        const { articles } = response.data

        const articlesNoRemoved = articles.filter((article: NewsType) => article.author != null || article.title != '[Removed]')

        return articlesNoRemoved;
        
    } catch (error) {

        const { message } = error.response.data

        throw new Error(message);
        
    } 
    
    
};