import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const { width, height } = useWindowDimensions();
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F1D3FF' }}>
      <Swiper
        loop={false}
        showsButtons={false}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.paginationActiveDot}
        paginationStyle={styles.paginationContainer}
        testID="welcome-swiper"
      >
        {/* Page 1: Welcome Image with Title */}
        <View style={[styles.slide, { width, minHeight: height }]}>
          <View style={styles.topSection}>
            <Text style={[styles.topTitle, { fontSize: width * 0.08 } ]}>Togetha</Text>
            <Image
              source={require('../../assets/images/output-onlinepngtools.png')}
              style={[styles.welcomeImage, { width: width * 0.6, height: width * 0.6, maxWidth: 300, maxHeight: 300 }]}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textSection}>
            <Text style={[styles.title, { fontSize: width * 0.05 } ]}>Gets things done with Togetha</Text>
            <Text style={[styles.subtitle, { fontSize: width * 0.035, maxWidth: width * 0.85 } ]}>
              No more juggling apps. With Togetha, your tasks, deadlines, and study materials are all in sync! So you can focus on what really matters.
            </Text>
          </View>
        </View>

        {/* Page 2: Reach Your Goals */}
        <View style={[styles.slide, { width, minHeight: height }]}>
          <View style={styles.imageContainer}>
            <Text style={[styles.topTitle, { fontSize: width * 0.08 } ]}>Togetha</Text>
            <View style={[styles.wireframeCube, { width: width * 0.3, height: width * 0.3, maxWidth: 120, maxHeight: 120 }]}>
              <View style={[styles.cubeFace, { width: width * 0.3, height: width * 0.3, maxWidth: 120, maxHeight: 120 }]} />
              <View style={[styles.cubeFace, styles.cubeFaceTop, { width: width * 0.3, height: width * 0.3, maxWidth: 120, maxHeight: 120 }]} />
              <View style={[styles.cubeFace, styles.cubeFaceSide, { width: width * 0.3, height: width * 0.3, maxWidth: 120, maxHeight: 120 }]} />
            </View>
          </View>
          <Text style={[styles.title, { fontSize: width * 0.05 } ]}>Add Tasks Effortlessly</Text>
          <Text style={[styles.subtitle, { fontSize: width * 0.035, maxWidth: width * 0.85 } ]}>Get a clear to do of your task.</Text>
        </View>

        {/* Page 3: Future Prospects */}
        <View style={[styles.slide, { width, minHeight: height }]}>
          <View style={styles.imageContainer}>
            <Text style={[styles.topTitle, { fontSize: width * 0.08 } ]}>Togetha</Text>
            <View style={[styles.stripedBlock, { width: width * 0.8, maxWidth: 400, height: width * 0.18, minHeight: 60, maxHeight: 100 }]}>
              <View style={styles.stripeBlue} />
              <View style={styles.stripeYellow} />
              <View style={styles.stripeBlue} />
              <View style={styles.stripeYellow} />
            </View>
          </View>
          <Text style={[styles.title, { fontSize: width * 0.05 } ]}>Let’s personalize your experience</Text>
          <Text style={[styles.subtitle, { fontSize: width * 0.035, maxWidth: width * 0.85 } ]}>Help us understand your path better.</Text>
          <TouchableOpacity
            style={[styles.getStartedButton, { paddingVertical: width * 0.03, paddingHorizontal: width * 0.08, borderRadius: width * 0.07 }]}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={[styles.getStartedButtonText, { fontSize: width * 0.045 }]}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1D3FF',
    padding: 20,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  topTitle: {
    color: '#6A009C',
    fontFamily: 'Lexend',
    marginBottom: 10,
    letterSpacing: 2,
  },
  welcomeImage: {
    borderRadius: 10,
  },
  imageContainer: {
    width: '80%',
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSection: {
    alignItems: 'center',
  },
  stripedBlock: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#7A52A3',
  },
  stripeBlue: {
    flex: 1,
    backgroundColor: '#6A5ACD',
  },
  stripeYellow: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  wireframeCube: {
    position: 'relative',
    transform: [{ rotateX: '30deg' }, { rotateY: '45deg' }],
  },
  cubeFace: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#7A52A3',
    backgroundColor: 'transparent',
  },
  cubeFaceTop: {
    transform: [{ rotateX: '90deg' }, { translateY: -60 }],
  },
  cubeFaceSide: {
    transform: [{ rotateY: '90deg' }, { translateX: 60 }],
  },
  title: {
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#A600F4',
  },
  subtitle: {
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  paginationContainer: {
    bottom: 50,
  },
  paginationDot: {
    backgroundColor: 'rgba(138, 43, 226, 0.4)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  paginationActiveDot: {
    backgroundColor: '#8A2BE2',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  getStartedButton: {
    backgroundColor: '#8A2BE2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  getStartedButtonText: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;