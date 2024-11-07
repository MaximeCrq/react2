import './raph.css'

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

function Raph() {
    return <>
    {USERS.map((utilisateur)=>
    <article style={{ display:'flex', flexDirection:'row' }}>
        <h2>{utilisateur.pseudo}</h2>
        <div>
            <p>{utilisateur.like}</p>
        </div>
    </article>
    )}
    </>
}

export default Raph