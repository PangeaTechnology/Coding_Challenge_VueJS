const setStateOnLocalStorage = store => {
  store.subscribe((_, state) => {
    localStorage.setItem('App', JSON.stringify(state));
  })
}
export default setStateOnLocalStorage;