/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import * as Progress from 'react-native-progress';

const data = [
  {
    id: 1,
    name: 'React JS',
    price: '1.000.000',
    sale: '-10%',
  },
  {
    id: 2,
    name: 'JavaScript',
    price: '1.000.000',
    sale: '-10%',
  },
  {
    id: 3,
    name: 'Node JS',
    price: '1.000.000',
    sale: '-10%',
  },
  {
    id: 4,
    name: 'Node JS',
    price: '1.000.000',
    sale: '-10%',
  },
];

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  //   const useEffect(() => {
  //     setSearch(true);
  //   }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Image
          style={styles.logo_home}
          source={require('../../assets/image/logo_home.png')}
        />
        <SearchBar />
      </View>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.images}>
          <Image
            style={styles.image}
            source={require('../../assets/image/slide_home.png')}
          />
        </View>
        <View style={styles.icon}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.product}>
              <Image
                style={styles.product_image}
                source={require('../../assets/image/product.png')}
              />
            </View>
            <Text style={styles.product_text}>Sản phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <View style={styles.product}>
              <Image
                style={styles.service_image}
                source={require('../../assets/image/service.png')}
              />
            </View>
            <Text style={styles.service_text}>Dịch vụ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sale_home}>
            <View style={styles.product}>
              <Image
                style={styles.sale_image}
                source={require('../../assets/image/sale_home.png')}
              />
            </View>
            <Text style={styles.sale_text}>Ưu đãi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.salon}>
            <View style={styles.product}>
              <Image
                style={styles.salon_image}
                source={require('../../assets/image/salon.png')}
              />
            </View>
            <Text style={styles.salon_text}>Salon</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <View style={styles.product}>
              <Image
                style={styles.community_image}
                source={require('../../assets/image/community.png')}
              />
            </View>
            <Text style={styles.product_text}>Cộng đồng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.service}>
            <View style={styles.product}>
              <Image
                style={styles.service_image}
                source={require('../../assets/image/salon_like.png')}
              />
            </View>
            <Text style={styles.service_text}>Salon like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sale_home}>
            <View style={styles.product}>
              <Image
                style={styles.sale_image}
                source={require('../../assets/image/the_firm_main.png')}
              />
            </View>
            <Text style={styles.sale_text}>Chính hãng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.salon}>
            <View style={styles.product}>
              <Image
                style={styles.salon_image}
                source={require('../../assets/image/freeship.png')}
              />
            </View>
            <Text style={styles.salon_text}>Free ship</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flash_sale}>
          <Text style={styles.flash_sale_text}>
            Flash
            <Image source={require('../../assets/image/light.png')} />
            sale
          </Text>
          <Text style={styles.flash_sale_dropdown}>02 : 12 : 00</Text>
          <TouchableOpacity style={styles.flash_sale_text_button}>
            <Text style={styles.flash_sale_text_all}>Xem tất cả</Text>
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            {Array.isArray(data) &&
              data.map((item, index) => {
                return (
                  <>
                    <View style={styles.flash_sale_product} key={index}>
                      <View style={styles.flash_sale_sale}>
                        <Text style={styles.flash_sale_sale_text}>
                          {item.sale}
                        </Text>
                      </View>
                      <Image
                        style={styles.flash_sale_image}
                        source={require('../../assets/image/flash_demo.png')}
                      />
                      <Text style={styles.flash_sale_text1}>{item.name}</Text>
                      <Text style={styles.price}>{item.price}</Text>
                      <Progress.Bar
                        progress={0.5}
                        width={135}
                        style={styles.progress}
                        color="#FF7A00"
                      />
                    </View>
                    <View style={styles.flash_sale_none}></View>
                  </>
                );
              })}
          </ScrollView>
        </View>
        <View style={styles.slider}>
          <Image source={require('../../assets/image/slider.png')} style={styles.slider} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon
            name="home"
            size={25}
            color="#CACACA"
            style={styles.icon_home}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="commenting-o"
            size={25}
            color="#CACACA"
            style={styles.icon_comment}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.bill}
            source={require('../../assets/image/bill.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell-o" size={25} color="#CACACA" style={styles.bell} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user-o" size={25} color="#CACACA" style={styles.user} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  headers: {
    backgroundColor: '#FFFFFF',
    height: '10%',
  },
  logo_home: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 157,
    height: 50,
  },
  searchbar: {
    position: 'absolute',
    top: 15,
    left: 65,
    width: 157,
    height: 50,
  },
  scrollView: {
    marginBottom: '16%',
  },
  image: {
    width: '100%',
  },
  icon: {
    flex: 1,
  },
  touchableOpacity: {
    marginTop: 25,
    marginLeft: 19,
    width: '17%',
    height: 95,
  },
  product: {
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
  },
  product_image: {
    alignSelf: 'center',
  },
  product_text: {
    textAlign: 'center',
    marginTop: 8,
    color: '#333333',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 15,
  },
  service: {
    position: 'absolute',
    top: 25,
    left: '28.9%',
    width: '17%',
    height: 95,
  },
  service_image: {
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
  service_text: {
    textAlign: 'center',
    marginTop: 8,
    color: '#333333',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 15,
  },
  sale_home: {
    position: 'absolute',
    top: 25,
    left: '52.9%',
    width: '17%',
    height: 95,
  },
  sale_image: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  sale_text: {
    textAlign: 'center',
    marginTop: 8,
    color: '#333333',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 15,
  },
  salon: {
    position: 'absolute',
    top: 25,
    left: '77%',
    width: '17%',
    height: 95,
  },
  salon_text: {
    marginTop: 8,
    color: '#333333',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 15,
  },
  salon_image: {
    alignSelf: 'center',
  },
  community_image: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  footer: {
    height: '8%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
  },
  icon_home: {
    position: 'absolute',
    left: '8%',
    top: 16,
  },
  icon_comment: {
    position: 'absolute',
    left: '26.6%',
    top: 16,
  },
  bill: {
    position: 'absolute',
    left: '46.7%',
    top: 21,
    width: 20,
    height: 20,
  },
  bell: {
    position: 'absolute',
    left: '65.7%',
    top: 18,
  },
  user: {
    position: 'absolute',
    left: '86%',
    top: 18,
  },
  flash_sale: {
    flex: 1,
    padding: 19,
  },
  flash_sale_text: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 18,
    lineHeight: 19,
    letterSpacing: 0.9,
    color: '#333333',
  },
  flash_sale_dropdown: {
    position: 'absolute',
    top: 20,
    left: 125,
    color: '#333333',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 19,
  },
  flash_sale_text_button: {
    position: 'absolute',
    top: 22,
    right: 17,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  flash_sale_text_all: {
    color: '#FF7A00',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 16,
  },
  flash_sale_product: {
    flex: 1,
    marginTop: 15,
    width: '49%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  flash_sale_none: {
    width: '2%',
  },
  flash_sale_sale: {
    position: 'absolute',
    top: 5,
    right: 0,
    width: 50,
    backgroundColor: '#FF7A00',
    textAlign: 'center',
    borderBottomStartRadius: 4,
  },
  flash_sale_sale_text: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  flash_sale_image: {
    width: 130,
    height: 130,
    alignSelf: 'center',
  },
  flash_sale_text1: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 16,
    marginLeft: 10,
    letterSpacing: 0.2,
    color: '#333333',
  },
  price: {
    left: 10,
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 16,
    color: '#FF7A00',
    marginTop: 6,
  },
  progress: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    color: '#FF7A00',
  },
});

export default Home;
