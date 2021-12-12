import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

type HeaderProps = {

};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                        <Typography color="white" variant="h6">
                            OBDB
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;