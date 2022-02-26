import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { useCountContext } from '../../Context/CountContext';

export default function MainView() {


  const countContextval=useCountContext();

  return(
    <View style={styles.container}>
      <Text style={{fontSize:50,color:'wheat',margin:20}}>Counter</Text>
      <Text style={{fontSize:100 ,color:'wheat',margin:20}}>{countContextval.count}</Text>
      <TouchableOpacity onPress={()=>countContextval.setCount(countContextval.count+1)} style={styles.design1}>
        <View>
          <Text style={{fontSize:20 ,color:'white'}}>Increase</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>countContextval.setCount(countContextval.count-1)} style={styles.design1}>
        <View>
          <Text style={{fontSize:20,color:'white'}}>Decrease</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>countContextval.setCount(countContextval.count-countContextval.count)} style={styles.design1}>
        <View>
          <Text style={{fontSize:20,color:'white'}}>Reset</Text>
        </View>
    </TouchableOpacity>
    </View>
      );
  }

  
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'orangered',
      alignItems: 'center',
      justifyContent: 'center',
    },
    design1:{
      width:200,
      height:75,
      margin:10,
      justifyContent:'center',
      alignItems:'center',
      borderTopRightRadius:20,
      borderBottomLeftRadius:20,
      padding:10,
      borderRadius:100,
      backgroundColor:'coral'
    }
  });
 