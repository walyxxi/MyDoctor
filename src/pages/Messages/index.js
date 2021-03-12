import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDokter1, DummyDokter2, DummyDokter3} from '../../assets';
import ListDoctor from '../../components/molecules/ListDoctor';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      pict: DummyDokter1,
      name: 'Alexander Jannie',
      desc: 'Terima kasih informasinya dok...',
    },
    {
      id: 2,
      pict: DummyDokter3,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 2,
      pict: DummyDokter2,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor, idx) => (
          <ListDoctor key={idx} {...doctor} />
        ))}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
