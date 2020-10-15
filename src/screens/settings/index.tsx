import { generateKeyPair } from 'crypto'
import React, { Component } from "react"
import { Text, TextInput, StyleSheet, View } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import { Button } from "src/components/Button"
import { Card } from "src/components/Card"
import Types from "src/config/types"
import { SettingsComponents } from "src/screens/settings/components"

import EditPage from "src/screens/settings/editPage"
import { Screens } from "src/config/routes/NavigationService"
import Fonts from 'src/assets/font'


class Settings extends Component<IProps, {}> {
  static navigationOptions = {
    headerShown: false,
  }

  onPressClickMe = () => {
    const { actions } = this.props
    actions.doSomething(5)
  }

  onPressNavigate = () => {
    const { actions } = this.props
    actions.navigate(Screens.EditPage)
  }

  render() {
    const { firstName } = this.props
    const { lastName } = this.props
    const { email } = this.props
    return (

      <SettingsComponents.Container>
        <Text style={styles.titleText}>Settings</Text>

        <Card.Settings>
          <Text style={styles.subtitle}>Personal Details</Text>
          <View style={[{
            borderRadius: 20,
            backgroundColor: '#AEAEAE',
            marginRight: 0,
            marginLeft: '-6%',
            width: '112%',
            height: 2,
          }]}></View>

          <Text style={styles.baseText}>{firstName} {lastName}</Text>
          <Text style={styles.baseText}>{email}</Text>

          <Button.Square text="Edit" onPress={this.onPressNavigate}></Button.Square>

        </Card.Settings>
      </SettingsComponents.Container >

    )
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    marginTop: 20
  },
  subtitle: {
    marginBottom: 10,
    fontSize: 25
  },
  titleText: {
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    marginBottom: 25,
    fontWeight: 'bold',
    fontFamily: Fonts.DEFAULT
  }
});

interface IProps extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> { }

function mapStateToProps(state: Types.IAppState) {
  return {
    firstName: state.settings.firstName,
    lastName: state.settings.lastName,
    email: state.settings.email
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators({ ...Actions.Navigation, ...Actions.Settings }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)