import Template from "./Template";

const INGREDIENT = ["Salade","Tomate","Oignon"]

function ListElement({ingredient}){
    return <li>{ingredient}</li>
}

  function Exo({ingredient}) {
    return <>
        <Template>
          <ul>
            <ListElement ingredient={INGREDIENT[0]}/>
            <ListElement ingredient={INGREDIENT[1]}/>
            <ListElement ingredient={INGREDIENT[2]}/>
          </ul>
        </Template>
      </>
}
export default Exo


