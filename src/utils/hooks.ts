/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";

import { Book } from './../models/Book';
import { search, getBook } from './gbooks';

export function useSearch(query: string) {
    const [books, setBooks] = React.useState<Book[]>();

    React.useEffect(() => {
        search(query).then(bs => setBooks(bs));
    }, []);

    return books;
}

export function useBook(id: string) {
    const [book, setBook] = React.useState<Book>();

    React.useEffect(() => {
        getBook(id).then(b => setBook(b));
    }, []);

    return book;
}