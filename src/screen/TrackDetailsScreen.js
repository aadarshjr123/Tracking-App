import React , {useContext} from 'react';
import {View, StyleSheet ,Text, SafeAreaView} from  'react-native';
import { navigate } from '../navigatorRef';
import {Context as TrackContext} from '../context/TrackContext';
import MapView,{ Polyline } from 'react-native-maps';

const TrackDetailsScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id');

    const { state } = useContext(TrackContext);
    
    const track = state.find( t => t._id === _id);
    
    const initialCoords = track.locations[0].coords;

    return (

        <View style={styles.view}>
            <SafeAreaView style={styles.container}  forceInset={{ top:'always'}}>
            <Text style={styles.text}>{track.name}</Text>
            <MapView style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            >

                <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
            </MapView>
        </SafeAreaView>
    </View>
    );
};

TrackDetailsScreen.navigationOptions = () => {

    return {
        headerShown: true
    }
};


const styles = StyleSheet.create({
    view:{
        backgroundColor:'white',
        paddingVertical:260
    },
    container:{
     
        margin:20,
        bottom:100,
        
        
    },
 map: {
     height:300
 },
 text: {
    marginBottom:10,
    marginLeft:160,
    fontWeight:"bold",
    fontSize:20,
    bottom:30,

},

});


export default TrackDetailsScreen;