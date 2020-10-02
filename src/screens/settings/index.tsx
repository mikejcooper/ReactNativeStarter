import React, { Component } from "react"
import { Text } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import { Button } from "src/components/Button"
import { Card } from "src/components/Card"
import Types from "src/config/types"
import { SettingsComponents } from "src/screens/settings/components"
import { navigate, Screens } from "src/config/routes/NavigationService"
import { View } from 'react-native'
import { Title } from 'native-base'
import Colors from 'src/assets/colors'

class Settings extends Component<IProps, {}> {

  static navigationOptions = {
    title: "Settings",
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: "bold",
      // headerLayoutPreset: 'center' // default is 'left'
    },




  }

  onPressClickMe = () => {
    const { actions } = this.props
    actions.navigate("Edit")

  }


  render() {


    const { fname } = this.props
    const { sname } = this.props
    const { email } = this.props
    return (
      <SettingsComponents.Container>
        <Card.Settings>
          <View
            style={{
              width: "100%",
              borderBottomWidth: 0.5,
              borderBottomColor: Colors.GREY,

            }}
          >
            <Text
              style={{
                width: "100%",
                padding: 5,
                paddingTop: 20,
                paddingBottom: 10,
                // right: 110,
                fontWeight: "bold",
                // backgroundColor: Colors.ACCENT_LIGHT_BLUE,
              }}
            >
              Personal Details
            </Text>
          </View>

          <Text style={{ padding: 5, paddingTop: 20 }}>
            {fname} {sname}
          </Text>

          <Text style={{ padding: 5, paddingTop: 20 }}>{email}</Text>
          <Button.Square text="Edit" onPress={this.onPressClickMe}></Button.Square>
        </Card.Settings>

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
    actions: bindActionCreators({ ...Actions.Navigation, ...Actions.Settings }, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings)
