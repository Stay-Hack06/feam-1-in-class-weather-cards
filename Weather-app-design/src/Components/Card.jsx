import "./Card.css"

function Card ({ img, title, subtitle }) {
    return(
        <div className="Card">
            <img src={img} />
            <p>{title} </p>
            <p>{subtitle}</p>
        </div>
    )
}

export default Card;