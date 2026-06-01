import { Button } from "../forms/FormComponent"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css"

export default function Navbar({ isDarkMode, setIsDarkMode }) {
    const [isBurgers, setIsBurgers] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const appContainer = document.querySelector(".container");

        const handleScroll = () => {
            const currentScroll = appContainer ? appContainer.scrollTop : window.scrollY;

            if (currentScroll > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Pasangkan event listener ke wadah yang tepat
        if (appContainer) {
            appContainer.addEventListener('scroll', handleScroll);
        } else {
            window.addEventListener('scroll', handleScroll);
        }

        // Fungsi pembersihan (cleanup) saat komponen tidak lagi dirender
        return () => {
            if (appContainer) {
                appContainer.removeEventListener('scroll', handleScroll);
            } else {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const pageActive = (path) => location.pathname === path;


    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} spacing-row spacing-row-center gap-12 spacing-col-justify`}>
            <div className="brand spacing-row spacing-row-center gap-8">
                <img src="/Logo.png" alt="Logo" width={40} height={40} />
                <p>Dual Persona</p>
            </div>
            <div className={`pages-list spacing-row spacing-row-center gap-12 ${isBurgers ? 'active' : ''}`}>
                <Link to={"/"} className={` ${pageActive("/") ? "active" : ""}`}>
                    <div className="pages-item spacing-row spacing-row-center gap-4">
                        <div className="icons-small">
                            <i className="ph ph-house"></i>
                        </div>
                        <span>Beranda</span>
                    </div>
                </Link>
                <Link to={"/tentang-kami"} className={` ${pageActive("/tentang-kami") ? "active" : ""}`}>
                    <div className="pages-item spacing-row spacing-row-center gap-4">
                        <div className="icons-small">
                            <i className="ph ph-question"></i>
                        </div>
                        <span>Tentang Kami</span>
                    </div>
                </Link>
                <Link to={"/tes-mandiri"} className={` ${pageActive("/tes-mandiri") ? "active" : ""}`}>
                    <div className="pages-item spacing-row spacing-row-center gap-4">
                        <div className="icons-small">
                            <i className="ph ph-brain"></i>
                        </div>
                        <span>Tes Mandiri</span>
                    </div>
                </Link>
                <Link to={"/artikel"} className={` ${pageActive("/artikel") ? "active" : ""}`}>
                    <div className="pages-item spacing-row spacing-row-center gap-4">
                        <div className="icons-small">
                            <i className="ph ph-article"></i>
                        </div>
                        <span>Artikel</span>
                    </div>
                </Link>
                <div className="btn-group spacing-row spacing-row-center gap-12">
                    <button className="btn-icons" onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setIsDarkMode(!isDarkMode);
                    }}>
                        <div className="icons-small">
                            <i className={`ph ${isDarkMode ? 'ph-sun' : 'ph-moon'}`}></i>
                        </div>
                        <span>{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
                    </button>
                    <Button
                        label="Test ODS"
                        variant="large primary large-rounded"
                        type="button"
                        onClick={() => { navigate('/tes-mandiri') }} />
                </div>
            </div>
            <button className="burgers btn-icons" onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsBurgers(!isBurgers);
            }}>
                <div className="icons-large">
                    <i className={`ph ${isBurgers ? 'ph-x' : 'ph-list'}`}></i>
                </div>
            </button>
        </nav>
    )
}