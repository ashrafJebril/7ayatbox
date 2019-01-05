
const intialState={
    counter:0,
    result2:[]
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
      var array=state.result2
      array.push(action.value)
      return {
            ...state,
            result2:array
      }

  }
    return state
}
export default reducer