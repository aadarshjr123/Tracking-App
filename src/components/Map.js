import React, {useContext} from 'react';
import { Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import MapView , { Polyline , Circle}  from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext'
import Spacer from '../components/Spacer';

const Map = () => {

    const { state:{ currentLocation , locations} } = useContext(LocationContext);

    if(!currentLocation) {
        return <ActivityIndicator  size="large" style={styles.spinner} />;
    }

    //if needed
    //console.log(currentLocation);


// Dont need here!!!

//     let points = [];
//     for (let i=0; i<20;i++) {
//         if(i % 2 === 0) {
//         points.push({
//             latitude: 37.33233 + i * 0.001,
//             longitude: -122.03121 + i * 0.001,
//         });

//     } else {
//         points.push({
//             latitude: 37.33233 - i * 0.002,
//             longitude: -122.03121 + i * 0.001,
//         });
//     }
// }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Map</Text>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <MapView 
                initialRegion={{
                    // latitude:11.0156239,
                    // longitude:77.0364688,
                    ...currentLocation.coords,
                    latitudeDelta:0.05,
                    longitudeDelta:0.05
                }}

                // region={{
                //     ...currentLocation.coords,
                //     latitudeDelta:0.01,
                //     longitudeDelta:0.01
                    
                // }}
                style={styles.map}
            >  
                
            <Circle 
                center={currentLocation.coords}
                radius={5}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,0.3)"
            /> 
            <Polyline  coordinates={locations.map(loc => loc.coords )}/>  
            </MapView> 
            
            
        </View>
    );
};



const styles = StyleSheet.create({
 container:{
     
     margin:15,
     
 },
    text: {bottom:25,
        left:5,

        marginBottom:5,
        marginLeft:180,
        fontWeight:"bold",
        fontSize:25,

    },
 
    map: {
        height:280,
      
        
    },
    spinner: {
        marginTop:50
        
    },
    viewstyle: {
        margin : 10,
        borderWidth: 1,
        borderColor:'black',
        borderRadius:40
    }
});


export default Map;