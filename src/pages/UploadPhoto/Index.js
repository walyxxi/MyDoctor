import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Fire} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {uid, fullName, profession} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photo4DB, setPhoto4DB] = useState('');

  const getImage = () => {
    launchImageLibrary(
      {mediaType: 'photo', includeBase64: true},
      (response) => {
        if (response.didCancel) {
          showMessage({
            message: 'Opps, sepertinya anda tidak memilih photo!',
            type: 'warning',
          });
        } else {
          const sourceForBD = `data:${response.type};base64, ${response.base64}`;
          setPhoto4DB(sourceForBD);
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Fire.database().ref(`users/${uid}/`).update({photo: photo4DB});
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto ? (
              <IconRemovePhoto style={styles.addPhoto} />
            ) : (
              <IconAddPhoto style={styles.addPhoto} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
    flex: 1,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
