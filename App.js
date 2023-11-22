import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import Api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");
  const [ddd, setDdd] = useState("");

  async function buscaEndereco() {
    if (cep == '' || 400){
      Alert.alert('Digite um CEP válido')
      setCep("")
    }else{
      const response = await Api.get(`/${cep}/json/`);
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setLocalidade(response.data.localidade);
      setUf(response.data.uf);
      setDdd(response.data.ddd);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Consulta de CEP</Text>
      <TextInput 
        placeholder="Digite o cep" 
        value={cep} 
        onChangeText={setCep} />
      <Button title="Buscar" onPress={buscaEndereco} />

      <View style={{ margin: 10 }}>
        <Text>{logradouro}</Text>
        <Text>
          {bairro}, {localidade} - {ddd}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
