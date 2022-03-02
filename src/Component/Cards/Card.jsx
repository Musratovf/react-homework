function Cards() {
    return (
        <>
            <div className="container">
            <div className="cards">
                <h2 className="main__text">Where are you now?</h2>
                <p className="main__title">Use the tabs below to identify what stage you’re at so we can help you to move on to the next phase of your project.</p>
                <ul className="cards__list">
                    <li className="cards__item">
                        <a aria-disabled href="#link" className="cards__link">Design</a>
                    </li>
                    <li className="cards__item">
                        <a href="#link" className="cards__link">Develop</a>
                    </li>
                    <li className="cards__item">
                        <a href="#link" className="cards__link">Launch</a>
                    </li>
                </ul>
                <div className="wrap-cards">
                    <div className="card">
                        <ul className="card__list">
                            <li className="card__item">
                                <p className="card__heading">1. Research</p>
                                <p className="card__last">
                                We can help you to better understand your target audience, enabling you to create a more powerful value proposition for your business.
                                </p>
                                </li>
                        </ul>
                        <ul className="card__list">
                            <li className="card__item">
                                <p className="card__heading">2. Requirements</p>
                                <p className="card__last">
                                We can help you to better understand your target audience, enabling you to create a more powerful value proposition for your business.
                                </p>
                                </li>
                        </ul>
                        <ul className="card__list">
                            <li className="card__item">
                                <p>3. UI Design</p>
                                <p>
                                We can help you to better understand your target audience, enabling you to create a more powerful value proposition for your business.
                                </p>
                                </li>
                        </ul>
                        <ul className="card__list">
                            <li className="card__item">
                                <p>4. Prototyping</p>
                                <p>
                                We can help you to better understand your target audience, enabling you to create a more powerful value proposition for your business.
                                </p>
                                </li>
                        </ul>
                        <button className="">Contact Us</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Cards;