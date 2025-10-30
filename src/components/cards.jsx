import "../styles/cards.css";

function Cards(props) {
    return (
        <div className="square-box">
            <h2>{props.emoji}</h2>
            <dl>
                <dt><strong>{props.name}</strong></dt>
                <dd>{props.meaning}</dd>
            </dl>
        </div>
    )
}

export default Cards;