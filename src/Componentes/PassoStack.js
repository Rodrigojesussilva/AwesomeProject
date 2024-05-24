import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BaseComponent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View>
        {props.avancar ? (
          <Button
            title='Avançar'
            onPress={() => {
              navigation.navigate(props.avancar);
            }}
          />
        ) : null}
      </View>
      <View style={{ flex: 1 }}>
        {props.children}
      </View>
    </View>
  );
};

export default BaseComponent;
