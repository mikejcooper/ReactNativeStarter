import React, { Component } from "react"
import { Text } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import { Button } from "src/components/Button"
import { Card } from "src/components/Card"
import Types from "src/config/types"
import { SettingsComponents } from "src/screens/settings/components"
import { Title, View } from "native-base"
import { Container, Header, Left, Body, Right, Icon } from "native-base"
import Navigation from "src/actions/Navigation"

class Settings extends Component<IProps, {}> {
  static navigationOptions = {
    title: "Settings",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }

  onPressEditDetails = () => {
    //go to different screen
    const { actions } = this.props
    //actions.doSomething(5)
    actions.navigate("PersonalDetails")
  }

  render() {
    const { firstName, secondName, email } = this.props

    return (
      <SettingsComponents.Container>
        <Card.Settings>
          <Header>
            <Title>Personal Details</Title>
            <Right />
          </Header>

          <Text>
            {firstName} {secondName}
          </Text>
          <View></View>
          <Text>{email}</Text>

          <Button.Square text="Edit" onPress={this.onPressEditDetails}></Button.Square>
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
