import React, { FunctionComponent } from "react"
import { Text, TouchableOpacity } from "react-native"
import Colors from "src/assets/colors"
import Fonts from "src/assets/font"
import Scale from "src/config/constants/Scale"

interface ButtonProps {
  onPress: () => void
  text: string
  style?: any
}

const Square: FunctionComponent<ButtonProps> = props => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: Colors.WHITE,
      borderColor: Colors.MED_BLUE,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      width: "25%",
      padding: Scale.vs(8),
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      left: 270,
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        fontFamily: Fonts.DEFAULT,
        fontWeight: "bold",
        fontSize: Scale.ts(18),
        color: Colors.MED_BLUE,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
)

const Save: FunctionComponent<ButtonProps> = props => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "flex-end",
      backgroundColor: Colors.MED_BLUE,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      //borderColor: "#14719A",
      width: "95%",
      padding: Scale.vs(15),
      bottom: -310,
      left: 10,
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        fontWeight: "bold",
        fontFamily: Fonts.DEFAULT,
        fontSize: Scale.ts(18),
        color: Colors.WHITE,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
)

export const Button = {
  Square,
  Save
}
