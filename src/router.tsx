import React, {Suspense, lazy} from "react";
import {Route, Routes} from "react-router-dom";
import {Loader} from "./components/Loader/Loader";

const AllNewsPage = lazy(() => import("./pages/AllNewsPage")
    .then(({AllNewsPage}) => ({default: AllNewsPage})));

const NewsPage = lazy(() => import("./pages/NewsPage")
    .then(({NewsPage}) => ({default: NewsPage})));

export const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route element={<AllNewsPage/>} path="/"/>
                <Route element={<NewsPage/>} path="/:id"/>
            </Routes>
        </Suspense>
    )
}
