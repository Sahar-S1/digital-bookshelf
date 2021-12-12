/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";

import { Book } from './../models/Book';
import { search, getBook } from './gbooks';

export function useSearch(query: string, count: number) {
    const [page, setPage] = React.useState(1);
    const [books, setBooks] = React.useState<Book[]>();
    const [totalBooks, setTotalBooks] = React.useState(0);

    React.useEffect(() => {
        setBooks(undefined);
        search(query, count, page).then(res => {
            setBooks(res.books);
            setTotalBooks(res.totalBooks);
        });
    }, [page]);

    return { books, totalBooks, page, setPage };
}

export function useBook(id: string) {
    const [book, setBook] = React.useState<Book>();

    React.useEffect(() => {
        getBook(id).then(b => setBook(b));
    }, []);

    return book;
}