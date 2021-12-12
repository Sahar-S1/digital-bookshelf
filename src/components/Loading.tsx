import React from "react";
import { LinearProgress } from "@mui/material";

type LoadingProps = {

};

const Loading: React.FC<LoadingProps> = (props) => {
    return (
        <LinearProgress />
    );
};

export default Loading;