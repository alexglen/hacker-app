import React from "react";
import ReactDOM from "react-dom/client";
import {AppRoutes} from "./router";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import "./index.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </QueryClientProvider>
);



