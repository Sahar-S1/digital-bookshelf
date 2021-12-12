import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Grid, Rating, Typography } from "@mui/material";

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
        const data: { [key: string]: string } = {
            "ISBN": book.volumeInfo.industryIdentifiers.map(ii => ii.identifier).join(", "),
            "Published": book.volumeInfo.publishedDate,
            "Publisher": book.volumeInfo.publisher,
            "Author": book.volumeInfo.authors.join(", "),
            "Page Count": book.volumeInfo.pageCount.toString(),
            "Language": book.volumeInfo.language,
            "Genere": book.volumeInfo.categories.join(", "),
            "Price": book.saleInfo.listPrice?.amount + " " + book.saleInfo.listPrice?.currencyCode,
            "Ratings": book.volumeInfo.averageRating + ";" + book.volumeInfo.ratingsCount,
        };

        return (
            <Container style={{ margin: "2rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <img width="80%" src={book.volumeInfo.imageLinks.thumbnail ?? ""} alt="bookCoverPage" />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography variant="h5">Details: </Typography>
                        <Container style={{ textAlign: "justify", wordWrap: "break-word" }}>
                            <table>
                                {Object.entries(data).map(([key, val]) =>
                                    (key === "Ratings") ?
                                        (
                                            <tr>
                                                <td>{key}: </td>
                                                <td>
                                                    <Rating value={parseFloat(val.split(";")[0])} precision={0.5} readOnly />
                                                    {`(${val.split(";")[1]})`}
                                                </td>
                                            </tr>
                                        ) :
                                        (
                                            <tr>
                                                <td>{key}: </td>
                                                <td>{val}</td>
                                            </tr>
                                        )
                                )}
                            </table>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h5">Description: </Typography>
                        <Container style={{ textAlign: "justify", wordWrap: "break-word" }}>
                            <div style={{ marginRight: "2rem" }} dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        );
    }
};

export default BookPage;