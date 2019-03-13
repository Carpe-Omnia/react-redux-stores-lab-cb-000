export default function createStore(reducer){
  let state;
  let listeners = []
  const subscribe = (listener) => {
    listeners.push(listener)
  }
  const getState = () => {
    return state
  }
  const dispatch = (action) => {
    state = reducer(state, action) ;
    listeners.forEach (listener => listener() )
  }
  dispatch({type: 'none'})
  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}
