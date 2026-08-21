/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

const Sale = ({navigation}) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      <View style={styles.sale}>
        <Image
          style={styles.image}
          source={require('../assets/image/sale1.png')}
        />
        <Image
          style={styles.logo}
          source={require('../assets/image/sale_logo.png')}
        />
        <View style={styles.card}>
          <Text style={styles.title}>CHÀO MỪNG BẠN ĐẾN VỚI BEAUTY</Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.title}>
            Ứng dụng BEAUTY+ sẽ giúp bạn tiếp cận thế giới mỹ phẩm rực rỡ và
            hiện đại với dịch vụ mua sắm trực tuyến nhanh chóng, tiện lợi, an
            toàn
          </Text>
        </View>
      </View>
      <View style={styles.sale}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/image/sale1.png')}>
          <Image
            style={styles.logo}
            source={require('../assets/image/sale_logo.png')}
          />
          <Text style={styles.title1}>
            Dễ dàng cập nhật và lựa chọn các sản phẩm làm đẹp yêu thích một cách
            nhanh chóng và tiện lợi. Chỉ với một vài bước đơn giản và sản phẩm
            sẽ được giao tới tận nhà bạn
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('home')}>
            <Text style={styles.textButton}>Bắt đầu</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  sale: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: '5%',
    left: '42%',
    width: 60,
    height: 50,
  },
  card: {
    position: 'absolute',
    top: '13%',
    left: '5%',
    right: '5%',
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Nutito',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22,
  },
  card2: {
    position: 'absolute',
    top: '23%',
    left: '5%',
    right: '5%',
    backgroundColor: '#FFFFFF',
    height: 110,
    width: '90%',
    justifyContent: 'center',
    borderRadius: 5,
  },
  title1: {
    position: 'absolute',
    top: '13%',
    left: '5%',
    right: '5%',
    color: '#FFFFFF',
    width: '90%',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
  },
  button: {
    position: 'absolute',
    width: 86,
    height: 33.33,
    bottom: 15,
    left: '70%',
    border: 1,
    backgroundColor: '#FF7A00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: '#FFFFFF',
    fontFamily: 'Nutito',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22,
  },
});

export default Sale;
