import React, { FunctionComponent } from "react"
import { View } from "react-native"
// import { Square } from "src/components/Button"
import { Header } from "native-base"
interface SettingsProps {
  style?: any
}

const Settings: FunctionComponent<SettingsProps> = props => (
  <View
    style={[
      {
        borderRadius: 5,
        backgroundColor: "white",
        elevation: 1,
        marginVertical: 5,
        paddingBottom: 10,
        width: "90%",
      },
      props.style,
    ]}
  >
    {props.children}
  </View>
)

const PersonalDetails: FunctionComponent<SettingsProps> = props => (
  <View
    style={[
      {
        borderRadius: 5,
        backgroundColor: "white",
        elevation: 1,
        marginVertical: 5,
        //paddingBottom: 10,
        paddingLeft: 10,
        width: "90%",
      },
      props.style,
    ]}
  >
    {props.children}
  </View>
)

export const Card = {
  Settings,
  PersonalDetails,
}
