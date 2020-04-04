// import '../_mockLocation';
import React ,{ useContext , useCallback} from 'react';
import { StyleSheet, View } from  'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView , withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen= ({ isFocused }) => {
    // use-context
    const {state:{ recording }, addLocation } = useContext(LocationContext);
   
    // use-callback
    const callback = useCallback(location   => {
        addLocation(location, recording );
    } , [recording]);
    // custom uselocation
    const [err] = useLocation( isFocused || recording , callback );

    return (
        <SafeAreaView style={styles.container} forceInset={{ top:'always'}}>
            
            <Map/>
            
            
           
            <TrackForm/>
        </SafeAreaView>
    );
};


TrackCreateScreen.navigationOptions = {
    title : 'Add tracks',
    tabBarIcon: <FontAwesome name="plus" size={20}/>
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:20,
        
    },
     text:{
         fontSize:30,
         left: 120,
         
     },
   

});


export default withNavigationFocus(TrackCreateScreen);