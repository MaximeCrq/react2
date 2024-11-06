import './App.css'

const TODOS = [
  {tache:"Ecrire Cours REACT",date:"05/11/2024", checked:true},
  {tache:"Soirée entre Ami",date:"09/11/2024", checked:true},
  {tache:"Préparer Noël",date:"01/12/2024", checked:false}
]

function ToDo11({tache,date,checked}){
    function handleClick(message){
        alert(message)
    }

    if(checked){
        return <ul>
        <li className='green' onClick={()=>handleClick(tache+' '+'faite')}>
            <input type='checkbox'  ></input>
            {tache} - {date}
            </li></ul>
    } else {
    return <ul>
    <li className='orange'>
        <input type='checkbox' ></input>
        {tache} - {date}
        </li></ul>
    }
}


function From({onSubmit}){
    function handleChange(event){
        console.log(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <input onChange={(event)=>handleChange(event)} type='text' placeholder='La Tache'/>
            <input type='text' placeholder='La Date'/>
            <input type='submit' value='SURPRISE'/>
        </form>
    )
}

function App11() {
    let count = 0
    function handleSubmit(event){
        event.preventDefault();
        const INPUTS2 = document.querySelectorAll('input[type="text"]');
        const INPUTS = Array.prototype.slice.call(INPUTS2);
        //console.log(INPUTS);
        let tab = [];
        INPUTS.forEach((valeur)=>tab.push[valeur.value]);
        //console.log(tab);
        return (
            <p>
                {tab.forEach((valeur)=><p>{tab[valeur]}</p>)}
            </p>
        )
    }
    return<>
    <ul>
    {TODOS.map((element,index)=> <ToDo11 key={index} tache={element.tache} date={element.date} checked={element.checked}/>)}
  </ul>

  <From key={count} 
  onSubmit={(event)=>handleSubmit(event)}/>
  </>
}

export default App11;



