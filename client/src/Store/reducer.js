
const intialState={
    counter:0
}

const reducer =(state = intialState,action)=>{
  if(action==="INCREMENT"){
      return{
          ...state,
          counter:state.counter+1
      }
  }
    return state
}
export default reducer