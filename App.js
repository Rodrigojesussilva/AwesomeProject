import React from "react";
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import TextoCentral from "./src/Componentes/TextoCentral";
import TelaA from "./src/Views/TelaA";
import TelaB from "./src/Views/TelaB";
import TelaC from "./src/Views/TelaC";


export default props => (
    <SafeAreaView style={{flex: 1}}>           
        <TelaA />
        <TelaB />
        <TelaC />
    </SafeAreaView>
);


