import { ReactNode } from "react";

export const metadata = {
    title: "Simple Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
        <header>
            <nav>
                <div><strong>My Portfolio</strong></div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
        </body>
        </html>
    );
}
