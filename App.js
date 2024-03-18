import { StatusBar, StyleSheet,View } from 'react-native';
import Invoice from './screens/Invoice';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Invoice/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor:'#fff'
  },
});
