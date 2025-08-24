export const projectCategories = {
    projects: {
        title: "Projects",
        description:
            "Substantial projects requiring significant development time and complexity",
    },
    "side-projects": {
        title: "Side Projects",
        description:
            "These are small projects that I did only for my own pleasure",
    },
    "open-source": {
        title: "Open Source Contributions",
        description:
            "Meaningful contributions to already existing open source projects",
    },
};

export const projects = [
    {
        id: 1,
        title: "Distributed P2P Pytest Runner",
        category: "projects",
        description:
            "Distributed p2p system for running pytest across multiple nodes",
        fullDescription: [
            {
                text: "A lightweight, distributed p2p test runner for Python projects.",
            },
            {
                text: " It exposes an HTTP API to submit projects (from GitHub or as a ZIP), distributes test execution (pytest) across a peer-to-peer network of nodes, aggregates results, and serves evaluation status, stats, and network info.",
            },
            {
                text: "It has fault tolerance and load balancing capabilities, and is designed to be ran in multiple machines.",
            },
            {
                text: "This project was developed as part of the Distributed Systems course at the University of Aveiro.",
            },
        ],
        stack: ["Python", "Docker"],
        features: [
            "P2P task distribution with simple gossip-based peer discovery.",
            "Aggregated metrics: totals, per-project and per-module breakdowns, elapsed time, and a simple nota_final (final_grade).",
            "Network and stats endpoints for observability.",
            "Load balancing and fault tolerance.",
        ],
        date: "2025",
        githubUrl:
            "https://github.com/duartebranco/distributed-p2p-pytest-runner",
    },
    {
        id: 2,
        title: "Image Manipulation Languages",
        category: "projects",
        description:
            "Two domain-specific programming languages for image processing",
        fullDescription: [
            {
                text: "Two domain-specific programming languages for image processing and mathematical morphology operations:",
            },
            {
                text: "IML (Image Manipulation Language) - A compiled language for advanced image processing",
            },
            {
                text: "IIML (Interpreted Image Manipulation Language) - A simpler interpreted language for basic image creation",
            },
            {
                text: "This project was developed as a final project for the Compilers course at the University of Aveiro.",
            },
        ],
        stack: ["Java", "Python", "ANTLR"],
        features: [
            "Grammar made in ANTLR, so it can automatically generate parsers and lexers",
            "Compiler in Java for IML and Interpreter in Python for IIML",
            "Support for mathematical morphology operations",
            "Support for advanced image processing operations",
        ],
        date: "2025",
        githubUrl:
            "https://github.com/duartebranco/image-manipulation-languages",
    },
    {
        id: 3,
        title: "bashback",
        category: "projects",
        description: "Simpler rsync in Bash",
        fullDescription: [
            {
                text: "A **lightweight**, incremental **backup utility** written in pure **Bash** that synchronizes directories and maintains **backup integrity**.",
            },
            {
                text: "In other words, it's **rsync** in **Bash**.",
            },
            {
                text: "It backs up files, directories and sub-directories **recursively** and **incrementally**, meaning, it only updates the files that have changed since the last backup. It supports a **exclusion list** in a form of a file and **regex pattern matching** for selective backup.",
            },
            {
                text: "This project was developed as part of the Operating Systems course at the University of Aveiro.",
            },
        ],
        features: [
            "Incremental backups",
            "Backup integrity",
            "Recursion",
            "Regex pattern matching",
            "Exclusion list",
        ],
        stack: ["Bash"],
        date: "2024",
        image: "/images/projects/bashback.png",
        githubUrl: "https://github.com/duartebranco/bashback",
    },
    {
        id: 4,
        title: "TempleOS Pywal Colors",
        category: "side-projects",
        description: "Pywal for TempleOs",
        fullDescription: [
            {
                text: "A Python script that generates a Theme.HC (HolyC) file, based on the generated pywal colors, that can be used in TempleOS, so that it matches your desktop's colors/aesthetics. The usage is all in explained in the README.md file.",
            },
            {
                text: "",
            },
            {
                text: "(Psst, it got a lot of love from the r/unixporn community - [post with 125k views](https://www.reddit.com/r/unixporn/comments/1m0mk2o/templeos_pywal_colors_on_the_temple/))",
            },
        ],
        features: [
            "Lightning-fast task creation and editing",
            "Category-based organization",
            "Due date reminders",
            "Progress tracking and statistics",
            "Dark/light theme support",
            "Offline functionality",
        ],
        stack: ["Bash", "HolyC", "Python"],
        date: "2025",
        githubStars: 11,
        image: "/images/projects/templeospywal.gif",
        githubUrl: "https://github.com/duartebranco/TempleOs-pywal-colors",
    },
    {
        id: 3,
        title: "Dracula Palette Converter",
        category: "side-projects",
        description: "Convert images to Dracula's color scheme",
        fullDescription:
            "ColorPalette Generator is a sophisticated tool that leverages color theory algorithms to create beautiful, accessible color palettes. The application analyzes color relationships, ensures proper contrast ratios for accessibility compliance, and provides export options for various design tools. Whether you're designing a website, creating brand guidelines, or working on digital art, this tool helps you find the perfect color combinations while maintaining visual harmony and usability standards.",
        features: [
            "AI-powered color harmony analysis",
            "WCAG accessibility compliance checking",
            "Export to multiple formats (CSS, Sketch, Figma)",
            "Real-time preview modes",
            "Color blindness simulation",
            "Palette history and favorites",
        ],
        date: "2024",
        githubStars: 3,
        image: "/images/projects/3.png",
        demoUrl: "https://duartebranco.github.io/DraculaPaletteConverter/",
        githubUrl: "https://github.com/duartebranco/DraculaPaletteConverter",
    },
    {
        id: 5,
        title: "Dijkstra's Algorithm for Shortest Paths",
        category: "side-projects",
        description:
            " Dijkstra's algorithm to find the shortest path between nodes in a graph on the TI-84 graphing calculator",
        fullDescription:
            "ColorPalette Generator is a sophisticated tool that leverages color theory algorithms to create beautiful, accessible color palettes. The application analyzes color relationships, ensures proper contrast ratios for accessibility compliance, and provides export options for various design tools. Whether you're designing a website, creating brand guidelines, or working on digital art, this tool helps you find the perfect color combinations while maintaining visual harmony and usability standards.",
        features: [
            "AI-powered color harmony analysis",
            "WCAG accessibility compliance checking",
            "Export to multiple formats (CSS, Sketch, Figma)",
            "Real-time preview modes",
            "Color blindness simulation",
            "Palette history and favorites",
        ],
        date: "2024",
        image: "/images/projects/5.png",
        demoUrl: "https://www.cemetech.net/downloads/files/2495/x3081",
        githubUrl:
            "https://github.com/duartebranco/Dijkstra-s-Algorithm-for-Shortest-Paths",
    },
    {
        id: 6,
        title: "Remember The Position",
        category: "side-projects",
        description: "Game to remember the position of the chess board",
        fullDescription:
            "ColorPalette Generator is a sophisticated tool that leverages color theory algorithms to create beautiful, accessible color palettes. The application analyzes color relationships, ensures proper contrast ratios for accessibility compliance, and provides export options for various design tools. Whether you're designing a website, creating brand guidelines, or working on digital art, this tool helps you find the perfect color combinations while maintaining visual harmony and usability standards.",
        features: [
            "AI-powered color harmony analysis",
            "WCAG accessibility compliance checking",
            "Export to multiple formats (CSS, Sketch, Figma)",
            "Real-time preview modes",
            "Color blindness simulation",
            "Palette history and favorites",
        ],
        date: "2024",
        image: "/images/projects/6.png",
        demoUrl: "https://duartebranco.github.io/RememberThePosition",
        githubUrl: "https://github.com/duartebranco/RememberThePosition",
    },
    {
        id: 7,
        title: "kobofileserver",
        category: "open-source",
        description:
            "Run it on Kobo device, then use browser to transfer file to device.",
        fullDescription: [
            {
                text: "**KoboFileServer** is a lightweight utility that runs directly on Kobo e‑readers and exposes a **simple web interface over Wi‑Fi** for **transferring files** to the device **wirelessly**, instead of plugging in over a USB connection.",
            },
            {
                text: "I contributed a set of **UI/CSS improvements** focused on **readability** and **responsiveness**, specially for smaller screens. I redefined the font sizing and layout to a more modern standard, since the there was pratically no CSS previouslly.",
            },
        ],
        date: "2024",
        githubStars: 37,
        image: "/images/projects/7.png",
        githubUrl: "https://github.com/tylpk1216/kobofileserver",
    },
    {
        id: 8,
        title: "Zed Wal Theme",
        category: "open-source",
        description:
            " 🎨 A theme for the Zed text editor that utilises your wal colour scheme",
        fullDescription: [
            {
                text: "This project is a **theme generator** for the **Zed text editor** that automatically adapts its color palette to the user’s current **wal (pywal) colors**.The project’s purpose is to bridge system-wide color theming and the coding environment, so that each time the wallpaper (and thus wal palette) changes, Zed inherits a consistent, accessible set of syntax and UI colors.",
            },
            {
                text: "My contribution focused on improving both readability and extensibility. I refined the theme color mapping to enhance contrast and legibility (commit: “Improve theme readability”) and reorganized the project structure by introducing a dedicated modes folder along with argument parsing logic (commit: “modes folder and argument parsing”). These changes make it easier to evolve multiple theme variants (or future modes) and allow users to generate or select themes more flexibly via command-line arguments, while ensuring the resulting palette remains visually balanced and usable.",
            },
        ],
        features: ["", "", "", "", "", ""],
        date: "2025",
        githubStars: 23,
        image: "/images/projects/8.png",
        githubUrl: "https://github.com/Fuwn/zed-theme-wal",
    },
];
