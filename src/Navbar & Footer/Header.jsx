import "./header.css"

export default function Header({ page_title, headline, description }) {
    if (page_title === "Tentang Kami") {
        return (
            <header className="headerPages one spacing-col">
                <h1>{page_title}</h1>
                <div className="detail spacing-row spacing-row-center spacing-col-justify">
                    <div className="left pacing-col gap-8">
                        <h1>{headline}</h1>
                        <p>-Sun Group</p>
                    </div>
                    <div className="right">
                        <p>{description}</p>
                    </div>
                </div>
            </header>
        )
    } else if (page_title === "Tes Mandiri") {
        return (
            <header className="headerPages two spacing-col">
                <h1>{page_title}</h1>
                <div className="detail spacing-row spacing-row-center spacing-col-justify">
                    <div className="left pacing-col gap-8">
                        <h1>{headline}</h1>
                        <p>-Sun Group</p>
                    </div>
                    <div className="right">
                        <p>{description}</p>
                    </div>
                </div>
            </header>
        )
    } else if (page_title === "Artikel") {
        return (
            <header className="headerPages three spacing-col">
                <h1>{page_title}</h1>
                <div className="detail spacing-row spacing-row-center spacing-col-justify">
                    <div className="left pacing-col gap-8">
                        <h1>{headline}</h1>
                        <p>-Sun Group</p>
                    </div>
                    <div className="right">
                        <p>{description}</p>
                    </div>
                </div>
            </header>
        )
    } else if (page_title === "Kontak Kami") {
        return (
            <header className="headerPages four spacing-col">
                <h1>{page_title}</h1>
                <div className="detail spacing-row spacing-row-center spacing-col-justify">
                    <div className="left pacing-col gap-8">
                        <h1>{headline}</h1>
                        <p>-Sun Group</p>
                    </div>
                    <div className="right">
                        <p>{description}</p>
                    </div>
                </div>
            </header>
        )
    }

}