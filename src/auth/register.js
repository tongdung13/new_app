import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Register = ({navigation}) => {
  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/image/43.png')}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Đăng ký</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput
            style={styles.input}
            //   onChangeText={newEmail => setEmail(newEmail)}
            //   value={email}
          />
        </View>
        <View>
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
          <Text style={styles.label}>Nhập lại mật khẩu</Text>
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
        </View>
        <View style={styles.otp}>
          <Text style={styles.label}>Xác nhận Otp</Text>
          <TextInput
            style={styles.inputOtp}
            //   onChangeText={newPassword => setPassword(newPassword)}
            //   value={password}
            //   autoCorrect={false}
            //   secureTextEntry={passwordShow ? false : true}
            //   textContentType="password"
          />
          <TouchableOpacity
            //    onPress={() => onSubmit()}
            style={styles.buttonOtp}>
            <Text style={styles.submit}>Gửi mã Otp</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          //    onPress={() => onSubmit()}
          style={styles.button}>
          <Text style={styles.submit}>Đăng ký</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('login')}>
          <Text>
            Bạn đã có tài khoản?
            <Text style={styles.register1}>Đăng nhập</Text>
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
    paddingTop: 50,
  },
  label: {
    color: '#404040',
    margin: 10,
    fontFamily: 'normal',
    marginLeft: 0,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 16,
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
    marginTop: 23,
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
  otp: {
    display: 'flex',
  },
  inputOtp: {
    backgroundColor: 'white',
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 15,
    width: '60%',
  },
  buttonOtp: {
    backgroundColor: '#2B4898',
    borderRadius: 4,
    height: 40,
    width: '30%',
    position: 'absolute',
    right: 15,
    top: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Register;
