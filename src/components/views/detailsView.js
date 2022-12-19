function DetailsView(props) {
  console.log(props.detailsDrinks);
  return (
    <div>
      {props.detailsDrinks.drinks.map((option) => {
        const ingredients = [
          {
            name: option.strIngredient1,
            measure: option.strMeasure1,
          },
          {
            name: option.strIngredient2,
            measure: option.strMeasure2,
          },
          {
            name: option.strIngredient3,
            measure: option.strMeasure3,
          },
          {
            name: option.strIngredient4,
            measure: option.strMeasure4,
          },
          {
            name: option.strIngredient5,
            measure: option.strMeasure5,
          },
          {
            name: option.strIngredient6,
            measure: option.strMeasure6,
          },
          {
            name: option.strIngredient7,
            measure: option.strMeasure7,
          },
        ];
        return (
          <span
            onClick={() => props.drinkClickedEvent(option)}
            key={option.idDrink}
            class="detailsDrink"
          >
            <div
              class="drinkName"
              style="font-size:30px; font-weight:bold; padding-left:5% "
            >
              Drinkname: {option.strDrink}{" "}
            </div>
            <img
              src={option.strDrinkThumb}
              height="250"
              style="border-radius: 10%; border: 5px solid #f5f5f5; display: block; margin-left: auto; margin-right: auto;"
            />
            <div style="padding-left:5%">
              <br />
              <div class="Ingredients">
                Ingredients: <br />
                {ingredients.map((ingredient, index) => {
                  if (ingredient.name && ingredient.measure) {
                    return (
                      <div key={index}>
                        {ingredient.name} {ingredient.measure}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              <br />
              <div class="Instructions">
                Instructions: <br />
                {option.strInstructions}
              </div>
              <br />
              <br />
              <div>Happy Cocktail-o-Making!</div>
            </div>
          </span>
        );
      })}
    </div>
  );
}

export default DetailsView;
