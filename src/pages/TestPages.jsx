import { Button } from "../forms/FormComponent"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import "./program.css"

function DonutChart({ percentage, color, label }) {
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div style={{ position: "relative", width: "160px", height: "160px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <svg width="160" height="160" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
                {/* Background Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke="var(--bcd-color-sec)"
                    strokeWidth={strokeWidth}
                />
                {/* Foreground Progress Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
                />
            </svg>
            <div style={{ position: "absolute", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ fontSize: "24px", fontWeight: "bold", color: "var(--text-color-main)" }}>
                    {percentage}%
                </span>
                {label && <span style={{ fontSize: "10px", color: "var(--text-color-sec)", marginTop: "2px" }}>{label}</span>}
            </div>
        </div>
    );
}

export default function TestPages({ id, title }) {
    const navigate = useNavigate();
    const resultRef = useRef(null);

    const dataQuestion = [
        // Program 1
        {
            id_question: 'Q1',
            question: "Saya merasa lebih berani mengungkapkan kritik pedas atau kemarahan di media sosial daripada menyampaikannya secara langsung secara tatap muka?",
            id_programs: 'P1'
        },
        {
            id_question: 'Q2',
            question: "Ketika menggunakan akun alternatif (second account) atau akun anonim, saya merasa bebas mengetik apa saja tanpa memikirkan norma kesopanan?",
            id_programs: 'P1'
        },
        {
            id_question: 'Q3',
            question: "Saya merasa bahwa apa yang saya lakukan atau ketik di internet tidak akan membawa konsekuensi serius ke kehidupan nyata saya?",
            id_programs: 'P1'
        },
        {
            id_question: 'Q4',
            question: "Saya sering menulis komentar atau membagikan konten yang tidak akan pernah berani saya tunjukkan kepada keluarga, dosen, atau teman-teman di dunia nyata?",
            id_programs: 'P1'
        },
        {
            id_question: 'Q5',
            question: "Saya merasa identitas saya di dunia maya (terutama di akun alter) sangat berbeda atau bertolak belakang dengan kepribadian asli saya sehari-hari?",
            id_programs: 'P1'
        },
        // Program 2
        {
            id_question: 'Q6',
            question: "Jika melihat postingan atau opini orang lain yang tidak saya sukai di media sosial, saya langsung mengetik komentar sinis atau sarkas?",
            id_programs: 'P2'
        },
        {
            id_question: 'Q7',
            question: "Saya sengaja menggunakan kata-kata yang tajam atau menyakitkan saat berdebat di kolom komentar agar lawan bicara saya merasa kalah atau dipermalukan?",
            id_programs: 'P2'
        },
        {
            id_question: 'Q8',
            question: "Saya merasa terhibur atau puas ketika melihat seorang figur publik atau netizen sedang 'dirujak' secara massal oleh netizen lain?",
            id_programs: 'P2'
        },
        {
            id_question: 'Q9',
            question: "Saya pernah ikut-ikutan melakukan spamming, memberikan komentar negatif, atau melakukan report massal pada akun yang sedang viral karena kesalahan mereka?",
            id_programs: 'P2'
        },
        {
            id_question: 'Q10',
            question: "Saya sengaja menyindir atau menyebarkan rumor tentang seseorang di media sosial lewat unggahan saya tanpa menyebutkan namanya secara langsung (subtweet / sindiran halus)?",
            id_programs: 'P2'
        },
        // Program 3
        {
            id_question: 'Q11',
            question: "Saya sengaja memisahkan akun media sosial saya: akun utama untuk pencitraan baik/sopan, dan akun kedua (second account) untuk bebas mengumpat atau mengkritik orang lain?",
            id_programs: 'P3'
        },
        {
            id_question: 'Q12',
            question: "Saya merasa tidak perlu bertanggung jawab atas perasaan orang lain yang terluka akibat komentar yang saya ketik menggunakan akun anonim?",
            id_programs: 'P3'
        },
        {
            id_question: 'Q13',
            question: "Ketika emosi atau stres di dunia nyata, saya melampiaskannya dengan cara mencari keributan atau memperdebatkan hal-hal sepele di forum/media sosial?",
            id_programs: 'P3'
        },
        {
            id_question: 'Q14',
            question: "Saya merasa bahwa mengejek atau merendahkan orang lain di internet adalah hal yang wajar karena 'semua orang pun melakukan hal yang sama'?",
            id_programs: 'P3'
        },
        {
            id_question: 'Q15',
            question: "Saya kesulitan menahan diri untuk tidak ikut campur atau tidak mengetik komentar negatif pada drama/masalah yang sedang terjadi di internet?",
            id_programs: 'P3'
        },
    ]

    // indicator result
    const dataRawResult = [
        // ==========================================
        // BATCH PROGRAM 1 (P1): DIGITAL ALTER-EGO TEST
        // ==========================================
        {
            id_result: "R1",
            id_programs: "P1",
            score_max_range: 11,
            risk_status: { "label": "Sadar Digital", "englishLabel": "Low-Risk Authentic User" },
            summaryText: "Kamu menunjukkan tingkat konsistensi kepribadian yang sangat baik. Karakter, etika, dan cara berkomunikasimu di media sosial mencerminkan kepribadian aslimu di dunia nyata.",
            clinicalNotes: "ZONA AMAN. Hasil ini menandakan integrasi ego digital yang sehat. Pengguna tidak memanfaatkan kebebasan internet untuk memanipulasi identitas atau melanggar norma sosial.",
            profileDominant: {
                profile: 1,
                title: "The Authentic Profile",
                type: "Tipe Profil Terintegrasi",
                description: "Kamu adalah pengguna internet yang transparan. Kamu tidak merasa perlu memakai topeng anonimitas karena kamu bertanggung jawab penuh atas setiap kata yang kamu ketik."
            },
            dummyDomainScores: [
                { name: "Dissociative Anonymity", score: 7, percentage: 28 },
                { name: "Invisibility Factor", score: 8, percentage: 32 },
                { name: "Persona Splitting", score: 6, percentage: 24 }
            ],
            recommendations: [
                "Pertahankan integritas digitalmu dan jadilah contoh positif bagi lingkaran pertemananmu.",
                "Bagikan artikel edukasi kami untuk membantu orang lain memahami pentingnya konsistensi perilaku di dunia maya."
            ]
        },
        {
            id_result: "R2",
            id_programs: "P1",
            score_max_range: 18,
            risk_status: { "label": "Persona Berisiko", "englishLabel": "At-Risk User" },
            summaryText: "Kamu mulai menunjukkan adanya pelonggaran batas diri saat berselancar di dunia maya. Ketika menggunakan akun alternatif, kamu cenderung sedikit lebih berani mengabaikan rem sosial.",
            clinicalNotes: "ZONA PERINGATAN. Terdeteksi indikasi awal 'Mild Online Disinhibition'. Pengguna sesekali memisahkan batasan etika antara kehidupan nyata dan dunia siber ketika merasa identitasnya aman.",
            profileDominant: {
                profile: 2,
                title: "The Boundary Pusher",
                type: "Tipe Pelonggar Batas Diri",
                description: "Kamu cenderung menggunakan ruang digital untuk mengekspresikan hal-hal yang biasanya kamu tahan di dunia nyata, meski terkadang hampir melewati batas kesopanan."
            },
            dummyDomainScores: [
                { name: "Dissociative Anonymity", score: 15, percentage: 60 },
                { name: "Invisibility Factor", score: 13, percentage: 52 },
                { name: "Persona Splitting", score: 14, percentage: 56 }
            ],
            recommendations: [
                "Ambil jeda sejenak sebelum memposting sesuatu yang bersifat emosional di akun alter-egomu.",
                "Evaluasi kembali apakah ekspresi digitalmu saat ini sudah mulai merugikan ketenangan pikiranmu sendiri."
            ]
        },
        {
            id_result: "R3",
            id_programs: "P1",
            score_max_range: 25,
            risk_status: { "label": "Agresor Bermuka Dua", "englishLabel": "High-Risk Cyberaggressor" },
            summaryText: "Pola perilaku digitalmu menunjukkan kesenjangan karakter yang sangat ekstrem antara dunia nyata dan dunia maya. Kamu sangat bergantung pada anonimitas untuk mengekspresikan diri secara bebas tanpa kendali moral.",
            clinicalNotes: "ZONA RISIKO TINGGI. Hasil ini mendeteksi adanya indikasi kuat 'Toxic Online Disinhibition Effect'. Pengguna cenderung melepaskan tanggung jawab sosial dan moral secara total saat merasa identitas asli mereka aman di balik layar.",
            profileDominant: {
                profile: 3,
                title: "The Ghost Persona",
                type: "Tipe Disinhibisi Tinggi",
                description: "Kamu menganggap internet sebagai ruang tanpa hukum. Karakter aslimu sengaja kamu sembunyikan demi menampilkan alter-ego digital yang bebas dari konsekuensi sosial dunia nyata."
            },
            dummyDomainScores: [
                { name: "Dissociative Anonymity", score: 21, percentage: 84 },
                { name: "Invisibility Factor", score: 19, percentage: 76 },
                { name: "Persona Splitting", score: 21, percentage: 84 }
            ],
            recommendations: [
                "Batasi penggunaan akun anonim atau alter ego selama 2 minggu ke depan (Digital Detox).",
                "Mulailah belajar menyelaraskan opini yang kamu tulis di internet dengan apa yang berani kamu katakan langsung secara tatap muka.",
                "Baca artikel 'Budaya Second Account: Ruang Aman Ekspresi atau Wadah Bermuka Dua?' di halaman Edu-Corner kami."
            ]
        },
        // ==========================================
        // BATCH PROGRAM 2 (P2): CYBER-AGGRESSION DETECTOR
        // ==========================================
        {
            id_result: "R4",
            id_programs: "P2",
            score_max_range: 11,
            risk_status: { "label": "Netizen Empatis", "englishLabel": "Low-Risk Empathetic Netizen" },
            summaryText: "Kamu adalah tipe pengguna internet yang damai. Kamu memiliki tingkat empati digital yang tinggi dan selalu menyaring ketikan agar tidak menyakiti perasaan orang lain.",
            clinicalNotes: "ZONA AMAN. Pengguna memiliki kontrol regulasi emosi siber yang sangat kokoh. Tidak ditemukan kecenderungan perilaku menyerang, memprovokasi, ataupun melakukan perundungan digital.",
            profileDominant: {
                profile: 1,
                title: "The Peacekeeper",
                type: "Tipe Netizen Damai",
                description: "Kamu lebih memilih mengabaikan konten kontroversial atau drama siber daripada harus mengotori kolom komentar dengan kalimat-kalimat makian."
            },
            dummyDomainScores: [
                { name: "Impulsive Aggression", score: 5, percentage: 20 },
                { name: "Hostility Level", score: 5, percentage: 20 },
                { name: "Proactive Bullying", score: 5, percentage: 20 }
            ],
            recommendations: [
                "Pertahankan budaya saring sebelum sharing dan ketik dengan bijak di media sosial.",
                "Ikuti terus kampanye literasi emosi digital kami untuk memperluas ruang siber yang aman."
            ]
        },
        {
            id_result: "R5",
            id_programs: "P2",
            score_max_range: 18,
            risk_status: { "label": "Persona Berisiko", "englishLabel": "At-Risk User" },
            summaryText: "Ketikan jempolmu di kolom komentar menunjukkan kecenderungan reaktif yang cukup tinggi. Kamu mudah terpancing atmosfer perdebatan siber dan sesekali menggunakan kalimat menyerang.",
            clinicalNotes: "ZONA PERINGATAN (AMBANG BATAS). Terdeteksi adanya gejala awal 'Reactive Cyber-Aggression'. Dorongan emosional atau stres dari dunia nyata rentan meluap menjadi ketikan sinis secara spontan di media sosial.",
            profileDominant: {
                profile: 2,
                title: "The Impulsive Commentator",
                type: "Tipe Agresor Reaktif",
                description: "Kamu sebenarnya tidak berniat jahat sejak awal, namun kamu memiliki kontrol emosi digital yang lemah saat melihat postingan atau opini yang memicu kekesalanmu."
            },
            dummyDomainScores: [
                { name: "Impulsive Aggression", score: 18, percentage: 72 },
                { name: "Hostility Level", score: 15, percentage: 60 },
                { name: "Proactive Bullying", score: 14, percentage: 56 }
            ],
            recommendations: [
                "Terapkan teknik regulasi diri yang ketat: Ambil jeda 10 detik dan tarik napas sebelum menekan tombol 'Kirim' pada komentar.",
                "Hindari membuka akun-akun gosip atau base perdebatan ketika kamu sedang merasa lelah atau stres di dunia nyata.",
                "Gunakan prinsip 'Think Before You Type' (Apakah ketikan saya ini benar? Membantu? Atau justru melukai?)."
            ]
        },
        {
            id_result: "R6",
            id_programs: "P2",
            score_max_range: 25,
            risk_status: { "label": "Agresor Digital Aktif", "englishLabel": "High-Risk Cyberaggressor" },
            summaryText: "Jempolmu telah menjadi senjata destruktif di ruang siber. Kamu sangat sering meluapkan amarah, melakukan provokasi, dan menggunakan kata-kata kasar untuk menjatuhkan mental orang lain.",
            clinicalNotes: "ZONA EVALUASI KRITIS. Hasil mendeteksi tingkat agresi proaktif dan permusuhan siber yang berada di ambang bahaya. Perilaku ini berkontribusi langsung pada ekosistem perundungan digital aktif.",
            profileDominant: {
                profile: 3,
                title: "The Keyboard Warrior",
                type: "Tipe Agresor Proaktif",
                description: "Kamu menganggap kolom komentar sebagai medan pertempuran ego. Kamu mendapatkan kepuasan emosional ketika berhasil merujak atau mempermalukan lawan bicaramu secara daring."
            },
            dummyDomainScores: [
                { name: "Impulsive Aggression", score: 20, percentage: 80 },
                { name: "Hostility Level", score: 22, percentage: 88 },
                { name: "Proactive Bullying", score: 21, percentage: 84 }
            ],
            recommendations: [
                "Segera matikan gawai atau lakukan detoksifikasi media sosial demi meredam dorongan amarah.",
                "Pahami bahwa di balik akun yang kamu serang, ada manusia nyata yang bisa mengalami trauma psikologis mendalam.",
                "Salurkan energi agresifmu ke aktivitas fisik yang positif di dunia nyata (olahraga/hobi)."
            ]
        },
        // ==========================================
        // BATCH PROGRAM 3 (P3): THE DOUBLE-FACE AUDIT
        // ==========================================
        {
            id_result: "R7",
            id_programs: "P3",
            score_max_range: 11,
            risk_status: { "label": "Profil Konsisten", "englishLabel": "Low-Risk Integrated Account" },
            summaryText: "Pengelolaan identitas digitalmu sangat berintegritas. Jika kamu memiliki second account, akun tersebut murni digunakan untuk berekspresi secara kasual, bukan untuk menyembunyikan sisi gelap.",
            clinicalNotes: "ZONA AMAN. Tingkat pelepasan moral (Moral Disengagement) sangat rendah. Kompas moral pengguna tetap berjalan aktif tanpa terpengaruh oleh privasi atau akun alternatif.",
            profileDominant: {
                profile: 1,
                title: "The Integrated Persona",
                type: "Tipe Akun Selaras",
                description: "Kamu memegang prinsip moral yang sama di semua lini kehidupan. Bagimu, integritas diri tidak boleh hilang hanya karena berganti akun media sosial."
            },
            dummyDomainScores: [
                { name: "Identity Compartmentalization", score: 6, percentage: 24 },
                { name: "Moral Disengagement", score: 6, percentage: 24 },
                { name: "Maladaptive Coping", score: 6, percentage: 24 }
            ],
            recommendations: [
                "Pertahankan transparansi etika digital yang sudah kamu terapkan dengan sangat baik ini.",
                "Jadikan akun alternatifmu sebagai wadah penyebaran energi positif dan kreativitas yang mengedukasi."
            ]
        },
        {
            id_result: "R8",
            id_programs: "P3",
            score_max_range: 18,
            risk_status: { "label": "Dualitas Berisiko", "englishLabel": "At-Risk Masked User" },
            summaryText: "Kamu mulai membagi moralitas dirimu ke dalam dua wadah berbeda. Akun utamamu dijaga agar tetap bersih, sementara akun keduamu mulai sering dijadikan tempat mengeluh atau menyindir hal-hal negatif.",
            clinicalNotes: "ZONA PERINGATAN. Ditemukan kecenderungan awal kegagalan regulasi diri (Self-Regulation). Pengguna rentan menonaktifkan rasa empati secara parsial saat bersembunyi di balik lingkaran akun alternatifnya.",
            profileDominant: {
                profile: 2,
                title: "The Borderline Alter",
                type: "Tipe Akun Pemisah Emosi",
                description: "Kamu menjadikan second account sebagai pelarian untuk membuang keluh kesah dan emosi buruk yang tidak sanggup kamu tampilkan di hadapan lingkaran pertemanan utamamu."
            },
            dummyDomainScores: [
                { name: "Identity Compartmentalization", score: 16, percentage: 64 },
                { name: "Moral Disengagement", score: 14, percentage: 56 },
                { name: "Maladaptive Coping", score: 14, percentage: 56 }
            ],
            recommendations: [
                "Lakukan pembersihan secara berkala (cleaning up) pada postingan atau komentar negatif di akun keduamu.",
                "Cari metode koping (pelampiasan stres) yang lebih adaptif dan sehat di dunia nyata daripada mengeluh secara berlebihan di media sosial."
            ]
        },
        {
            id_result: "R9",
            id_programs: "P3",
            score_max_range: 25,
            risk_status: { "label": "Manipulator Toksik", "englishLabel": "High-Risk Masked Hypocrite" },
            summaryText: "Kamu secara sadar mengotak-ngotakkan moralitas dirimu. Kamu menjaga reputasi bersih dan suci di akun utama, namun menjadikan second account sebagai wadah pembuangan sampah emosi dan toksisitas.",
            clinicalNotes: "ZONA EVALUASI KRITIS. Hasil menunjukkan tingkat 'Moral Disengagement' (pelepasan moral) yang sangat tinggi. Memisahkan fungsi akun untuk menyerang orang lain dapat mengikis empati alami secara permanen.",
            profileDominant: {
                profile: 3,
                title: "The Masked Hypocrite",
                type: "Tipe Manipulator Akun",
                description: "Kamu memanfaatkan privasi akun alternatif secara destruktif. Akun tersebut sepenuhnya menjadi topeng tempatmu menumpahkan kebencian yang sengaja kamu sembunyikan dari lingkaran nyata."
            },
            dummyDomainScores: [
                { name: "Identity Compartmentalization", score: 23, percentage: 92 },
                { name: "Moral Disengagement", score: 21, percentage: 84 },
                { name: "Maladaptive Coping", score: 21, percentage: 84 }
            ],
            recommendations: [
                "Segera lakukan bersih-bersih konten negatif atau hapus akun alternatif yang kerap kamu gunakan untuk membenci orang lain.",
                "Ingatlah bahwa di balik layar akun yang kamu serang lewat akun palsumu, ada manusia nyata yang bisa terluka parah secara psikologis.",
                "Salurkan stres atau energi negatifmu ke aktivitas fisik di dunia nyata daripada bersembunyi di balik akun alter ego."
            ]
        }
    ];

    const getAssetUrl = (name) => {
        return new URL(`./assets/${name}`, import.meta.url).href;
    }

    const filteredQuestions = dataQuestion.filter(q => q.id_programs === id) || [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    if (filteredQuestions.length === 0) {
        return (
            <div className="testContent spacing-col gap-24" style={{ minHeight: "60vh", justifyContent: "center", alignItems: "center" }}>
                <h2>Belum Ada Program yang Dipilih</h2>
                <p>Silakan pilih salah satu program tes psikometri di halaman beranda terlebih dahulu.</p>
                <Button label="Kembali ke Beranda" variant="large large-rounded primary" onClick={() => navigate("/")} />
            </div>
        );
    }

    const currentQuestion = filteredQuestions[currentIndex];
    const answeredCount = filteredQuestions.filter(q => answers[q.id_question] !== undefined).length;
    const progressPercentage = (answeredCount / filteredQuestions.length) * 100;
    const isCurrentQuestionAnswered = answers[currentQuestion.id_question] !== undefined;

    const handleOptionChange = (value) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion.id_question]: value
        }));
    };

    const handleNext = () => {
        if (!isCurrentQuestionAnswered) return;
        if (currentIndex < filteredQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);

    // handle pdf
    // Fungsi ekspor PDF kustom minimalis dengan margin konsisten (4 3 3 3) di setiap halaman
    const handleExportPDF = () => {
        const element = resultRef.current;
        if (!element) return;

        // 1. Sembunyikan elemen tombol-tombol agar tidak ikut tercetak
        const noPrintElements = element.querySelectorAll(".no-print");
        noPrintElements.forEach(el => el.style.setProperty("display", "none", "important"));

        // 2. Manipulasi Mode Warna Aplikasi ke Light Mode secara sementara
        const appContainer = element.closest(".container");
        let isDarkModeActive = false;

        if (appContainer) {
            if (appContainer.classList.contains("container-dark")) {
                isDarkModeActive = true;
                appContainer.classList.remove("container-dark");
                appContainer.classList.add("container-light");
            }
        }

        // 3. STRIPING GAYA (Menghapus Style Box testResult agar PDF bersih & minimalis)
        const originalBorder = element.style.border;
        const originalRadius = element.style.borderRadius;
        const originalShadow = element.style.boxShadow;
        const originalBgColor = element.style.backgroundColor;

        element.style.border = "none";
        element.style.borderRadius = "0px";
        element.style.boxShadow = "none";
        element.style.backgroundColor = "#ffffff";

        // Konfigurasi Spesifikasi Margin (Satuan mm)
        const marginTop = 10;    // Margin Atas
        const marginRight = 10;  // Margin Kanan
        const marginBottom = 10; // Margin Bawah
        const marginLeft = 10;   // Margin Kiri

        const pageWidth = 210;   // Lebar Kertas A4
        const pageHeight = 297;  // Tinggi Kertas A4

        // Hitung area bersih ruang dalam untuk mencetak konten
        const printableWidth = pageWidth - marginLeft - marginRight;   // 150mm
        const printableHeight = pageHeight - marginTop - marginBottom; // 227mm

        const options = {
            scale: 2, // Meningkatkan kerapatan piksel agar teks tidak buram saat di-render
            useCORS: true,
            backgroundColor: "#ffffff",
            logging: false
        };

        // 4. Ambil tangkapan layar elemen yang sudah bersih dari gaya kotak luar
        html2canvas(element, options).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");

            // Hitung tinggi gambar proporsional terhadap sisa printableWidth kertas
            const imgHeightOnPdf = (canvas.height * printableWidth) / canvas.width;

            // Variabel bantu untuk memotong gambar ke beberapa halaman
            let srcY = 0; // Posisi potong koordinat Y pada canvas gambar asal
            const canvasPageHeight = (canvas.width * printableHeight) / printableWidth; // Tinggi potongan canvas per halaman

            let isFirstPage = true;

            while (srcY < canvas.height) {
                if (!isFirstPage) {
                    pdf.addPage();
                }
                isFirstPage = false;

                // Hitung sisa tinggi canvas yang belum tercetak
                const sisaCanvasHeight = canvas.height - srcY;
                const currentChunkHeight = Math.min(canvasPageHeight, sisaCanvasHeight);

                // Buat kanvas kustom sementara untuk menampung potongan halaman saat ini saja
                const pageCanvas = document.createElement("canvas");
                pageCanvas.width = canvas.width;
                pageCanvas.height = currentChunkHeight;

                const ctx = pageCanvas.getContext("2d");
                // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
                ctx.drawImage(canvas, 0, srcY, canvas.width, currentChunkHeight, 0, 0, canvas.width, currentChunkHeight);

                const pageImgData = pageCanvas.toDataURL("image/png");
                const pImgHeight = (currentChunkHeight * printableWidth) / canvas.width;

                // Cetak potongan gambar tepat di dalam area batas aman margin kustom (4 3 3 3)
                pdf.addImage(pageImgData, "PNG", marginLeft, marginTop, printableWidth, pImgHeight);

                // Geser kursor pemotong ke area potongan canvas berikutnya
                srcY += canvasPageHeight;
            }

            // 5. KEMBALIKAN GAYA LAYOUT WEB SEMULA (Restorasi UI)
            if (appContainer && isDarkModeActive) {
                appContainer.classList.remove("container-light");
                appContainer.classList.add("container-dark");
            }
            element.style.border = originalBorder;
            element.style.borderRadius = originalRadius;
            element.style.boxShadow = originalShadow;
            element.style.backgroundColor = originalBgColor;
            noPrintElements.forEach(el => el.style.display = "");

            // Unduh berkas PDF minimalis
            pdf.save(`Hasil_Analisis_${title.replace(/\s+/g, "_")}.pdf`);
        }).catch((err) => {
            console.error("Gagal mengekspor dokumen PDF kustom:", err);
            // Restorasi darurat jika fungsi mengalami kegagalan sistem
            if (appContainer && isDarkModeActive) {
                appContainer.classList.remove("container-light");
                appContainer.classList.add("container-dark");
            }
            element.style.border = originalBorder;
            element.style.borderRadius = originalRadius;
            element.style.boxShadow = originalShadow;
            element.style.backgroundColor = originalBgColor;
            noPrintElements.forEach(el => el.style.display = "");
        });
    };

    // ouput tes
    const getResultDetails = () => {
        if (id === 'P1') {
            if (totalScore <= 11) {
                return {
                    status: "Rendah (Persona Otentik)",
                    description: "Kepribadian atau persona digital Anda sangat selaras dengan kepribadian dunia nyata Anda. Anda mengekspresikan diri secara jujur dan tidak menunjukkan adanya dualitas perilaku yang signifikan di media sosial.",
                };
            } else if (totalScore <= 18) {
                return {
                    status: "Sedang (Dualitas Terkendali)",
                    description: "Anda memiliki beberapa perbedaan ekspresi atau perilaku di dunia maya (misalnya merasa sedikit lebih bebas atau berani mengungkapkan pendapat), namun Anda masih bisa mengendalikan batasan diri dengan baik.",
                };
            } else {
                return {
                    status: "Tinggi (Alter-Ego Menonjol)",
                    description: "Tingkat dualitas diri Anda sangat tinggi. Persona siber Anda jauh lebih berani, asertif, atau bertolak belakang dengan karakter asli Anda sehari-hari di dunia nyata. Ini merupakan indikasi kuat fenomena Online Disinhibition Effect.",
                };
            }
        } else if (id === 'P2') {
            if (totalScore <= 11) {
                return {
                    status: "Rendah (Tenang & Damai)",
                    description: "Anda cenderung tenang, toleran, dan tidak terpancing untuk melakukan tindakan menyerang secara digital di media sosial. Anda berkontribusi positif dalam menjaga kedamaian ruang digital.",
                };
            } else if (totalScore <= 18) {
                return {
                    status: "Sedang (Reaktif Terkendali)",
                    description: "Terkadang Anda merasa kesal dan terpancing untuk menulis tanggapan yang tajam atau sindiran di kolom komentar, tetapi Anda umumnya masih menyadari batas etika dan menahan diri sebelum melampaui batas.",
                };
            } else {
                return {
                    status: "Tinggi (Agresi Siber Aktif)",
                    description: "Tingkat kecenderungan agresi siber Anda cukup tinggi. Anda sering menyalurkan rasa frustrasi dengan menulis komentar pedas, menyindir orang lain secara tidak langsung, atau ikut serta dalam perundungan digital massal.",
                };
            }
        } else {
            if (totalScore <= 11) {
                return {
                    status: "Rendah (Konsisten & Transparan)",
                    description: "Anda jarang memanipulasi identitas siber Anda. Penggunaan akun kedua atau alternatif (jika ada) hanya ditujukan untuk tujuan privasi umum, bukan sebagai wadah meluapkan kemarahan atau kebencian tersembunyi.",
                    color: "var(--accept-color)"
                };
            } else if (totalScore <= 18) {
                return {
                    status: "Sedang (Pemisahan Selektif)",
                    description: "Anda memisahkan akun utama dan akun alternatif untuk kenyamanan berekspresi. Terkadang ada beberapa unggahan yang lebih emosional atau kritis di akun kedua, namun tetap dalam batas kewajaran sosial.",
                    color: "var(--alert-color)"
                };
            } else {
                return {
                    status: "Tinggi (Double-Face Aktif)",
                    description: "Anda memanipulasi identitas siber Anda secara aktif. Terdapat perbedaan yang sangat ekstrim antara citra santun di akun utama dengan ekspresi bebas dari etika (seperti mengumpat atau mengkritik kasar) di akun anonim/kedua.",
                    color: "var(--warning-color)"
                };
            }
        }
    };

    const overallPercentage = Math.round((totalScore / 25) * 100);

    const programResults = dataRawResult.filter(r => r.id_programs === id);
    const activeResult = programResults.find(r => totalScore <= r.score_max_range) || programResults[programResults.length - 1];

    const getResultColor = (resultObj) => {
        if (!resultObj) return "var(--accept-color)";
        if (resultObj.id_result === "R1" || resultObj.id_result === "R4" || resultObj.id_result === "R7") {
            return "var(--accept-color)";
        }
        if (resultObj.id_result === "R2" || resultObj.id_result === "R5" || resultObj.id_result === "R8") {
            return "var(--alert-color)";
        }
        return "var(--warning-color)";
    };

    const resultColor = getResultColor(activeResult);

    const currentDate = new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    if (isFinished && activeResult) {
        return (
            <div className="testContent spacing-col gap-24">
                <h1 className="no-print">Hasil Analisis Tes</h1>
                <div className="notes spacing-row no-print">
                    <div className="bar"></div>
                    <p>
                        Terima kasih telah berpartisipasi! Berikut adalah hasil analisis kecenderungan perilaku digital Anda berdasarkan teori <strong>Online Disinhibition Effect</strong>.
                    </p>
                </div>
                {/* outputs */}
                <div ref={resultRef} className="testResult spacing-col gap-12">
                    {/* header */}
                    <div className="spacing-row spacing-col-justify" style={{ alignItems: "flex-end", borderBottom: `1px solid var(--disactive-color)`, paddingBottom: "16px" }}>
                        <div className="spacing-col gap-8" style={{ width: "60%" }}>
                            <div className="brand spacing-row spacing-row-center gap-8">
                                <img src="/Logo.png" alt="Logo" width={40} height={40} />
                                <p style={{ fontWeight: "600", fontSize: "18px", margin: 0 }}>Dual Persona</p>
                            </div>
                            <h3 className="fw-light" style={{ margin: "4px 0 0 0" }}>{title}</h3>
                            <div className="spacing-row spacing-row-center gap-4" style={{ color: "var(--text-color-sec)", fontSize: "14px" }}>
                                <div className="icons-small">
                                    <i className="ph ph-calendar"></i>
                                </div>
                                <span>{currentDate}</span>
                            </div>
                        </div>
                        <Button
                            frontIcon={"ph ph-export"}
                            label="Unduh Hasil .pdf"
                            variant="primary large large-rounded no-print"
                            size="regular"
                            onClick={handleExportPDF}
                        />
                    </div>
                    {/* result indicator */}
                    <div className="spacing-col spacing-col-center gap-12" style={{ alignItems: "center", margin: "24px 0" }}>
                        {/* charts */}
                        <DonutChart
                            percentage={overallPercentage}
                            color={resultColor}
                            label="SKOR"
                        />
                        <div className="spacing-col spacing-col-center gap-4" style={{ textAlign: "center" }}>
                            <h3 style={{ color: resultColor, fontSize: "24px", margin: 0 }}>{activeResult.risk_status.label}</h3>
                            <p style={{ color: "var(--text-color-sec)", margin: 0 }}>{activeResult.risk_status.englishLabel}</p>
                        </div>
                    </div>
                    {/* user profile batch */}
                    <div className="profile spacing-row spacing-row-center gap-12">
                        {activeResult.profileDominant.profile === 1 && <div className="userProfile one"></div>}
                        {activeResult.profileDominant.profile === 2 && <div className="userProfile two"></div>}
                        {activeResult.profileDominant.profile === 3 && <div className="userProfile three"></div>}
                        <div className="detail spacing-col gap-4">
                            <h3 style={{ fontSize: "18px", margin: 0 }}>{activeResult.profileDominant.title}</h3>
                            <div className="chips" style={{ backgroundColor: "var(--bcd-color-sec)", height: "24px", padding: "4px 12px", borderRadius: "12px", border: "none", width: "max-content", fontSize: "11px" }}>{activeResult.profileDominant.type}</div>
                            <p style={{ fontSize: "14px", margin: "4px 0 0 0" }}>{activeResult.profileDominant.description}</p>
                        </div>
                    </div>
                    {/* notes */}
                    <div className="summary spacing-col gap-8" style={{ backgroundColor: "var(--bcd-accent-1)" }}>
                        <div className="label spacing-row spacing-row-center gap-4" >
                            <div className="icons-small">
                                <i className="ph ph-person"></i>
                            </div>
                            <span>Karaktermu</span>
                        </div>
                        <p>{activeResult.summaryText}</p>
                    </div>
                    <div className="summary spacing-col gap-8" style={{ backgroundColor: "var(--bcd-accent-2)" }}>
                        <div className="label spacing-row spacing-row-center gap-4" >
                            <div className="icons-small">
                                <i className="ph ph-warning"></i>
                            </div>
                            <span>Catatan Penting</span>
                        </div>
                        <p style={{ margin: 0, fontSize: "14px" }}>{activeResult.clinicalNotes}</p>
                    </div>
                    {/* hasil indikator */}
                    <div className="spacing-col gap-12" style={{ margin: "16px 0", width: "100%" }}>
                        <p className="fw-semibold" style={{ fontSize: "16px", margin: "0 0 4px 0" }}>Detail Skor Dimensi</p>
                        {activeResult.dummyDomainScores.map((domain, idx) => (
                            <div className="spacing-col gap-4" key={idx} style={{ width: "100%" }}>
                                <div className="spacing-row spacing-col-justify">
                                    <p style={{ fontSize: "var(--fs-body)" }}>{domain.name}</p>
                                    <p style={{ fontSize: "var(--fs-body-small)", color: "var(--text-color-sec)" }}>{domain.score} / 25 ({domain.percentage}%)</p>
                                </div>
                                <div className="progressBar" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div className="bar" style={{ width: "100%", height: "8px", backgroundColor: "var(--bcd-color-sec)", borderRadius: "4px", overflow: "hidden" }}>
                                        <div
                                            className="indicator"
                                            style={{
                                                width: `${domain.percentage}%`,
                                                height: "100%",
                                                backgroundColor: resultColor,
                                                borderRadius: "4px",
                                                transition: "width 0.5s ease"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* recommendation */}
                    <div className="recommendation spacing-col gap-16">
                        <p className="fw-semibold">Rekomendasi Tindakan</p>
                        <ul className="spacing-col gap-8">
                            {activeResult.recommendations.map((rec, idx) => (
                                <li key={idx}>
                                    <p>{rec}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* buttons */}
                    <div className="btn-group spacing-row gap-12 no-print">
                        <Button
                            label={"Ulangi Tes"}
                            variant="large large-rounded fillContent secondary"
                            onClick={() => {
                                setAnswers({});
                                setCurrentIndex(0);
                                setIsFinished(false);
                            }}
                        />
                        <Button
                            label={"Kembali ke Beranda"}
                            variant="large large-rounded fillContent primary"
                            onClick={() => navigate("/")}
                        />
                    </div>
                </div>
            </div >
        );
    }

    const options = [
        { label: "Sangat Setuju", value: 5 },
        { label: "Setuju", value: 4 },
        { label: "Netral", value: 3 },
        { label: "Tidak Setuju", value: 2 },
        { label: "Sangat Tidak Setuju", value: 1 },
    ];

    return (
        <div className="testContent spacing-col gap-16">
            <div>
                <Button
                    frontIcon={"ph ph-arrow-left"}
                    label={"Kembali"}
                    variant="regular large-rounded fitContent tertiary"
                    onClick={() => navigate("/tes-mandiri")}
                />
            </div>
            <h1>{title}</h1>
            <div className="notes spacing-row">
                <div className="bar"></div>
                <p>Catatan penting: seluruh data yang Anda berikan bersifat rahasia dan tidak akan kami simpan dalam sistem mana pun. Semua pertanyaan dalam tes ini disusun berdasarkan referensi resmi mengenai Online Disinhibition Effect, yaitu fenomena psikologis tentang perbedaan perilaku seseorang saat berinteraksi online dibandingkan dengan interaksi langsung.</p>
            </div>
            <div className="spacing-row spacing-wrap gap-12">
                <div className="chips">
                    {filteredQuestions.length} Pertanyaan
                </div>
                <div className="chips">
                    Skala Likert 1 - 5
                </div>
                <div className="chips">
                    Waktu Pengerjaan ~2 Menit
                </div>
                <div className="chips">
                    data tidak disimpan
                </div>
                <div className="chips">
                    hasil jawaban dapat di lihat langsung
                </div>
            </div>

            <div className="progressBar spacing-row spacing-row-center gap-8">
                <div className="bar">
                    <div className="indicator" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <p>{currentIndex + 1}/{filteredQuestions.length}</p>
            </div>

            <div className="questions spacing-col gap-12">
                <p style={{ fontSize: "18px", fontWeight: "400", lineHeight: "1.5", color: "var(--text-color-main)" }}>
                    {currentQuestion.question}
                </p>
                <form action="" className="spacing-col gap-8" onSubmit={(e) => e.preventDefault()}>
                    {options.map((opt) => {
                        const optionId = `option-${currentQuestion.id_question}-${opt.value}`;
                        return (
                            <div className="spacing-row spacing-row-center gap-4" key={opt.value}>
                                <input
                                    type="radio"
                                    name={`options-${currentQuestion.id_question}`}
                                    id={optionId}
                                    checked={answers[currentQuestion.id_question] === opt.value}
                                    onChange={() => handleOptionChange(opt.value)}
                                    style={{ cursor: "pointer", width: "16px", height: "16px" }}
                                />
                                <label htmlFor={optionId} style={{ cursor: "pointer", fontSize: "15px", color: "var(--text-color-main)" }}>
                                    {opt.label}
                                </label>
                            </div>
                        );
                    })}
                </form>
                <div className="btn-group spacing-row gap-8" style={{ marginTop: "20px" }}>
                    <Button
                        label={"Sebelumnya"}
                        variant="large large-rounded fillContent secondary"
                        disabled={currentIndex === 0}
                        onClick={handlePrev}
                    />
                    <Button
                        label={currentIndex === filteredQuestions.length - 1 ? "Selesai" : "Selanjutnya"}
                        variant="large large-rounded fillContent primary"
                        disabled={!isCurrentQuestionAnswered}
                        onClick={handleNext}
                    />
                </div>
            </div>
        </div>
    )
}
