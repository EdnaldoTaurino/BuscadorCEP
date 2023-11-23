import { View,Button, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
const navigation = useNavigation();
 return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Buscador de Cep</Text>
    <Button
      title="cep"
      onPress={() => navigation.navigate('Cep')}
    />
  </View>
  );
}

