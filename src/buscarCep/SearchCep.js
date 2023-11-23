import React, { useState } from "react"; // import react para inicar o projeto / e useState para mudar estados das variaveis
import { StatusBar } from "expo-status-bar"; // barra de status notificação que fica no topo do app
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native"; // stylesheet: estilo css, View: div
// alert importado para poder chamar Alert.alert assim ele some o nome ALERT da caixa de texto quando usar o alerta
import Api from "../../src/services/api"; // importando as configurações da api
import { useNavigation } from "@react-navigation/native";

export function SearchCep() {
  const navigation = useNavigation();

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  //constante logradouro, vira o setlogradouro = useState que quando vamos usar setLogradouro(response.data.logradouro); passamos o valor de data que vem da api para logradouro mudando o estado da variavel
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");
  const [ddd, setDdd] = useState("");

  async function SearchCep() {
    if (cep == "") {
      Alert.alert("Digite um CEP válido");
      setCep("");
      return;
    }
    try {
      const response = await Api.get(`/${cep}/json/`);
      // Se não houver erro na resposta da API, atualiza os estados com os dados do endereço
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setLocalidade(response.data.localidade);
      setUf(response.data.uf);
      setDdd(response.data.ddd);
    } catch (error) {
      Alert.alert("Cep incorreto, tente novamente");
      console.log("erro");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Consulta de CEP</Text>
      <TextInput placeholder="Digite o cep" value={cep} onChangeText={setCep} />
      <Button title="Buscar" onPress={SearchCep} />

      <View style={{ margin: 10 }}>
        <Text>{logradouro}</Text>
        <Text>
          {bairro} {localidade} {ddd}
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
