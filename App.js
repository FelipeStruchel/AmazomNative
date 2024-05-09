// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Routes from './src/routes/routes';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <View style={{
      flex: 1
    }}>
      <StatusBar />
      <Routes />
    </View>
  );
}
