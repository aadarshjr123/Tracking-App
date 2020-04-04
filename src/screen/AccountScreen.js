import React, {useContext} from 'react';
import {View, StyleSheet ,Text, NavigatorIOS} from  'react-native';
import { Button} from 'react-native-elements';
import { SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen= ({navigation}) => {
    const {signout } = useContext(AuthContext);
    return (

        <SafeAreaView style={styles.container} >
            
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer><Spacer></Spacer>

            
            <Button  title="Sign Out" onPress={signout}/>
            <Text style={styles.text}>From Tracker.</Text>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions ={
    tabBarIcon: <Ionicons name="md-person" size={20}/>
};



const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:15
 //    borderColor:'red',
 //    borderWidth:10
 },
 text:{
     fontSize:20,
     top:630,
     left:165,
     color:"#d2d6d3"
 }
});


export default AccountScreen;