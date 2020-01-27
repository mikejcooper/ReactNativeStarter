import React, { Component } from "react"
import { Text } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import Actions from "src/actions"
import { Button } from "src/components/Button"
import { Card } from "src/components/Card"
import Types from "src/config/types"
import { SettingsComponents } from "src/screens/settings/components"

class Settings extends Component<IProps, {}> {
  static navigationOptions = {
    headerShown: false,
  }

  onPressClickMe = () => {
    const { actions } = this.props
    actions.doSomething(5)
  }

  render() {
    const { number } = this.props
    return (
      <SettingsComponents.Container>
        <Card.Settings>
          <Button.Square text="Click me" onPress={this.onPressClickMe}></Button.Square>
          <Text>{number}</Text>
        </Card.Settings>
      </SettingsComponents.Container>
    )
  }
}

interface IProps extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> {}

function mapStateToProps(state: Types.IAppState) {
  return {
    number: state.settings.number,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators({ ...Actions.Navigation, ...Actions.Settings }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
