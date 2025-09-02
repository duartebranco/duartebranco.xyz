export const projectCategories = {
    projects: {
        title: "Main Projects",
        description:
            "These are substantial projects that required significant development time and complexity.",
    },
    "side-projects": {
        title: "Side Projects",
        description:
            "These are small projects that I did only for my own pleasure.",
    },
    "open-source": {
        title: "Open Source Contributions",
        description:
            "These are meaningful contributions to already existing open source projects.",
    },
};

export const projects = [
    {
        id: 1,
        slug: "distributed-p2p-pytest-runner",
        title: "Distributed P2P Pytest Runner",
        category: "projects",
        description:
            "Distributed p2p system for running pytest across multiple nodes",
        fullDescription: [
            {
                text: "A lightweight, distributed, peer-to-peer, **test runner** for Python projects.",
            },
            {
                text: " It exposes an HTTP API to submit projects (from GitHub or as a ZIP), distributes test execution ([pytest](https://en.wikipedia.org/wiki/Pytest)) across a peer-to-peer network of nodes, aggregates results, and serves evaluation status, stats, and network info.",
            },
            {
                text: "It has fault tolerance and load balancing capabilities, and is designed to be run on multiple machines.",
            },
            {
                text: "This project was developed as part of the Distributed Systems course at the University of Aveiro.",
            },
        ],
        stack: ["Python", "Docker"],
        features: [
            "P2P task distribution with simple gossip-based peer discovery.",
            "Network and stats endpoints for observability.",
            "Load balancing and fault tolerance.",
            "Aggregated metrics.",
        ],
        date: "2025",
        image: "/images/projects/distributed-p2p-pytest-runner.png",
        githubUrl:
            "https://github.com/duartebranco/distributed-p2p-pytest-runner",
    },
    {
        id: 2,
        slug: "image-manipulation-languages",
        title: "Image Manipulation Languages",
        category: "projects",
        description:
            "Two domain-specific programming languages for image processing",
        fullDescription: [
            {
                text: "Two domain-specific **programming languages** for image processing and mathematical morphology operations:",
            },
            {
                text: " - IML (Image Manipulation Language): A **compiled** language for advanced image processing.",
            },
            {
                text: " - IIML (Interpreted Image Manipulation Language): A simpler, **interpreted** language for basic image creation.",
            },
            {
                text: "This project was developed as a final project for the Compilers course at the University of Aveiro.",
            },
        ],
        stack: ["Java", "Python", "ANTLR", "Bash"],
        features: [
            "Grammar made with ANTLR, allowing automatic generation of parsers and lexers.",
            "Compiler in Java for IML and interpreter in Python for IIML.",
            "Support for mathematical morphology operations.",
            "Support for advanced image processing operations.",
        ],
        date: "2025",
        image: "/images/projects/image-manipulation-languages.png",
        githubUrl:
            "https://github.com/duartebranco/image-manipulation-languages",
    },
    {
        id: 3,
        slug: "bashback",
        title: "bashback",
        category: "projects",
        description: "Simpler rsync in Bash",
        fullDescription: [
            {
                text: "A lightweight, incremental **backup utility** written in pure Bash that synchronizes directories and maintains backup integrity.",
            },
            {
                text: "In other words, it's [rsync](https://en.wikipedia.org/wiki/Rsync) in Bash.",
            },
            {
                text: "It backs up files, directories, and subdirectories recursively and incrementally; that is, it only updates the files that have changed since the last backup. It supports an exclusion list in the form of a file and regex pattern matching for selective backup.",
            },
            {
                text: "This project was developed as part of the Operating Systems course at the University of Aveiro.",
            },
        ],
        features: [
            "Incremental backups.",
            "Backup integrity.",
            "Recursion.",
            "Regex pattern matching.",
            "Exclusion list.",
        ],
        stack: ["Bash"],
        date: "2024",
        image: "/images/projects/bashback.png",
        githubUrl: "https://github.com/duartebranco/bashback",
    },
    {
        id: 4,
        slug: "templeos-pywal-colors",
        title: "TempleOS Pywal Colors",
        category: "side-projects",
        description: "Pywal for TempleOs",
        fullDescription: [
            {
                text: "A **Python script** that generates a **Theme.HC** ([HolyC](https://holyc-lang.com/)) file based on the generated [pywal](https://github.com/dylanaraps/pywal) colors, which can be used in [TempleOS](https://en.wikipedia.org/wiki/TempleOS) so that it matches your desktop's colors and aesthetics. Usage is fully explained in the README.md file.",
            },
            {
                text: "(Psst, it got a lot of love from the r/unixporn community - [post with 125k views.](https://www.reddit.com/r/unixporn/comments/1m0mk2o/templeos_pywal_colors_on_the_temple/))",
            },
        ],
        features: [
            "Automatic color scheme generation.",
            "Dark and light themes.",
            "Automatic color loading process.",
        ],
        stack: ["Bash", "HolyC", "Python"],
        date: "2025",
        githubStars: 13,
        image: "/images/projects/templeos-pywal-colors.gif",
        githubUrl: "https://github.com/duartebranco/TempleOs-pywal-colors",
    },
    {
        id: 5,
        slug: "dracula-palette-converter",
        title: "Dracula Palette Converter",
        category: "side-projects",
        description: "Convert images to Dracula's color scheme",
        fullDescription: [
            {
                text: "The Dracula Palette Converter is a **web application** that allows users to upload their favorite images/wallpapers and transform them to match the iconic [Dracula theme](https://draculatheme.com/).",
            },
            {
                text: "This tool first converts the image to grayscale and then colorizes each black, white and mid colored pixel to the respective color from Dracula's palette, making your images consistent with the Dracula theme.",
            },
            {
                text: "Made for [Hack Club's High Seas](https://highseas.hackclub.com/) !",
            },
        ],
        features: [
            "Palette conversion.",
            "Multi-format support.",
            "User-friendly interface.",
        ],
        stack: ["HTML", "CSS", "JavaScript"],
        date: "2024",
        githubStars: 3,
        image: "/images/projects/dracula-palette-converter.png",
        demoUrl: "https://duartebranco.github.io/DraculaPaletteConverter/",
        githubUrl: "https://github.com/duartebranco/DraculaPaletteConverter",
    },
    {
        id: 6,
        slug: "dijkstra-algorithm-shortest-paths",
        title: "Dijkstra's Algorithm for Shortest Paths",
        category: "side-projects",
        description:
            " Dijkstra's algorithm to find the shortest path between nodes in a graph on the TI-84 graphing calculator",
        fullDescription: [
            {
                text: "This program implements [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) to find the **shortest path** between nodes in a graph on the **TI-84+ CE graphing calculator** using **Python**.",
            },
            {
                text: "It allows users to input the number of nodes and the weights between pairs of nodes, and then calculates the shortest path and distance between a specified source and destination node. The program supports up to 26 nodes and infinite weights are denoted by 'i'.",
            },
            {
                text: "It has received over **1,000 downloads** on cemetech.net (see demo).",
            },
        ],
        features: [
            "Dijkstra’s algorithm implementation.",
            "Designed for TI-84+ CE calculators.",
        ],
        stack: ["Python"],
        date: "2024",
        image: "/images/projects/dijkstra-algorithm-shortest-paths.png",
        demoUrl: "https://www.cemetech.net/downloads/files/2495/x3081",
        githubUrl:
            "https://github.com/duartebranco/Dijkstra-s-Algorithm-for-Shortest-Paths",
    },
    {
        id: 7,
        slug: "remember-the-position",
        title: "Remember The Position",
        category: "side-projects",
        description: "Game to remember the position of the chess board",
        fullDescription: [
            {
                text: "This is a **web app game** that challenges players to **remember the exact positions of chess pieces** in midlegames/endgames after having 10 seconds to memorize them.",
            },
            {
                text: "I was inspired to do this after coming across some studies that reached the conclusion that masters can recall more pieces than a beginner if, and only if, it's a typical, possible and legal position.",
            },
            {
                text: "It was one of my first projects, and it got more than **400 users** from more than **40 countries**.",
            },
        ],
        features: [
            "Uses a list of pgn chess games to generate random positions.",
            "Cross-Platform.",
        ],
        stack: ["HTML", "CSS", "JavaScript", "jQuery"],
        date: "2023",
        image: "/images/projects/remember-the-position.png",
        demoUrl: "https://duartebranco.github.io/RememberThePosition",
        githubUrl: "https://github.com/duartebranco/RememberThePosition",
    },
    {
        id: 8,
        slug: "kobofileserver",
        title: "kobofileserver",
        category: "open-source",
        description:
            "Run it on Kobo device, then use browser to transfer file to device.",
        fullDescription: [
            {
                text: "KoboFileServer is a lightweight utility that runs directly on Kobo e‑readers and exposes a **simple web interface over Wi‑Fi** for transferring files to the device wirelessly, instead of connecting via USB.",
            },
            {
                text: "I contributed a set of **UI/CSS improvements** focused on **readability** and **responsiveness**, especially for smaller screens. I redefined the font sizing and layout to a more modern standard, as there was practically no CSS previously.",
            },
        ],
        date: "2024",
        githubStars: 37,
        image: "/images/projects/kobofileserver.png",
        githubUrl: "https://github.com/tylpk1216/kobofileserver",
    },
    {
        id: 9,
        slug: "zed-wal-theme",
        title: "Zed Wal Theme",
        category: "open-source",
        description:
            " 🎨 A theme for the Zed text editor that utilises your wal colour scheme",
        fullDescription: [
            {
                text: "This project is a **theme generator** for the [Zed text editor](https://en.wikipedia.org/wiki/Zed_(text_editor) that automatically adapts its color palette to the user’s current [pywal](https://github.com/dylanaraps/pywal) colors. All of this is done in Bash.",
            },
            {
                text: "My contribution focused on improving both **readability** and **extensibility**. I refined the **theme color mapping** to enhance contrast and legibility and reorganized the project structure by introducing a **dedicated modes folder** along with argument parsing logic.",
            },
            {
                text: "These changes allow users to define their own color mappings for the theme, resolving the issue where some themes made code unreadable.",
            },
        ],
        date: "2025",
        githubStars: 23,
        image: "/images/projects/zed-wal-theme.png",
        githubUrl: "https://github.com/Fuwn/zed-theme-wal",
    },
];
