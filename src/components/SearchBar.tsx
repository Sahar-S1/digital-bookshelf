import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {

};

const SearchBar: React.FC<SearchBarProps> = (props) => {
    return (
        <Paper
            component="form"
            method="get"
            action="/search"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
        >
            <InputBase
                name="query"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Book"
            />
            <IconButton type="submit" sx={{ p: '10px' }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;