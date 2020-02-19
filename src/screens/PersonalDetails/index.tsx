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
import Colors from "src/assets/colors"

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
        <Card.PersonalDetails>
          <Title
            style={{
              fontWeight: "normal",
              color: Colors.GREY,
              fontSize: 15,
              right: 145,
            }}
          >
            First Name
          </Title>
          <TextInput
            style={{
              height: 40,
              fontSize: 18,
              fontWeight: "bold",
            }}
            placeholderTextColor="#000000"
            placeholder={String(firstName)}
            onChangeText={text => this.setState({ newFirstName: text })}
          />
        </Card.PersonalDetails>

        <Card.PersonalDetails>
          <Title
            style={{
              fontWeight: "normal",
              color: Colors.GREY,
              fontSize: 15,
              right: 145,
            }}
          >
            Last Name
          </Title>
          <TextInput
            style={{
              height: 40,
              fontSize: 18,
              fontWeight: "bold",
            }}
            placeholderTextColor="#000000"
            placeholder={String(secondName)}
            onChangeText={text => this.setState({ newSecondName: text })}
          />
        </Card.PersonalDetails>

        <Card.PersonalDetails>
          <Title
            style={{
              fontWeight: "normal",
              fontSize: 15,
              right: 165,
              color: Colors.GREY,
            }}
          >
            Email
          </Title>
          <TextInput
            style={{
              height: 40,
              fontSize: 18,
              fontWeight: "bold",
            }}
            placeholderTextColor="#000000"
            placeholder={String(email)}
            onChangeText={text => this.setState({ newEmail: text })}
          />
        </Card.PersonalDetails>

        <Button.Save
          text={"←                                            Save"}
          onPress={this.onSaveClick}
        ></Button.Save>
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
