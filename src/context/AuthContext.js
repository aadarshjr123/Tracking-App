import { AsyncStorage } from 'react-native';
import  createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import  { navigate } from '../navigatorRef';

const authReducer = (state,action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage:action.payload};
        case 'signin':
            return {errorMessage:'', token:action.payload};
        case 'clear_error_message':
            return {...state, errorMessage:''};
        case 'signout':
            return {token:null , errorMessage: ''};    
        default:
            return state;
    }
};


const tryLocalSignin = dispatch => async () => {

    const token = await AsyncStorage.getItem('token');
    if (token)
    {
        dispatch({ type: 'signin' , payload: token });
        navigate('TrackList');


    }
    else {
        navigate('loginFlow')
    }
};

const clearErrorMessage = dispatch => () => {

    dispatch({ type: 'clear_error_message'});
};


const signup = dispatch =>  async ( { email , password } ) => {
            // need to signup
            // make to another state
            // failure occurs
        try {
            const response = await trackerApi.post('/signin', {email, password});
            
            await AsyncStorage.setItem('token' , response.data.token);
            dispatch({ type: 'signin' , payload: response.data.token});
            navigate('TrackList');
        } catch (err) {
            //console.log(err.message);
            dispatch({ type:'add_error' , payload: 'Something went wrong!!!'} );
        }
  
        };



const signin = dispatch =>  async ({email, password}) => {
                // need to signup
                // make to another state
                // failure occurs

            try {

                const response = await trackerApi.post('/signin' , {email, password});
                await AsyncStorage.setItem('token' , response.data.token);
                dispatch({ type:'signin' , payload: response.data.token});
                navigate('TrackList');
                    
              } catch (err) {
                    dispatch({
                        type : 'add_error',
                        payload:'Something went wrong Sign in'
                    })
              }
        
    };


const signout = dispatch =>  async () => {

        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout'}); 
        navigate('loginFlow'); 
        // make signout
    };




export const {Provider , Context} = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage , tryLocalSignin},
    { token: null , errorMessage: ''}
);