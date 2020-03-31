import React from 'react';
import {View, StyleSheet ,Text} from  'react-native';
import { SafeAreaView } from 'react-navigation';

const TrackCreateScreen= () => {
    return (

        <SafeAreaView forceInset={{ top:'always'}}>
            <Text style={styles.text}>TrackCreateScreen</Text>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
     text:{
         fontSize:30,
         left: 120,
         
     }
});


export default TrackCreateScreen;