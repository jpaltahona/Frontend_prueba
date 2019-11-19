import {GET_INFO, ERROR} from '../types/authTypes';
const INITIAL_STATE = {
    auth: {},
    cargando: true,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_INFO:
            return { ...state, 
                auth: action.payload,
                cargando: false
            };
       
        case ERROR: 
            return {
                ...state, error: 
                action.payload, 
                cargando: false 
            }
        default: return state
    }
};