import {
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAILURE
}from '../actions/actions'

const initialState = {
    smurf: {
        name: '',
        age: '',
        height: '',
        error: '',
    },
    smurfs: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                smurf: action.payload,
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
         case POST_SMURFS_SUCCESS:
             return {
                 ...state,
                 smurfs: state.smurfs,
              }
        case POST_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
            }    
        default:
            return state
    }
} 