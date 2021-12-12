import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

type FooterProps = {

};

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="white">
                    © 2021 Vidyalankar Polytechnic
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;