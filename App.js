import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { Container, Title } from "./styles/common";

import { createStackNavigator, createAppContainer } from "react-navigation";

import ToggleView from "./components/ToggleView";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Title>Core Components</Title>
        <Button
          title="Toggle View"
          onPress={() => this.props.navigation.navigate("View")}
        />
        <Button
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
