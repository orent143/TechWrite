import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

// Dummy data for todo list
const todoList = [
  { id: 1, title: 'Study Anatomy', time: '10:00 AM', status: 'In Progress' },
  { id: 2, title: 'Watch Lecture on Patient Care', time: '2:00 PM', status: 'Pending' },
  { id: 3, title: 'Review Patient Care', time: '4:30 PM', status: 'Completed' },
  { id: 4, title: 'Lab Practice', time: '6:00 PM', status: 'Pending' },
];
const lessons = [
  { id: 1, title: 'Basic Patient Care', author: 'Dr. Smith', duration: '2h 30m', image: require('../assets/images/wh-blog-3-reasons-why-patient-centered-care-is-important.jpg') },
  { id: 2, title: 'Emergency Response', author: 'Dr. Johnson', duration: '1h 45m', image: require('../assets/images/emergency-response-banner-1024x342.png') },
  { id: 3, title: 'Medical Ethics', author: 'Dr. Williams', duration: '3h 15m', image: require('../assets/images/wh-blog-3-reasons-why-patient-centered-care-is-important.jpg') },
  { id: 4, title: 'Clinical Procedures', author: 'Dr. Brown', duration: '2h 00m', image: require('../assets/images/emergency-response-banner-1024x342.png') },
];

// Get current week dates
const getCurrentWeek = () => {
  const today = new Date();
  const week = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + i);
    week.push({
      day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i],
      date: date.getDate(),
      isToday: date.getDate() === today.getDate(),
    });
  }
  return week;
};

export default function Home() {
  const weekDates = getCurrentWeek();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="menu" size={28} color="#2C3E50" />
        <Text style={styles.greeting}>Good Evening, Orentt!</Text>
        <MaterialIcons name="account-circle" size={28} color="#2C3E50" />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Calendar */}
        <View style={styles.calendarContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {weekDates.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.dateCard, item.isToday && styles.activeDateCard]}
              >
                <Text style={[styles.dayText, item.isToday && styles.activeText]}>{item.day}</Text>
                <Text style={[styles.dateText, item.isToday && styles.activeText]}>{item.date}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Todo List Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>HIGHLIGHTED TO-DO LIST</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {todoList.map((todo) => (
              <View key={todo.id} style={styles.todoCard}>
                <View style={styles.todoHeader}>
                  <Text style={styles.todoTitle}>{todo.title}</Text>
                  <Text style={styles.todoTime}>{todo.time}</Text>
                </View>
                <Text style={[
                  styles.todoStatus,
                  { color: todo.status === 'Completed' ? '#27AE60' : 
                          todo.status === 'In Progress' ? '#F1C40F' : '#E74C3C' }
                ]}>{todo.status}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Lessons Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>POPULAR LESSONS</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {lessons.map((lesson) => (
              <View key={lesson.id} style={styles.lessonCard}>
                <View style={styles.lessonImagePlaceholder}>
                  <Image source={lesson.image} style={styles.lessonImage} />
                </View>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonAuthor}>{lesson.author}</Text>
                <Text style={styles.lessonDuration}>{lesson.duration}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="#AD00FF" />
          <Text style={[styles.navText, { color: "#AD00FF" }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="calendar-today" size={24} color="#7F8C8D" />
          <Text style={styles.navText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/images/1538298822.png')} style={styles.chatbotIcon}/>        
        <Text style={styles.navText}>RINA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="library-books" size={24} color="#7F8C8D" />
          <Text style={styles.navText}>Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="person" size={24} color="#7F8C8D" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  content: {
    flex: 1,
  },
  calendarContainer: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  dateCard: {
    width: 60,
    height: 80,
    borderRadius: 15,
    marginHorizontal: 5,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDateCard: {
    backgroundColor: '#AD00FF',
  },
  dayText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  activeText: {
    color: '#fff',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  todoCard: {
    width: 200,
    padding: 15,
    backgroundColor: 'rgba(216, 158, 244, 0.33)',
    borderRadius: 15,
    marginLeft: 15,
    borderColor: 'rgba(0, 0, 0, 0.13)',  // Fixed the rgba format
    borderWidth: 1,  // Added borderWidth to make the border visible
    marginLeft: 15,
  },
  todoHeader: {
    marginBottom: 10,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  todoTime: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  todoStatus: {
    fontSize: 14,
    fontWeight: '600',
  },
  lessonCard: {
    width: 180,
    backgroundColor: '#F5F6F8',
    borderRadius: 15,
    marginLeft: 15,
    padding: 15,
  },
  lessonImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lessonImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',  // Ensure the image covers the area properly
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  lessonAuthor: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  lessonDuration: {
    fontSize: 14,
    color: '#AD00FF',
    fontWeight: '600',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#7F8C8D',
    marginTop: 5,
  },
  chatbotIcon: {
    width: 30, // Adjust size as necessary
    height: 30,
  },
}); 