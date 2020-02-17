import React, { FunctionComponent } from "react"
import { View } from "react-native"
import Colors from "src/assets/colors"

const Container: FunctionComponent = props => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      backgroundColor: Colors.LINE_COLOR,
    }}
  >
    {props.children}
  </View>
)

export const SettingsComponents = {
  Container,
}
