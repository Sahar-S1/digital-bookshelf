import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import BookPage from '../pages/BookPage';

type DefaultRouterProps = {

};

const DefaultRouter: React.FC<DefaultRouterProps> = (props) => {
    return (
        // <BrowserRouter basename={process.env.NODE_ENV === "development" ? undefined : process.env.PUBLIC_URL}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="search" element={<ListPage />} />
                    <Route path="book" element={<BookPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default DefaultRouter;