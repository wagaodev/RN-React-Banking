import React, { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { TOnboarding } from '../../routes/types';
import { setNameAction } from '../../redux/modules/Home/actions';
import { useAppDispatch } from '../../redux/store/hook';

export function Onboarding({ navigation }: TOnboarding) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const handleSetName = (text: string) => setName(text);
  const handleNavigateToHome = async (name: string) => {
    try {
      dispatch(setNameAction(name));
    } catch (e) {
      Alert.alert('Erro ao cadastrar nome');
      console.tron.log(e);
    } finally {
      navigation.navigate('Home');
    }
  };

  return (
    <View>
      <TextInput placeholder="Nome" value={name} onChangeText={handleSetName} />
      <Button title="Cadastrar" onPress={() => handleNavigateToHome(name)} />
    </View>
  );
}
