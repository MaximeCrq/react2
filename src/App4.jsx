const USERS = [{source:'https://picsum.photos/400/400?random=1',
                pseudo: 'Sauron',
                email:'mordor@null.rip',
                description:'Aurait du ganger'},

                {source:'https://picsum.photos/400/400?random=3',
                pseudo: 'Fraudon',
                email:'compte@paradis.irl',
                description:'AUrait du sappeler "LA FRAUDE"'},
                
                {source:'https://picsum.photos/400/400?random=2',
                pseudo: 'Gandalf',
                email:'dieux@nerf.adieu',
                description:'Nerfé dans les films'}];



function Card({source, pseudo, email, description}){
    return (
        <article className="card">
            <img src={source} ></img>
            <h2>{pseudo}</h2>
            <p>{email}</p>
            <p>{description}</p>
        </article>
    );
}

function List4(){
return (
    <ul>
        {USERS.map(ToDo=>(
            <Card key={USERS.indexOf(ToDo)} source={ToDo.source} pseudo={ToDo.pseudo} email={ToDo.email} description={ToDo.description}/>
        ))}
    </ul>
);
}

export default List4