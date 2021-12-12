import React from "react";
import { Container, Typography } from "@mui/material";

import SearchBar from "../components/SearchBar";

type HomePageProps = {

};

const HomePage: React.FC<HomePageProps> = (props) => {
    return (
        <>
            <Container>
                <Typography variant="h2" margin={10} color="primary" textAlign="center">
                    Digital Bookshelf
                </Typography>
            </Container>
            <Container style={{ margin: "2rem auto", width: "80%" }}>
                <SearchBar />
            </Container>
        </>
    );
};

export default HomePage;