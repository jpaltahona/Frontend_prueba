import {GET_INFO, ERROR} from '../types/authTypes';

export const authUser = () => (dispatch) =>{
    
    fetch('http://localhost:4000/auth/login/success', {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
      .then(response => {
        if (response.status === 200) 
            return response.json();
      })
      .then(data => {
          dispatch({
              type: GET_INFO,
              payload: data.user
          })
      })
      .catch(error => {
        dispatch({
            type: ERROR,
            payload: error
        })
      });
}