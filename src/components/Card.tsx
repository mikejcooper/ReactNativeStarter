import React, { FunctionComponent } from "react"
import { View } from "react-native"
import Colors from 'src/assets/colors'


interface SettingsProps {
  style?: any
}

const Settings: FunctionComponent<SettingsProps> = props => (
  <View
    style={[
      {
        borderRadius: 5,
        shadowRadius: 5,
        shadowOpacity: 0,
        shadowColor: Colors.GREY,
        backgroundColor: "white",
        elevation: 1,
        marginVertical: 5,
        padding: 10,
        width: "95%",
        left: 10
      },
      props.style,
    ]}
  >
    {props.children}
  </View>
)

export const Card = {
  Settings,
}
