import React, { FunctionComponent } from "react"
import { View } from "react-native"
import Colors from "src/assets/colors"

const Container: FunctionComponent = props => (
  <View
    style={{
      flex: 1,
      backgroundColor: Colors.WHITE,
      paddingTop: 10,
    }}
  >
    {props.children}
  </View>
)

export const SettingsComponents = {
  Container,
}
