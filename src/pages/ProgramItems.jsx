import { Button } from "../forms/FormComponent";
import { useNavigate } from "react-router-dom";
import "./program.css";


export default function ProgramItems({ handleSetDataProgram }) {
    const navigate = useNavigate();
    const dataContent = [
        {
            id: 'P1',
            title: "Digital Alter-Ego Test",
            subTitle: "Mengukur perubahan kepribadian/persona (Dualitas Diri).",
            url: "../src/assets/test content 1.png"
        },
        {
            id: 'P2',
            title: "Cyber-Aggression test",
            subTitle: "Mengukur tindakan/perilaku menyerang yang merugikan orang lain.",
            url: "../src/assets/test content 2.png"
        },
        {
            id: 'P3',
            title: "The Double-Face Audit",
            subTitle: "Mengukur kesengajaan manipulasi identitas melalui akun kedua (second account).",
            url: "../src/assets/test content 3.png"
        },
    ]

    return (
        <div className="programs spacing-col gap-24">
            <div className="programs-title spacing-row spacing-col-justify">
                <h1>
                    ayo uji integritas digitalmu
                </h1>
                <p>
                    Pilih dan ikuti salah satu program tes psikometri interaktif kami di bawah ini untuk mengukur caramu berkomunikasi di ruang siber.
                </p>
            </div>
            <div className="programs-list spacing-row gap-16">
                {dataContent.map((data) => {
                    return (
                        <div className="programs-content spacing-col gap-12" key={data.id}>
                            <img src={data.url} alt={data.title} />
                            <div className="spacing-col gap-24">
                                <div className="spacing-col gap-4">
                                    <h3 className="title fw-light">{data.title}</h3>
                                    <p className="subTitle fw-light">{data.subTitle}</p>
                                </div>
                                <div className="spacing-col gap-8">
                                    <p className="fw-light">Gratis</p>
                                    <Button label={"Mulai Tes"} variant="large large-rounded tertiary maxContent" onClick={() => {
                                        if (handleSetDataProgram) {
                                            handleSetDataProgram(data.id, data.title, data.subTitle);
                                        }
                                        navigate("/tes-mandiri/test-pages");
                                    }} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}