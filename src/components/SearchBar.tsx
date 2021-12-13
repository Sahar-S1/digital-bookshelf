import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {

};

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const [query, setQuery] = React.useState("");
    const navigate = useNavigate();

    return (
        <Paper
            component="form"
            onSubmit={(e: any) => {
                (e as Event).preventDefault();
                navigate({ pathname: "/search", search: `query=${query}` });
            }}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
        >
            <InputBase
                name="query"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Book"
                onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;