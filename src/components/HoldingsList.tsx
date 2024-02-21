import React, { memo } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';
import { Colors } from '../resources/Colors';
import { Strings } from '../resources/Strings';
import {holdingsType} from '../types/DashboardTypes'
import { calculatePL } from '../util/DashboardHelper';

const HoldingsList = ({ data }: { data: holdingsType[] }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return (<View style={styles.parentView}>
                        <View style={styles.top_hor_view}>
                            <Text style={styles.title}>{item.symbol}</Text>
                            <Text>{Strings.LTP}<Text style={styles.title}>{item.ltp.toFixed(2)}</Text></Text>
                        </View>
                        <View style={styles.bottom_hor_view}>
                            <Text>{item.quantity}</Text>
                            <Text>{Strings.PL}<Text style={styles.title}>{'₹ ' + calculatePL(item)}</Text></Text>
                        </View>
                        <View style={styles.divider}/>
                    </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {  width: "100%",justifyContent: "center",  },
    parentView:{backgroundColor:Colors.white},
    top_hor_view:{ flexDirection: "row",justifyContent:"space-between" ,paddingHorizontal:15,marginTop:10},
    bottom_hor_view:{ flexDirection: "row",justifyContent:"space-between" ,paddingHorizontal:15,marginVertical:10},
    divider:{backgroundColor:Colors.divider,height:1,width:"100%"},
    title:{fontWeight:"bold",color:Colors.black}
});

export default memo(HoldingsList) 
