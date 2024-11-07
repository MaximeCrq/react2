import { useState } from 'react'
import './App.css'
import Template from './template13'

const TODOS = [
  {tache:"Ecrire Cours REACT",date:"05/11/2024",heure: 10,categorie:'jsp1'},
  {tache:"Soirée entre Ami",date:"09/11/2024",heure:20,categorie:'jsp2'},
  {tache:"Préparer Noël",date:"01/12/2024",heure:30,categorie:'jsp3'}
]
function ToDo({tache,date,categorie,heureRestante}){

    const [heures, setHeures] = useState(heureRestante);

    function handleClickMinus(){
        if(heures > 0){
            setHeures(heures - 1);
        }
    }
    function handleClickPlus(){
        setHeures(heures + 1);
    }

    
 return <li className='green'>
        {tache} - {date} - {categorie} - {heures}
        <button onClick={handleClickMinus}>-</button>
        <button onClick={handleClickPlus}>+</button>
        </li>
}

function App13() {
  let count = 0
  return (
    <>
        <Template>
        <ul>
            {TODOS.map(element => <ToDo 
            key={count++} 
            tache={element.tache} 
            date={element.date} 
            heureRestante={element.heure} 
            categorie={element.categorie}
            />)}
        </ul>
        </Template>
    </>
  )
}

export default App13