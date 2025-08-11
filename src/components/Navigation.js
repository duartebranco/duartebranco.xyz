import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: " Home" },
        { path: "/about", label: " About" },
        { path: "/projects", label: " Projects" },
        { path: "/art", label: " Art" },
    ];

    return (
        <nav className="nav-container">
            <div className="nav-items">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={
                            location.pathname === item.path ? "active" : ""
                        }
                        style={{
                            color: "#f8f8ff",
                            textDecoration: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            transition: "background-color 0.2s ease",
                            fontSize: "1.3rem",
                            fontWeight:
                                location.pathname === item.path
                                    ? "bold"
                                    : "normal",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#7a91b0";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "transparent";
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
