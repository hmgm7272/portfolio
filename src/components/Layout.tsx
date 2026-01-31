import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import './Layout.css'

export default function Layout() {
    const items = [
        { label: "home", to: "/" },
        { label: "about", to: "/about" },
        { label: "works", to: "/works" },
        { label: "project", to: "/project" },
    ];

    return (
        <div>
            <div className="layout">
                <aside className="layout__aside">
                    <Menu items={items} />
                </aside>

                <div className="layout__right">
                    <main className="layout__main">
                        <div className="mainInner">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
            <footer className="layout__footer">
                © {new Date().getFullYear()} Yuki Hamagami
            </footer>
        </div>
    );
}