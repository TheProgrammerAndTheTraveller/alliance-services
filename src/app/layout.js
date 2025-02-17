import AppNavBar from "../components/Navbar/AppNavBar";
import './bootstrap-custom.scss'

import Footer from "../components/Footer/Footer";
export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                <AppNavBar></AppNavBar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    )
}