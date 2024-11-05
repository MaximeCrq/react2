import Card from './Card'
const USER1 = {
  source:'https://picsum.photos/400/400?random=1',
  pseudo: 'Sauron',
  email:'mordor@null.rip',
  description:'Aurait du ganger'
};

const USER2 = {
  source:'https://picsum.photos/400/400?random=3',
  pseudo: 'Fraudon',
  email:'compte@paradis.irl',
  description:'AUrait du sappeler "LA FRAUDE"'
};

const USER3 = {
  source:'https://picsum.photos/400/400?random=2',
  pseudo: 'Gandalf',
  email:'dieux@nerf.adieu',
  description:'Nerfé dans les films'
};

function App() {

  return (
    //fragment (nul comme nom)
    <>
      <h1>MON COEUR ACTUELLEMENT</h1>
      <Card 
          source={USER1.source} 
          pseudo={USER1.pseudo} 
          email={USER1.email} 
          description={USER1.description} 
      />
      <Card 
          source={USER2.source} 
          pseudo={USER2.pseudo} 
          email={USER2.email} 
          description={USER2.description} 
      />
      <Card 
          source={USER3.source} 
          pseudo={USER3.pseudo} 
          email={USER3.email} 
          description={USER3.description} 
      />
    </>
  )
}

export default App