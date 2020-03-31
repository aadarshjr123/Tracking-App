import React,{useContext} from 'react';
import {View, StyleSheet, Image} from  'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import SkipTo from '../components/SkipTo';
import AuthForm from '../components/AuthForm';
import  { Context  } from '../context/AuthContext';
import { NavigationEvents} from 'react-navigation';

const SigninScreen= ({navigation}) => {

    const { state , signin , clearErrorMessage} = useContext(Context);


    return (

        <View style={styles.container}>
            
            <Image style={styles.backgroundImage} source={require('/home/tank/Desktop/react/TrackApp-Complete/tracks/assets/images/old-1130731_1920.jpg')}/>
            <Text style={styles.text} h3>Hey,{'\n'}You can SIGN-IN{'\n'}Here!  </Text>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
            
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
            />

            <Spacer></Spacer>
            <SkipTo
            text="Dont have an Account ? then go back to sign-up"
            routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions =  {

    headerShown:false,
    
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


export default SigninScreen;