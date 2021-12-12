import axios from 'axios';

import { Book } from './../models/Book';

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    timeout: 10000,
    headers: undefined
});

export const search = async (query: string, count: number, page: number = 1) => {
    const res = await axiosInstance.get<{ kind: string; totalItems: number; items: Book[]; }>("volumes", {
        params: {
            q: query,
            maxResults: count,
            startIndex: (page - 1) * count,
        }
    });

    return {
        totalBooks: res.data.totalItems,
        books: res.data.items
    };
}

export const getBook = async (id: string) => {
    const res = await axiosInstance.get<Book>(`volumes/${id}`);

    return res.data;
}