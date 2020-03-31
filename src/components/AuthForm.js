import React, { useState } from 'react';
import {StyleSheet } from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from './Spacer';



const AuthForm = ( { errorMessage , onSubmit , submitButtonText} ) => {
    
    const [email, setEmail] = useState('');
    const [password ,setPassword] = useState('');


  

      return (
          <>
            <Spacer>
            
            
            <Spacer/>
            <Input  
                label="Email" 
                value={email} 
                onChangeText={newEmail => setEmail(newEmail)}
                autoCapitalize="none" 
                autoCorrect={false}
            />
            <Spacer/>
            <Spacer></Spacer>
            <Input  
                label="Password" 
                value={password} 
                onChangeText={newPassword => setPassword(newPassword) } 
                autoCapitalize="none" 
                autoCorrect={false}
                secureTextEntry
            />
            <Spacer/>
            {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null }
            <Spacer></Spacer>
            <Button title={submitButtonText} onPress={() => onSubmit({ email , password})}/>
            <Spacer></Spacer>
            </Spacer>
            </>
      );
    
};


const styles = StyleSheet.create({
 text :{ 
    marginLeft:10,
    bottom:20,
    color:"#ed2f72"
    
 }

});


export default AuthForm;