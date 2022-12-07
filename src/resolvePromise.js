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

export { resolvePromise };
