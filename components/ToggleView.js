import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { dimensions, colors, padding, fonts } from "../styles/names";

export default class ToggleView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Toggle View </Text>
        <View style={styles.box}>
          <StyledText>Box</StyledText>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "skyblue",
    borderWidth: 2,
    borderColor: "steelblue",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

const StyledText = styled.Text`
  color: white;
  font-family: ${fonts.primary};
  font-size: ${fonts.lg};
  text-align: center;
`;
