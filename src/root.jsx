import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import './bootstrap-custom.scss'
import AppNavBar from "./components/Navbar/AppNavBar";
export function Layout({
    children,
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>My App</title>
                <Meta />
                <Links />
            </head>
            <body>
                <AppNavBar />
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function Root() {
    return <Outlet />;
}
