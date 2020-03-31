import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const SkipTo = ( { navigation,text, routeName} ) => {
    
    return(
        <View>

        <TouchableOpacity style={styles.opactitylength} onPress={(navigate) => navigation.navigate(routeName)}>
                <Text style={styles.textt}>{text}</Text>
            </TouchableOpacity>

            </View>
    );
};


const styles = StyleSheet.create({


    opactitylength: {
        paddingLeft:10,
      //   borderWidth:10,
      //   borderColor:'red'
      },
  textt: {
      marginLeft:65,
      marginBottom:10,
      fontSize:17,
      
  }
});


export default withNavigation(SkipTo);