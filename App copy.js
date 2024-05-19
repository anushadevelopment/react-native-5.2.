import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, setText} from 'react-native';
import monkeyPng from "./assets/monkey.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, smile</Text>
      <Image
      style={styles.image}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2wcpqmDDUjViB6TEfWO-hxzaf5cwENejaQ&usqp=CAU",
      }}
    ></Image>
    <TextInput
      style={styles.input}
      value={Text}
      onChangeText={setText}>
    </TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 500,
    width: 500,
  }
});
