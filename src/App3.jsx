

const TODOS = [{todo:'jsp1', date:'jeudi'},
                {todo:'jsp2', date:'vendredi'},
                {todo:'jsp3', date:'samedi'}]

function ListElement({ todo , date}){
    return <li>{todo} - {date}</li>;
}

function List(){
    return (
        <ul>
            {TODOS.map(ToDo=>(
                <ListElement key={TODOS.indexOf(ToDo)} todo={ToDo.todo} date={ToDo.date}/>
            ))}
        </ul>
    );
}

export default List