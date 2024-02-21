import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//@ts-ignore
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Strings } from '../resources/Strings';
import { portfolioType } from '../types/DashboardTypes';
import { Colors } from '../resources/Colors';

const PortfolioView = ({data}:{data:portfolioType}) => {

  const [bottomIndex,setBottomIndex]=useState(0)
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['20%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    if(index>=0)
    setBottomIndex(index)
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.parent}>
        <BottomSheet
          ref={bottomSheetRef}
          style={{ backgroundColor: Colors.white }}
          backgroundStyle={{ backgroundColor: Colors.white }}
          handleIndicatorStyle={{ backgroundColor: "transparent" }}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            {bottomIndex>0 && <><View style={styles.container}>
              <Text style={styles.title}>{Strings.CURRENT_VALUE}</Text>
              <Text style={styles.amount}>₹{data?.currentValue}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>{Strings.TOTAL_INVESTMENTS}</Text>
              <Text style={styles.amount}>₹{data?.totalInvestments}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>{Strings.TODAYPL}</Text>
              <Text style={styles.amount}>₹{data?.todayPL}</Text>
            </View></>}
            <View style={[styles.container,{marginTop:bottomIndex?15:5}]}>
              <Text style={styles.title}>{Strings.PROFIT_LOSS}</Text>
              <Text style={styles.amount}>₹{data?.totalPL}</Text>
            </View>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  parent:{flex:1},
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: "100%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 
  },
  title: { fontWeight: "bold", color: Colors.black, fontSize: 18,marginBottom:10 },
  amount: { fontWeight: "bold", fontSize: 17 },


});

export default PortfolioView;