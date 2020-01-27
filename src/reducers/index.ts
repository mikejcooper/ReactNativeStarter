import { combineReducers } from "redux"
import navigation from "src/reducers/Navigation"
import settings from "src/reducers/Settings"
import splash from "src/reducers/Splash"

const reducer = combineReducers({
  navigation,
  splash,
  settings,
})

export type IAppState = ReturnType<typeof reducer>

export default reducer
