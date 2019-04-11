import styled from "styled-components/native";
import { dimensions, colors, padding, fonts } from "./names";
// --------------------------------- styled-components --------------------------------- //
// Container which defines the border
export const Container = styled.View`
  background-color: ${colors.lightgrey};
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: ${colors.dark};
  font-family: ${fonts.primary};
  font-size: ${fonts.lg};
  text-align: center;
`;
