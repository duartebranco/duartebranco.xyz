import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import ProjectDetail from "./pages/ProjectDetail";
import ArtDetail from "./pages/ArtDetail";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div
            className="App"
            style={{
                backgroundColor: "#829cba",
                minHeight: "100vh",
                color: "#f8f8ff",
            }}
        >
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/art" element={<Art />} />
                    <Route path="/art/:id" element={<ArtDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
