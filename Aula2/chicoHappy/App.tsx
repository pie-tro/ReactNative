import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import chicoHappy from './assets/chico-happy.jpg';
import chicoSad from './assets/chico-sad.jpg';
import { useState } from 'react';
 
export default function App() {
 
  const [isHappy, setIsHappy] = useState(false)
  const [clicks, setClicks] = useState(0)
 
  function handleMood(){
    setIsHappy(prev => !prev)
    setClicks(prev => prev + 1)
  }
 
  function resetClicks(){
    setClicks(0)
  }
 
  return (
    <View style={[
      styles.container,
      { backgroundColor: isHappy ? "#d4f8d4" : "#f8d4d4" }
    ]}>
 
      <StatusBar style="auto" />
 
      <TouchableOpacity onPress={handleMood}>
        <Image
          source={isHappy ? chicoHappy : chicoSad}
          style={[
            styles.imageSize,
            { borderColor: isHappy ? "green" : "red" }
          ]}
        />
      </TouchableOpacity>
 
      {/* Emojis */}
      <Text style={{fontSize: 50}}>
        {isHappy ? "😎🎉" : "😢💻"}
      </Text>
 
      {/* Desafio 1 */}
      <Text style={styles.description}>
        {isHappy
          ? "Chico está happy!"
          : "Chico está meio sad..."
        }
      </Text>
 
      {/* Desafio 4 */}
      <Text style={styles.counter}>
        Cliques: {clicks}
      </Text>
 
      {/* Desafio 6 */}
      {clicks > 10 ? (
        <Text style={styles.special}>
          Você clicou muitas vezes! 😂
        </Text>
      ) : null}
 
      {/* Desafio 10 */}
      {isHappy ? (
        <Text style={styles.motivational}>
          Hoje é um ótimo dia para programar! 🚀
        </Text>
      ) : null}
 
      {/* Desafio 5 */}
      <Button
        title={isHappy ? "Deixar triste 😢" : "Deixar feliz 😄"}
        onPress={handleMood}
      />
 
      {/* Desafio 8 */}
      <Button
        title="Resetar cliques"
        onPress={resetClicks}
      />
 
    </View>
  );
}
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  imageSize: {
    width: 200,
    height: 200,
    borderWidth: 5,
    marginBottom: 10
  },
 
  description: {
    fontSize: 20,
    marginTop: 10
  },
 
  counter: {
    fontSize: 18,
    marginTop: 10
  },
 
  special: {
    fontSize: 18,
    marginTop: 10
  },
 
  motivational: {
    fontSize: 18,
    marginTop: 10,
    fontStyle: "italic"
  }
 
});