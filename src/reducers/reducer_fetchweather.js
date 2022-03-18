import { FETCH_WEATHER } from '../actions/searchForCity'

export default function weatherReducer(state = [], action){
    switch(action.type){
        case FETCH_WEATHER : return [action.payload.data, ...state]
         default: return state   
    }
}

