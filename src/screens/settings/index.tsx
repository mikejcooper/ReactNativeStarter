import React, { Component } from "react"
import { Text, ColorPropType } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import { Button } from "src/components/Button"
import { Card } from "src/components/Card"
import Types from "src/config/types"
import { SettingsComponents } from "src/screens/settings/components"
import { Title, View } from "native-base"
import Colors from "src/assets/colors"

class Settings extends Component<IProps, {}> {
  static navigationOptions = {
    title: "Settings",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }

  onPressEditDetails = () => {
    const { actions } = this.props
    actions.navigate("PersonalDetails")
  }

  render() {
    const { firstName, secondName, email } = this.props

    return (
      <SettingsComponents.Container>
        <Card.Settings>
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderBottomColor: Colors.GREY,
            }}
          >
            <Title
              style={{
                width: "100%",
                right: 110,
                padding: 5,
                paddingTop: 20,
                paddingBottom: 10,
                // right: 110,
                fontWeight: "normal",
                // backgroundColor: Colors.ACCENT_LIGHT_BLUE,
              }}
            >
              Personal Details
            </Title>
          </View>
          <Text
            style={{
              padding: 10,
              paddingTop: 20,
            }}
          >
            {firstName} {secondName}
          </Text>
          <Text
            style={{
              paddingLeft: 8,
              paddingTop: 20,
            }}
          >
            {" "}
            {email}
          </Text>

          <Button.Square
            text="Edit"
            style={{ justifyContent: "flex-end" }}
            onPress={this.onPressEditDetails}
          ></Button.Square>
        </Card.Settings>
      </SettingsComponents.Container>
    )
  }
}

interface IProps extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> {}

function mapStateToProps(state: Types.IAppState) {
  return {
    firstName: state.settings.firstName,
    secondName: state.settings.secondName,
    email: state.settings.email,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators({ ...Actions.Navigation, ...Actions.Settings }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
