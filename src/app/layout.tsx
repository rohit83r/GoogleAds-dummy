import { ReactNode } from "react";
import '../../public/styles.css'
import Link from "next/link";

export const metadata = {
    title: "Simple Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>

        </head>
        <body>
        <header>
            <nav>
                <div><strong>My Portfolio</strong></div>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
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
