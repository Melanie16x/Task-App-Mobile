import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';

const EditScreen = ({ route, navigation }) => {
  const [task, setTask] = useState(route.params); // El objeto de la tarea se pasa como parámetro de ruta

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={moderateScale(30)} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Editar Tarea</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={task.title}
          onChangeText={(text) => setTask({ ...task, title: text })}
          placeholder="Título de la tarea"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={task.description}
          onChangeText={(text) => setTask({ ...task, description: text })}
          placeholder="Descripción de la tarea"
          multiline
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20),
  },
  backButton: {
    position: 'absolute',
    top: moderateScale(40),
    left: moderateScale(20),
    zIndex: 1,
  },
  header: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginBottom: moderateScale(20),
    elevation: moderateScale(3),
    width: '100%',
  },
  textInput: {
    fontSize: moderateScale(18),
  },
  saveButton: {
    backgroundColor: '#945DAD',
    borderRadius: moderateScale(10),
    padding: moderateScale(15),
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});
