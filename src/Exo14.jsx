import './raph.css'
import { useState } from 'react'

const USERS=[
    {
      pseudo:"Maxime",
      like :1
    },
    {
      
      pseudo:"Raphael",
      like :1
    },
    {
      pseudo:"Quentin",
      like :1
      }
  ]

function Raph({returnLike , pseudo}) {
  const  [likes, setLikes] = useState(returnLike);

  function handleClickLike(){
    setLikes(likes + 1);
  }

  return <>

    <article style={{ display:'flex', flexDirection:'column' }}>
        <h2>{pseudo}</h2>
        <div style={{ display:'flex', flexDirection:'row' }}>
            <h3>{likes}</h3>
            <button onClick={handleClickLike}>+</button>
        </div>
    </article>
  </>
}

function Raph2(){
  return (
    <>
      <ul>
        {USERS.map(user => 
        <li key={user.pseudo}>
          <Raph pseudo={user.pseudo} returnLike={user.like} />
        </li>)}
      </ul>
    </>
  )
}

export default Raph2