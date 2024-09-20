import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MathOperationsScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Por favor, insira números válidos.');
      return;
    }

    let calcResult = 0;

    switch (operation) {
      case '+':
        calcResult = number1 + number2;
        break;
      case '-':
        calcResult = number1 - number2;
        break;
      case '*':
        calcResult = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          setResult('Divisão por zero não é permitida.');
          return;
        }
        calcResult = number1 / number2;
        break;
      default:
        calcResult = 0;
    }

    setResult(calcResult);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Operações</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Picker
        selectedValue={operation}
        style={styles.picker}
        onValueChange={(itemValue) => setOperation(itemValue)}
      >
        <Picker.Item label="Adição (+)" value="+" />
        <Picker.Item label="Subtração (-)" value="-" />
        <Picker.Item label="Multiplicação (*)" value="*" />
        <Picker.Item label="Divisão (/)" value="/" />
      </Picker>

      <Button title="Calcular" onPress={calculateResult} />

      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default MathOperationsScreen;
