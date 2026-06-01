import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import { Button, InputLabel, InputTextarea } from "../forms/FormComponent";
import "./footer.css";

export default function Footer() {
    // Initialize Formspree's state handler
    const [state, handleSubmit] = useForm('mwvzdayz');

    // Show a success message if Formspree confirms submission
    if (state.succeeded) {
        return (
            <footer className="spacing-col gap-40">
                <div className="feedback spacing-row spacing-row-center spacing-col-justify gap-12">
                    <p style={{ color: 'green', fontWeight: 'bold' }}>
                        Terima kasih! Pesan Anda telah berhasil dikirim.
                    </p>
                </div>
            </footer>
        );
    }

    return (
        <footer className="spacing-col gap-40">
            <div className="brand spacing-row spacing-row-center gap-8">
                <img src="/Logo.png" alt="Logo" width={40} height={40} />
                <p>Dual Persona</p>
            </div>

            {/* feedback */}
            <div className="feedback spacing-row spacing-row-center spacing-col-justify gap-12">
                {/* FIX 1: Changed action URL to onSubmit react hook handler */}
                <form onSubmit={handleSubmit}>
                    <p>Tingalkan Pesan/Kesan Kepada Kami!</p>

                    {/* CRITICAL: Ensure your internal component maps 'name' to the native HTML input */}
                    <InputLabel
                        label="email"
                        id="email"
                        name="email"
                        type="email"
                        placeholder={"Masukan email anda"}
                        required
                    />
                    {/* Optional Formspree specific field validator */}
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <InputLabel
                        label="nama"
                        id="nama"
                        name="nama"
                        type="text"
                        placeholder={"Masukan nama anda"}
                        required
                    />

                    <InputTextarea
                        label="pesan"
                        id="pesan"
                        name="pesan"
                        placeholder={"Masukan pesan anda"}
                        required
                    />
                    <ValidationError prefix="Pesan" field="pesan" errors={state.errors} />

                    {/* FIX 2: Set button type explicitly to submit */}
                    <Button
                        type="submit"
                        label={state.submitting ? "Mengirim..." : "Kirim"}
                        variant="large large-rounded primary"
                        disabled={state.submitting}
                    />
                </form>

                <div className="socialMedia spacing-col gap-24">
                    <h1>Jangan biarkan kebebasan internet mengubahmu menjadi orang asing yang penuh benci.</h1>
                    <div className="list-profiles spacing-col spacing-col-center">
                        <Link to={"https://www.instagram.com/nicholieus__/"} target="_blank" className="profile spacing-col spacing-col-center gap-4">
                            <img src="../src/assets/profile 1.jpg" alt="nicholieus__" width={80} height={80} />
                            <p>nicholieus__</p>
                        </Link>
                        <Link to={"https://www.instagram.com/itsmaxie._/"} target="_blank" className="profile spacing-col spacing-col-center gap-4">
                            <img src="../src/assets/profile 3.jpg" alt="itsmaxie._" width={80} height={80} />
                            <p>itsmaxie._</p>
                        </Link>
                        <p>temukan kami di instagram</p>
                        <Link to={"https://www.instagram.com/itsmaxie._/"} target="_blank" className="profile spacing-col spacing-col-center gap-4">
                            <img src="../src/assets/profile 4.jpg" alt="itsmaxie._" width={80} height={80} />
                            <p>gloriyhwang</p>
                        </Link>
                        <Link to={"https://www.instagram.com/itsmaxie._/"} target="_blank" className="profile spacing-col spacing-col-center gap-4">
                            <img src="../src/assets/profile 2.jpg" alt="itsmaxie._" width={80} height={80} />
                            <p>callista._cl</p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* tagline */}
            <div className="tagline">
                <h1>Manners maketh man</h1>
            </div>

            <p className="copyright">© 2026 Sun Group | UAS Cyberpsychology - Universitas Bunda Mulia. All Rights Reserved.</p>
        </footer>
    );
}
