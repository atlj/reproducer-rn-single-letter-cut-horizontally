/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, safeAreaInsets]}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
        <Text style={styles.text}>4</Text>
        <Text style={styles.text}>5</Text>
        <Text style={styles.text}>6</Text>
        <Text style={styles.text}>A</Text>
        <Text style={styles.text}>B</Text>
        <Text style={styles.text}>C</Text>
        <Text style={styles.text}>❤️</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 50,
    lineHeight: 80,
    textAlign: 'center',
  },
});

export default App;
