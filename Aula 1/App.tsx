import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0078D4' }}>
      <StatusBar barStyle="light-content" />
      
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 20 
      }}>
        
        {/* Título Principal */}
        <Text style={{ 
          fontSize: 28, 
          fontWeight: 'bold', 
          color: '#FF6347', 
          marginBottom: 30,
          textAlign: 'center'
        }}>
          🎉 Bem-vindos à aula! 🎉
        </Text>

        {/* Card 1: Vamos aprender... */}
        <View style={{
          backgroundColor: '#E3F2FD',
          padding: 15,
          borderRadius: 8,
          width: '100%',
          marginBottom: 20,
        }}>
          <Text style={{ fontSize: 18, color: '#4682B4', textAlign: 'center' }}>
            📝 Vamos aprender React Native
          </Text>
        </View>

        {/* Card 2: Inline styles... */}
        <View style={{
          backgroundColor: '#E8F5E9',
          padding: 10,
          borderRadius: 5,
          width: '90%',
          marginBottom: 20,
          borderWidth: 1,
          borderColor: '#C8E6C9'
        }}>
          <Text style={{ fontSize: 16, color: '#4CAF50', textAlign: 'center' }}>
            🚀 Inline styles são fáceis de entender!
          </Text>
        </View>

        {/* Card 3: Alterar cores... */}
        <View style={{
          backgroundColor: '#FFF3E0',
          padding: 20,
          borderRadius: 12,
          width: '100%',
          marginBottom: 20,
        }}>
          <Text style={{ fontSize: 20, color: '#FF9800', textAlign: 'left' }}>
            🌈 🎨 Alterar cores e tamanhos é divertido!
          </Text>
        </View>

        {/* Card 4: Desafio... */}
        <View style={{
          backgroundColor: '#F3E5F5',
          padding: 8,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#CE93D8'
        }}>
          <Text style={{ fontSize: 14, color: '#9C27B0', textAlign: 'center' }}>
            ✨ Desafio: tente recriar este layout!
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}