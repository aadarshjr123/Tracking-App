import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: {name, recording , locations} ,
        startRecording , 
        stopRecording, 
        changeName } = useContext(LocationContext)


    const [saveTrack] = useSaveTrack();

    //console.log(locations.length);

    return(
        <View style={styles.container}>
        <Spacer></Spacer>
        <Input value={name} onChangeText={changeName}  placeholder="Enter the location"/>
        <Spacer></Spacer>
        {recording ? (<Button title="Stop" onPress={stopRecording}/>) : (<Button title="Start" onPress={startRecording}/>)}
        <Spacer></Spacer>
        { !recording && locations.length ? ( <Button title="Save Recording" onPress={saveTrack}/>) : null}
        </View>
        );
};



const styles = StyleSheet.create({

    container:{
        margin:15
    }
});


export default TrackForm;