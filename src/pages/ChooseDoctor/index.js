import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDokter4,
  DummyDokter5,
  DummyDokter6,
  DummyDokter7,
  DummyDokter8,
} from '../../assets';
import {Header, List} from '../../components';

const ChooseDoctor = ({navigation}) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      pict: DummyDokter4,
      name: 'Alexander Jannie',
      desc: 'Wanita',
    },
    {
      id: 2,
      pict: DummyDokter6,
      name: 'John McParker Steve',
      desc: 'Pria',
    },
    {
      id: 3,
      pict: DummyDokter5,
      name: 'Nairobi Putri Hayza',
      desc: 'Wanita',
    },
    {
      id: 4,
      pict: DummyDokter7,
      name: 'James Rivillia',
      desc: 'Pria',
    },
    {
      id: 4,
      pict: DummyDokter8,
      name: 'Liu Yue Tian Park',
      desc: 'Wanita',
    },
  ]);

  return (
    <View>
      <Header
        title="Pilih Dokter Umum"
        onPress={() => navigation.goBack()}
        type="dark"
      />
      {doctors.map((doctor, idx) => (
        <List
          key={idx}
          {...doctor}
          type="next"
          onPress={() => navigation.navigate('Chatting')}
        />
      ))}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({});
