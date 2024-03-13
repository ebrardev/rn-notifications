import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {
  Notifications.scheduleNotificationAsync({
    content:{
      title: 'My first local notification',
      body: 'This is the body of the notification',
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
