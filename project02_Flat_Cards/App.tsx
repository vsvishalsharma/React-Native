import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCards from './components/ElevatedCards'
import ImageCard from './components/ImageCard'
import ContactList from './components/ContactList'



export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>App</Text>
          <Flatcards/>
          <ElevatedCards/>
          <ImageCard/>
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}