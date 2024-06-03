import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const TaskDetailScreen = ({ route, navigation }) => {
  const { title, description, author, date } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={moderateScale(30)} color="black" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Tarea: {title}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Descripción:</Text>
            <Text style={styles.detailText}>{description}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Autor:</Text>
            <Text style={styles.detailText}>{author}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Fecha de creación:</Text>
            <Text style={styles.detailText}>{date}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    position: 'absolute',
    top: verticalScale(40),
    left: moderateScale(20),
    zIndex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(15),
    padding: moderateScale(20),
    width: moderateScale(320),
    maxWidth: moderateScale(400),
    elevation: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(3.84),
  },
  title: {
    fontSize: moderateScale(26),
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: verticalScale(20),
    textAlign: 'center',
  },
  detailsContainer: {
    marginBottom: verticalScale(10),
  },
  detailTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
  },
  detailText: {
    fontSize: moderateScale(16),
    color: '#262626',
  },
});
