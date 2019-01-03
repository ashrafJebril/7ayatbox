
const intialState={
    counter:0,
    result2:''
}

const reducer =(state = intialState,action)=>{
    console.log(666666)
  if(action.type==="INCREMENT"){
      console.log(9999999999999999)
      return{
          ...state,
          counter:state.counter+1
      }
  }else if(action.type==="SAVE"){
      return {
            ...state,
            result2:action.value
      }

  }
    return state
}
export default reducer