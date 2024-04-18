import { View, Text, Button, StyleSheet } from "react-native"; 

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title="Calibrar"        
                onPress={() => navigation.navigate('Calibracao')}
            />
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
