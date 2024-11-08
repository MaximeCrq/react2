import './App.css'

function Calendar(){
    //3
const MONTH = ['Janvier','Février','Mars','Avril','Mai', 'Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
//4
const DAY = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
//5
const DAY_LETTER = function App5() {
    const firstLetters = DAY.map(jour => jour[0]);
    return (
        <ul>
            {firstLetters.map((lettre, index) => (
                <li key={index}>{lettre}</li>
            ))}
        </ul>
    );
}


//6
function Day ({jour}, {className}){
    return(
        <div className={className}>
            <p>{jour}</p>
        </div>
    )
}


//7
//VERSION 1
const index = [];


// for(let i=1 ;i<=31; i++){
//     index.push(i);
// }

// function Autre1(){
//     return(
//         <ul>
//             {index.map(toto=>(
//                 <Day key={index.indexOf(toto)} jour={toto} className={'backgroundcolorOrange'} />
//             ))
//             }
//         </ul>
//     )
// }
// export default Autre1

//VERSION 2
function Aea(){
    let ROW = []
    for(let i=1 ;i<=31; i++){
        ROW.push(<Day key={i} jour={i} className={'backgroundcolorOrange'} />);
      }
    return ROW;
}
function Autre2(){
    return(
        <ul>
          {Aea()}
        </ul>
    )
}
// export default Autre2



//8
function Day2 ({jour}, {className}){
    return(
        <div className={className}>
            <p>{jour}</p>
        </div>
    )
}

const AllDay = [];
function DAY_LETTER2(){
    DAY.forEach(lettre => AllDay.push(lettre[0]));
}
DAY_LETTER2();




function Huit (){
    return(
        <div className='maxou'>
            <article className='month'>
                <Day2 jour={MONTH[9]} />
            </article>

            <section className="grid-7 days1">
                {AllDay.map(lettre=>(
                    <Day2 key={AllDay.indexOf(lettre)} jour={lettre} className={''} />
                ))}
            </section>

            <section className="grid-7 days2">
                {Aea()}
            </section>
        </div>
    )
}
    return <>
    <h1>CALENDAR</h1>
    <Huit/>
    </>
}

export default Calendar