const initialState={counter:5};

const counterReducer= function (state=initialState,action){
    switch(action.type){
        case("ADD"):
            return {...state, counter:state.counter+1 };
        case("MINUS"):
            return {...state, counter:state.counter-1 };
        default:
            return state;
    }   
}
export default counterReducer;