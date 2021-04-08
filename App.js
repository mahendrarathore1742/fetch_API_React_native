import * as React from 'react';
import { Text, View, StyleSheet,Button,TextInput,Alert,Image } from 'react-native';
import Constants from 'expo-constants';
import { useState,useEffect } from 'react';


export default function App() {
  const [list,setlist]=useState([]);
  const getlist=()=>{
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(data=>data.json())
     .then(data1=>{
       setlist(()=>{
         return data1.map(key=>{
           return <li>{key.title}</li>
         });
       })
     })
  }

useEffect(getlist,[]);

  return(
    <View style={styles.container}> 

    <Text> {list}</Text>

       </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fafafa",
    flexDirection:"column",
    justifyContent:'center',
      alignItems:'center'
  },
  
});
