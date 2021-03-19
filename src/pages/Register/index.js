import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        const data = {
          uid: success.user.uid,
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };
        Fire.database().ref(`users/${success.user.uid}/`).set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
        setLoading(false);
      });
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
      {loading && <Loading />}
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
