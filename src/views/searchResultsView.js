function SearchResultsView(props){
    console.log(props.searchResults);
    return(
    
        <div>
            {
                props.searchResults.drinks.map(searchResultCB)
            }
            
        </div>
    );

    function searchResultCB(option)
    {
        function drinkClickedACB(){
            props.drinkClickedEvent(option);
        }
        return (
                <span onClick = {drinkClickedACB} key = {option.idDrink} class = "searchResult">
                    <img  src={""+ option.strDrinkThumb}  height = '100' />
                    <div class = "drinkName">{option.strDrink}</div>
                </span>
                );


    }

    
}

export default SearchResultsView;



