import React from "react";

const About = () => {
    return (
        <div className="about-container">
            <h1
                style={{
                    fontSize: "3rem",
                    margin: "0 0 2rem 0",
                    color: "#f8f8ff",
                    textAlign: "center",
                }}
            >
                About Me
            </h1>
            <div className="about-container-inside">
                <div
                    style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.6",
                        color: "#f8f8ff",
                        textAlign: "left",
                    }}
                >
                    <p style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
                        Hi there! I'm <strong>Duarte</strong>, a{" "}
                        <strong>passionate creative developer</strong> who loves
                        bringing his ideas to life through code!
                    </p>

                    <p style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
                        I'm <strong>19 years old</strong>, from{" "}
                        <strong>Aveiro, Portugal</strong>, and I'm currently
                        taking my Bachelor's degree in{" "}
                        <strong>Computer Science and Engineering</strong> at the{" "}
                        <strong>University of Aveiro</strong>.
                    </p>

                    <p style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
                        This is my <strong>personal website</strong> where I
                        share my projects, artwork, and, hopefully, more things
                        in the near future. I decided to make this website after
                        getting a domain name as a gift from{" "}
                        <a
                            href="https://highseas.hackclub.com/"
                            style={{
                                color: "#2B6CB0",
                                textDecoration: "underline",
                            }}
                        >
                            Hack Club High Seas
                        </a>
                        .
                    </p>

                    <p style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
                        When I'm not coding, you'll find me{" "}
                        <strong>sketching</strong>,{" "}
                        <strong>playing chess</strong> or training{" "}
                        <strong>Martial Arts</strong>.
                    </p>

                    <div
                        style={{
                            backgroundColor: "#5d7fa3",
                            padding: "1.5rem",
                            borderRadius: "12px",
                            marginTop: "2rem",
                        }}
                    >
                        <h3
                            style={{
                                margin: "0 0 1rem 0",
                                color: "#f8f8ff",
                                fontSize: "1.3rem",
                            }}
                        >
                            Tools and Tech I use
                        </h3>
                        <ul
                            style={{
                                margin: 0,
                                paddingLeft: "1.5rem",
                                color: "#f8f8ff",
                            }}
                        >
                            <li>Linux (Arch and Debian-based distros)</li>
                            <li>
                                Vim / Neovim, anything with vim-like motions
                            </li>
                            <li>
                                <a
                                    href="https://suckless.org/"
                                    style={{
                                        color: "#2B6CB0",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Suckless Software
                                </a>
                            </li>
                            <li>
                                A variety of self-hosted services (OpenVPN,
                                NextCloud, Navidrome, Plex, Syncthing, ...)
                            </li>
                            <li>
                                Cryptocurrency (I only use{" "}
                                <a
                                    href="https://suckless.org/"
                                    style={{
                                        color: "#2B6CB0",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Monero
                                </a>
                                )
                            </li>
                        </ul>
                    </div>

                    <div
                        style={{
                            backgroundColor: "#5d7fa3",
                            padding: "1.5rem",
                            borderRadius: "12px",
                            marginTop: "2rem",
                        }}
                    >
                        <h3
                            style={{
                                margin: "0 0 1rem 0",
                                color: "#f8f8ff",
                                fontSize: "1.3rem",
                            }}
                        >
                            Technical Skills
                        </h3>
                        <ul
                            style={{
                                margin: 0,
                                paddingLeft: "1.5rem",
                                color: "#f8f8ff",
                            }}
                        >
                            <li>
                                Object-oriented programming and design patterns
                            </li>
                            <li>Version control with Git</li>
                            <li>Data structures and algorithms</li>
                            <li>Network configuration and security</li>
                            <li>Web development (frontend and backend)</li>
                            <li>API development and integration</li>
                            <li>Database design and management</li>
                        </ul>
                    </div>

                    <div
                        style={{
                            backgroundColor: "#5d7fa3",
                            padding: "1.5rem",
                            borderRadius: "12px",
                            marginTop: "2rem",
                        }}
                    >
                        <h3
                            style={{
                                margin: "0 0 1rem 0",
                                color: "#f8f8ff",
                                fontSize: "1.3rem",
                            }}
                        >
                            Programming Languages
                        </h3>
                        <ul
                            style={{
                                margin: 0,
                                paddingLeft: "1.5rem",
                                color: "#f8f8ff",
                            }}
                        >
                            <li>C / C++</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>Bash</li>
                            <li>Assembly (MIPS)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
