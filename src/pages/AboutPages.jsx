import "./about.css";
import { useState } from "react";
import Header from "../Navbar & Footer/Header";
import testi_1 from "../assets/profile 1.jpg"
import testi_2 from "../assets/profile 2.jpg"
import testi_3 from "../assets/profile 3.jpg"
import { Button } from "../forms/FormComponent";

export const Testimonial = ({ }) => {
    const dataTestimoni = [
        {
            id_testimonial: "T1",
            name: "Aris Pratama",
            img_url: testi_1,
            role: "Mahasiswa",
            testimonial: "Awalnya iseng coba 'The Double-Face Audit' karena punya second account yang isinya cuma buat sambat. Pas keluar hasilnya, jujur agak tertampar pas baca bagian Catatan Pentingnya. Web ini bener-bener jadi cermin yang bagus banget buat refleksi diri biar lebih bijak ngetik di medsos."
        },
        {
            id_testimonial: "T2",
            name: "Nadia Utami",
            img_url: testi_2,
            role: "Content Creator",
            testimonial: "Sebagai orang yang tiap hari berinteraksi di ruang digital, kuis 'Cyber-Aggression Detector' di web ini ngebantu aku banget buat sadar kapan emosi dunia nyata mulai ngerusak kontrol jempol aku. Fitur unduh hasil PDF kustomnya juga rapi dan profesional banget layout-nya!"
        },
        {
            id_testimonial: "T3",
            name: "Rian Nicholas",
            img_url: testi_3,
            role: "Pegawai Swasta",
            testimonial: "Websites yang sangat edukatif! Teori Online Disinhibition Effect yang awalnya kelihatan kaku dan teoritis banget di buku kuliah, bisa dikemas jadi kuis interaktif yang seru, gampang dimengerti, dan langsung ngasih solusi konkrit di bagian rekomendasinya."
        }
    ]
    return (
        <div className="testimonial-list spacing-row spacing-row-center gap-16">
            {
                dataTestimoni.map((testimonial) => {
                    return (
                        <div className="testimonial-card spacing-col spacing-col-justify gap-12" key={testimonial.id_testimonial}>
                            <div className="spacing-col gap-12">
                                <div className="icons-large"><i className="ph-fill ph-quotes"></i></div>
                                <p style={{ fontStyle: "italic" }}>"{testimonial.testimonial}"</p>
                            </div>
                            <div className="spacing-row spacing-row-center gap-8">
                                <img src={testimonial.img_url} alt={testimonial.name} style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
                                <div className="spacing-col gap-4">
                                    <p className="fw-bold">{testimonial.name}</p>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const Contacts = () => {
    return (
        <div className="contact spacing-col spacing-col-center spacing-row-center gap-16">
            <h1>Mau tau lebih lanjut?</h1>
            <p>Hubungi kami melalui</p>
            <Button label={"WhatsApp"} variant="whatsapp large large-rounded" onClick={() => window.open("https://wa.me/6287881050700", "_blank")} />
        </div>
    )
}
export default function AboutPages() {
    const dataProfile = [
        {
            id: 'P1',
            nama: "Sun Yofta Nicholieus",
            nim: "31230048",
            prodi: "Sistem Informasi",
            universitas: "Universitas Bunda Mulia Jakarta",
            tahun: "2023",
            semester: 'semester 6',
            role: 'System Designer & Developer',
            img_url: "../src/assets/profile 1.jpg"

        },
        {
            id: 'P2',
            nama: "Calista Chrestella Liawen",
            nim: "31230045",
            prodi: "Sistem Informasi",
            universitas: "Universitas Bunda Mulia Jakarta",
            tahun: "2023",
            semester: 'semester 6',
            role: 'content-researcher',
            img_url: "../src/assets/profile 2.jpg"

        },
        {
            id: 'P3',
            nama: "Maxwell Dean",
            nim: "31230069",
            prodi: "Sistem Informasi",
            universitas: "Universitas Bunda Mulia Jakarta",
            tahun: "2023",
            semester: 'semester 6',
            role: 'quiz-designer',
            img_url: "../src/assets/profile 3.jpg"
        },
        {
            id: 'P4',
            nama: "Gloria Veliska Hwang",
            nim: "31230064",
            prodi: "Sistem Informasi",
            universitas: "Universitas Bunda Mulia Jakarta",
            tahun: "2023",
            semester: 'semester 6',
            role: 'content-editor',
            img_url: "../src/assets/profile 4.jpg"

        },
    ]

    const dataBenefit = [
        {
            title: "Refleksi Diri Melalui Sains (Self-Awareness)",
            icon: "ph ph-brain",
            desc: "Melalui 3 program tes mandiri kustom kami (Digital Alter-Ego Test, Cyber-Aggression Detector, dan The Double-Face Audit), kamu bisa mendeteksi sejauh mana kualitas kontrol moral dan tingkat kemunafikan digitalmu secara instan, objektif, dan akurat berdasarkan parameter ilmu psikologi siber."
        },
        {
            title: "Edukasi Populer Ilmiah (Digital Literacy)",
            icon: "ph ph-notebook",
            desc: "Akses gratis ke berbagai artikel dan ulasan mendalam di menu Edu-Corner kami untuk memahami mengapa internet bisa mengubah perilaku seseorang, cara mengelola emosi digital (Digital Emotion Literacy), serta tips menjaga kesehatan mental dari paparan netizen toksik."
        },
        {
            title: "Gerakan Ketik Bijak (Social Impact)",
            icon: "ph ph-leaf",
            desc: "Menjadi bagian dari komunitas dan kampanye digital 'Keyboard Bukan Senjata'. Website ini memfasilitasi kamu untuk menyebarkan semangat literasi siber ke berbagai platform media sosial lainnya demi memutus rantai perundungan daring (cyberbullying)."
        }
    ];

    const [activeIndexes, setActiveIndexes] = useState([]);

    const handleToggle = (index) => {
        setActiveIndexes((prev) => {
            // Check if the index is already in the array
            if (prev.includes(index)) {
                // If it is, remove it (close it)
                return prev.filter((i) => i !== index);
            } else {
                // If it's not, add it (open it)
                return [...prev, index];
            }
        });
    };

    return (
        <div className="content-area spacing-col gap-40">
            <Header
                page_title="Tentang Kami"
                headline="Satu Layar, Dua Persona"
                description="Website ini dibangun sebagai media edukasi digital tentang cara berpikir dan bertindak manusia di ranah digital. Membahas mengenai Online Disihinbition Effect, yaitu kecenderungan individu untuk mengekspresikan diri secara lebih terbuka, jujur, atau bahkan agresif saat berkomunikasi melalui internet atau platform digital, dibandingkan ketika berinteraksi secara langsung dengan orang lain."
            />
            {/* profile */}
            <div className="teams spacing-col spacing-row-center  gap-16">
                <h1>Siapa sih dibalik website DuaPersona ini?</h1>
                <div className="profile-list spacing-row gap-16">
                    {dataProfile.map((profile) => (
                        <div className="profile-card spacing-col gap-8" key={profile.id}>
                            <img src={profile.img_url} alt={profile.name} style={{ aspectRatio: "3/4", objectFit: "cover", width: "100%" }} />
                            <div className="spacing-row spacing-row-center spacing-col-justify gap-8">
                                <div className="spacing-col gap-4">
                                    <p>{profile.nama}</p>
                                    <p>{profile.nim}</p>
                                </div>
                                <p>{profile.tahun}</p>
                            </div>
                            <p>{profile.semester} - {profile.prodi}</p>
                            <h3>{profile.universitas}</h3>
                            <h1>{profile.role}</h1>
                        </div>
                    ))}
                </div>
            </div>
            {/* purpose */}
            <div className="purpose spacing-col spacing-row-center gap-16">
                <h1>Apa Tujuan Kami?</h1>
                <div className="purpose-list spacing-row gap-12">
                    <div className="purpose-card spacing-col gap-8">
                        <div className="spacing-row spacing-row-center gap-8">
                            <div className="icons-large">
                                <i className="ph ph-graduation-cap"></i>
                            </div>
                            <p className="fw-semibold">Tujuan Akademik</p>
                        </div>
                        <p>Sebagai bagian dari pemenuhan tugas akhir mata kuliah PSL04-Cyberpsychology pada Program Studi Sistem Informasi di Universitas Bunda Mulia, website ini dirancang sebagai proyek eksperimental berbasis data.
                            <br /><br />
                            Tujuan akademis kami adalah mengintegrasikan teori-teori psikologi siber terkemuka seperti Online Disinhibition Scale oleh John Suler dan Moral Disengagement oleh Albert Bandura ke dalam sebuah sistem informasi fungsional terautomasi. Kami mengolah algoritma penilaian kuis psikometri interaktif guna menyajikan data statistik riil mengenai kecenderungan perilaku netizen untuk kebutuhan riset literasi digital.</p>
                    </div>
                    <div className="purpose-card spacing-col gap-8">
                        <div className="spacing-row spacing-row-center gap-8">
                            <div className="icons-large">
                                <i className="ph ph-globe-simple"></i>
                            </div>
                            <p className="fw-semibold">Tujuan Nyata</p>
                        </div>
                        <p>
                            Di luar ranah ruang kuliah, tujuan sosial terbesar kami adalah meruntuhkan budaya agresi siber (cyberaggression) yang kerap bersembunyi di balik tameng akun alternatif. Kami ingin membangun kesadaran kolektif netizen bahwa sebuah ketikan di kolom komentar bukanlah sekadar teks di layar mati, melainkan sebuah tindakan nyata yang memiliki dampak psikologis nyata terhadap kesehatan mental manusia lainnya. Kami berkomitmen untuk mendorong terciptanya ruang siber yang lebih aman, inklusif, dan penuh empati.
                        </p>
                    </div>
                </div>
            </div>
            {/* benefit */}
            <div className="benefit spacing-col gap-24">
                <h1 className="fw-semibold">Manfaat Ikut Tes Mandiri</h1>
                <div className="benefit-list spacing-row spacing-col-jusitify spacing-row-center gap-12">
                    <div className="img"></div>
                    <div className="detail spacing-col gap-16">
                        {dataBenefit.map((item, index) => (
                            <div
                                key={index}
                                // Check if the index exists in the array
                                className={`benefit-item ${activeIndexes.includes(index) ? 'active' : ''}`}
                                onClick={() => handleToggle(index)}
                            >
                                {/* Header Row */}
                                <div className="spacing-row spacing-col-justify">
                                    <div className="spacing-row spacing-row-center gap-4">
                                        <div className="icons-small">
                                            <i className={item.icon}></i>
                                        </div>
                                        <p className="fw-semibold">{item.title}</p>
                                    </div>
                                    <div className="icons-small arrow-icon">
                                        <i className="ph ph-caret-down"></i>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="accordion-content">
                                    <div className="inner">
                                        <p className="desc">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* testimonial */}
            <Testimonial />
            {/* contact */}
            <Contacts />
        </div>
    )
}