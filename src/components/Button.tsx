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
      // borderRadius: 1000,
      //borderWidth: 1,
      borderColor: Colors.ACCENT_LIGHT_BLUE,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      width: "25%",
      padding: Scale.vs(10),
      left: 250,
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        fontWeight: "bold",
        fontFamily: Fonts.DEFAULT,
        fontSize: Scale.ts(18),
        color: Colors.ACCENT_LIGHT_BLUE,
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
      backgroundColor: Colors.ACCENT_LIGHT_BLUE,
      borderTopRightRadius: 25,
      //borderColor: "#14719A",
      width: "90%",
      padding: Scale.vs(20),
      bottom: -450,
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
  Save,
}
