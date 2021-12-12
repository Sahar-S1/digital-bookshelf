import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Grid, Pagination } from "@mui/material";

import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import { useSearch } from "../utils/hooks";

type ListPageProps = {

};

const ListPage: React.FC<ListPageProps> = (props) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const count = 24;
    const { books, totalBooks, page, setPage } = useSearch(query, count);

    if (books === undefined) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container style={{ margin: "2rem" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
                    {books.map(book => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                            <Link to={`/book?id=${book.id}`} style={{ textDecoration: 'none' }}>
                                <BookCard book={book} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <Container style={{ padding: "2rem" }}>
                    <Pagination
                        color="primary"

                        // Hack to solve Google API Bug
                        // count={Math.ceil(totalBooks / count)}
                        count={25}

                        page={page}
                        onChange={(e, p) => setPage(p)}
                        showFirstButton
                        showLastButton
                        style={{ display: "flex", justifyContent: "center" }}
                    />
                </Container>
            </Container>
        );
    }
};

export default ListPage;