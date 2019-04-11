import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import { dimensions, colors, padding, fonts } from "./styles/names";
import { Container, Title } from "./styles/common";

import { createStackNavigator, createAppContainer } from "react-navigation";

import ToggleView from "./components/ToggleView";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.rosepink,
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Title>Core Components</Title>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Touch Here </Text>
        </TouchableOpacity>
        <Button
          style={styles.button}
          title="Toggle View"
          onPress={() => this.props.navigation.navigate("View")}
        />
        <Button
          style={styles.button}
          title="Toggle Flexbox"
          onPress={() => this.props.navigation.navigate("Flexbox")}
        />
      </Container>
    );
  }
}

// ------------------------------- navigation-components ------------------------------- //
const AppNavigator = createStackNavigator({
  Home: Home,
  View: ToggleView
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
