import drinksApi from "./API/drinksApi"
import Card from "./Card"
import './App.css'

   
function App() {
  return (
    <div className="main_container">
      <h1>Lista de Tragos </h1>
      {drinksApi.map((character, i) => (
        <Card key= {i}
          name={character.strDrink}
          image={character.strDrinkThumb}
          glass={character.strGlass}
          ingredient1={character.strIngredient1}
          ingredient2={character.strIngredient2}
          ingredient3={character.strIngredient3}
          ingredient4={character.strIngredient4}
          ingredient5={character.strIngredient5}
          ingredient6={character.strIngredient6}
          />
        ))}
    </div>
  );
}

export default App;
