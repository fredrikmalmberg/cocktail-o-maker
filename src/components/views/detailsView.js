function DetailsView(props) {
  console.log(props.detailsDrinks);
  return <div>{props.detailsDrinks.drinks.map(searchResultCB)}</div>;

  function searchResultCB(option) {
    function drinkClickedACB() {
      props.drinkClickedEvent(option);
    }
    return (
      <span onClick={drinkClickedACB} key={option.idDrink} class="detailsDrink">
        <div class="drinkName" style="font-size:30px; font-weight:bold; padding-left:5% ">Drinkname: {option.strDrink} </div>
        <img
          src={"" + option.strDrinkThumb}
          height="200"
          style="border-radius: 10%; border: 5px solid #f5f5f5; display: block; margin-left: auto; margin-right: auto;"
        />
        <div style="padding-left:5%">
          <br></br>
          <div class="Ingredient1">
            Ingredients: <br></br>
            {option.strIngredient1} {option.strMeasure1}
          </div>
          <div class="Ingredient2">
            {option.strIngredient2} {option.strMeasure2}
          </div>
          <div class="Ingredient3">
            {option.strIngredient3} {option.strMeasure3}
          </div>
          <div class="Ingredient4">
            {option.strIngredient4} {option.strMeasure4}
          </div>
          <div class="Ingredient5">
            {option.strIngredient5} {option.strMeasure5}
          </div>
          <div class="Ingredient6">
            {option.strIngredient6} {option.strMeasure6}
          </div>
          <div class="Ingredient7">
            {option.strIngredient7} {option.strMeasure7}
          </div>
          <br></br>
          <div class="Instructions">
            Instructions: <br></br>
            {option.strInstructions}
          </div>
          <br></br>
          <br></br>
          <div>Happy Cocktail-o-Making!</div>
        </div>
      </span>
    );
  }
}

export default DetailsView;
