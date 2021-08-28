
import  React from 'react';
import { Button, Text, View } from 'react-native';

export default function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the Detail Screen!</Text>
       <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
