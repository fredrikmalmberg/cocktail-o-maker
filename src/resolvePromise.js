function resolvePromise(promise, promiseState) {
  promiseState.error = null;
  promiseState.post = null;
  promiseState.loading = true;
  const { isFetching, error, data } = promise;
  if (error) {
    promiseState.error = error;
  }
  if (data) {
    promiseState.post = data;
  }
  promiseState.loading = isFetching;
}

function resolvePromise2(promise, promiseState){
    if (promise){
        promiseState.promise = promise;
    }
    else {
        return;
    }
    promiseState.data = null;
    promiseState.error = null;

    function saveDataACB(result){
        
        if(promiseState.promise !== promise) return;
        promiseState.data = result;

        
    }
    function saveErrorACB(err){

        if(promiseState.promise !== promise) return;
        promiseState.error = err;
        
    }
    promise.then(saveDataACB).catch(saveErrorACB);
}

export { resolvePromise, resolvePromise2 };
