import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, useForm} from '../../utils';
import {Fire} from '../../config';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        console.log('Register success: ', success);
      })
      .catch((error) => {
        // var errorCode = error.code;
        const errorMessage = error.message;
        console.log('Register failed: ', errorMessage);
      });
    // navigation.navigate('UploadPhoto')
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </View>
        </ScrollView>
      </View>
      <Loading />
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
