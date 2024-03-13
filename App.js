import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  }
});

export default function App() {
  useEffect(()=>{
const subscription =Notifications.addNotificationReceivedListener((notification) =>{
  console.log("notification received", notification)
  const userName=notification.request.content.data.username  
  console.log(userName)
})
const subscription2= Notifications.addNotificationResponseReceivedListener((response) =>{
  console.log("notification response", response)

})
return () => {
  subscription.remove()
  subscription2.remove()
}
  },[] )
  Notifications.scheduleNotificationAsync({
    content:{
      title: 'bu kez pek bir afilli yalnızlık',
      body: 'aldatan bir kadın kadar düşman',
      data: {username:"ebrar"}
    },
    trigger:{
      seconds: 5
    }
  })

  function scheduleNotification() {
  }
  return (
    <View style={styles.container}>
     <Button title="schedule notification" onPress={scheduleNotification} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
