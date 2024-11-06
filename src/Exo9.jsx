import './App.css'

const TODOS = [
  {tache:"Ecrire Cours REACT",date:"05/11/2024", checked:true},
  {tache:"Soirée entre Ami",date:"09/11/2024", checked:true},
  {tache:"Préparer Noël",date:"01/12/2024", checked:false}
]
function ToDo({todo,date,checked}){
    if(checked){
        return <ul>
        <li className='green'>
            <input type='checkbox' defaultChecked></input>
            {todo} - {date}
            </li></ul>
    } else {
    return <ul>
    <li className='orange'>
        <input type='checkbox' ></input>
        {todo} - {date}
        </li></ul>
    }
}


function TodoAnd({todo,date,checked}){
    return <ul>
        { checked && <li>
        <input type='checkbox' defaultChecked></input>
        {todo} - {date}
            </li>}
    </ul>
}



function App() {
    return<>
    <ul>
    {TODOS.map((element,index)=> <ToDo key={index} tache={element.tache} date={element.date} checked={element.checked}/>)}
  </ul>
  <ul>
    {TODOS.map((element,index)=> <TodoAnd key={index} tache={element.tache} date={element.date} checked={element.checked}/>)}
  </ul>
  </>
}

export default App