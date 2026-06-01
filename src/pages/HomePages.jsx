import "./home.css";
import { Button } from "../forms/FormComponent";
import { useNavigate } from "react-router-dom";
import ProgramItems from "./ProgramItems";
import { ArticleHighlight } from "./ArticlePages";
import { Testimonial } from "./AboutPages";
import { Contacts } from "./AboutPages";

export default function HomePages({ handleSetDataProgram }) {
    const navigate = useNavigate();
    return (
        <div className="content-area spacing-col gap-40">
            <div className="placeholder spacing-row spacing-col-justify gap-12">
                <h1 className="fw-light">
                    Satu Layar, Dua Persona
                </h1>
                <Button
                    label="Cek Skor Agresi"
                    variant="large large-rounded tertiary"
                    size="regular"
                />
                <p className="fw-light">
                    Ramah di dunia nyata, tapi jadi monster di dunia maya? Lepas topeng agresimu dan mari bangun ruang siber yang lebih sehat untuk semua.
                </p>
            </div>
            {/* about */}
            <div className="about spacing-row gap-16">
                <div className="left spacing-col gap-12">
                    <h1 className="fw-light">Kenapa Kami ada disini?</h1>
                    <div className="images"></div>
                </div>
                <div className="right spacing-col gap-12">
                    <p className="fw-light">
                        DualPersona merupakan media pembelajaran dan refleksi, dimana tujuan kami membuat website ini untuk mengedukasi dan memahami prilaku Netizen dalam bersosial media khususnya di Internet ✨
                        <br />
                        <br />
                        Kalian tak asing dengan orang bermuka dua kan? dalam cyberpsychology prilaku ini dikenal as “Online Disinhibition Effect” sebuah kondisi psikologis di mana seseorang merasa "bebas dari konsekuensi" sehingga berani memunculkan sisi gelapnya yang bermuka dua.
                    </p>
                    <Button
                        label="Baca Lebih Lanjut"
                        variant="large large-rounded maxContent tertiary"
                        size="regular"
                        onClick={() => {
                            navigate('/tentang-kami')
                        }}
                    />
                </div>
            </div>
            {/* program */}
            <ProgramItems handleSetDataProgram={handleSetDataProgram} />
            {/* article */}
            <ArticleHighlight />
            {/* testimonial */}
            <Testimonial />
            {/* contact */}
            <div style={{ height: "500px" }}>
                <Contacts />
            </div>
        </div>
    )
}