import React, { Component } from "react"
import { NavigationState } from "react-navigation"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import AppNavigator from "src/config/routes/Router"
import Types from "src/config/types"
import { getCurrentRouteName, setTopLevelNavigator } from "./NavigationService"

class NavigatorContainer extends Component<IProps, IState> {
  componentDidUpdate(newProps: IProps) {
    // if (NOT LOGGED IN) {
    //   RESET TO START SCREEN
    // }
  }

  onNavigationStateChange(prevState: NavigationState, currentState: NavigationState) {
    const { actions } = this.props
    const currentScreen = getCurrentRouteName(currentState)
    const prevScreen = getCurrentRouteName(prevState)
    if (prevScreen !== currentScreen) {
      actions.updateCurrentRouteName(currentScreen)
    }
  }

  render() {
    return (
      <AppNavigator
        ref={navigatorRef => setTopLevelNavigator(navigatorRef)}
        // persistenceKey={__DEV__ ? 'NavigationStateDEV' : null}
        onNavigationStateChange={(prevState, currentState) => this.onNavigationStateChange(prevState, currentState)}
      />
    )
  }
}

interface IState {
  navigator: any
}

interface IProps extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> {}

function mapStateToProps(state: Types.IAppState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(Actions.Navigation, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(NavigatorContainer)
