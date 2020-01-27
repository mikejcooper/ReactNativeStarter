import Navigation from "src/actions/Navigation"
import Settings from "src/actions/Settings"
import Splash from "src/actions/Splash"

const Actions = {
  Settings,
  Navigation,
  Splash,
}
export default Actions

export interface IAction {
  type: string
  payload: any
}
