import React, { Component } from "react"
import { Text, ProgressBarAndroidComponent } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import { Button } from "src/components/Button"
import { Card } from "src/components/Card"
import Types from "src/config/types"
import { SettingsComponents } from "src/screens/settings/components"
import { PersonalDetailsTitle } from "src/components/Title"
import { Title } from "native-base"
import { Container, Header, Left, Body, Right, Icon } from "native-base"
import navigation from "src/reducers/Navigation"
import Navigation from "src/actions/Navigation"
import { TextInput, State } from "react-native-gesture-handler"
import settings from "src/reducers/Settings"
import types from "src/actions/Settings"

class PersonalDetails extends Component<IProps, {}> {
  static navigationOptions = {
    title: "Personal Details",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }

  state = {
    newFirstName: "",
    newSecondName: "",
    newEmail: "",
  }

  onSaveClick = () => {
    console.log(this.state.newFirstName)
    if (this.state.newFirstName != "") {
      this.props.changeFirstName(this.state.newFirstName)
    }
    if (this.state.newSecondName != "") {
      this.props.changeSecondName(this.state.newSecondName)
    }
    if (this.state.newEmail != "") {
      this.props.changeEmail(this.state.newEmail)
    }
  }
  render() {
    const { firstName, secondName, email } = this.props

    console.log(firstName)
    return (
      <SettingsComponents.Container>
        <Card.Settings>
          <Header>
            <Body>
              <Title>First Name</Title>
              <TextInput
                style={{ height: 60 }}
                placeholder={String(firstName)}
                onChangeText={text => this.setState({ newFirstName: text })}
              />
            </Body>
            <Right />
          </Header>
        </Card.Settings>

        <Card.Settings>
          <Header>
            <Body>
              <Title>Last Name</Title>
              <TextInput
                style={{ height: 60 }}
                placeholder={String(secondName)}
                onChangeText={text => this.setState({ newSecondName: text })}
              />
            </Body>
            <Right />
          </Header>
        </Card.Settings>

        <Card.Settings>
          <Header>
            <Body>
              <Title>Email Name</Title>
              <TextInput
                style={{ height: 60 }}
                placeholder={String(email)}
                onChangeText={text => this.setState({ newEmail: text })}
              />
            </Body>
            <Right />
          </Header>
        </Card.Settings>

        <Card.Settings>
          <Button.Square text="Save" style={{ marginRight: "auto" }} onPress={this.onSaveClick}></Button.Square>
        </Card.Settings>
      </SettingsComponents.Container>
    )
  }
}

interface IProps extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> {}

function mapStateToProps(state: Types.IAppState) {
  return {
    secondName: state.settings.secondName,
    firstName: state.settings.firstName,
    email: state.settings.email,
  }
}

function mapDispatchToProps(dispatch: Dispatch, newState: String) {
  console.log("in dispatch")
  console.log(newState)
  return {
    changeFirstName: payload => dispatch({ type: "Change_firstName", value: payload }),
    changeSecondName: payload => dispatch({ type: "Change_secondName", value: payload }),
    changeEmail: payload => dispatch({ type: "Change_email", value: payload }),
    actions: bindActionCreators({ ...Actions.Navigation, ...Actions.Settings }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails)
