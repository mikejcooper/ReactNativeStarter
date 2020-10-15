import React, { Component } from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import Colors from "src/assets/colors"
import { Screens } from "src/config/routes/NavigationService"
import Types from "src/config/types"

class Splash extends Component<IProps, {}> {
  componentDidMount() {
    const { actions } = this.props

    setTimeout(() => {
      actions.navigate(Screens.Settings)
    }, 500)
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.WHITE,
          padding: 300,
        }}
      >
        <Text>{"Welcome to splash screen"}</Text>
      </View>
    )
  }
}

interface IProps extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> { }

function mapStateToProps(state: Types.IAppState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(Actions.Navigation, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
