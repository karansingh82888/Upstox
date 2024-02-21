import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../resources/Colors';
const LoaderView = ({loader}:{loader:boolean}) => {
  if (loader == true) {
    return (
      <View style={styles.mainView}>
        <ActivityIndicator
          animating={loader}
          size={'large'}
          color={Colors.white}
        />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  mainView: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor:  "#00000099",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});

export {LoaderView};
