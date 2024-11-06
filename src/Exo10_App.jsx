import './App.css'
import Card from './Exo10_Card'

const USERS=[
  {
    sexe:'homme',
    pseudo:"Yoann Le Super Formateur",
    email:"yoyo@gmail.com",
    image:"https://picsum.photos/300/200",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum expedita sequi doloremque odit sapiente laboriosam nesciunt molestias nemo architecto!"
  },
  {
    sexe:'femme',
    pseudo:"Mathieu le Pro-Back",
    email:"math@math.fr",
    image:"https://picsum.photos/id/1/300/200",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum expedita sequi doloremque odit sapiente laboriosam nesciunt molestias nemo architecto!"
  },
  {
    sexe:'autre',
    pseudo:"Jeff le Fou",
    email:"onvatoutfairebruler@pyromania.fr",
    image:"https://picsum.photos/seed/picsum/200/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum expedita sequi doloremque odit sapiente laboriosam nesciunt molestias nemo architecto!"
  }
]

const bgColors = {
    'homme': 'lightblue',
    'femme': 'lightpink',
    'autre': 'lightyellow',
  };

function App10() {
  let count = 0;

  return (
    <>
    {USERS.length>0 ? <h1>Liste des Utilisateurs</h1> :  <h1>Aucun utilisateur d'inscrit</h1>}
    {USERS.length>0 && <p>Il y a {USERS.length} Utilisateurs inscrits</p>}
    {USERS.map(element =><Card key={count++} bgColor={bgColors[element.sexe] }sexe={element.sexe} pseudo={element.pseudo} email={element.email} image={element.image} description={element.description}/>)}
    </>
  )
}

export default App10