import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {

};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography color="inherit" variant="h6">
                        Digital Bookshelfs
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;