import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyRS1, DummyRS2, DummyRS3} from '../../assets';
import {ILRSBackground} from '../../assets/illustration';
import {ListHospital} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([
    {
      id: 1,
      type: 'Rumah Sakit',
      name: 'Citra Bunga Merdeka',
      address: 'Jln. Surya Sejahtera 20',
      pict: DummyRS1,
    },
    {
      id: 2,
      type: 'Rumah Sakit Anak',
      name: 'Happy Family & Kidsa',
      address: 'Jln. Surya Sejahtera 20',
      pict: DummyRS2,
    },
    {
      id: 2,
      type: 'Rumah Sakit Jiwa',
      name: 'Tingkatan Paling Atas',
      address: 'Jln. Surya Sejahtera 20',
      pict: DummyRS3,
    },
  ]);

  return (
    <View style={styles.page}>
      <ImageBackground source={ILRSBackground} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.container}>
        {hospitals &&
          hospitals.map((hospital, idx) => (
            <ListHospital key={idx} {...hospital} />
          ))}
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
});
