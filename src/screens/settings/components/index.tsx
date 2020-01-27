import React, { FunctionComponent } from "react"
import { View } from "react-native"
import Colors from "src/assets/colors"

const Container: FunctionComponent = props => (
  <View
    style={{
      flex: 1,
      backgroundColor: Colors.LINE_COLOR,
      paddingTop: 200,
    }}
  >
    {props.children}
  </View>
)

export const SettingsComponents = {
  Container,
}
