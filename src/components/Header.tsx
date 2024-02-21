import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Colors } from '../resources/Colors';

const Header = ({title}:{title:string}) => {
    return(
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    container:{height:60,width:"100%",backgroundColor:Colors.header_color,justifyContent:"center",paddingHorizontal:15},
    title:{color:Colors.white,fontWeight:"bold",fontSize:19}
});

export {Header};
