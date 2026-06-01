import "./article.css"
import { useNavigate } from "react-router-dom"
import article1 from "../assets/article_1.jpg";
import article2 from "../assets/article_2.jpg";
import article3 from "../assets/article_3.jpg";
import article4 from "../assets/article_4.jpg";
import article5 from "../assets/article_5.jpg";
import article6 from "../assets/article_6.jpg";
import { Button } from "../forms/FormComponent"
import Header from "../Navbar & Footer/Header"
import { useMemo } from "react"

export const dataArticle = [
    {
        id_article: "A1",
        title: "Mengapa Netizen Mudah Menghujat? Mengenal Online Disinhibition Effect",
        date_created: "2026-05-10",
        img_path: article1,
        content: "Pernahkah kamu memperhatikan bagaimana seseorang yang dikenal sangat santun dan tenang di kehidupan nyata, tiba-tiba bisa menjadi sangat garang, sarkas, bahkan kasar di kolom komentar media sosial?  Fenomena psikologis ini dikenal sebagai Online Disinhibition Effect (Efek Disinhibisi Daring). Istilah yang pertama kali dicetuskan oleh psikolog John Suler ini menjelaskan sebuah kondisi di mana kendali diri, etika, dan pembatasan sosial yang biasanya mengikat manusia di dunia nyata, mendadak melonggar atau bahkan hilang saat mereka berada di balik layar digital. Internet menciptakan sebuah ilusi kebebasan yang membuat orang merasa 'lepas dari konsekuensi'. Akibatnya, dorongan agresi yang biasanya ditekan dalam interaksi tatap muka, dapat keluar dengan begitu mudahnya melalui ketikan jempol di ruang siber."
    },
    {
        id_article: "A2",
        title: "Ilusi Anonimitas: Mengapa 'Topeng' Digital Menurunkan Empati Kita",
        date_created: "2026-05-14",
        img_path: article2,
        content: "Salah satu faktor terbesar yang memicu Online Disinhibition Effect adalah apa yang disebut sebagai anonymity (anonimitas) dan invisibility (ketidaktampakan). Ketika berselancar di internet—terutama saat menggunakan akun alternatif, akun komparatif, atau tanpa foto profil asli—seseorang merasa identitasnya tersembunyi dengan aman. <br><br> Secara psikologis, ketika identitas asli kita tidak diketahui, tanggung jawab moral kita terhadap lingkungan sekitar cenderung menurun drastis. Kita tidak bisa melihat kerutan wajah kecewa, tetesan air mata, atau luka emosional dari orang yang kita ketik pesannya. Ketidaktampakan fisik ini memotong jalur empati alami manusia. Akibatnya, netizen sering kali lupa bahwa di balik akun yang mereka kritik atau serang, ada manusia nyata dengan perasaan yang nyata pula."
    },
    {
        id_article: "A3",
        title: "Solipsistik Introjection: Ketika Pikiranmu Membuat Lawan Bicara Terasa 'Tidak Nyata'",
        date_created: "2026-05-18",
        img_path: article3,
        content: "Mengapa perdebatan di media sosial sering kali terasa jauh lebih panas dan sulit menemui titik terang dibandingkan diskusi langsung? John Suler menjelaskan hal ini melalui konsep Solipsistic Introjection. <br><br> Saat kita membaca teks kiriman orang lain di internet, sadar atau tidak, kita merancang sendiri 'suara' dan 'karakter' orang tersebut di dalam kepala kita. Sering kali, kita membayangkan lawan bicara kita dengan sifat yang jauh lebih menyebalkan, egois, atau bodoh daripada aslinya. Proses ini membuat kita merasa sedang berbicara dengan karakter fiktif atau musuh khayalan di dalam pikiran kita sendiri, bukan dengan manusia sungguhan. Karena menganggap mereka hanya sebatas 'karakter digital', kita menjadi kehilangan rasa hormat dan dengan mudah meluapkan agresi siber (cyberaggression) tanpa memikirkan dampaknya."
    },
    {
        id_article: "A4",
        title: "Budaya Second Account: Ruang Aman Ekspresi atau Wadah Bermuka Dua?",
        date_created: "2026-05-22",
        img_path: article4,
        content: "Memiliki second account atau akun alter ego di platform seperti Instagram, Twitter (X), atau TikTok sudah menjadi bagian dari gaya hidup digital generasi muda. Banyak yang berargumen bahwa akun ini diperlukan sebagai safe space untuk mengekspresikan hobi, keluh kesah, atau sisi kreatif yang tidak ingin ditunjukkan pada lingkaran pertemanan utama yang penuh penghakiman. Namun, pembagian persona ini menciptakan celah bagi perilaku bermuka dua. Melalui konsep Online Disinhibition Effect, akun kedua yang awalnya dibuat untuk tujuan kasual, rentan bergeser fungsi menjadi wadah penampungan toksisitas. Karena merasa reputasi aslinya aman di akun utama, seseorang menggunakan akun alternatifnya secara destruktif: untuk mengumpat, memata-matai (stalking), hingga melakukan trolling jahat. Pemisahan persona yang ekstrem seperti ini lama-kelamaan dapat mengikis integritas moral seseorang."
    },
    {
        id_article: "A5",
        title: "Memutus Rantai Cyberaggression dengan Menumbuhkan Literasi Emosi Digital",
        date_created: "2026-05-26",
        img_path: article5,
        content: "Dampak dari Online Disinhibition Effect tidak melulu harus berakhir negatif jika kita memahami cara mengendalikannya. Sisi positif dari efek ini sebenarnya bisa diarahkan untuk hal yang baik, seperti menjadi lebih berani menyuarakan kebenaran atau membantu sesama (benign disinhibition). Sayangnya, yang sering mendominasi adalah agresi siber (toxic disinhibition). Untuk memutus rantai agresi tersebut, setiap pengguna internet wajib membangun Digital Emotion Literacy (Literasi Emosi Digital). Ini adalah kemampuan untuk mengenali kapan emosi negatif kita (seperti stres, marah, atau bosan di dunia nyata) sedang mencoba mengambil alih jempol kita untuk menyerang orang lain secara daring. Sebelum menekan tombol 'send' pada komentar yang ofensif, biasakan untuk mengambil jeda 10 detik dan bertanya pada diri sendiri: 'Apakah saya akan tetap mengatakan kalimat ini jika saya berdiri langsung di depan orangnya?'"
    },
    {
        id_article: "A6",
        title: "Menghadapi Toxic Disinhibition: Cara Menjaga Kesehatan Mental di Ruang Siber",
        date_created: "2026-05-30",
        img_path: article6,
        content: "Ruang siber saat ini penuh dengan bahaya laten berupa Toxic Disinhibition—kondisi di mana netizen mengeksploitasi kebebasan internet untuk memuaskan ego mereka dengan cara merundung, memaki, dan menjatuhkan orang lain. Jika kamu adalah seseorang yang aktif di media sosial, sangat penting untuk mengetahui cara melindungi diri dari paparan energi negatif ini. Pertama, sadarilah bahwa serangan atau komentar kasar dari netizen yang bermuka dua sering kali bukan cerminan dari kekuranganmu, melainkan cerminan dari ketidakmampuan mereka dalam mengontrol emosinya sendiri di balik layar. Kedua, batasi interaksi digital dengan memanfaatkan fitur block, mute, atau batasi kolom komentar. Mengabaikan agresi digital bukanlah tanda kelemahan, melainkan sebuah bentuk regulasi diri yang cerdas demi menjaga kedamaian mentalmu di era siber yang bising ini."
    }
]

export const ArticleHighlight = () => {
    const navigate = useNavigate()
    const randomOtherArticles = useMemo(() => {
        const shuffled = [...dataArticle].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }, []);

    const formatTanggal = (dateString) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    return (
        <div className="content-area article-highlight spacing-col spacing-row-center gap-16">
            <h1 style={{ textAlign: "center" }}>jelajahi fakta menarik seputar Online Disinhibition Effect </h1>
            <div className="article-list spacing-row spacing-row-center gap-16">
                {randomOtherArticles.map((article) => (
                    <div key={article.id_article} className="article-card spacing-col gap-12">
                        <img src={article.img_path} alt={article.title} />
                        <div className="info spacing-col gap-8">
                            <p>{formatTanggal(article.date_created)}</p>
                            <h3>{article.title}</h3>
                            <Button
                                label={"Baca Selengkapnya"}
                                variant="large maxContent large-rounded tertiary"
                                onClick={() => navigate(`/artikel/blog-pages/${article.id_article}`)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Button
                label={"Lihat Semua"}
                variant="large maxContent large-rounded tertiary"
                onClick={() => navigate(`/artikel`)}
            />
        </div>
    )
}

export default function ArticlePages() {
    const navigate = useNavigate()

    const formatTanggal = (dateString) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }
    return (
        <div className="content-area spacing-col gap-40">
            <Header page_title={"Artikel"} headline={"baca seputar online Disinhibition effect yuk!"} description={"Dengan membaca kamu akan cepat mengerti dan memahami mengapa seseorang bertindak demikian"} />
            <div className="article-list spacing-row spacing-wrap gap-16">
                {dataArticle.map((article) => (
                    <div key={article.id_article} className="article-card spacing-col gap-12">
                        <img src={article.img_path} alt={article.title} />
                        <div className="spacing-col gap-8">
                            <p>{formatTanggal(article.date_created)}</p>
                            <h3>{article.title}</h3>
                        </div>
                        <Button
                            label={"Baca Selengkapnya"}
                            variant="large large-rounded tertiary"
                            onClick={() => navigate(`/artikel/blog-pages/${article.id_article}`)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}