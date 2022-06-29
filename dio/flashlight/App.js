/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet, 
  View,
  Image,

} from 'react-native';

const App = () =>{
    const toggle = false;

    return(
       <View style={toggle ? styles.containerLight: styles.container} >   
    
            <Image style={toggle ? styles.lightingOn: styles.lightingOff}
            source={
             toggle ? require('./assets/icons/eco-light.png')
            :require('./assets/icons/eco-light-off.png')
            }

            />
            <Image style={styles.dioLogo}
            source={
             toggle ? require('./assets/icons/logo-dio.png') 
            :require('./assets/icons/logo-dio-white.png')
            }

            />
        
        </View>
        

    )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
    },
containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
},
lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
},
lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
},
dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
}



});

export default App;
