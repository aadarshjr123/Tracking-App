import React from 'react';
import {View, StyleSheet ,Text, Button} from  'react-native';


const TrackListScreen= ({navigation}) => {
    return (

        <>
          <Text>TrackListScreen</Text>
          <Button title="go to track Deatils" onPress={() => navigation.navigate('TrackDetails')}/>  
          <Button title="go to Sign in" onPress={() => navigation.navigate('Signin')}/>  
        </>
    );
};



const styles = StyleSheet.create({

});


export default TrackListScreen;