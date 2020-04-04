import React , {useContext} from 'react';
import {View, StyleSheet ,Text, FlatList , TouchableOpacity} from  'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import TrackDetailsScreen from './TrackDetailsScreen';


const TrackListScreen= ({navigation}) => {
    
  const { state,fetchTracks } = useContext( TrackContext);
  
  //console.log(state);

  return (

        <View >

          <NavigationEvents onWillFocus={fetchTracks}/>

          <FlatList
            
              data={state}
              keyExtractor={item =>item._id}
              renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => 
                  navigation.navigate('TrackDetails', { _id:item._id })
                }>
                  <ListItem  chevron title={item.name}/>
                </TouchableOpacity>
              }}
          />
        </View>
    );
};

TrackListScreen.navigationOptions = { 

    title: 'Tracks',
    
   
  
   
};


const styles = StyleSheet.create({
  container:{
    margin:15,
    
  },
  flatlist : {
    marginBottom:10,
    borderWidth:1,
    borderColor:'black',
    //shadowColor:'black',
    //shadowOpacity:12,
    
  }
});


export default TrackListScreen;