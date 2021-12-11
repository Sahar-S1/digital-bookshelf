import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

type FooterProps = {

};

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2021 Vidyalankar Polytechnic
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;