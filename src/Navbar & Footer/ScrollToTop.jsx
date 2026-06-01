import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 1. Gulirkan jendela browser utama ke atas (jika ada rute luar kontainer)
        window.scrollTo(0, 0);

        // 2. Gulirkan elemen kontainer bertema utama milikmu ke atas
        const appContainer = document.querySelector(".container");
        if (appContainer) {
            appContainer.scrollTop = 0; // Memaksa scroll container kembali ke titik 0
        }
    }, [pathname]); // Dipicu otomatis setiap kali rute halaman berubah

    return null;
}