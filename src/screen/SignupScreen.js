
import React,{ useContext} from 'react';
import { View,StyleSheet , Image} from  'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import  { Context as AuthContext } from '../context/AuthContext';
import SkipTo from '../components/SkipTo';
import AuthForm from '../components/AuthForm';
import { NavigationEvents} from 'react-navigation';


const SignupScreen= ({ navigation }) => {
    const { state , signup, clearErrorMessage} = useContext(AuthContext);
    

   
    console.log(state);

   
    
    return (

        <View style={styles.container}>

            <Image style={styles.backgroundImage} source={require('/home/tank/Desktop/react/TrackApp-Complete/tracks/assets/images/fog-1535201_1920.jpg')}/>
            <Text style={styles.text} h3>Hey,{'\n'}You can SIGN-UP{'\n'}Here!  </Text>    
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm 
                
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup} 
                
            />
            <Spacer></Spacer>
            <SkipTo
            text="Already signed-up ? then go back to sign-in"
            routeName="Signin"

            />
         
        </View>
        
    );
};

SignupScreen.navigationOptions = () => {
    
    return{

        headerShown:false,
    };

};



const styles = StyleSheet.create({
   container:{
       flex:1,
    //    borderColor:'red',
    //    borderWidth:10
    },
    text:{
        // marginTop:40,
        // marginBottom:40,
        // paddingLeft:40,
        letterSpacing:10,
        color:'#00002A',
        marginLeft:20,
        top:10
      
    },
    backgroundImage: {
        flex: 1,
        alignSelf:"center",
        
        
      },
     
    
});


export default SignupScreen;