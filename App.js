import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styles from './Styles/Styles'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Gameboard from './Components/Gameboard'


export default function App() {

  return (
    <View style={Styles.container}>

      <Header />
      <Footer />
      
    </View>
  )
}

