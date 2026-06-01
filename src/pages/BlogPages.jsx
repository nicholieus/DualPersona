import "./article.css"
import authors from "../assets/authors.jpg"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../forms/FormComponent"
import { useMemo } from "react"
import { dataArticle } from "./ArticlePages"

export default function BlogPages() {
    const navigate = useNavigate()
    const { id } = useParams()

    const currentArticle = dataArticle.find(article => article.id_article === id)

    const randomOtherArticles = useMemo(() => {
        const otherArticles = dataArticle.filter(article => article.id_article !== id);
        const shuffled = [...otherArticles].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    }, [id]);

    if (!currentArticle) {
        return (
            <div className="content-area spacing-col gap-24" style={{ alignItems: "center", justifyContent: "center", minHeight: "50vh" }}>
                <h2>Artikel Tidak Ditemukan</h2>
                <Button label="Kembali ke Daftar Artikel" variant="large large-rounded primary" onClick={() => navigate('/artikel')} />
            </div>
        )
    }

    const formatTanggal = (dateString) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    return (
        <div className="content-area spacing-col gap-40">
            <div className="blogs spacing-row spacing-col-center gap-40">
                <div className="detail spacing-col gap-24">
                    <div className="spacing-col gap-8">
                        <Button label={"Kembali"} variant="regular maxContent large-rounded tertiary" onClick={() => navigate('/artikel')} />
                        <p>
                            Diterbitkan pada: {formatTanggal(currentArticle.date_created)}
                        </p>
                        <h1>{currentArticle.title}</h1>
                    </div>
                    <img src={currentArticle.img_path} alt={currentArticle.title} />
                    <p>{currentArticle.content}</p>
                </div>
                <div className="authors spacing-col gap-16">
                    <img src={authors} alt="Author" />
                    <h1>Alloww, Aku Ucing</h1>
                    <p>Aku di sini menemani kalian dalam memahami apa itu Online Disinhibition Effect, yeah it's a bad thing isn't?</p>
                </div>
            </div>

            <div className="spacing-col gap-16" style={{ marginTop: "40px", borderTop: "1px solid var(--disactive-color)", paddingTop: "40px" }}>
                <h3 className="fw-light">Yuk baca yang lainnya</h3>
                <div className="article-list spacing-row spacing-wrap gap-16">
                    {randomOtherArticles.map((article) => (
                        <div key={article.id_article} className="article-card spacing-col gap-12">
                            <img src={article.img_path} alt={article.id_article} />
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
        </div>
    )
}