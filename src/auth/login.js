/* eslint-disable prettier/prettier */
import {React} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/image/12.png')}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Đăng nhập</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={newEmail => setEmail(newEmail)}
            //   value={email}
          />
        </View>

        <View style={styles.textBoxParent}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={newPassword => setPassword(newPassword)}
            //   value={password}
            //   autoCorrect={false}
            //   secureTextEntry={passwordShow ? false : true}
            //   textContentType="password"
          />
          {/* <TouchableOpacity
          onPress={() => togglePasswordVisibility()}
          activeOpacity={0.8}
          style={styles.visibilityBtn}>
          <Icon name={rightIcon} fontSize={35} />
        </TouchableOpacity> */}

          <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
            <Text style={styles.forgot}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('sale')}
          style={styles.button}>
          <Text style={styles.submit}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('register')}>
          <Text>
            Bạn chưa có tài khoản?
            <Text style={styles.register1}>Đăng ký</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: '100%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: '30%',
    height: '85%',
  },
  title: {
    position: 'absolute',
    left: 15,
    top: '1%',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 29,
    color: '#FF7A00',
  },
  form: {
    paddingTop: 30,
  },
  label: {
    color: '#404040',
    margin: 10,
    fontFamily: 'normal',
    marginLeft: 0,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 30,
    paddingLeft: 15,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    paddingLeft: 14,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 15,
    marginRight: 15,
  },
  forgot: {
    paddingTop: 20,
    textAlign: 'center',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 16,
    color: '#BFBFBF',
  },
  button: {
    backgroundColor: '#FF7A00',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 6,
    marginLeft: 15,
    marginRight: 15,
  },
  submit: {
    fontSize: 14,
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  register: {
    position: 'absolute',
    bottom: '2%',
    left: '27%',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 19,
    color: '#BFBFBF',
  },
  register1: {
    color: '#F69F52',
  },
});

export default Login;
