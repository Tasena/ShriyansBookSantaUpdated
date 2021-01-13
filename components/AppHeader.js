import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';

export const AppHeader = (props)=>{
    return (
        <Header
          centerComponent={{
            text: props.title,
            style: { color: 'white', fontSize: 28.064, marginTop: -5 },
          }}
          containerStyle={{
            backgroundColor: '#EB4B4B',
          }}
        />
    )
}