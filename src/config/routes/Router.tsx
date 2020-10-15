import { ImageEditor } from 'react-native'
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Screens } from "src/config/routes/NavigationService"
import Settings from "src/screens/settings"
import EditPage from "src/screens/settings/editPage"
import Splash from "src/screens/Splash"

const MainStack = createStackNavigator(
  //Settings: Settings,
  // Add another page here
  {
    Settings: Settings,
    EditPage: EditPage,
  },
  {
    initialRouteName: 'Settings',
  }
  //{ EditPage: EditPage }
);


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
