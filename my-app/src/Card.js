import './Card.css'
export const Card = (pr) => {
    return (
      <div className="card">
        <h2>{pr.name}</h2>
        <img alt="Trago" src={pr.image}/>
        <h4>Servido en {pr.glass}</h4>
        <p>Ingredientes</p>
        <p>{pr.ingredient1}</p>
        <p>{pr.ingredient2}</p>
        <p>{pr.ingredient3}</p>
        <p>{pr.ingredient4}</p>
        <p>{pr.ingredient5}</p>
        <p>{pr.ingredient6}</p>
      </div>
        );
  };

  export default Card;