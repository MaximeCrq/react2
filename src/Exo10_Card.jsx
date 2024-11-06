import './Card.css'
function Card({image,pseudo,email,description,sexe,bgColor}){
    return <article className="card" style={{ backgroundColor: bgColor }} >
        <img src={image} alt="avatar" />
        <h2>{sexe}</h2>
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
    </article>
}

export default Card