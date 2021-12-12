import axios from 'axios';

import { Book } from './../models/Book';

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    timeout: 10000,
    headers: undefined
});

export const search = async (query: string) => {
    const res = await axiosInstance.get<{ items: Book[] }>("volumes", {
        params: {
            q: query,
            maxResults: 40,
        }
    });

    return res.data.items;
}

export const getBook = async (id: string) => {
    const res = await axiosInstance.get<Book>(`volumes/${id}`);

    return res.data;
}