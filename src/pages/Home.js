import React from "react";

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "calc(100vh - 80px)",
                padding: "2rem",
                textAlign: "center",
            }}
        >
            {/* Name */}
            <h1
                style={{
                    fontSize: "3rem",
                    margin: "0 0 1rem 0",
                    color: "#f8f8ff",
                    fontWeight: "bold",
                }}
            >
                Duarte Branco
            </h1>

            {/* Title */}
            <p
                style={{
                    fontSize: "1.3rem",
                    margin: "0 0 3rem 0",
                    color: "#f8f8ff",
                    opacity: 0.9,
                }}
            >
                Computer Science Student
            </p>

            {/* Contact Info */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "3rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <a
                        href="mailto:duartebranco35@gmail.com"
                        style={{
                            color: "#f8f8ff",
                            textDecoration: "none",
                            fontSize: "1.2rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.8rem",
                        }}
                    >
                        duartebranco35@gmail.com
                    </a>
                    <a
                        href="tel:+351967111251"
                        style={{
                            color: "#f8f8ff",
                            textDecoration: "none",
                            fontSize: "1.2rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.8rem",
                        }}
                    >
                        +351 967111251
                    </a>
                </div>

                {/* Social Links */}
                <div
                    style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}
                >
                    <a
                        href="https://github.com/duartebranco"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#f8f8ff",
                            textDecoration: "none",
                            fontSize: "2rem",
                            padding: "1rem",
                            borderRadius: "50%",
                            backgroundColor: "#9fb7d2",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "4rem",
                            height: "4rem",
                            transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#7a91b0";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#9fb7d2";
                        }}
                    >
                        <span className="nerd-emoji"></span>
                    </a>
                    <a
                        href="https://linkedin.com/in/duartebranco"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#f8f8ff",
                            textDecoration: "none",
                            fontSize: "2rem",
                            padding: "1rem",
                            borderRadius: "50%",
                            backgroundColor: "#9fb7d2",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "4rem",
                            height: "4rem",
                            transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#7a91b0";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#9fb7d2";
                        }}
                    >
                        <span className="nerd-emoji"></span>
                    </a>
                    <a
                        href="https://instagram.com/duartebc"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#f8f8ff",
                            textDecoration: "none",
                            fontSize: "2rem",
                            padding: "1rem",
                            borderRadius: "50%",
                            backgroundColor: "#9fb7d2",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "4rem",
                            height: "4rem",
                            transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#7a91b0";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#9fb7d2";
                        }}
                    >
                        <span className="nerd-emoji"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
