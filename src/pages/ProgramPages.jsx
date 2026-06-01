import Header from "../Navbar & Footer/Header";
import "./program.css";
import ProgramItems from "./ProgramItems";

export default function ProgramPages() {
    return (
        <div className="content-area spacing-col gap-40">
            <Header
                page_title="Tes Mandiri"
                headline="Jelajahi fakta menarik seputar Online Disinhibition Effect"
                description="Kumpulan artikel pilihan seputar Online Disinhibition Effect yang akan mengubah caramu memandang interaksi di dunia maya."
            />
            <ProgramItems />
        </div>
    )
}