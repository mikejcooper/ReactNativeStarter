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
      backgroundColor: Colors.DARK_GREY,
      width: "100%",
      padding: Scale.vs(20),
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        fontFamily: Fonts.DEFAULT,
        fontSize: Scale.ts(18),
        color: Colors.BACKGROUND,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
)

export const Button = {
  Square,
}
