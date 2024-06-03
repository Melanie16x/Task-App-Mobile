import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tasksData from '../../assets/tasks.json';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.taskContainer} onPress={() => navigation.navigate('SeeTaskScreen', item)}>
      <Text style={styles.taskText}>{item.title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon name="edit" size={moderateScale(20)} color="#900" style={styles.icon} onPress={() => navigation.navigate('EditScreen', item)} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="trash" size={moderateScale(20)} color="#900" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('SettingScreen')}>
        <Icon name="cog" size={moderateScale(25)} color="black" />
      </TouchableOpacity>
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <View style={styles.separator} />
      <Text style={styles.header}>Lista de Tareas</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/vectortop.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.addButton}>
        <Icon name="plus" size={moderateScale(30)} color="#FFF" onPress={() => navigation.navigate('AddTaskScreen')} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  welcomeText: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: verticalScale(100),
  },
  separator: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: moderateScale(1),
    marginHorizontal: moderateScale(20),
    marginVertical: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  header: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: verticalScale(10),
  },
  listContainer: {
    paddingBottom: verticalScale(20),
  },
  taskContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(15),
    marginHorizontal: moderateScale(20),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    elevation: moderateScale(3),
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  image: {
    height: verticalScale(110),
    width: moderateScale(130),
  },
  taskText: {
    fontSize: moderateScale(18),
    color: '#262626',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: moderateScale(10),
  },
  addButton: {
    position: 'absolute',
    bottom: verticalScale(30),
    right: moderateScale(30),
    backgroundColor: '#945DAD',
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: moderateScale(5),
  },
  settingsButton: {
    position: 'absolute',
    top: verticalScale(20),
    right: moderateScale(20),
    padding: moderateScale(10),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
