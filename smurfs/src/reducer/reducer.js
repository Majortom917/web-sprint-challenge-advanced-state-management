
const initialState = {
    smurfs: [],
    error:'',
    isFetching: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_START:
            return{
                ...state,
                error:'',
                isFetching: true,
            }
        case FETCH_SMURF_SUCCESS:
            console.log(action.payload)
            console.log(action.payload.length)
            return{
                ...state,
                error:'',
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_SMURF_FAILURE:
            return{
                ...state,
                error:action.payload,
                isFetching: false,
            }
        default:
            return state;
    }

}