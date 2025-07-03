import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
// Import your RootStackParamList for type safety
import { RootStackParamList } from '../navigation/AppNavigator'; // Adjust the import path as necessary

interface CourseOption {
  label: string;
  value: string;
}

interface ContentPreferenceOption {
  label: string;
  value: string;
}

const courseData: CourseOption[] = [
  { label: 'Nursing', value: 'nursing' },
  { label: 'Pharmacy', value: 'pharmacy' },
  { label: 'Medical Technology', value: 'medtech' },
];

const contentPreferences: ContentPreferenceOption[] = [
  { label: 'Video Lectures', value: 'video_lectures' },
  { label: 'E-books', value: 'e_books' },
  { label: 'Podcasts', value: 'podcasts' },
];

const PostSignupOnboardingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);
  const [selectedContentPreferences, setSelectedContentPreferences] = useState<string[]>([]);

  const handleContentPreferenceSelect = (value: string) => {
    setSelectedContentPreferences((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const handleFinishOnboarding = () => {
    if (!selectedCourse) {
      Alert.alert('Selection Required', 'Please select your preferred health science course.');
      return;
    }
    if (selectedContentPreferences.length === 0) {
      Alert.alert('Selection Required', 'Please choose at least one content preference.');
      return;
    }

    // Here you would typically save these preferences to your backend or local storage
    console.log('Selected Course:', selectedCourse);
    console.log('Selected Content Preferences:', selectedContentPreferences);

    Alert.alert('Success', 'Onboarding complete! Redirecting to homepage.');
    // Navigate to the main application's homepage
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Tell Us More About You</Text>
        <Text style={styles.subHeader}>Select your health science course:</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={courseData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select course"
          value={selectedCourse}
          onChange={(item: CourseOption) => {
            setSelectedCourse(item.value);
          }}
          search
          renderItem={(item: CourseOption, selected?: boolean) => (
            <View style={styles.item} key={item.value}>
              <Text style={styles.textItem}>{item.label}</Text>
            </View>
          )}
        />

        <Text style={styles.subHeader}>What content do you prefer on your homepage?</Text>
        <View style={styles.contentPreferenceContainer}>
          {contentPreferences.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.preferenceButton,
                selectedContentPreferences.includes(option.value) && styles.preferenceButtonSelected,
              ]}
              onPress={() => handleContentPreferenceSelect(option.value)}
            >
              <Text
                style={[
                  styles.preferenceButtonText,
                  selectedContentPreferences.includes(option.value) && styles.preferenceButtonTextSelected,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.finishButton} onPress={handleFinishOnboarding}>
          <Text style={styles.finishButtonText}>Finish Onboarding</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  contentPreferenceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  preferenceButton: {
    borderWidth: 1,
    borderColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#fff',
  },
  preferenceButtonSelected: {
    backgroundColor: '#007aff',
  },
  preferenceButtonText: {
    color: '#007aff',
    fontSize: 15,
    fontWeight: '500',
  },
  preferenceButtonTextSelected: {
    color: '#fff',
  },
  finishButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 40,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PostSignupOnboardingScreen;