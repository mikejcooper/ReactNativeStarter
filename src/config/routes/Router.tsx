import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Screens } from "src/config/routes/NavigationService"
import Settings from "src/screens/settings"
import Splash from "src/screens/Splash"
import PersonalDetails from "src/screens/PersonalDetails"

const MainStack = createStackNavigator({
  Settings: { screen: Settings },
  PersonalDetails: { screen: PersonalDetails },
  // Add another page here
  // EditSettings: EditSettings,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: Splash,
      App: MainStack,
    },
    {
      initialRouteName: Screens.Splash,
    }
  )
)
