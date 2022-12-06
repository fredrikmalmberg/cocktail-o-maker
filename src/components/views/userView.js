/* eslint-disable */

function UserView(props){

    return(
    
        <div>
            <v-icon x-large>mdiAccountsadasd</v-icon>
            Name: {props.userName}
            {props.favourites}
        </div>
    );

    function shortResultCB(option)
    {
        return (
                <span key = {option.idDrink} class = "searchResult">
                    <img  src={""+ option.strDrinkThumb}  height = '100' />
                    <div class = "drinkName">{option.strDrink}</div>
                </span>
                );


    }

    
}

export default UserView;

/* eslint-disable */


