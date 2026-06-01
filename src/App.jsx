import "./App.css"
import { StrictMode, useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import ScrollToTop from "./Navbar & Footer/ScrollToTop";
import Navbar from "./Navbar & Footer/Navbar"
import HomePages from "./pages/HomePages"
import TestPages from "./pages/TestPages"
import Footer from "./Navbar & Footer/Footer";
import ProgramPages from "./pages/ProgramPages";
import AboutPages from "./pages/AboutPages";
import ArticlePages from "./pages/ArticlePages";
import BlogPages from "./pages/BlogPages";

function TemplatePages({ isDarkMode, toggleDarkMode }) {
  return (
    <div className={`container ${isDarkMode ? 'container-dark' : 'container-light'}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = (value) => {
    setIsDarkMode(value);
    localStorage.setItem("darkMode", value);
  };

  // data programs
  const [IdProgram, setIdProgram] = useState(() => {
    return localStorage.getItem("idProgram")
  })
  const [titleProgram, setTitleProgram] = useState(() => {
    return localStorage.getItem("titleProgram")
  })
  const [subTitleProgram, setSubTitleProgram] = useState(() => {
    return localStorage.getItem("subTitleProgram")
  })

  const handleSetDataProgram = (id, title, subTitle) => {
    setIdProgram(id)
    setTitleProgram(title)
    setSubTitleProgram(subTitle)

    localStorage.setItem("idProgram", id)
    localStorage.setItem("titleProgram", title)
    localStorage.setItem("subTitleProgram", subTitle)
  }

  return (
    <StrictMode>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}></Suspense>
        <Routes>
          {/* beranda */}
          <Route
            path="/"
            element={<TemplatePages isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
          >
            <Route index element={<HomePages handleSetDataProgram={handleSetDataProgram} />} />
          </Route>
          {/* tentang kami */}
          <Route path="/tentang-kami" element={<TemplatePages isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
          >
            <Route index element={<AboutPages />} />
          </Route>
          {/* program */}
          <Route
            path="/tes-mandiri"
            element={<TemplatePages isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
          >
            <Route index element={<ProgramPages />} />
            <Route path="/tes-mandiri/test-pages" element={<TestPages id={IdProgram} title={titleProgram} />} />
          </Route>
          {/* artikel */}
          <Route path="/artikel" element={<TemplatePages isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}>
            <Route index element={<ArticlePages />} />
            <Route path="/artikel/blog-pages/:id" element={<BlogPages />} />
          </Route>
        </Routes>
      </Router>
    </StrictMode>
  )
}