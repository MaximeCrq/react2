import ToDo from "./Todo"

function App() {
  const DATE = new Date().toLocaleString();
  const DATE2 = new Date(Date.now() - 20000).toLocaleString();
  //tu nous aime pas 

  // useEffect(()=> {
  //   setInterval(()=> {
  //     DATE2 = Date().toLocaleString();
  //   })
  // })
  return (
    // ou <></>
    <article> 
      <h1>YUGIOH</h1>
      <ul>
        <ToDo todo="La date est l'heure de l'ouverture de ce site " date = {DATE}/>
        <ToDo todo="La date est l'heure de l'ouverture de ce site -20sec " date = {DATE2}/>
        <ToDo todo="La date de sorti de la saison 2 d'arcane " date = '09/11/2024'/>
      </ul>
    </article>
  )
}

export default App