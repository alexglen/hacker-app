import React from "react";
import "./Menu.scss";

export const Menu = ({children}: { children: React.ReactNode }) => (
    <div>
        <header className="menu">
            <div className="logo">
                Hacker News
            </div>
        </header>
        <main>
            {children}
        </main>
    </div>
)
