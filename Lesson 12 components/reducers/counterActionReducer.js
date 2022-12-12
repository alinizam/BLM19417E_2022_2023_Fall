const initialState={counter:5,previousActions:[]};

const counterActionReducer= function (state=initialState,action){
    switch(action.type){
        case("ADD"):
            return {...state, counter:state.counter+1, 
                            previousActions:[...state.previousActions,action.type]};
                            
        case("MINUS"):
            return {...state, counter:state.counter-1, 
                        previousActions:[...state.previousActions,action.type]};
        default:
            return state;
    }   
}
export default counterActionReducer;