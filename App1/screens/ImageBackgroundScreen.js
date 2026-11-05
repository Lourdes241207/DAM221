import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function ImageBackgroundScreen() {
    return (
       <View></View>
    );
};



const styles = StyleSheet.create({

  splash: {
    flex: 1,
    width: '100%',
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },

  splashTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  splashDescription: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
  },

  background: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});