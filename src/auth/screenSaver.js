import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export const ScreenSaver = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('login');
  }, 3000);
  return (
    <View style={styles.screen_saver}>
      <Image
        style={styles.image}
        source={require('../assets/image/Group.png')}
      />
      <Text style={styles.textCompany}>
        Thienanco.Ltd
      </Text>
      <Text style={styles.title}>Beauty Love</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen_saver: {
    position: 'absolute',
    width: '76%',
    height: 83,
    left: '9%',
    top: '41%',
  },
  image: {
    position: 'absolute',
    left: '10%',
    top: '44.83%',
  },
  textCompany: {
    position: 'absolute',
    left: '44.8%',
    top: '47.02%',
    fontFamily: 'Montserrat',
    fontSize: 22,
    lineHeight: 26,
    color: '#3F3F3F',
  },
  title: {
    position: 'absolute',
    left: '44.8%',
    top: '80.68%',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: 'black',
  },
});
