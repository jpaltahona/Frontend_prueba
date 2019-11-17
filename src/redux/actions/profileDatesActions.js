import { GET_INFO, CARGANDO, ERROR } from '../types/profileTypes';
import Axios from 'axios';

export const getInfoProfile = () => async (dispatch) => {
    try{
        const response = await Axios.get('http://localhost:8080/users/acount')
        dispatch({
            type: GET_INFO,
            payload: response.data
        })
    }catch(error){
        dispatch({
            type: ERROR,
            payload: 'Error De autenticación'
        })
    }   
}