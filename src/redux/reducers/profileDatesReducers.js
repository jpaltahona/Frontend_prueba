import { GET_INFO, CARGANDO, ERROR } from '../types/profileTypes';

const INITIAL_STATE = {
    infoProfile: [],
    cargando: true,
    error: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_INFO:
            return { ...state, 
                infoProfile: action.payload,
                cargando: false
            };
    
        default: return state
    }
}