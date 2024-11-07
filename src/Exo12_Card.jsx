import './Card.css'
function Card({image,pseudo,email,description,sexe,bgColor}){

    function handleMouseOver(event,className){
        event.target.classList.add(className)
      }
    function handleMouseLeave(event,className){
        event.target.classList.remove(className)
    }

    return <article className="card" style={{ backgroundColor: bgColor }} 
    onMouseOver={(event)=>handleMouseOver(event, 'border')}
    onMouseLeave={(event)=>handleMouseLeave(event, 'border')}>
        <img onMouseOver={(event)=>event.stopPropagation()} src={image} alt="avatar" />
        <h2 onMouseOver={(event)=>event.stopPropagation()}>{sexe}</h2>
        <h2 onMouseOver={(event)=>event.stopPropagation()}>{pseudo}</h2>
        <h3 onMouseOver={(event)=>event.stopPropagation()}>{email}</h3>
        <p onMouseOver={(event)=>event.stopPropagation()}>{description}</p>
    </article>
}

export default Card