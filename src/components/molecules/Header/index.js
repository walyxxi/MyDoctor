import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = ({title, onPress, type}) => {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }

  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type ? 20 : 0,
    borderBottomRightRadius: type ? 20 : 0,
  }),
  text: (type) => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type ? colors.white : colors.text.chatDesc,
  }),
});
