import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const TextInputWithSubmit = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [likeCoffee, setLikeCoffee] = useState(''); 
 
  const handleSubmit = () => {
    const inputText = `My Name is ${name} and my age is ${age} and I aLike Coffee: ${likeCoffee}`;
    Alert.alert(inputText);
  };

  return (
    <View style={styles.container}> 
      
      {/* <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Nme"
        onChangeText={text => setInputValue1(text)}
        value={inputValue1}
      /> */}
      <Text style={{ fontSize: 15}}>Enter your Name:</Text>
      <TextInput
        style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder='Enter your name'
        onChangeText={text => setName(text)}
        value={name}
      />

      <Text style={{ fontSize: 15 }}>Enter your Age : </Text>
      <TextInput
        style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        onChangeText={text => setAge(text)}
        value={age}
      />
      <Text style={{ fontSize: 15 }}>likeCoffee? : </Text>

      <View style={styles.radioButton}> 
                    <RadioButton.Android 
                         value='yes'
                        status={likeCoffee === 'yes' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setLikeCoffee('yes')} 
                       
                        color="#007BFF"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Yes 
                    </Text>  
                </View> 
  
                <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="no"
                        status={likeCoffee === 'no' ?  
                                 'checked' : 'unchecked'} 
                        onPress={() => setLikeCoffee('no')} 
                        color="#007BFF"
                    /> 
                    <Text style={styles.radioLabel}> 
                        No 
                    </Text> 
                </View>

      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems : 'center',
      justifyContent : 'center'
  },
  radioGroup: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginTop: 20, 
    borderRadius: 8, 
    backgroundColor: 'white', 
    padding: 16, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { 
        width: 0, 
        height: 2, 
    }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
}, 
radioButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
}, 
radioLabel: { 
    marginLeft: 8, 
    fontSize: 16, 
    color: '#333', 
}, 
}); 

export default TextInputWithSubmit;