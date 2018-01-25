import axios from 'axios';
import { setAuthHeaders } from '../utils/auth';

export const handleRegistration = (email, password, passwordConfirmation, history) => {
  return(dispatch) => {
    axios.post('/api/auth', { email, password, password_confirmation: passwordConfirmation })
      .then( res => {
        setAuthHeaders(res.headers);
        dispatch({ type: 'LOGIN', user: res.data.data, headers: res.headers });
        history.push('/');
      })
      .catch( res => {
        // TODO: handle errors client side
        console.log(res);
    });
  }
}

export const handleLogout = (history) => {
  // make a request to log the user out
  // dispatch a POJO to log the user out of our redux state
  // push the user with history to the /login route
  return(dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        setAuthHeaders(res.headers);
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
      })
      .catch( res => {
        // TODO: handle errors for the client
        console.log(res);
      });
    }
}

export const handleLogin = (email, password, history) => {
  return(dispatch) => {
    axios.post('/api/auth/sign_in', { email, password })
      .then( res => {
        setAuthHeaders(res.headers);
        dispatch({ type: 'LOGIN', user: res.data.data, headers: res.headers });
        history.push('/');
      })
      .catch( res => {
        // TODO: handle errors for the client
        console.log(res);
      })
  }
}

export const validateToken = (callBack = () => {}) => {
    return dispatch => {
      dispatch({ type: 'VALIDATE_TOKEN' });
      const headers = axios.defaults.headers.common;
      axios.get('/api/auth/validate_token', headers)
        .then(res => {
          const user = res.data.data;
          dispatch({ type: 'LOGIN', user: res.data.data, headers: res.headers });
      }).catch(() => callBack());
    };
  };