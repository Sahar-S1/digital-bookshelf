import React from "react";
import { LinearProgress, Container, Rating } from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

import { useBook, useSearch } from "../utils/hooks";

type TestPageProps = {

};

const TestPage: React.FC<TestPageProps> = (props) => {
    const books = useSearch("alchemist");
    const book = useBook("FzVjBgAAQBAJ");

    if (books === undefined || book === undefined) {
        return (
            <LinearProgress />
        )
    } else {
        return (
            <>
                <SearchSharpIcon />
                <Container>
                    Searched Books Length = {books.length}
                </Container>
                <Container>
                    Book Title = {book.volumeInfo.title}
                    <br />
                    Book Subtitle = {book.volumeInfo.subtitle}
                    <br />
                    Book rating = <Rating value={book.volumeInfo.averageRating} precision={0.5} readOnly></Rating>
                </Container>
            </>
        )
    }

};

export default TestPage;