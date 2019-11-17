import { TRAER_TODOS, CARGANDO, ERROR } from '../types/authTypes';
import Axios from 'axios';
export const traerTodos = () => async (dispatch) => {
    try{
        const response = await Axios.get('http://localhost:8080/auth/twitter');
        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })
    }catch(error){
        dispatch({
            type: ERROR,
            payload: 'Error De autenticación'
        })
    }   
}