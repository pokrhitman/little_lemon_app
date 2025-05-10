import { useState } from "react";
import GlobalStyles from './styles/GlobalStyles';

import {
  SafeAreaView,
  View,
  Pressable,
  Text
}
  from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import LittleLemonFooter from './components/LittleLemonFooter';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  return (

    <SafeAreaView style={GlobalStyles.safeArea}>

      <View style={{ flex: 1 }}>

        <View style={GlobalStyles.navBar}>
          <Pressable style={GlobalStyles.navButton} onPress={() => setActiveScreen('home')}>
            <Text style={GlobalStyles.navText}>Home</Text>
          </Pressable>

          <Pressable style={GlobalStyles.navButton} onPress={() => setActiveScreen('feedback')}>
            <Text style={GlobalStyles.navText}>Feedback</Text>
          </Pressable>

          <Pressable style={GlobalStyles.navButton} onPress={() => setActiveScreen('login')}>
            <Text style={GlobalStyles.navText}>Login</Text>
          </Pressable>

        </View>

        <View style={GlobalStyles.headerOuter}>
          <View style={GlobalStyles.headerInner}>
            <LittleLemonHeader />
          </View>
        </View>

        {activeScreen === 'home' && (
          <>
            <View style={GlobalStyles.bodyContainer}>
              <WelcomeScreen />
            </View>

            <View style={GlobalStyles.menuSectionWrapper}>
              <View style={GlobalStyles.menuContainer}>
                <MenuItems />
              </View>
            </View>
          </>
        )}

        {activeScreen === 'feedback' && (
          <View style={GlobalStyles.feedbackSectionWrapper}>
            <FeedbackForm />
          </View>
        )}

        {activeScreen === 'login' && (
          <View style={GlobalStyles.loginSectionWrapper}>
            <LoginScreen />
          </View>
        )}

      </View>

      <View style={GlobalStyles.footerOuter}>
        <View style={GlobalStyles.footerInner}>
          <LittleLemonFooter />
        </View>

      </View>
    </SafeAreaView>
  );
};