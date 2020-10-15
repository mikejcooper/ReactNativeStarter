import React, { FunctionComponent } from "react"
import { View } from "react-native"

interface SettingsProps {
  style?: any
}

const Settings: FunctionComponent<SettingsProps> = props => (
  <View
    style={[
      {
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 1,
        marginVertical: 0,
        marginLeft: '2.5%',
        marginBottom: 3,
        padding: 20,
        width: "95%",
        justifyContent: 'center',
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
