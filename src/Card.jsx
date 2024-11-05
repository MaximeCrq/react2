import './Card.css';

function Card({source, pseudo, email, description}){
    return (
        <article className="card">
            <img src={source} ></img>
            <h2>{pseudo}</h2>
            <p>{email}</p>
            <p>{description}</p>
        </article>
    );
}
export default Card;