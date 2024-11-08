import './App.css'
import Template from './Template'
import { useState } from 'react'

function ToDoList(){
    const TODOS = [
        {tache:"Ecrire Cours REACT",date:"05/11/2024", checked:true, heure:20, categorie:"Formation"},
        {tache:"Soirée entre Ami",date:"09/11/2024", checked:false, heure:6, categorie:"Loisir"},
        {tache:"Préparer Noël",date:"01/12/2024", checked:true, heure:10, categorie:"Fête"}
    ]
    const CATEGORIES = ["Formation","Loisir","Fête"]
    function ToDo({todo,date, checked,heureRestante}){
  const[heures, setHeures]=useState(heureRestante)

  function handleClick(){
    alert(todo)
  }

  function handleClickMinus(){
    if(heures > 0){
      setHeures(heures -1)
    }
  }

  function handleClickPlus(){
      setHeures(heures +1)
  }
  
  if(checked){
    return <li className='green'><button onClick={handleClickMinus}>-</button><button onClick={handleClickPlus}>+</button>{todo} - {date} - Heures Restantes : {heures}<input type="checkbox" defaultChecked/></li>
  }
  return <li className='orange'><button onClick={handleClickMinus}>-</button><button onClick={handleClickPlus}>+</button>{todo} - {date} - Heures Restantes : {heures}</li>
    }

    function Form({onSubmit}){

    return <form onSubmit={onSubmit}>
        <input type="text" placeholder='La Todo' />
        <input type="text" placeholder='La Date' />
        <input type="number" placeholder='Heure' />
        <select name="" id="">
        {CATEGORIES.map((element,index) => <option key={index} value={element}>{element}</option>)}
        </select>
        <input type="submit" />
    </form>
    }

    function App() {
    const[todos, setTodos]=useState(TODOS)
    const [formation, setFormation] = useState( true )
    const [loisir, setLoisir] = useState( true )
    const [fete, setFete] = useState( true )

    const TODOLIST = todos.filter(element => {
        if(element.categorie == "Formation" && !formation == true){
        return false
        }
        if(element.categorie == "Loisir" && !loisir == true){
        return false
        }
        if(element.categorie == "Fête" && !fete == true){
        return false
        }
        return true
    })

    //Rajouter des tâche à la liste de tâche
    function handleSubmit(event){
        event.preventDefault()
        const newTodo = {
        tache: event.target[0].value,
        date: event.target[1].value,
        heure: parseInt(event.target[2].value),
        categorie: event.target[3].value
        }
        //const tabToDos=[...todos, newTodo]
        const tabTodos=todos.map(element => element)
        tabTodos.push(newTodo)
        setTodos(tabTodos)
    }

    const DATE = new Date()
    
    return (
        <>
        <Template>
        <h2>{DATE.toLocaleString()}</h2>
        <section>
            <label><input type="checkbox" checked={formation} onChange={()=> setFormation(!formation)} />Formation</label>
            <label><input type="checkbox" checked={loisir} onChange={()=> setLoisir(!loisir)}/>Loisir</label>
            <label><input type="checkbox" checked={fete} onChange={()=> setFete(!fete)}/>Fête</label>
        </section>
        <ul>
            {TODOLIST.map((element,index) => <ToDo key={index} todo={element.tache} date={element.date} checked={element.checked} heureRestante={element.heure}/>)}
        </ul>
        <Form onSubmit={event=>handleSubmit(event)}/>
        </Template>
        </>
    )
    }   
    return <>
        <h1>TODOLIST</h1>
        <App/>
    </>
}

export default ToDoList