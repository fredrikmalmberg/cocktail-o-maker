function DetailsView(props){
    console.log(props.detailsDrinks);
    return(
    
        <div>
            {
                props.detailsDrinks.drinks.map(searchResultCB)
            }
            
        </div>
    );

    function searchResultCB(option)
    {
        function drinkClickedACB(){
            props.drinkClickedEvent(option);
        }
        return (
                <span onClick = {drinkClickedACB} key = {option.idDrink} class = "detailsDrink">
                    <img  src={""+ option.strDrinkThumb}  height = '100' />
                    <div class = "drinkName">Drinkname: {option.strDrink} </div><br></br>
                    <div class = "Ingredient1">Ingredients: <br></br>{option.strIngredient1} {option.strMeasure1}</div>
                    <div class = "Ingredient2">{option.strIngredient2} {option.strMeasure2}</div>
                    <div class = "Ingredient3">{option.strIngredient3} {option.strMeasure3}</div>
                    <div class = "Ingredient4">{option.strIngredient4} {option.strMeasure4}</div>
                    <div class = "Ingredient5">{option.strIngredient5} {option.strMeasure5}</div>
                    <div class = "Ingredient6">{option.strIngredient6} {option.strMeasure6}</div>
                    <div class = "Ingredient7">{option.strIngredient7} {option.strMeasure7}</div>
                    <br></br>
                    <div class = "Instructions">Instructions: <br></br>{option.strInstructions}</div>
                    <br></br><br></br>
                    <div>Happy Cocktail-o-Making!</div>
                </span>
                );


    }

    
}

export default DetailsView;



