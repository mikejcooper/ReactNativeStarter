import { Title } from 'native-base'
import React, { Component } from "react"
import { Text } from "react-native"
import { TextInput } from 'react-native-gesture-handler'
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import Colors from 'src/assets/colors'
import { Button } from "src/components/Button"
import { Card } from "src/components/Card"
import Types from "src/config/types"
import { SettingsComponents } from "src/screens/settings/components"

class Edit extends Component<IProps, {}> {
  static navigationOptions = {
    title: "Personal Details",
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }

  onPressClickMe = () => {
    const { actions } = this.props
    actions.navigate("Settings")

  }

  state = {
    newFName: "",
    newSName: "",
    newEmail: "",
  }

  onSaveClick = () => {
    const { actions } = this.props

    if (this.state.newFName != "") {
      this.props.changeFName(this.state.newFName)
    }
    if (this.state.newSName != "") {
      this.props.changeSName(this.state.newSName)
    }
    if (this.state.newEmail != "") {
      this.props.changeEmail(this.state.newEmail)
    }
    actions.navigate("Settings")
  }


  render() {

    const { fname } = this.props
    const { sname } = this.props
    const { email } = this.props
    return (
      <SettingsComponents.Container>
        <Card.Settings>
          <Text style={{ padding: 5 }}>First Name</Text>
          <TextInput onChangeText={text => this.setState({ newFName: text })} placeholderTextColor="#000000" placeholder={fname} style={{ padding: 5, fontWeight: "bold" }}></TextInput>
        </Card.Settings>
        <Card.Settings>
          <Text style={{ padding: 5 }}>Second Name</Text>

          <TextInput onChangeText={text => this.setState({ newSName: text })} placeholderTextColor="#000000" placeholder={sname} style={{ padding: 5, fontWeight: "bold" }}></TextInput>
        </Card.Settings>
        <Card.Settings>
          <Text style={{ padding: 5 }}>Email</Text>
          <TextInput onChangeText={text => this.setState({ newEmail: text })} placeholderTextColor="#000000" placeholder={email} style={{ padding: 5, fontWeight: "bold" }}></TextInput>

        </Card.Settings>
        <Button.Save text="Save" onPress={this.onSaveClick}></Button.Save>
      </SettingsComponents.Container>
    )
  }
}

interface IProps extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> { }

function mapStateToProps(state: Types.IAppState) {
  return {
    email: state.settings.email,
    fname: state.settings.fname,
    sname: state.settings.sname
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    changeFName: payload => dispatch({ type: "ChangeFName", value: payload }),
    changeSName: payload => dispatch({ type: "ChangeSName", value: payload }),
    changeEmail: payload => dispatch({ type: "ChangeEmail", value: payload }),
    actions: bindActionCreators({ ...Actions.Navigation, ...Actions.Edit }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
