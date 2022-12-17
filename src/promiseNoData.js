function promiseNoData(props)
{
    //if(!props.promise){
    //    return (<div>no data</div>);
   //}

    if(!props.data && !props.error) {
        //return (<img src='/loading.gif' alt="loading data image" />);
        // return (<img class="mr-3" :src="require('/src/assets/loading.gif')" height="100%"/>);
        return ("Some image should show..");
    }
    if(props.error){
        const returnValue = props.error;
        return (<div>{returnValue.error}</div>);
    }
}


export {promiseNoData};