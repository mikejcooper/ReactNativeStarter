import { YellowBox } from 'react-native'

function setIgnore() {
  // Initial warning addressed by using @react-native-community/async-storage
  // However, warned package used in react-navigation v3.4.1 (persistenceKey) which causes recurrence.
  // YellowBox.ignoreWarnings(['Warning: Async Storage'])
  // YellowBox.ignoreWarnings(['Remote debugger'])
  // YellowBox.ignoreWarnings(['Require cycle:'])
  console.disableYellowBox = !__DEV__
}

const warnings = {
  setIgnore,
}

export default warnings
