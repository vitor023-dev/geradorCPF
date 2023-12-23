import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const createArray = (total, numero) =>
  Array.from(Array(total), () => numberRandom(numero));

const numberRandom = (number) => Math.round(Math.random() * number);

const mod = (dividendo, divisor) =>
  Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);

const GeradorCpfCnpj = () => {
  const [numero, setNumero] = useState("");
  const [tipo, setTipo] = useState("cpf");
  const [mascara, setMascara] = useState(false);

  const gera = () => {
    setNumero(tipo === "cpf" ? cpf() : cnpj());
  };

  const cpf = () => {
    const totalArray = 9;
    const n = 9;
    const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = createArray(totalArray, n);

    let d1 =
      n9 * 2 +
      n8 * 3 +
      n7 * 4 +
      n6 * 5 +
      n5 * 6 +
      n4 * 7 +
      n3 * 8 +
      n2 * 9 +
      n1 * 10;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;

    let d2 =
      d1 * 2 +
      n9 * 3 +
      n8 * 4 +
      n7 * 5 +
      n6 * 6 +
      n5 * 7 +
      n4 * 8 +
      n3 * 9 +
      n2 * 10 +
      n1 * 11;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    return mascara
      ? `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`
      : `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
  };

  const cnpj = () => {
    const totalArray = 8;
    const n = 9;
    const [n1, n2, n3, n4, n5, n6, n7, n8] = createArray(totalArray, n);
    const n9 = 0;
    const n10 = 0;
    const n11 = 0;
    const n12 = 1;

    let d1 =
      n12 * 2 +
      n11 * 3 +
      n10 * 4 +
      n9 * 5 +
      n8 * 6 +
      n7 * 7 +
      n6 * 8 +
      n5 * 9 +
      n4 * 2 +
      n3 * 3 +
      n2 * 4 +
      n1 * 5;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;

    let d2 =
      d1 * 2 +
      n12 * 3 +
      n11 * 4 +
      n10 * 5 +
      n9 * 6 +
      n8 * 7 +
      n7 * 8 +
      n6 * 9 +
      n5 * 2 +
      n4 * 3 +
      n3 * 4 +
      n2 * 5 +
      n1 * 6;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    return mascara
      ? `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`
      : `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bem vindo, escolha entre as duas opções!
      </Text>
      <View style={styles.form}>
        <Text style={styles.label}>Número:</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={(text) => setNumero(text)}
        />

        <Text style={styles.label}>Tipo:</Text>
        <View style={styles.form2}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setTipo("cpf")}
          >
            <Text>{tipo === "cpf" ? "X" : " "}</Text>
            <Text style={styles.radioLabel}>CPF</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setTipo("cnpj")}
          >
            <Text>{tipo === "cnpj" ? "X" : " "}</Text>
            <Text style={styles.radioLabel}>CNPJ</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setMascara(!mascara)}
        >
          <Text>{mascara ? "X" : " "}</Text>
          <Text style={styles.checkboxLabel}>Máscara</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={gera}>
        <Text style={styles.buttonText}>Gerar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ccc",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    marginBottom: 20,
  },
  form2: {
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 18,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  radioButton: {
    display: "flex",
    marginBottom: 10,
    backgroundColor: "#fff",
    margin: 7,
    height: 40,
    width: 80,
    borderRadius: 18,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  radioLabel: {
    marginLeft: 5,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#fff",

    borderRadius: 18,
  },
  checkboxLabel: {
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    borderRadius: 18,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default GeradorCpfCnpj;
