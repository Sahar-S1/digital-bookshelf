import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import Loading from "../components/Loading";
import { useBook } from "../utils/hooks";

type BookPageProps = {

};

const BookPage: React.FC<BookPageProps> = (props) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") ?? "";

    const book = useBook(id);

    if (book === undefined) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container style={{ margin: "2rem" }}>
                <Typography variant="h2">
                    {book.volumeInfo.title}
                </Typography>
            </Container>
        );
    }
};

export default BookPage;