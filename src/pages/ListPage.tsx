import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Grid, Pagination } from "@mui/material";

import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import { useSearch } from "../utils/hooks";

type ListPageProps = {

};

const ListPage: React.FC<ListPageProps> = (props) => {
    // const [searchParams] = useSearchParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search.substring(1));
    const query = searchParams.get("query") ?? "";

    const count = 24;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { books, totalBooks, page, setPage } = useSearch(query, count);

    if (books === undefined) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container style={{ margin: "2rem 2rem 0 2rem" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
                    {books.map(book => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                            <Link to={{ pathname: "/book", search: `id=${book.id}` }} style={{ textDecoration: 'none' }}>
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