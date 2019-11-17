import { TRAER_TODOS, CARGANDO, ERROR } from '../types/authTypes';

const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    error: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODOS:
            return { ...state, 
                usuarios: action.payload,
                cargando: false
            };
    
        default: return state
    }
}