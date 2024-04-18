import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Calibracao({navigation}) {
    
    const [results, setResults] = useState([])

    // function to generate a new number and update the results
    


    const newResults = [...results]

    generateRandomNumber = () => {
        num = Math.floor(Math.random() * 50000)
        results.push(num)
        console.log(results)
    }

    return (
        <View style={styles.container}>
            <Text>Calibração</Text>

            <Button title="Iniciar" onPress={() => this.generateRandomNumber()} />
            <Text>Resultados</Text>
            
                {results.map((result) => {
                    return (
                        <Text key={result}>{result}{"\n"}</Text>
                    );}
                )}
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